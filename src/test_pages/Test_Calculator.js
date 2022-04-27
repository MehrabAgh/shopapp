import React, { useEffect, useState } from 'react';

const TestLogin = () => {        
    const keys = [9,8,7,6,,5,4,3,2,1,0];    
        
    const [Result, setResult] = useState(0);
    const RenderKeys = (number) =>{
        const plus = (pr) =>{            
            setResult(pr+Result);           
        }
        return(
        <div className='ssss' onClick={()=>{plus(number)}}>
            <span>{number}</span>
        </div>)
    }

    const [Time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            setTime(startTime())
        }, 1);
    }); 
    
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    return h + ":" + m + ":" + s;
}

    return (
        <div>
            <strong>welcome to Login Page</strong>
            <nav style={{backgroundColor:'darkcyan'}}>
                <ul>
                    <li onClick={()=> {console.log("Enter")}}>
                       <b> ورود </b> 
                    </li>
                    <li onClick={()=> {console.log("Enter")}}>
                        <b> ثبت نام </b>
                    </li>
                </ul>
            </nav>
          

            <div >                                
                <h2 style={{width:200 , backgroundColor:'white' , margin:'auto'} }>{Result}</h2>
                <div className='Keys'>      
                {keys.map((n) => {return (RenderKeys(n))})}
                </div>

            </div>
        </div>

    );
}
export default TestLogin;
