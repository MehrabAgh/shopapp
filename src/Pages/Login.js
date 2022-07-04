import { FormControl } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import EdInputRtl from './CustomizeInput';

const Login = () => {
    return (
        <div className='baseStartMenu'>
            <div style={{marginBottom:20}}>
                <br />
                <h1 style={{ marginTop: '2  0px' }}>ورود</h1>
                <img style={{ width: '12%', verticalAlign: 'middle' }} src={require("../Media/" + 'logo.png')} alt={'ds'} />                             
            </div>
            <FormControl >
                <EdInputRtl labal={"نام کاربری"} />
                <br/>
                <EdInputRtl labal={"رمز عبور"} />
                <button className='btnSubmit' type='submit'>
                    <b>ورود</b>
                </button>
            </FormControl>
            <div style={{ marginTop: '10%' }}>
                <p>
                    در صورتی که ثبت نام نکرده اید از <Link to={"/SignUp"}>اینجا</Link> ثبت نام کنید
                </p>
            </div>
            <br />
        </div>
    );
}

export default Login;
