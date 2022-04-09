import React, { useEffect, useState } from 'react';

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    return h + ":" + m + ":" + s;
}
const List = [
    "خانه",
    "دسته بندی کالا",
    "تخفیف ها و پیشنهاد ها",
    "درباره ما"
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
                    <a onClick={() => { console.log('signUp') }}>ثبت نام</a>
                    {'\n'}
                    /
                    {'\n'}
                    <a onClick={() => console.log('Login')}>ورود</a>
                </span>
                <span>سبد خرید</span>
            </div>
            <hr />

            <h1 style={{ color: 'tomato' }}>فروشگاه مقدم</h1>

            <div className='navbar'>
                <ol>
                    {tstList.map((m) => {
                        return (
                            <li>
                                {m}
                            </li>
                        )
                    })}
                </ol>
            </div>
            <hr id='endHeadLine'/>
        </div>
    );
}

export default Header;
