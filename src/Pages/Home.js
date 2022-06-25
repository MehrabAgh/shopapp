/* eslint-disable react/jsx-pascal-case */
import React, { memo, useState } from 'react';
import Carousel_Page from './Carousel_Page';
import Footer from './Footer';
import Cards from './Cards';
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {

    let dataCard = [
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
    const Category = ({ img, url }) => {
        return (
            <div className='coverCateg'>
                <a href={url}>
                    <img style={{ width: '100%', height: '100%', boxShadow: " 0px 8px 16px 0px rgba(0,0,0,0.2)", borderRadius: '10px', }}
                        src={require(`../Media/${img}`)} alt='a' />
                </a>
            </div>
        )
    }
    const CoverHeader = (props) => {

        return (
            <>
                <img src={require(`../Media/${props.img}`)} className={"gallery__img"} alt='ss' />
                <div className="container" >
                    <div className='buyBtnHome' onClick={() => { console.log("a") }}>
                        <b>خرید</b>
                    </div>
                    <p style={{ direction: 'rtl' }}><strong>{props.price}</strong> تومان </p>
                </div>
            </>
        )
    }
    const CoverSellProduct = (props) => {
        return (
            <>
                <img src={require(`../Media/${props.img}`)} className={"gallery__img"} alt='ss' />
                <div style={{ backgroundColor: 'cornflowerblue', top: '0', margin: '20px', position: 'absolute', padding: '.1rem', borderRadius: '5px',width:'20%' , fontSize:'70%'}}>
                    <p style={{direction:'rtl' , fontWeight:'bold'}}><span> {props.price} </span> $</p>
                </div>
            </>
        )
    }
    return (
        <div>
            <Carousel_Page />
            <div className='gallery'>
                <figure className='gallery__item gallery__item--1'>
                    <CoverHeader price={20000} img={"fifa-18-800x450.jpg"} />
                </figure>

                <figure className='gallery__item gallery__item--2'>
                    <CoverHeader price={2000000} img={"fifa-18-800x450.jpg"} />
                </figure>

                <figure className='gallery__item gallery__item--3'>
                    <CoverHeader price={2000000} img={"fifa-18-800x450.jpg"} />
                </figure>

                <figure className='gallery__item gallery__item--4'>
                    <CoverHeader price={2000000} img={"fifa-18-800x450.jpg"} />
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

            <div style={{ backgroundColor: '#181526', boxShadow: '-1px 0px 12px 4px rgba(0,0,0,0.75)', paddingBottom: '30px', marginTop: '5%', width: '100%' }}>
                <br />
                <h3 style={{ textAlign: 'right', marginRight: '40px' }}>پرفروشترین کنسول ها</h3>
                <div className='gallery'>
                    <figure className='gallery__item gallery__item--1-5' >
                        <CoverSellProduct price={2000000} img={"fifa-18-800x450.jpg"} />
                    </figure>
                    <figure className='gallery__item gallery__item--2-5'>
                         <CoverSellProduct price={2000000} img={"fifa-18-800x450.jpg"} />
                    </figure>
                    <figure className='gallery__item gallery__item--3-5'>
                         <CoverSellProduct price={2000000} img={"fifa-18-800x450.jpg"} />
                    </figure>
                    <figure className='gallery__item gallery__item--4-5'>
                         <CoverSellProduct price={2000000} img={"fifa-18-800x450.jpg"} />
                    </figure>
                    <figure className='gallery__item gallery__item--5-5'>
                         <CoverSellProduct price={2000000} img={"fifa-18-800x450.jpg"} />
                    </figure>
                </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginTop: '10px', marginLeft: "35px" }}>
                    <IoCaretBackCircle size={30} color={"#5583e0"} />
                    <IoCaretForwardCircle size={30} color={"#5583e0"} />
                </div>
                <h3 style={{ marginTop: '10px', marginRight: "40px" }}>دسته بندی ها</h3>
            </div>
            <div style={{ width: '95%', display: 'flex', margin: 'auto' }}>
                <Category url={'#'} img={'fifa-18-800x450.jpg'} />
                <Category url={'#'} img={'fifa-18-800x450.jpg'} />
                <Category url={'#'} img={'fifa-18-800x450.jpg'} />
                <Category url={'#'} img={'fifa-18-800x450.jpg'} />
                <Category url={'#'} img={'fifa-18-800x450.jpg'} />
            </div>

            <Footer />
        </div>

    );
};

export default memo(Home);
