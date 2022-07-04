import { Button, FormControl, TextField } from '@mui/material';
import React from 'react';
import EdInputRtl from './CustomizeInput';
import Footer from './Footer';
const Aboutus = () => {


    return (
        <div>
            <div>
                <div style={{ backgroundColor: 'blue', left: '200px', width: '350px', float: 'left', height: '350px', position: 'absolute', borderRadius: '90%', alignContent: 'center' }}>
                    <img style={{ width: '70%' , marginTop:'25%' }} src={require("../Media/" + 'logo.png')} alt={'ds'} />
                </div>
                <div style={{ width: '400px', overflowWrap: 'break-word', marginLeft: '55%', marginTop: '5%', marginBottom: '10%' }}>

                    <h1>فروشگاه مقدم</h1>
                    <p>sdfffffffffffffffffffffffffffffffffffffffdfefegrgrbfbfbinfubnf
                        ubnfibnfibnfibnfibnfibnfibnfibnfibnfibnfibnfsssaksnccnincaksncalsc
                        knaslkcnnaskncksncksdncskdcnskncsdkcnskdcnskdncskdncsdknskdcnsdkcn
                        sdkcnsdkcnsdfsdfSDfDfsdvdvbbddbfbdbdbdbioefiwefniefnweifneifnwifn
                        ewfijewifnwfndfndnusdnvububnunbbnbnbmbmimidmfidfdnfaunduasndaudw</p>
                </div>

                <p style={{ width: '55%', margin: 'auto', overflowWrap: 'break-word' }}>
                    opijasowjdowjdowjdowdjwodjoa;diha;odihOIDHFoidhoIHDdd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ojsaaaaaaaaaaaaaaaaaaa;j'PEOJAOWIHFIOAHFOAIDHF
                    oisdhaosidhoasdihoasidhaosidhfoiashfoiasdhdddddddddda</p>

                <video src='../Media/'></video>
            </div>
            <div style={{ marginBottom: 100 }} >
                <h1>تماس با ما</h1>
                <h5>پیام ، نظر و انتقادات خود را با ما درمیان بگذارید</h5>
                <br />
                <FormControl dir='rtl' className='baseStartMenu' style={{ padding: 20, backgroundColor: '#3a4457', color: 'white' }} variant="standard">
                    <b>نام و نام خانوادگی  :</b>
                    <br />
                    <EdInputRtl width={'50%'} color={'white'} />
                    <br />
                    <br />
                    <b>پست الکترونیکی :</b>
                    <br />
                    <EdInputRtl width={'50%'} color={'white'} />
                    <br />
                    <br />
                    <br />
                    <b>پیام :</b>
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                    />
                    <Button style={{ width: 120, marginRight: '40%', marginTop: '5%' }} variant="contained">ارسال</Button>
                </FormControl>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutus;
