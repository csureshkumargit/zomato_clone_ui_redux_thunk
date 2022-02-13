import axios from "axios"
const UserRegisterAction = (firstname, lastname, email, password) => {
    const userinfo = {
        firstname,
        lastname,
        email,
        password
    }
    return async (dispatch, getState) => {
        let user_register_details = await axios.post("https://zomato-clone-db.herokuapp.com/users/signup", userinfo,
            {
                Headers: {
                    'content-type': 'application/json'
                }
            }
        ).catch(err => console.log('err', err))
        dispatch({
            type: "USER_REGISTRATION_SUCCESSFUL", usrMsg: user_register_details.data.message
        })

    }
}
export default UserRegisterAction;