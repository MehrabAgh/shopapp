
import styled from '@emotion/styled';
import { Button, FormControl, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import Footer from './Footer';
const Aboutus = () => {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    });
    return (
        <div>
            <div>
                <div style={{ backgroundColor: 'blue', left: '200px', width: '350px', float: 'left', height: '350px', position: 'absolute', borderRadius: '90%' }}></div>
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
            <div >
                <h1>تماس با ما</h1>
                <h5>پیام ، نظر و انتقادات خود را با ما درمیان بگذارید</h5>
                <FormControl className='backMessage' variant="standard">
                    <TextField
                        label="نام و نام خانوادگی"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        variant="standard"
                    />
                      <TextField
                        label="پست الکترونیکی"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        variant="standard"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="پیام"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                    <Button variant="contained">ارسال</Button>
                </FormControl>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutus;
