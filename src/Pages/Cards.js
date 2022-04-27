import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { IoBagHandle , IoHeart ,IoEye } from "react-icons/io5";
const Cards = (props) => {
  const [rating, setRating] = useState(props.rate)
  const [hover, sethover] = useState(false);
  const handleRating = (rate) => {
    setRating(rate)
  }
  return (
    <div onMouseLeave={() => sethover(false)} className='ParentCard' onMouseOver={() => { sethover(true) }} style={{ borderRadius: '5px', backgroundColor: '#454766',
     borderWidth: 'medium', borderStyle: 'solid', borderColor: '#454766', width: '15%', overflow: 'hidden', margin: '10px', position: 'relative' }}>
      <div className='Card'>
        {props.new &&
          <div style={{ position: 'absolute', backgroundColor: 'green', color: 'white', width: '25%', margin: '5px', borderRadius: '3px' }}>حراج</div>
        }
        <img style={{ width: '140%', marginTop: '1px', borderRadius: '3px' }} src={require("../Media/" + props.img)} alt={'ds'} />
        <span>{props.Name}</span>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Rating size={20} fillColor={'#55a1e0'} ratingValue={props.rates} readonly /* Available Props */ />
        </div>
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <span>قیمت :
            {props.off
              ? <>
                <s style={{ color: 'gray' }}>{props.price}</s>
                <br />
                <b style={{ color: 'red' }}>{(props.price * props.offer) / 100}</b>
              </>
              : <b style={{ color: 'white' }}>{props.price}</b>}
           <i> تومان            </i></span>
        </div>
        {hover &&
        <div  className='hoveredCard'>
          <IoHeart size={25}></IoHeart>
          <IoBagHandle size={25}></IoBagHandle>
          <IoEye size={25}></IoEye>
        </div>}
      </div>
     

    </div>
  )
}

export default Cards;
