import axios from "axios";
const GetRestaurantsByLocationsAction = (rest_loc_id) => {
    return async (dispatch, getState) => {

        let restaurant_list_location = await axios.get(`https://zomato-clone-db.herokuapp.com/restaurant/location/${rest_loc_id}`, {
            headers: {
                "content-type": "application/json"
            }
        }).catch(
            err => console.log(err)
        )
        dispatch({ type: "GET_RESTAURANT_BY_LOCATIONS", restaurant_list_location: restaurant_list_location.data.restaurant_loc_data })
    }
}
export default GetRestaurantsByLocationsAction;