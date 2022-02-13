

const initstate = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    usrMsg: undefined,
    username: []
}
const UserFormreducer = (state = initstate, action) => {
    switch (action.type) {
        case "USER_FIRST_NAME":
            return {
                ...state,
                firstname: action.firstname,
                usrMsg: undefined
            }
        case "USER_LAST_NAME":
            return {
                ...state,
                lastname: action.lastname,
                usrMsg: undefined
            }
        case "USER_EMAIL":
            return {
                ...state,
                email: action.email,
                usrMsg: undefined
            }
        case "USER_PASSWORD":
            return {
                ...state,
                password: action.password,
                usrMsg: undefined
            }
        case "USER_AUTH_SUCCESSFUL":
            return {
                ...state,
                usrMsg: action.usrMsg,
                username: action.username
            }
        case "USER_AUTH_UNSUCCESSFUL":
            return {
                ...state,
                usrMsg: action.usrMsg
            }
        case "USER_REGISTRATION_SUCCESSFUL":
            return {
                ...state,
                usrMsg: action.usrMsg
            }
        case "USER_FORM_DEFAULT":
            return {
                ...state,
                firstname: action.firstname,
                lastname: action.lastname,
                email: action.email,
                password: action.password,
                username: action.username,
                usrMsg: action.usrMsg
            }
        default:
            return { ...state }
    }
}
export default UserFormreducer;