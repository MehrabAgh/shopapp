import { FormControl } from '@mui/material';
import React from 'react';
import EdInputRtl from './CustomizeInput';

const Login = () => {
    return (
        <div className='baseStartMenu'>
            <div>
                <br />
                <h1 style={{ marginTop: '2  0px' }}>ورود</h1>
                <p>Logo</p>
            </div>
            <FormControl >
                <EdInputRtl labal={"نام کاربری"} />
                <EdInputRtl labal={"رمز عبور"} />
                <button className='btnSubmit' type='submit'>
                    <b>ورود</b>
                </button>
            </FormControl>
            <div style={{ marginTop: '10%' }}>
                <p>
                    در صورتی که ثبت نام نکرده اید از <a href='#'>اینجا</a> ثبت نام کنید
                </p>
            </div>
            <br />
        </div>
    );
}

export default Login;
