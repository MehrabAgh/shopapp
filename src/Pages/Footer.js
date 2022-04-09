/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {

    let Line = () => { return <hr style={{ opacity: .1 }} /> }
    return (
        <div>
            <hr style={{opacity:.1}}/>
            <div className='headFooter'>
                <div className='part'>
                    <h3>ارتباط با ما</h3>
                    <p>آدرس : مشهد ، خیابان سعدی ، پاساژ بهزاد ، سمت چپ ، اولین و دومین مغازه</p>
                    <p>051-32229752</p>
                    <p> : شماره تماس </p>
                    <p>aaaaa@bbb.ccc</p>
                    <p> : ایمیل</p>
                </div>
                <div className='part'>
                    <h3>ما را دنبال کنید</h3>
                    <p>شما میتوانید در شبکه های اجتماعی زیر مارا دنبال کنید</p>
                    <a>Logo Instagram</a>/
                    <a>Logo Gmail</a>
                </div>
                <div className='part'>
                    <h1 style={{ color: 'gray' }}>فروشگاه مقدم</h1>
                    <p>فروش کلیه وسایل بازی ، کنسول های بازی و لوازم جانبی فروش کلیه وسایل بازی ، کنسول های بازی و لوازم جانبی</p>
                </div>
            </div>           
            <Line />
            <div>
                <p style={{ color: 'gray', opacity: .5 }}>حق نشر تمامی حقوق برای فروشگاه مقدم محفوظ می‌باشد و هرگونه کپی‌برداری مستلزم کسب اجازۀ کتبی بوده و پیگرد قانونی خواهد داشت.</p>
            </div>
        </div>
    );
}

export default Footer;
