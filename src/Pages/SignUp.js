import { FormControl } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EdInputRtl from './CustomizeInput';

const SignUp = () => {
    const [state, setstate] = useState("");
    return (
        <div className='baseStartMenu'>
            <div>
                <br />
                <h1 style={{ marginTop: '20px' }}>ثبت نام</h1>
                <p>Logo</p>
            </div>
            <FormControl >
                <EdInputRtl labal={"نام کاربری"} value = {setstate}/>
                {console.log(state)}
                <br/>
                <EdInputRtl labal={"نام"} />
                <br/>
                <EdInputRtl labal={"نام خانوادگی"} />
                <br/>
                <EdInputRtl labal={"شماره تماس"} />
                <br/>
                <EdInputRtl labal={"رمز عبور"} />
                <button className='btnSubmit' type='submit'>
                    <b>ورود</b>
                </button>
            </FormControl>
            <div style={{ marginTop: '10%' }}>
                <p>
                    در صورتی که ثبت نام کرده اید از <Link style={{color :'blue'}} to={'/Login'}>اینجا </Link>وارد شوید
                </p>
            </div>
            <br />
        </div>
    );
}

export default SignUp;
