import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Signup from '../Signup'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import axios from "axios";

jest.mock('axios', () => jest.fn());

export default class MockSignup extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Signup />
            </BrowserRouter>
        )
    }

}

describe('Unit test for Login component', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('able to manipulate the Signup component', () => {

        const renderComp = render(<MockSignup />);
        console.log(renderComp.debug());
        const headingElement = screen.getByText(/Please , add your information/i);
        expect(headingElement).toBeInTheDocument();

    });
    test('Able to bind the user information in Sign up Component', () => {

        const renderComp = render(<MockSignup />);
        const firstNameElement = screen.getByPlaceholderText(/Enter your first name/i);
        const lastNameElement = screen.getByPlaceholderText(/Enter your last name/i);
        const emailElement = screen.getByPlaceholderText(/Enter your email/i);
        const passwordElement = screen.getByPlaceholderText(/Enter your password/i);
        fireEvent.change(firstNameElement, { target: { value: "Suresh csk" } });
        fireEvent.change(lastNameElement, { target: { value: "chinnappan" } });
        fireEvent.change(emailElement, { target: { value: "csuresh025@gmail.com" } });
        fireEvent.change(passwordElement, { target: { value: "Win$123456" } });
        const firstname = screen.getByDisplayValue("Suresh csk");
        const lastname = screen.getByDisplayValue("chinnappan");
        const emailadrs = screen.getByDisplayValue("csuresh025@gmail.com");
        const password = screen.getByDisplayValue("Win$123456");
        expect(firstname).toBeInTheDocument();
        expect(lastname).toBeInTheDocument();
        expect(emailadrs).toBeInTheDocument();
        expect(password).toBeInTheDocument();

    });
    test('validate the successful Registration', async () => {


        const mRes = {
            status: 200,
            data: { "user": { "firstname": "Suresh csk", "lastname": "chinnappan", "email": "csuresh025@gmail.com", "password": "Win$123456", "_id": "617e179ee201fe6576714bd9" }, "message": "You have been registered Successfully." }
        };
        axios.mockResolvedValueOnce(mRes);
        const renderComp = render(<MockSignup />);
        const firstNameElement = screen.getByPlaceholderText(/Enter your first name/i);
        const lastNameElement = screen.getByPlaceholderText(/Enter your last name/i);
        const emailElement = screen.getByPlaceholderText(/Enter your email/i);
        const passwordElement = screen.getByPlaceholderText(/Enter your password/i);
        fireEvent.change(firstNameElement, { target: { value: "Suresh csk" } });
        fireEvent.change(lastNameElement, { target: { value: "chinnappan" } });
        fireEvent.change(emailElement, { target: { value: "csuresh025@gmail.com" } });
        fireEvent.change(passwordElement, { target: { value: "Win$123456" } });
        const Signupbtn = screen.getByRole("button");
        fireEvent.click(Signupbtn);
        const usermsgbtn = await screen.findByTestId("usrmsg")
        expect(usermsgbtn).toHaveClass("btn-sign-up-message");
        const usrmsgSuccess = screen.getByText(/Registered !!!.Please Login to continue./i);
        expect(usrmsgSuccess).toBeInTheDocument();
        console.log(renderComp.debug());
        expect(axios).toBeCalledTimes(1);

    });

    test('validate the email and unsuccessful Registration', async () => {


        const mRes = {
            status: 200,
            data: { "message": "Email already Exists" }
        };
        axios.mockResolvedValueOnce(mRes);
        const renderComp = render(<MockSignup />);
        const firstNameElement = screen.getByPlaceholderText(/Enter your first name/i);
        const lastNameElement = screen.getByPlaceholderText(/Enter your last name/i);
        const emailElement = screen.getByPlaceholderText(/Enter your email/i);
        const passwordElement = screen.getByPlaceholderText(/Enter your password/i);
        fireEvent.change(firstNameElement, { target: { value: "Suresh csk" } });
        fireEvent.change(lastNameElement, { target: { value: "chinnappan" } });
        fireEvent.change(emailElement, { target: { value: "csuresh025@gmail.com" } });
        fireEvent.change(passwordElement, { target: { value: "Win$123456" } });
        const Signupbtn = screen.getByRole("button");
        fireEvent.click(Signupbtn);
        const usermsgbtn = await screen.findByTestId("usrmsg")
        expect(usermsgbtn).toHaveClass("btn-sign-up-message");
        const usrmsgfailure = screen.getByText(/Email already Exists/i);
        expect(usrmsgfailure).toBeInTheDocument();
        console.log(renderComp.debug());
        expect(axios).toBeCalledTimes(2);

    });
    test('validate the usermsg verbiage in DOM', async () => {


        const mRes = {
            status: 200,
            data: { "user": { "firstname": "Suresh csk", "lastname": "chinnappan", "email": "csuresh025@gmail.com", "password": "Win$123456", "_id": "617e179ee201fe6576714bd9" }, "message": "You have registered Successfully." }
        };
        axios.mockResolvedValueOnce(mRes);
        const renderComp = render(<MockSignup />);
        const firstNameElement = screen.getByPlaceholderText(/Enter your first name/i);
        const lastNameElement = screen.getByPlaceholderText(/Enter your last name/i);
        const emailElement = screen.getByPlaceholderText(/Enter your email/i);
        const passwordElement = screen.getByPlaceholderText(/Enter your password/i);
        fireEvent.change(firstNameElement, { target: { value: "Suresh csk" } });
        fireEvent.change(lastNameElement, { target: { value: "chinnappan" } });
        fireEvent.change(emailElement, { target: { value: "csuresh025@gmail.com" } });
        fireEvent.change(passwordElement, { target: { value: "Win$123456" } });
        const Signupbtn = screen.getByRole("button");
        fireEvent.click(Signupbtn);
        const usermsgbtn = await screen.findByTestId("usrmsg")
        expect(usermsgbtn).toHaveClass("btn-sign-up-message");
        const usrmsgSuccess = screen.getByText(/You have registered Successfully./i);
        expect(usrmsgSuccess).toBeInTheDocument();
        console.log(renderComp.debug());
        expect(axios).toBeCalledTimes(3);

    });

}
);