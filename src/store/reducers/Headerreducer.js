const initstate = {
    modalIsOpenforLogin: false,
    username: undefined
}
const Headerreducer = (state = initstate, action) => {
    switch (action.type) {
        case "GET_RESTAURANT_BY_LOCATIONS":
            return {
                ...state,
                modalIsOpenforLogin: action.modalIsOpenforLogin
            }
        case "SUGGESTED_RESTAURANTS":
            return {
                ...state,
                searchText: action.restaurant_name,
                suggestions: action.suggestedRest
            }
        default:
            return state
    }
}

export default Headerreducer;