import axios from "axios";
const GetSuggestedRestaurantsAction = (restaurant_name, restaurant_list_location) => {
    let suggestedRest = [];
    if (restaurant_name.length > 0) {
        suggestedRest = restaurant_list_location.filter(item =>
            item.name.toLowerCase().includes(restaurant_name.toLowerCase())

        )
    }
    return {
        type: "SUGGESTED_RESTAURANTS",
        restaurant_name: restaurant_name,
        suggestedRest: suggestedRest
    }
}
export default GetSuggestedRestaurantsAction;