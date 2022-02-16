import react, { useEffect } from "react";
import '../Styles/Login.css';
import { connect } from "react-redux";
import { Useremail } from "../store/actions/UserFormAction";
import { Userpassword } from "../store/actions/UserFormAction";
import { UserFormDefault } from "../store/actions/UserFormAction";
import UserAuthLoginAction from "../store/actions/UserAuthLoginAction";
import { compose } from "redux";
import WithRouter from "./WithRouter";



const Login = (props) => {

    const { email, password, usrMsg, username } = props;
    const showPassword = () => {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }

    }
    const navigateToHomepage = () => {
        props.router.navigate('/');

    }

    const checkUserLogin = (e) => {
        e.preventDefault();
        props.validateUserAuth(email, password);

    }
    useEffect(() => {
        props.userformdefault();
    }, [])
    return (
        <div className='user-account-container'>
            <h5 className="sign-in-heading"> Please ,Sign in your information </h5>
            <form className='user-account' onSubmit={checkUserLogin}>
                <div>
                    <label className='usr-acct-lbl'>Email :</label>
                    <input type='email' placeholder='Enter your email' required value={email}
                        onChange={(e) => { props.setUseremail(e.target.value) }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        minLength='6' className='usr-acct-input'></input>
                </div>
                <div>
                    <label className='usr-acct-lbl'>Password :</label>
                    <input className='usr-acct-input' type='password' placeholder='Enter your password' required value={password}
                        onChange={(e) => { props.setUserPassword(e.target.value) }}
                        id='password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"></input>
                    <div>
                        <input type='checkbox' className='show-password-signup' onClick={showPassword}></input><span className="show-pwd">Show Password</span>
                    </div>
                </div>
                <div>
                    <button className='btn-user-submit' type='submit' >Login</button>
                    {usrMsg && <button className="btn-sign-in-message" type="button" onClick={navigateToHomepage} data-testid="usrmsg">{usrMsg}</button>}
                </div>
            </form>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUseremail: (email) => { dispatch(Useremail(email)) },
        setUserPassword: (password) => { dispatch(Userpassword(password)) },
        validateUserAuth: (email, password) => { dispatch(UserAuthLoginAction(email, password)) },
        userformdefault: () => { dispatch(UserFormDefault()) }
    }

}
const mapStateToProps = (state) => {
    return {
        email: state.userAuthForm.email,
        password: state.userAuthForm.password,
        usrMsg: state.userAuthForm.usrMsg,
        username: state.userAuthForm.username
    }
}
export default compose(WithRouter, connect(mapStateToProps, mapDispatchToProps))(Login);