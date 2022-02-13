import { render, screen, fireEvent, } from '@testing-library/react';
import React from 'react';
import Home from '../Home';
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
jest.mock('axios', () => jest.fn());

export default class MockHome extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
    }

}
describe('Home component', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('renders the Home Component with axios', async () => {
        const locations = {
            status: 200, data: { "location_data": [{ "_id": "6156f22ae843d5cf9620848c", "name": "Janpat", "city_id": 1, "location_id": 2, "city": "Delhi", "country_name": "India" }, { "_id": "6156f22ae843d5cf9620848b", "name": "Shalimar Bagh", "city_id": 1, "location_id": 1, "city": "Delhi", "country_name": "India" }] }
        };

        const quickSearchItems = {
            status: 200, data: { "meal_data": [{ "_id": "6156f1a5e843d5cf96208488", "name": "Snacks", "content": "Start your day with exclusive snacks options", "image": "Assets/snacks.png", "meal_type": 4 }, { "_id": "6156f1a5e843d5cf96208489", "name": "Drinks", "content": "Start your day with exclusive drinks options", "image": "Assets/drinks.png", "meal_type": 5 }] }
        };

        const restaurants = {
            status: 200, data: { "restaurant_data": [{ "_id": "615d2075640899442cbbc480", "name": "Baba Ka Dhaba", "city": "Delhi", "location_id": 5, "city_id": 1, "locality": "Anand Vihar", "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110031", "thumb": ["Assets/BabaKaDhaba/Breakfast.jpg", "Assets/BabaKaDhaba/Dinner.jpg", "Assets/BabaKaDhaba/Drinks.jpg", "Assets/BabaKaDhaba/Dinner.jpg"], "aggregate_rating": 4.2, "rating_text": "Very Good", "min_price": 550, "contact_number": "919453524651", "cuisine_id": [1, 4], "cuisine": [{ "id": 1, "name": "North Indian" }, { "id": 4, "name": "Fast Food" }], "image": "Assets/BabaKaDhaba/Lunch.jpg", "mealtype_id": 2 }, { "_id": "615d2075640899442cbbc46c", "name": "Baba Ka Dhaba", "city": "Delhi", "location_id": 1, "city_id": 1, "locality": "Shalimar Bagh", "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110031", "thumb": ["Assets/BabaKaDhaba/Breakfast.jpg", "Assets/BabaKaDhaba/Dinner.jpg", "Assets/BabaKaDhaba/Drinks.jpg", "Assets/BabaKaDhaba/Dinner.jpg"], "aggregate_rating": 4.2, "rating_text": "Very Good", "min_price": 2000, "contact_number": "919453524651", "cuisine_id": [2, 5], "cuisine": [{ "id": 1, "name": "North Indian" }, { "id": 5, "name": "Street Food" }], "image": "Assets/BabaKaDhaba/Nightlife.jpg", "mealtype_id": 6 }] }
        }
        axios.mockResolvedValueOnce(locations);
        axios.mockResolvedValueOnce(quickSearchItems);
        axios.mockResolvedValueOnce(restaurants);
        const renderhome = render(<MockHome />);

        //const textElement = await screen.findByText(/Discover restaurants by type of meal/i);
    });

    test('validating the wall paper component', async () => {
        const locations = {
            status: 200, data: { "location_data": [{ "_id": "6156f22ae843d5cf9620848c", "name": "Janpat", "city_id": 1, "location_id": 2, "city": "Delhi", "country_name": "India" }, { "_id": "6156f22ae843d5cf9620848b", "name": "Shalimar Bagh", "city_id": 1, "location_id": 1, "city": "Delhi", "country_name": "India" }] }
        };

        const quickSearchItems = {
            status: 200, data: { "meal_data": [{ "_id": "6156f1a5e843d5cf96208488", "name": "Snacks", "content": "Start your day with exclusive snacks options", "image": "Assets/snacks.png", "meal_type": 4 }, { "_id": "6156f1a5e843d5cf96208489", "name": "Drinks", "content": "Start your day with exclusive drinks options", "image": "Assets/drinks.png", "meal_type": 5 }] }
        };

        const restaurants = {
            status: 200, data: { "restaurant_data": [{ "_id": "615d2075640899442cbbc480", "name": "Baba Ka Dhaba", "city": "Delhi", "location_id": 5, "city_id": 1, "locality": "Anand Vihar", "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110031", "thumb": ["Assets/BabaKaDhaba/Breakfast.jpg", "Assets/BabaKaDhaba/Dinner.jpg", "Assets/BabaKaDhaba/Drinks.jpg", "Assets/BabaKaDhaba/Dinner.jpg"], "aggregate_rating": 4.2, "rating_text": "Very Good", "min_price": 550, "contact_number": "919453524651", "cuisine_id": [1, 4], "cuisine": [{ "id": 1, "name": "North Indian" }, { "id": 4, "name": "Fast Food" }], "image": "Assets/BabaKaDhaba/Lunch.jpg", "mealtype_id": 2 }, { "_id": "615d2075640899442cbbc46c", "name": "Baba Ka Dhaba", "city": "Delhi", "location_id": 1, "city_id": 1, "locality": "Shalimar Bagh", "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110031", "thumb": ["Assets/BabaKaDhaba/Breakfast.jpg", "Assets/BabaKaDhaba/Dinner.jpg", "Assets/BabaKaDhaba/Drinks.jpg", "Assets/BabaKaDhaba/Dinner.jpg"], "aggregate_rating": 4.2, "rating_text": "Very Good", "min_price": 2000, "contact_number": "919453524651", "cuisine_id": [2, 5], "cuisine": [{ "id": 1, "name": "North Indian" }, { "id": 5, "name": "Street Food" }], "image": "Assets/BabaKaDhaba/Nightlife.jpg", "mealtype_id": 6 }] }
        }

        const restaurantbylocation = {
            status: 200,
            data: {
                "restaurant_loc_data": [
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
                        "_id": "615d20b3640899442cbbc48b",
                        "name": "BurgerKing",
                        "city": "Delhi",
                        "location_id": 2,
                        "city_id": 1,
                        "locality": "Janpat",
                        "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110017",
                        "thumb": [
                            "Assets/BurgerKing/Breakfast.jpg",
                            "Assets/BurgerKing/Dinner.jpg",
                            "Assets/BurgerKing/Drinks.jpg",
                            "Assets/BurgerKing/Dinner.jpg"
                        ],
                        "aggregate_rating": 4.2,
                        "rating_text": "Very Good",
                        "min_price": 620,
                        "contact_number": "919453524651",
                        "cuisine_id": [
                            2,
                            3
                        ],
                        "cuisine": [
                            {
                                "id": 2,
                                "name": "South Indian"
                            },
                            {
                                "id": 3,
                                "name": "Chinese"
                            }
                        ],
                        "image": "Assets/BurgerKing/Breakfast.jpg",
                        "mealtype_id": 1
                    }
                ]
            }
        }
        axios.mockResolvedValueOnce(locations);
        axios.mockResolvedValueOnce(quickSearchItems);
        axios.mockResolvedValueOnce(restaurants);
        axios.mockResolvedValueOnce(restaurantbylocation);
        const renderhome = render(<MockHome />);
        const textElement = await screen.findByText(/Discover restaurants by type of meal/i);
        const restListElement = screen.getByPlaceholderText(/Please type a location/i);
        fireEvent.change(restListElement, { target: { value: 2 } })
        const restaurantElement = await screen.findByText(/Janpat/i);
        const searchrestElement = screen.getByPlaceholderText(/Search for restaurants/i);
        fireEvent.change(searchrestElement, { target: { value: "BurgerKing" } });
        const resultRestElement = await screen.findByText(/BurgerKing-Delhi,Janpat/i);
        console.log(renderhome.debug());
        expect(textElement).toBeInTheDocument();
        expect(restListElement).toBeInTheDocument();
        expect(restaurantElement).toBeInTheDocument();
        expect(resultRestElement).toBeInTheDocument();

    });
    test('wall paper component for no items found when searching invalid restaurant', async () => {
        const locations = {
            status: 200, data: { "location_data": [{ "_id": "6156f22ae843d5cf9620848c", "name": "Janpat", "city_id": 1, "location_id": 2, "city": "Delhi", "country_name": "India" }, { "_id": "6156f22ae843d5cf9620848b", "name": "Shalimar Bagh", "city_id": 1, "location_id": 1, "city": "Delhi", "country_name": "India" }] }
        };

        const quickSearchItems = {
            status: 200, data: { "meal_data": [{ "_id": "6156f1a5e843d5cf96208488", "name": "Snacks", "content": "Start your day with exclusive snacks options", "image": "Assets/snacks.png", "meal_type": 4 }, { "_id": "6156f1a5e843d5cf96208489", "name": "Drinks", "content": "Start your day with exclusive drinks options", "image": "Assets/drinks.png", "meal_type": 5 }] }
        };

        const restaurants = {
            status: 200, data: { "restaurant_data": [{ "_id": "615d2075640899442cbbc480", "name": "Baba Ka Dhaba", "city": "Delhi", "location_id": 5, "city_id": 1, "locality": "Anand Vihar", "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110031", "thumb": ["Assets/BabaKaDhaba/Breakfast.jpg", "Assets/BabaKaDhaba/Dinner.jpg", "Assets/BabaKaDhaba/Drinks.jpg", "Assets/BabaKaDhaba/Dinner.jpg"], "aggregate_rating": 4.2, "rating_text": "Very Good", "min_price": 550, "contact_number": "919453524651", "cuisine_id": [1, 4], "cuisine": [{ "id": 1, "name": "North Indian" }, { "id": 4, "name": "Fast Food" }], "image": "Assets/BabaKaDhaba/Lunch.jpg", "mealtype_id": 2 }, { "_id": "615d2075640899442cbbc46c", "name": "Baba Ka Dhaba", "city": "Delhi", "location_id": 1, "city_id": 1, "locality": "Shalimar Bagh", "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110031", "thumb": ["Assets/BabaKaDhaba/Breakfast.jpg", "Assets/BabaKaDhaba/Dinner.jpg", "Assets/BabaKaDhaba/Drinks.jpg", "Assets/BabaKaDhaba/Dinner.jpg"], "aggregate_rating": 4.2, "rating_text": "Very Good", "min_price": 2000, "contact_number": "919453524651", "cuisine_id": [2, 5], "cuisine": [{ "id": 1, "name": "North Indian" }, { "id": 5, "name": "Street Food" }], "image": "Assets/BabaKaDhaba/Nightlife.jpg", "mealtype_id": 6 }] }
        }

        const restaurantbylocation = {
            status: 200,
            data: {
                "restaurant_loc_data": [
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
                        "_id": "615d20b3640899442cbbc48b",
                        "name": "BurgerKing",
                        "city": "Delhi",
                        "location_id": 2,
                        "city_id": 1,
                        "locality": "Janpat",
                        "address": "Community Center, Ashok Vihar, Saket, New Delhi, Delhi 110017",
                        "thumb": [
                            "Assets/BurgerKing/Breakfast.jpg",
                            "Assets/BurgerKing/Dinner.jpg",
                            "Assets/BurgerKing/Drinks.jpg",
                            "Assets/BurgerKing/Dinner.jpg"
                        ],
                        "aggregate_rating": 4.2,
                        "rating_text": "Very Good",
                        "min_price": 620,
                        "contact_number": "919453524651",
                        "cuisine_id": [
                            2,
                            3
                        ],
                        "cuisine": [
                            {
                                "id": 2,
                                "name": "South Indian"
                            },
                            {
                                "id": 3,
                                "name": "Chinese"
                            }
                        ],
                        "image": "Assets/BurgerKing/Breakfast.jpg",
                        "mealtype_id": 1
                    }
                ]
            }
        }
        axios.mockResolvedValueOnce(locations);
        axios.mockResolvedValueOnce(quickSearchItems);
        axios.mockResolvedValueOnce(restaurants);
        axios.mockResolvedValueOnce(restaurantbylocation);
        const renderhome = render(<MockHome />);
        const textElement = await screen.findByText(/Discover restaurants by type of meal/i);
        const restListElement = screen.getByPlaceholderText(/Please type a location/i);
        fireEvent.change(restListElement, { target: { value: 2 } })
        const restaurantElement = await screen.findByText(/Janpat/i);
        const searchrestElement = screen.getByPlaceholderText(/Search for restaurants/i);
        fireEvent.change(searchrestElement, { target: { value: "Dominos" } });
        const resultRestElement = await screen.findByText(/No items Found/i);
        console.log(renderhome.debug());
        expect(textElement).toBeInTheDocument();
        expect(restListElement).toBeInTheDocument();
        expect(restaurantElement).toBeInTheDocument();
        expect(resultRestElement).toBeInTheDocument();

    });
});