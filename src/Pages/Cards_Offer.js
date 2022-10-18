import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
function Cards_Offer(props) {
    const [rating, setRating] = useState(props.rate)
    const Ref = useRef(null);      
    const [timer, setTimer] = useState('10:00:00');
  
    const handleRating = (rate) => {
        setRating(rate)
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    const clearTimer = (e) => {           
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {  
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    return (
        <div lassName='ParentCard' style={{
            borderRadius: '5px', backgroundColor: '#454766',
            borderWidth: 'medium', borderStyle: 'solid', borderColor: '#454766', width: '30%', overflow: 'hidden', margin: '10px', position: 'relative'
        }}>
            <Link to={'/Product'} style={{ textDecoration: 'none', color: 'white' }}>
                <div className='Card'>
                    {props.new &&
                        <div style={{ position: 'absolute', backgroundColor: 'green', color: 'white', width: '25%', margin: '5px', borderRadius: '3px' }}>حراج</div>
                    }
                    <h5 style={{ textAlign: 'end', marginRight: '4%' }}>پیشنهاد های شگفت انگیز</h5>
                    <div>
                        <img style={{ width: '80%', marginTop: '1px', borderRadius: '3px' }} src={require("../Media/" + props.img)} alt={'ds'} />
                    </div>
                    <span>{props.Name}</span>
                    <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <Rating size={20} fillColor={'#55a1e0'} ratingValue={props.rates} readonly /* Available Props */ />
                    </div>
                    <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                        <aside style={{ direction: 'rtl' }}>قیمت :
                            {props.off
                                ? <>
                                    <s style={{ color: 'gray' }}>{props.price} تومان </s>
                                    <br />
                                    <b style={{ color: 'white' }}> {(props.price * props.offer) / 100}  تومان </b>
                                </>
                                : <b style={{ color: 'white' }}>{props.price}  <i> تومان  </i></b>}
                        </aside>
                        <br />
                    </div>
                    <div>                        
                        {timer}
                    </div>
                    <div style={{ position: "absolute", bottom: '5%', right: '5%', backgroundColor: 'red', padding: 7, borderRadius: 20 }}><span>{props.offer}%</span></div>
                </div>
            </Link>
        </div>
    )
}

export default Cards_Offer