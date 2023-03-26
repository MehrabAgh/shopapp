import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyIcon from "@mui/icons-material/Key";
import { AccountCircle } from "@mui/icons-material";
import styles from "./styles.module.scss";

export default function Setting() {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.into}>
                <div className={styles.top}>
                    <img
                        className={styles.profileImage}
                        src={require("../../Assets/imgs/profile-avatar.png")}
                        alt="profile"
                    />
                    <div className={styles.left}>
                        <b className={styles.name}>محراب آقایی</b>
                        <div className={styles.phoneNumber}>09306763127</div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.form}>
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

                        <Button className={styles.submitBtn} variant="contained">
                            تغییر
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
