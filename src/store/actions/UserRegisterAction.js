import axios from "axios"
const UserRegisterAction = (firstname, lastname, email, password) => {
    const userinfo = {
        firstname,
        lastname,
        email,
        password
    }
    return async (dispatch, getState) => {
        await axios.post("https://zomato-clone-db.herokuapp.com/users/signup", userinfo,
            {
                Headers: {
                    'content-type': 'application/json'
                }
            }
        ).then((user_register_details) => dispatch({
            type: "USER_REGISTRATION_SUCCESSFUL", usrMsg: user_register_details.data.message
        }))
            .catch(err => console.log('err', err))
    }
}
export default UserRegisterAction;