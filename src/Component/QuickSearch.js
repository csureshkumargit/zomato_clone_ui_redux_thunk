import react from "react";
import { Component } from "react";
import WithRouter from "./WithRouter";
import { connect } from "react-redux";
import { compose } from "redux";

const QuickSearch = (props) => {
    const { quickSearchItemsData } = props;
    const navigatetoFilter = (mealType_id) => {
        const locationid = sessionStorage.getItem('locationid');
        if (locationid) {
            props.router.navigate(`/filter?mealtype=${mealType_id}&locationid=${locationid}`);
        }
        else {
            props.router.navigate(`/filter?mealtype=${mealType_id}`);
        }

    }
    return (
        <div>
            <div className="row items-home" style={{ height: "160px" }}>
                {quickSearchItemsData.map((item, index) => {
                    return (
                        <div className="col-s-5 col-m-4 col-lg-4 col-xlg-4 list-item" key={index} style={{ border: "1px solid #ffffff", height: "160px", display: "inline-block" }}>
                            <div className="Menucard" style={{ display: "inline-block" }} key={item.meal_type} onClick={() => navigatetoFilter(item.meal_type)}>
                                <div className="Img_shutter_home">

                                    <img src={`./${item.image}`} alt={`The ${item.name}`} />

                                </div>
                                <div className="Menudetails">
                                    <div className="Menuname">{item.name}</div>
                                    <div className="details">{item.content}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        quickSearchItemsData: state.quickSearchItems.quickSearchItems
    }
}

export default compose(WithRouter, connect(mapStateToProps, null))(QuickSearch);
