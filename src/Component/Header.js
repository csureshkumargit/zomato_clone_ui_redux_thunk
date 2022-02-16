import react from "react";
import '../Styles/Header.css';
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { connect } from "react-redux";
import { compose } from "redux";
import WithRouter from "./WithRouter";
import { UserFormDefault } from "../store/actions/UserFormAction";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};
class Header extends react.Component {

    constructor() {
        super();
        this.state = {
            modalIsOpenforLogin: false
        }
    }
    navigateToHome = () => {
        this.props.router.navigate('/')
    }
    handleLoginAccount = () => {
        this.setState({ modalIsOpenforLogin: true });
    }
    zomatoUserLogin = () => {
        this.props.router.navigate('/login');
        this.handlemodal('modalIsOpenforLogin', false);
    }
    zomatoUserSignup = () => {
        this.props.router.navigate('/signup');
    }
    handleLogout = () => {
        this.props.userformdefault();
    }
    responseFacebook = (response) => {

        this.setState({ username: response.name });
    }
    componentClicked = () => {
        this.setState({ modalIsOpenforLogin: false });
    }
    handlemodal = (state, value) => {
        this.setState({ [state]: value });
    }

    render() {
        const { modalIsOpenforLogin } = this.state;
        const { username } = this.props;
        return (
            <div className="header" >
                <div className="logo" onClick={this.navigateToHome}>
                    <b>e!</b>
                </div>
                {username && username.length > 0 && <div className='customerlogin' style={{ float: "right" }}>
                    <div className="username" >
                        Hi, {username}
                    </div>
                    <div className="logout" onClick={this.handleLogout}>
                        Logout
                    </div>
                </div>}
                {username && username.length == 0 && <div className='customerlogin' style={{ float: "right" }}>
                    <div className="login" onClick={this.handleLoginAccount} >
                        Login
                    </div>
                    <div className="account" onClick={this.zomatoUserSignup} data-testid="account">
                        Create an account
                    </div>
                </div>}
                <Modal
                    isOpen={modalIsOpenforLogin}
                    style={customStyles}
                    ariaHideApp={false}
                >


                    <FacebookLogin
                        appId="921327618474127"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook}>

                    </FacebookLogin>
                    <div className="user-acct-sign-in">
                        <button className='btn-acct-signin' onClick={this.zomatoUserLogin} >Zomato Sign in</button>
                        <span className="add-to-cart-modal-close" onClick={() => this.handlemodal('modalIsOpenforLogin', false)}><strong class="fas fa-times"></strong></span>
                    </div>
                </Modal>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userformdefault: () => { dispatch(UserFormDefault()) }
    }

}
const mapStateToProps = (state) => {
    return {
        username: state.userAuthForm.username
    }
}
export default compose(WithRouter, connect(mapStateToProps, mapDispatchToProps))(Header);