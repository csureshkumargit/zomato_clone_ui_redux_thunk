const initstate = {
    restaurant_list_location: [],
    searchText: undefined,
    suggestions: []
}
const Wallpaperreducer = (state = initstate, action) => {
    switch (action.type) {
        case "GET_RESTAURANT_BY_LOCATIONS":
            return {
                ...state,
                restaurant_list_location: action.restaurant_list_location
            }
        case "SUGGESTED_RESTAURANTS":
            return {
                ...state,
                searchText: action.restaurant_name,
                suggestions: action.suggestedRest
            }
        case "RESET_WALLPAPER_SEARCH":
            return {
                ...state,
                searchText: undefined,
                suggestions: []
            }
        default:
            return state
    }
}

export default Wallpaperreducer;