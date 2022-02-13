import Filter from '../Filter';
import React from 'react';
import { createMemoryHistory } from 'history';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import axios from "axios";
jest.mock('axios', () => jest.fn());




describe("Filter component", async () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test("mock", () => {

        const locations = {
            status: 200, data: { "location_data": [{ "_id": "6156f22ae843d5cf9620848c", "name": "Janpat", "city_id": 1, "location_id": 2, "city": "Delhi", "country_name": "India" }, { "_id": "6156f22ae843d5cf9620848b", "name": "Shalimar Bagh", "city_id": 1, "location_id": 1, "city": "Delhi", "country_name": "India" }] }
        };
        const restaurant_data_filter = {
            status: 200,
            data: {
                "restaurant_filter": [
                    {
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
                    },
                    {
                        "_id": "615d20ee640899442cbbc4a9",
                        "name": "Domino's",
                        "city": "Delhi",
                        "location_id": 2,
                        "city_id": 1,
                        "locality": "Janpat",
                        "address": "Connaught Cir, Connaught Place, New Delhi, Delhi 110001",
                        "thumb": [
                            "Assets/Dominos/Breakfast.jpg",
                            "Assets/Dominos/Dinner.jpg",
                            "Assets/Dominos/Drinks.jpg",
                            "Assets/Dominos/Dinner.jpg"
                        ],
                        "aggregate_rating": 4.2,
                        "rating_text": "Very Good",
                        "min_price": 600,
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
                        "image": "Assets/Dominos/Breakfast.jpg",
                        "mealtype_id": 1
                    }
                ],
                "pagearr": [
                    1,
                    2,
                    3
                ],
                "totalRestaurantCount": 5
            }
        }

        const filter_restaurant_data_filter = {
            status: 200,
            data: {
                "restaurant_filter": [

                    {
                        "_id": "615d20ee640899442cbbc4a9",
                        "name": "Domino's",
                        "city": "Delhi",
                        "location_id": 2,
                        "city_id": 1,
                        "locality": "Janpat",
                        "address": "Connaught Cir, Connaught Place, New Delhi, Delhi 110001",
                        "thumb": [
                            "Assets/Dominos/Breakfast.jpg",
                            "Assets/Dominos/Dinner.jpg",
                            "Assets/Dominos/Drinks.jpg",
                            "Assets/Dominos/Dinner.jpg"
                        ],
                        "aggregate_rating": 4.2,
                        "rating_text": "Very Good",
                        "min_price": 600,
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
                        "image": "Assets/Dominos/Breakfast.jpg",
                        "mealtype_id": 1
                    },
                    {
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
                ],
                "pagearr": [
                    1,
                    2,
                    3
                ],
                "totalRestaurantCount": 5
            }
        }

        Object.defineProperty(window, "location", {
            value: {
                search: '?mealtype=1&locationid=2',
                pathname: '/filter'

            },
            writable: true
        });

        let history = createMemoryHistory();
        history = {
            push: function
                () {
                return (`/filter?mealtype=1&locationid=2&sort=-1&lcost=undefined&hcost=undefined
                &cuisine=undefined`)
            }
        }

        console.log('location', window.location);
        axios.mockResolvedValueOnce(locations);
        axios.mockResolvedValueOnce(restaurant_data_filter);
        axios.mockResolvedValueOnce(filter_restaurant_data_filter);
        const wrapper = shallow(<Filter location={window.location} history={history} />);
        wrapper.setState({ restaurant_data_filter: restaurant_data_filter.data.restaurant_filter });
        wrapper.setState({ pages: restaurant_data_filter.data.pagearr });
        wrapper.setState({ totalCount: restaurant_data_filter.data.totalRestaurantCount });
        wrapper.setState({ locations: locations.data.location_data });
        const sortElement = wrapper.find('input[name="Price high to low"]');
        sortElement.simulate('change', { target: { value: -1 } });
        //const wrapper = shallow(<Filter location={window.location} />);
        wrapper.setState({ restaurant_data_filter: filter_restaurant_data_filter.data.restaurant_filter });
        wrapper.setState({ pages: filter_restaurant_data_filter.data.pagearr });
        wrapper.setState({ totalCount: filter_restaurant_data_filter.data.totalRestaurantCount });

        console.log(wrapper.debug());

    })

});
