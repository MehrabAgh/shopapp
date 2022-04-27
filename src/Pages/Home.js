/* eslint-disable react/jsx-pascal-case */
import React, { memo, useState } from 'react';
import Carousel_Page from './Carousel_Page';
import Footer from './Footer';
import Cards from './Cards';
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {
    const [More, setMore] = useState(false);
    const [ShowMore, setShowMore] = useState(true);
    let data = [
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg', rate: 20 },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg', rate: 45 },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg', rate: 10 },
        { Name: 'fifa', price: 10000, categori: '', off: true, offer: 20, nameImg: 'fifa-18-800x450.jpg', rate: 100, new: true },
        { Name: 'fifa', price: 10000, categori: '', off: true, offer: 10, nameImg: 'fifa-18-800x450.jpg', rate: 60, new: true },
        { Name: 'fifa', price: 500000, categori: '', off: true, offer: 50, nameImg: 'fifa-18-800x450.jpg', rate: 40, new: true },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg', rate: 70 },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg', rate: 30 },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg', rate: 70 },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg', rate: 30 }
    ]
    let Category = [
        { id: 1, name: 'کنسول', img: 'fifa-18-800x450.jpg' },
        { id: 2, name: 'لوازم جانبی', img: 'pexels-photo-169573.jpeg' },
        { id: 3, name: 'اسکین و کاور', img: 'pexels-photo-169573.jpeg' },
        { id: 4, name: 'اکانت و دیسک بازی', img: 'pexels-photo-169573.jpeg' }
    ];
    let data2 = []
    for (let i = 0; i < 8; i++) {
        data2.push(data[i])
    }
    // console.log(data2)

    const RenderCategory = (props) => {
        return (
            <div>
                <div className='CategoryStl'>
                    <img src={require("../Media/" + props.img)} alt="category" />
                </div>
                <span>{props.title}</span>
            </div>
        )
    }

    return (
        <div>
            <Carousel_Page />

            <div className='gallery'>
                <figure className='gallery__item gallery__item--1'>
                    <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                </figure>
                <figure className='gallery__item gallery__item--2'>
                    <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                </figure>
                <figure className='gallery__item gallery__item--3'>
                    <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                </figure>
                <figure className='gallery__item gallery__item--4'>
                    <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                </figure>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginTop: '10px', marginLeft: "35px" }}>
                    <IoCaretBackCircle size={30} color={"#5583e0"} />
                    <IoCaretForwardCircle size={30} color={"#5583e0"} />
                </div>
                <h3 style={{ marginTop: '10px', marginRight: "40px" }}>بازی های پیشنهادی ما</h3>
            </div>
            <div style={{ width: '95%', display: 'flex', margin: 'auto' }}>
                <Cards Name={"ss"} img={"fifa-18-800x450.jpg"} price={'20000'} rates={'100'} />
                <Cards Name={"ss"} img={"fifa-18-800x450.jpg"} price={'40000'} off={true} rates={'60'} offer={'50'} />
            </div>

            <div style={{ backgroundColor: '#181526',boxShadow:'-1px 0px 12px 4px rgba(0,0,0,0.75)', paddingBottom:'30px', marginTop: '5%', width: '100%' }}>
                <br/>
                <h3 style={{textAlign:'right' , marginRight:'40px'}}>پرفروشترین کنسول ها</h3>
                <div className='gallery'>
                    <figure  className='gallery__item gallery__item--1-5' >
                        <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                    </figure>
                    <figure className='gallery__item gallery__item--2-5'>
                        <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                    </figure>
                    <figure className='gallery__item gallery__item--3-5'>
                        <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                    </figure>
                    <figure  className='gallery__item gallery__item--4-5'>
                        <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                    </figure>
                    <figure className='gallery__item gallery__item--5-5'>
                        <img src={require('../Media/fifa-18-800x450.jpg')} className={"gallery__img"} alt='ss' />
                    </figure>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginTop: '10px', marginLeft: "35px" }}>
                    <IoCaretBackCircle size={30} color={"#5583e0"} />
                    <IoCaretForwardCircle size={30} color={"#5583e0"} />
                </div>
                <h3 style={{ marginTop: '10px', marginRight: "40px" }}>بازی های پیشنهادی ما</h3>
            </div>
            <div style={{ width: '95%', display: 'flex', margin: 'auto' }}>
                <Cards Name={"ss"} img={"fifa-18-800x450.jpg"} price={'20000'} rates={'100'} />
                <Cards Name={"ss"} img={"fifa-18-800x450.jpg"} price={'40000'} off={true} rates={'60'} offer={'50'} />
            </div>

            <Footer />
        </div>

    );
};

export default memo(Home);
