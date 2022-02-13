import axios from "axios";
const GetMealTypesAction = () => {
    return async (dispatch, getState) => {

        let quickSearchItems = await axios.get("https://zomato-clone-db.herokuapp.com/mealtype/", {
            headers: {
                "content-type": "application/json"
            }
        }).catch(
            err => console.log(err)
        )
        dispatch({ type: "GET_MEAL_TYPES", quickSearchItems: quickSearchItems.data.meal_data })
    }
}
export default GetMealTypesAction;