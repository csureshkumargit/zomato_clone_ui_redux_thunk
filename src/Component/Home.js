import React from "react";
import '../Styles/Home.css';
import { useEffect } from "react";
import Wallpaper from '../Component/Wallpaper.js';
import QuickSearch from "./QuickSearch";
import { connect } from "react-redux";
import GetMealTypesAction from "../store/actions/GetMealTypesAction";
import GetRestaurantLocationsAction from "../store/actions/GetRestaurantLocationsAction";



const Home = (props) => {

    useEffect(() => {
        sessionStorage.setItem('locationid', '');
        props.getMealTypes();
        props.getRestaurantLocations();
    }, [])
    return (
        <div>
            <Wallpaper />
            <QuickSearch />
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMealTypes: () => { dispatch(GetMealTypesAction()) },
        getRestaurantLocations: () => { dispatch(GetRestaurantLocationsAction()) }
    }

}

export default connect(null, mapDispatchToProps)(Home);