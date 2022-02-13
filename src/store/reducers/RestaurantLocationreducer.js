const initstate = {
    locations: []
}
const RestaurantLocationreducer = (state = initstate, action) => {
    switch (action.type) {
        case "GET_RESTAURANT_LOCATIONS":
            return {
                ...state,
                locations: action.locations
            }
        default:
            return state
    }
}

export default RestaurantLocationreducer;