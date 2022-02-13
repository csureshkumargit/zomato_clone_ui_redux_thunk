export const Userfirstname = (firstname) => {
    return {
        type: "USER_FIRST_NAME",
        firstname: firstname
    }
}

export const Userlastname = (lastname) => {
    return {
        type: "USER_LAST_NAME",
        lastname: lastname
    }
}

export const Useremail = (email) => {
    return {
        type: "USER_EMAIL",
        email: email
    }
}

export const Userpassword = (password) => {
    return {
        type: "USER_PASSWORD",
        password: password
    }
}

export const UserFormDefault = () => {
    return {
        type: "USER_FORM_DEFAULT",
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        username: [],
        usrMsg: undefined
    }
}