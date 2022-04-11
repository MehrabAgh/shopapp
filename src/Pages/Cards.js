import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
const Cards = (props) => {
  const [rating, setRating] = useState(props.rate)
  const [hover, sethover] = useState(false);
  const handleRating = (rate) => {
    setRating(rate)
  }
  return (
    <div onMouseLeave={() => sethover(false)} className='ParentCard' onMouseOver={() => { sethover(true) }} style={{ borderRadius: '10px', backgroundColor: 'white', borderWidth: 'medium', borderStyle: 'solid', borderColor: 'rgb(240, 240, 240)', width: '20%', overflow: 'hidden', margin: '10px', position: 'relative' }}>
      <div className='Card'>
        {props.new &&
          <div style={{ position: 'absolute', backgroundColor: 'green', color: 'white', width: '25%', margin: '5px', borderRadius: '3px' }}>حراج</div>
        }
        <img style={{ width: '140%', marginTop: '20px', borderRadius: '3px' }} src={require("../Media/" + props.img)} alt={'ds'} />
        <span>{props.Name}</span>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Rating size={20} ratingValue={rating} /* Available Props */ />
        </div>
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <span>قیمت :
            {props.off
              ? <>
                <s style={{ color: 'gray' }}>{props.price}</s>
                <br />
                <b style={{ color: 'red' }}>{(props.price * props.offer) / 100}</b>
              </>
              : <b style={{ color: 'red' }}>{props.price}</b>}
           <i> تومان            </i></span>
        </div>
      </div>
      {hover &&
        <div  className='hoveredCard'>
          <i>iconLove</i>
          <i>iconBuy</i>
        </div>}

    </div>
  )
}

export default Cards;
