import axios from "axios";
const GetRestaurantLocationsAction = () => {
    return async (dispatch, getState) => {

        let locations = await axios.get("http://localhost:8090/location/", {
            headers: {
                "content-type": "application/json"
            }
        }).catch(
            err => console.log(err)
        )
        console.log('qs', locations);
        dispatch({ type: "GET_RESTAURANT_LOCATIONS", locations: locations.data.location_data })
    }
}
export default GetRestaurantLocationsAction;