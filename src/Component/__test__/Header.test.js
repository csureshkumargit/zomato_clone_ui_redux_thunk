import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export default class MockHeader extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    }

}

describe('Unit test for Header component', () => {

    test('header component login display', () => {

        const renderComp1 = render(<MockHeader />);
        const loginElement = screen.getByText(/login/i);
        const accountElement = screen.getByText(/Create an account/i);
        expect(loginElement).toBeInTheDocument();
        expect(accountElement).toBeInTheDocument();

    });
    test('header component  when creat an acoount clicked', () => {

        const renderComp = render(<MockHeader />);
        const loginElement = screen.getByTestId("account")
        fireEvent.click(loginElement);
        expect(loginElement.className).toBe('account')

    });
    test('header component when Login acoount clicked', () => {

        const renderComp = render(<MockHeader />);
        const loginElement = screen.getByText("Login")
        fireEvent.click(loginElement);
        expect(loginElement.className).toBe('login');

    });
}
);