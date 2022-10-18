/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { IoBagHandle, IoHeart, IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Cards = (props) => {
  const [rating, setRating] = useState(props.rate)
  const handleRating = (rate) => {
    setRating(rate)
  }
  return (
    <div lassName='ParentCard' style={{
      borderRadius: '5px', backgroundColor: '#454766',
      borderWidth: 'medium', borderStyle: 'solid', borderColor: '#454766', width: '15%', overflow: 'hidden', margin: '10px', position: 'relative'
    }}>
      <Link to={'/Product'} style={{ textDecoration: 'none', color: 'white' }}>
        <div className='Card'>
          {props.new &&
            <div style={{ position: 'absolute', backgroundColor: 'green', color: 'white', width: '25%', margin: '5px', borderRadius: '3px' }}>حراج</div>
          }
          <div>
            <img style={{ width: '140%', marginTop: '1px', borderRadius: '3px' }} src={require("../Media/" + props.img)} alt={'ds'} />
          </div>
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
              <i> تومان  </i></span>
            <br />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cards;
