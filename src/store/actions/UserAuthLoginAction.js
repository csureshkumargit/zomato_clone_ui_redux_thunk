import axios from "axios"
const UserAuthLoginAction = (email, password) => {
    const userinfo = {
        email,
        password
    }
    return async (dispatch, getState) => {
        let user_auth_details = await axios.post("https://zomato-clone-db.herokuapp.com/users/login", userinfo,
            {
                Headers: {
                    'content-type': 'application/json'
                }
            }
        ).catch(err => console.log('err', err))

        if (user_auth_details.data.isAuthenticated) {
            dispatch({
                type: "USER_AUTH_SUCCESSFUL", usrMsg: user_auth_details.data.message,
                username: user_auth_details.data.authuser[0]["firstname"] + user_auth_details.data.authuser[0]["lastname"]
            })
        } else {
            dispatch({ type: "USER_AUTH_UNSUCCESSFUL", usrMsg: user_auth_details.data.message })
        }
    }
}
export default UserAuthLoginAction;