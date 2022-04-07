import React, { useState } from 'react';
import './App.css';
import Carousel_Page from './Pages/Carousel_Page';
import Header from './Pages/Header';
import { Rating } from 'react-simple-star-rating'
import Footer from './Pages/Footer';


const App = () => {

  const Renderitem = (props) => {
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
      setRating(rate)
    }
    return (
      <div className='Card' style={{ borderRadius: '10px', backgroundColor: 'white', borderWidth: 'medium', borderStyle: 'solid', borderColor: 'rgb(240, 240, 240)', width: '20%', overflow: 'hidden', margin: '10px' }}>
        {props.new &&
          <div style={{ position: 'absolute', backgroundColor: 'green', color: 'white', width: '3%', margin: '5px', borderRadius: '3px' }}>حراج</div>
        }
        <img style={{ width: '140%', marginTop: '20px', borderRadius: '3px' }} src={require('./Media/fifa-18-800x450.jpg')} alt={'ds'} />
        <span>{props.Name}</span>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Rating size={20} onClick={handleRating} ratingValue={rating} /* Available Props */ />
        </div>
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <span>قیمت :
            {props.off
              ? <>
                <s style={{ color: 'gray' }}>{props.price}</s>
                <br/>
                <b style={{ color: 'red' }}>{(props.price * props.offer)/100}</b>
              </>
              : <b style={{ color: 'red' }}>{props.price}</b>}
تومان            </span>
        </div>
      </div>
    )
  }
  let data = [
    { Name: 'fifa', price: 10000, categori: '', off: false },
    { Name: 'fifa', price: 10000, categori: '', off: false },
    { Name: 'fifa', price: 10000, categori: '', off: false },
    { Name: 'fifa', price: 10000, categori: '', off: false , offer:20},
    { Name: 'fifa', price: 10000, categori: '', off: true , offer:10},
    { Name: 'fifa', price: 500000, categori: '', off: true , offer:50},
    { Name: 'fifa', price: 10000, categori: '', off: false },
    { Name: 'fifa', price: 10000, categori: '', off: false }
  ]
  return (
    <div>
      <Header />
      <Carousel_Page />
      <div style={{ marginTop:'10%'}}>
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
            <Renderitem Name={d.Name} price={d.price} off={d.off} offer={d.offer}/>
          )
        })}
      </div>

      <div style={{ backgroundColor: 'aqua', width: '100%', paddingTop: '17%' }}>1</div>
      <div>

      </div>

      <Footer />
    </div>
    
  );
};

export default App;
