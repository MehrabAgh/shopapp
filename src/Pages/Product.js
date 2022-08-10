import React from 'react';

const Product = (props) => {
    let data = "این محصول دارای 12 ماه گارانتی و 7 روز مهلت تست می باشد    رنگ : مشکلی نوع اتصال : بی سیم ( دانگل USB ) قابل استفاده بر روی تمامی پلتفرم ها مشخصات کامل در ادامه صفحه خرید هدست گیمینگ ریزر Razer Nari Ultimate"
    return (
        <div>
            <div className='MainCarder'>
                <div style={{marginRight:'5%' , width:'20%' }}>
                    <h1> نام کالا مورد نظر</h1>
                    <h2 style={{ direction: 'rtl' }}><strong>12000000</strong> تومان </h2>
                    <h3>:مشخصات</h3>
                    <p>{data}</p>
                </div>
                <img style={{ height:500, width: '25%', marginTop: '1px', borderRadius: '3px' }} src={require("../Media/" + "fifa-18-800x450.jpg")} alt={'ds'} />
            </div>
        </div>
    );
}

export default Product;
