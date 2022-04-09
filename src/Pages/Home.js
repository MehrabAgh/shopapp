/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Carousel_Page from './Carousel_Page';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {

    let data = [
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg',rate:20 },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg',rate:45},
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg',rate:10 },
        { Name: 'fifa', price: 10000, categori: '', off: false, offer: 20, nameImg: 'fifa-18-800x450.jpg',rate:100 },
        { Name: 'fifa', price: 10000, categori: '', off: true, offer: 10, nameImg: 'fifa-18-800x450.jpg',rate:60 },
        { Name: 'fifa', price: 500000, categori: '', off: true, offer: 50, nameImg: 'fifa-18-800x450.jpg',rate:40 },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg',rate:70 },
        { Name: 'fifa', price: 10000, categori: '', off: false, nameImg: 'fifa-18-800x450.jpg',rate: 30}
    ]
    let Category = [{id:1,name :'کنسول',img:'fifa-18-800x450.jpg'},{id:2,name :'لوازم جانبی',img:'pexels-photo-169573.jpeg'},{id:3,name :'اسکین و کاور',img:'pexels-photo-169573.jpeg'},{id:4,name :'اکانت و دیسک بازی',img:'pexels-photo-169573.jpeg'}];

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
            <Header />
            <Carousel_Page />
            <div style={{ marginTop: '15%' }}>
                <h1>پیشنهادی ما</h1>
                <div className='navbar'>
                    <ol>
                        <li>جدید ترین ها </li>
                        <li>پر بازدید ترین ها</li>
                        <li>پر فروش ترین ها</li>
                    </ol>
                </div>
            </div>
            <div className='Items'>
                {data.map((d) => {
                    return (
                        <Cards Name={d.Name} price={d.price} off={d.off} offer={d.offer} img={d.nameImg} rate={d.rate}/>
                    )
                })}
            </div>
            <a href='#'>نمایش بیشتر</a>
            <div style={{ backgroundColor: 'aqua', width: '100%', paddingTop: '20%', marginTop: '5%' }}>1</div>
            <div className='Description'>
                <div>
                    <i>Icon</i>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                </div>
                <div>
                    <i>Icon</i>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                </div>
                <div>
                    <i>Icon</i>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                </div>
            </div>
            <div style={{marginBottom:'10%'}}>
                <h2 style={{marginBottom:'5%'}}>دسته بندی ها</h2>
                <div className='MainCate'>
                    {Category.map((m) => {
                        return (<RenderCategory title={m.name} img={m.img} />)
                    }
                    )}
                </div>
            </div>

            <Footer />
        </div>

    );
};

export default Home;
