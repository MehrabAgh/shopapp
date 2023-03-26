import { FormControl, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyIcon from '@mui/icons-material/Key';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import styles from "./styles.module.scss"
import EdInputRtl from '../../Components/CusotmizeInput/CustomizeInput';
import { AccountCircle } from '@mui/icons-material';

const SignUp = () => {
    
    return (
        <div className={styles.rootContainer}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <h1>ثبت نام</h1>
                    <HowToRegIcon />
                </div>
                <div className={styles.logoTitle}>
                    <div className={styles.title}>فروشگاه مقدم</div>
                    <img
                        className={styles.image}
                        src={require("../../Assets/imgs//" + "logo.png")}
                        alt={"ds"}
                    />
                </div>
            </div>
            <FormControl className={styles.formControl}>
                <TextField
                    label={"نام کاربری"}
                    className={styles.textField}
                    dir="auto"
                    variant="outlined"
                    sx={{
                        "& label": {
                            transformOrigin: "right !important",
                            left: "inherit !important",
                            right: "1.75rem !important",
                            fontWeight: 400,
                            overflow: "unset",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label={"نام"}
                    className={styles.textField}
                    dir="auto"
                    variant="outlined"
                    sx={{
                        "& label": {
                            transformOrigin: "right !important",
                            left: "inherit !important",
                            right: "1.75rem !important",
                            fontWeight: 400,
                            overflow: "unset",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <BadgeIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label={"نام خانوادگی"}
                    className={styles.textField}
                    dir="auto"
                    variant="outlined"
                    sx={{
                        "& label": {
                            transformOrigin: "right !important",
                            left: "inherit !important",
                            right: "1.75rem !important",
                            fontWeight: 400,
                            overflow: "unset",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <BadgeIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label={"شماره تلفن"}
                    className={styles.textField}
                    dir="auto"
                    variant="outlined"
                    sx={{
                        "& label": {
                            transformOrigin: "right !important",
                            left: "inherit !important",
                            right: "1.75rem !important",
                            fontWeight: 400,
                            overflow: "unset",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label={"ایمیل"}
                    className={styles.textField}
                    dir="auto"
                    variant="outlined"
                    sx={{
                        "& label": {
                            transformOrigin: "right !important",
                            left: "inherit !important",
                            right: "1.75rem !important",
                            fontWeight: 400,
                            overflow: "unset",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label={"رمز عبور"}
                    className={styles.textField}
                    dir="auto"
                    variant="outlined"
                    sx={{
                        "& label": {
                            transformOrigin: "right !important",
                            left: "inherit !important",
                            right: "1.75rem !important",
                            fontWeight: 400,
                            overflow: "unset",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <KeyIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <button className={styles.btnSubmit} type="submit">
                    <b>ثبت نام</b>
                </button>
            </FormControl>
            <br />
        </div>
    );
}

export default SignUp;
