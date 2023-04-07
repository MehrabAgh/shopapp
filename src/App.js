import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Category from "./Pages/Category/Category";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Offer from "./Pages/Offer/Offer";
import Product from "./Pages/Product/Product";
import Profile from "./Pages/Profile/Profile";
import SearchPage from "./Pages/SearchPage/SearchPage";
import SignUp from "./Pages/SignUp/SignUp";
import { ThemeProvider } from "@emotion/react";
import theme from "./materialThemes";
import Basket from "./Pages/Basket/Basket";
import Setting from "./Pages/Setting/Setting";
import SubmitOrder from "./Pages/SubmitOrder/SubmitOrder";
import { BasketContext } from "./Context/UserContext";
import NotFound404 from "./Pages/NotFound404/NotFound404";

/**
 * @type {{
        id: number;
        imgSrc: string;
        title: string;
        count: string;
        cost: number;
    }[]}
 */
const initBasketList = [];

const App = () => {
    const [basketList, setBasketList] = React.useState(initBasketList);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <BasketContext.Provider value={{ basketList, setBasketList }}>
                    <Routes>
                        <Route path="/" element={<Header />}>
                            <Route index element={<Home />} />
                            <Route path="about-us" element={<AboutUs />} />
                            <Route path="Login" element={<Login />} />
                            <Route path="Category" element={<Category />} />
                            <Route path="Profile">
                                <Route index element={<Profile />} />
                                <Route path="Basket" element={<Basket />} />
                                <Route path="Setting" element={<Setting />} />
                            </Route>
                            <Route path="SubmitOrder">
                                <Route index element={<SubmitOrder />} />
                            </Route>
                            <Route path="SignUp" element={<SignUp />} />
                            <Route path="SearchBar" element={<SearchPage />} />
                            <Route path="Product" element={<Product />} />
                            <Route path="Offer" element={<Offer />} />
                        </Route>
                        <Route path="*" element={<NotFound404/>} />
                        <Route path="/404NotFound" element={<NotFound404/>} />
                    </Routes>
                </BasketContext.Provider>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
