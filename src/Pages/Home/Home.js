/* eslint-disable react/jsx-pascal-case */
import React, { memo, useState } from "react";
import CarouselPage from "../../Components/CarouselPage/CarouselPage";
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Cards/Cards";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";
import Categories from "./Categories/Categoies";
import { borderBottom } from "@mui/system";
import "swiper/css";
import { SiHotjar } from "react-icons/si";

import Suggestions from "./Suggestions/Suggestions";
import TopGallery from "./TopGallery/TopGallery";
import BottomGallery from "./BottomGallery/BottomGallery";
/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {
    let dataCard = [
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: false,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 20,
        },
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: false,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 45,
        },
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: false,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 10,
        },
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: true,
            offer: 20,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 100,
            new: true,
        },
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: true,
            offer: 10,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 60,
            new: true,
        },
        {
            Name: "fifa",
            price: 500000,
            category: "",
            off: true,
            offer: 50,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 40,
            new: true,
        },
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: false,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 70,
        },
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: false,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 30,
        },
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: false,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 70,
        },
        {
            Name: "fifa",
            price: 10000,
            category: "",
            off: false,
            imgSrc: "fifa-18-800x450.jpg",
            rate: 30,
        },
    ];

    return (
        <div>
            {/* 
            main slider
            */}
            <CarouselPage />
            <TopGallery />
            <Suggestions />
            <BottomGallery />
            <Categories />
            <Footer />
        </div>
    );
};

export default memo(Home);
