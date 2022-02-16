import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Filter from "./Filter";
import Details from "./Details";
import Header from "./Header";


class Router extends React.Component {

    render() {
        return (

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/filter' element={<Filter />} />
                    <Route path='/details' element={<Details />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;