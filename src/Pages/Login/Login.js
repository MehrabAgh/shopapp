import { FormControl, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import styles from "./styles.module.scss";
import { AccountCircle } from "@mui/icons-material";
import KeyIcon from '@mui/icons-material/Key';

const Login = () => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <h1>ورود</h1>
                    <LoginIcon />
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
                    <b>ورود</b>
                </button>
            </FormControl>
            <div className={styles.bottom}>
                <p>
                    در صورتی که ثبت نام نکرده اید از{" "}
                    <Link to={"/SignUp"}>اینجا</Link> ثبت نام کنید
                </p>
            </div>
            <br />
        </div>
    );
};

export default Login;
