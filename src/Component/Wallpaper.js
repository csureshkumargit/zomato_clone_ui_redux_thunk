import react, { useEffect } from "react";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import GetRestaurantsByLocationsAction from "../store/actions/GetRestaurantsByLocationsAction";
import GetSuggestedRestaurantsAction from "../store/actions/GetSuggestedRestaurantsAction";

const Wallpaper = (props) => {
    const { locationsData, restaurant_list_location, searchText, suggestions } = props;

    const handlelocationchange = (event) => {
        const locationid = event.target.value;
        sessionStorage.setItem('locationid', locationid);
        props.getRestaurantsByLocations(locationid);

    }
    const NavigateToRestaurantdetail = (restaurant) => {
        props.history.push(`/details?id=${restaurant._id}`);
    }
    const handleSearch = (event) => {
        props.getSuggestedRestaurants(event.target.value, restaurant_list_location)
    }

    useEffect(() => {
        props.defaulttext();
    }, [])

    return (
        <div>
            <div className="row background col-s-12 col-m-12 col-lg-12 col-xlg-12 " style={{ position: "relative" }}>
                <img src='./Assets/homepageimg.png' alt="background_img" />
                <div className="heading-home col-s-10 col-m-10 col-lg-10 col-xlg-10 ">
                    Find the best restaurants, cafés, and bars
                </div>
                <div className="search col-s-9 col-m-9 col-lg-9 col-xlg-9 ">
                    <span>
                        {/* <input id="location" type="text" placeholder="Please type a location" /> */}
                        <select id="location" type="text" placeholder="Please type a location" onChange={handlelocationchange}>
                            <option value='0'>Select</option>
                            {locationsData.map((item, index) => {
                                return (
                                    <option key={index} value={item.location_id}>{item.name},{item.city}</option>
                                )
                            })}
                        </select>
                    </span>
                    <span>
                        <input id="restaurants" type="text" placeholder="Search for restaurants"
                            onChange={(event) => handleSearch(event)} autoComplete="off" />
                        <i className="fa fa-search searchicon" ></i>
                        <div className="suggested-restaturant-list">
                            {suggestions && suggestions.length > 0 && suggestions.map((item, index) => {
                                return (

                                    <li key={index} className="suggested-restaurant" onClick={() => NavigateToRestaurantdetail(item)}>
                                        {item.name}-{item.city},{item.locality}
                                    </li>

                                )
                            })}
                        </div>
                        {searchText && searchText.length > 0 && suggestions.length == 0 && restaurant_list_location.length > 0
                            && <div className="suggested-no-restaurant">
                                No items Found
                            </div>}
                        {searchText && searchText.length > 0 && restaurant_list_location.length == 0 && <div className="suggested-no-restaurant">
                            Please select a location
                        </div>}
                    </span>
                </div>
                <div className="sub-heading col-s-4 col-m-4 col-lg-4 col-xlg-4">
                    Quick Searches
                </div>
                <div className="sub-heading-1 col-s-5 col-m-5 col-lg-4 col-xlg-4">
                    Discover restaurants by type of meal
                </div>
            </div>
            <br />
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurantsByLocations: (rest_loc_id) => { dispatch(GetRestaurantsByLocationsAction(rest_loc_id)) },
        getSuggestedRestaurants: (restaurant_name, restaurant_list) => { dispatch(GetSuggestedRestaurantsAction(restaurant_name, restaurant_list)) },
        defaulttext: () => { dispatch({ type: "RESET_WALLPAPER_SEARCH" }) }
    }

}
const mapStateToProps = (state) => {
    return {
        restaurant_list_location: state.wallpaper.restaurant_list_location,
        searchText: state.wallpaper.searchText,
        suggestions: state.wallpaper.suggestions,
        locationsData: state.locations.locations
    }
}
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Wallpaper);