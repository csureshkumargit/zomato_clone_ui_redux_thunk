import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Login from '../Login'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import axios from "axios";
jest.mock('axios', () => jest.fn());

export default class MockLogin extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
    }

}

describe('Unit test for Login component', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('able to manipulate the login component', () => {

        const renderComp = render(<MockLogin />);
        console.log(renderComp.debug());
        const headingElement = screen.getByText(/Sign in your information/i);
        expect(headingElement).toBeInTheDocument();

    });
    test('Able to bind the values for email and address in Login Component', () => {

        const renderComp = render(<MockLogin />);
        const emailElement = screen.getByPlaceholderText(/Enter your email/i);
        const passwordElement = screen.getByPlaceholderText(/Enter your password/i);
        fireEvent.change(emailElement, { target: { value: "csuresh@gmail.com" } });
        fireEvent.change(passwordElement, { target: { value: "Win$123456" } });
        const emailadrs = screen.getByDisplayValue("csuresh@gmail.com");
        const password = screen.getByDisplayValue("Win$123456");
        expect(emailadrs).toBeInTheDocument();
        expect(password).toBeInTheDocument();

    });
    test('validate the invalid crtedentials', async () => {

        // axios().then = jest.fn().mockResolvedValueOnce({
        //     data: { "message": "Sorry, invalid email or password. Please check", "isAuthenticated": false }
        // });
        const mRes = {
            status: 200, data: { "message": "Sorry, invalid password. Please check", "isAuthenticated": false }
        };
        axios.mockResolvedValueOnce(mRes);
        const renderComp = render(<MockLogin />);
        const emailElement = screen.getByPlaceholderText(/Enter your email/i);
        const passwordElement = screen.getByPlaceholderText(/Enter your password/i);
        fireEvent.change(emailElement, { target: { value: "csuresh@gmail.com" } });
        fireEvent.change(passwordElement, { target: { value: "Win$123456" } });
        const emailadrs = screen.getByDisplayValue("csuresh@gmail.com");
        const password = screen.getByDisplayValue("Win$123456");
        const Loginbtn = screen.getByRole("button");
        fireEvent.click(Loginbtn);
        const usermsgbtn = await screen.findByTestId("usrmsg")
        expect(usermsgbtn).toHaveClass("btn-sign-in-message");
        const usrmsgfailure = screen.getByText(/invalid password/i);
        expect(usrmsgfailure).toBeInTheDocument();
        console.log(renderComp.debug());
        expect(axios).toBeCalledTimes(1);

    });

    test('validate the valid credentials', async () => {

        const mRes = {
            status: 200,
            data: {
                "message": "!!!Logged in. Please continue.",
                "isAuthenticated": true,
                "authuser": [
                    {
                        "_id": "617cd7364b17660bf1d37d60",
                        "firstname": "Sureshkuma",
                        "lastname": "Chinnappan",
                        "email": "csuresh020@gmail.com",
                        "password": "Win$12345"
                    }
                ]
            }
        }
        axios.mockResolvedValueOnce(mRes);
        const renderComp = render(<MockLogin />);
        const emailElement = screen.getByPlaceholderText(/Enter your email/i);
        const passwordElement = screen.getByPlaceholderText(/Enter your password/i);
        fireEvent.change(emailElement, { target: { value: "csuresh020@gmail.com" } });
        fireEvent.change(passwordElement, { target: { value: "Win$12345" } });
        const emailadrs = screen.getByDisplayValue("csuresh020@gmail.com");
        const password = screen.getByDisplayValue("Win$12345");
        const Loginbtn = screen.getByRole("button");
        fireEvent.click(Loginbtn);
        const usermsgbtn = await screen.findByTestId("usrmsg")
        expect(usermsgbtn).toHaveClass("btn-sign-in-message");
        const usrmsgSuccess = screen.getByText(/!!!Logged in. Please continue./i);
        console.log(renderComp.debug());
        expect(usrmsgSuccess).toBeInTheDocument();
        expect(axios).toBeCalledTimes(2);

    });

}
);