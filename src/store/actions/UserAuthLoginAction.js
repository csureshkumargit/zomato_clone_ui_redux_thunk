import axios from "axios"
const UserAuthLoginAction = (email, password) => {
    const userinfo = {
        email,
        password
    }
    return async (dispatch, getState) => {
        await axios.post("https://zomato-clone-db.herokuapp.com/users/login", userinfo,
            {
                Headers: {
                    'content-type': 'application/json'
                }
            }
        ).then((user_auth_details) => {
            if (user_auth_details.data.isAuthenticated) {
                dispatch({
                    type: "USER_AUTH_SUCCESSFUL", usrMsg: user_auth_details.data.message,
                    username: user_auth_details.data.authuser[0]["firstname"] + user_auth_details.data.authuser[0]["lastname"]
                })
            } else {
                dispatch({ type: "USER_AUTH_UNSUCCESSFUL", usrMsg: user_auth_details.data.message })
            }
        })
            .catch(err => console.log('err', err))
    }
}
export default UserAuthLoginAction;