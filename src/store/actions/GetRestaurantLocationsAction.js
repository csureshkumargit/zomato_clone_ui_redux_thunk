import axios from "axios";
const GetRestaurantLocationsAction = () => {
    return async (dispatch, getState) => {

        await axios.get("https://zomato-clone-db.herokuapp.com/location/", {
            headers: {
                "content-type": "application/json"
            }
        }).then((locations) => dispatch({ type: "GET_RESTAURANT_LOCATIONS", locations: locations.data.location_data }))
            .catch(
                err => console.log(err)
            )

    }
}
export default GetRestaurantLocationsAction;