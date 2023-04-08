import axios from "axios";
const GetMealTypesAction = () => {
    return async (dispatch, getState) => {

        await axios.get("https://zomato-services.onrender.com/mealtype/", {
            headers: {
                "content-type": "application/json"
            }
        }).then((quickSearchItems) => dispatch({ type: "GET_MEAL_TYPES", quickSearchItems: quickSearchItems.data.meal_data }))
            .catch(
                err => console.log(err)
            )

    }
}
export default GetMealTypesAction;