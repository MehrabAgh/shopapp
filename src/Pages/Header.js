import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    return h + ":" + m + ":" + s;
}
const List = [
    { name: "خانه", url: '/' },
    { name: "دسته بندی کالا", url: '/Category' },
    { name: "تخفیف ها و پیشنهاد ها", url: '/Offer' },
    { name: "درباره ما", url: '/Aboutus' }
]
let tstList = List.reverse();
/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {

    const [Time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            setTime(startTime())
        }, 1);
    }); 
    return (
        <div className='HeaderMain'>
            <div className='HeaderUp'>
                <span className='timer'>ساعت لحظه ای : {Time}</span>
                <span className='stateUser'>
                    <Link to={''} onClick={() => { console.log('signUp') }}>ثبت نام</Link>
                    {'\n'}
                    /
                    {'\n'}
                    <Link to={''} onClick={() => console.log('Login')}>ورود</Link>
                </span>
                <Link to={''}>سبد خرید</Link>
            </div>
            <hr />

            <h1 style={{ color: 'tomato' }}>فروشگاه مقدم</h1>
            <div className='navbar'>
                <ol>
                    {tstList.map((m) => {
                        return (
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={m.url}>{m.name}</Link>
                            </li>
                        )
                    })}
                </ol>                
            </div>
            <Outlet />     
            <hr id='endHeadLine' />
        </div>
    );
}

export default Header;
