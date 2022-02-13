import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Details from '../Details';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import axios from "axios";
jest.mock('axios', () => jest.fn());




describe("Details component", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test("render Details Component", () => {


        const restaurant_data_filter = {
            status: 200,
            data: {
                "restaurant_By_Id": {
                    "_id": "615d2075640899442cbbc46d",
                    "name": "Baba Ka Dhaba",
                    "city": "Delhi",
                    "location_id": 2,
                    "city_id": 1,
                    "locality": "Janpat",
                    "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110031",
                    "thumb": [
                        "Assets/BabaKaDhaba/Breakfast.jpg",
                        "Assets/BabaKaDhaba/Dinner.jpg",
                        "Assets/BabaKaDhaba/Drinks.jpg",
                        "Assets/BabaKaDhaba/Dinner.jpg"
                    ],
                    "aggregate_rating": 4.2,
                    "rating_text": "Very Good",
                    "min_price": 400,
                    "contact_number": "919453524651",
                    "cuisine_id": [
                        1,
                        4
                    ],
                    "cuisine": [
                        {
                            "id": 1,
                            "name": "North Indian"
                        },
                        {
                            "id": 4,
                            "name": "Fast Food"
                        }
                    ],
                    "image": "Assets/BabaKaDhaba/Breakfast.jpg",
                    "mealtype_id": 1
                }
            }
        }



        Object.defineProperty(window, "location", {
            value: {
                search: '?id=615d2075640899442cbbc46d',
                pathname: '/details'

            },
            writable: true
        });


        axios.mockResolvedValueOnce(restaurant_data_filter);
        const wrapper = shallow(<Details location={window.location} />);
        wrapper.setState({ restaurant: restaurant_data_filter.data.restaurant_By_Id });
        wrapper.setState({ showdetails: true });
        wrapper.setState({ resid: restaurant_data_filter.data.restaurant_By_Id._id });
        console.log(wrapper.debug());

    })

});
