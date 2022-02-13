import MealTypesreducer from "./MealTypesreducer";
import RestaurantLocationreducer from "./RestaurantLocationreducer";
import Wallpaperreducer from "./Wallpaperreducer";
import UserFormreducer from "./UserFormreducer";
import { combineReducers } from "redux";
const rootreducer = combineReducers({
    locations: RestaurantLocationreducer,
    quickSearchItems: MealTypesreducer,
    wallpaper: Wallpaperreducer,
    userAuthForm: UserFormreducer
})

export default rootreducer;