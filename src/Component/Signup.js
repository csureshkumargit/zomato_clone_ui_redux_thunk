import react, { useState, useEffect } from "react";
import '../Styles/Signup.css';
import { connect } from "react-redux";
import { Userfirstname, Userlastname, Useremail, Userpassword, UserFormDefault } from "../store/actions/UserFormAction";
import UserRegisterAction from "../store/actions/UserRegisterAction";

const Signup = (props) => {
    const { firstname, lastname, email, password, usrMsg } = props;
    const showPassword = () => {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }

    }
    const navigateToLoginPage = () => {
        props.history.push('/login');

    }

    const checkUserSignup = (e) => {
        e.preventDefault();
        props.validateUserRegister(firstname, lastname, email, password);

    }
    useEffect(() => {
        props.userformdefault();
    }, [])
    return (
        <div className='sign-up-container'>
            <h5 className="sign-up-heading"> Please , add your information </h5>
            <form className='sign-up-account' onSubmit={checkUserSignup}>
                <div className='sign-up-user-first-name'>
                    <label className='sign-up-usr-acct-lbl'>First Name :</label>
                    <input type='text' placeholder='Enter your first name' required value={firstname}
                        onChange={(e) => { props.setfirstname(e.target.value) }} minLength='5' maxLength='15' className='usr-acct-input'></input>
                </div>
                <div className='sign-up-user-last-name'>
                    <label className='sign-up-usr-acct-lbl'>Last Name :</label>
                    <input type='text' placeholder='Enter your last name' required value={lastname}
                        onChange={(e) => { props.setlastname(e.target.value) }} minLength='5' maxLength='15' className='usr-acct-input'></input>
                </div>
                <div>
                    <label className='sign-up-usr-acct-lbl'>Email :</label>
                    <input type='email' placeholder='Enter your email' required value={email}
                        onChange={(e) => { props.setUseremail(e.target.value) }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        minLength='6' className='usr-acct-input'></input>
                </div>
                <div>
                    <label className='sign-up-usr-acct-lbl'>Password :</label>
                    <input className='usr-acct-input' type='password' placeholder='Enter your password' required value={password}
                        onChange={(e) => { props.setUserPassword(e.target.value) }}
                        id='password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"></input>
                    <div>
                        <input type='checkbox' className='signup-show-password' onClick={showPassword}></input>Show Password
                    </div>

                </div>
                <div>
                    <div>
                        <button className='btn-user-sign-up-submit' type='submit' >Signup</button>
                    </div>
                    {usrMsg && <button className="btn-sign-up-message" type="button" onClick={navigateToLoginPage} data-testid="usrmsg">{usrMsg.includes('been') ? "Registered !!!.Please Login to continue." : usrMsg}</button>}
                </div>
            </form>
        </div >
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        setfirstname: (fn) => { dispatch(Userfirstname(fn)) },
        setlastname: (ln) => { dispatch(Userlastname(ln)) },
        setUseremail: (email) => { dispatch(Useremail(email)) },
        setUserPassword: (password) => { dispatch(Userpassword(password)) },
        validateUserRegister: (fn, ln, email, password) => { dispatch(UserRegisterAction(fn, ln, email, password)) },
        userformdefault: () => { dispatch(UserFormDefault()) }
    }

}
const mapStateToProps = (state) => {
    return {
        firstname: state.userAuthForm.firstname,
        lastname: state.userAuthForm.lastname,
        email: state.userAuthForm.email,
        password: state.userAuthForm.password,
        usrMsg: state.userAuthForm.usrMsg
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);