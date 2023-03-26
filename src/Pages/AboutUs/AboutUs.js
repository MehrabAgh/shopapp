import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import EdInputRtl from "../../Components/CusotmizeInput/CustomizeInput";
import Footer from "../../Components/Footer/Footer";
import styles from "./styles.module.scss";

const AboutUs = () => {
    return (
        <div>
            <div>
                <div
                    style={{
                        backgroundColor: "white",
                        left: "200px",
                        width: "350px",
                        float: "left",
                        height: "350px",
                        position: "absolute",
                        borderRadius: "90%",
                        alignContent: "center",
                    }}
                >
                    <img
                        style={{ width: "70%", marginTop: "25%" }}
                        src={require("../../Assets/imgs//" + "logo.png")}
                        alt={"ds"}
                    />
                </div>
                <div
                    style={{
                        width: "430px",
                        overflowWrap: "break-word",
                        marginLeft: "55%",
                        marginTop: "5%",
                        marginBottom: "10%",
                        textAlign: "justify",
                        textAlignLast: "center",
                        direction: "rtl",
                    }}
                >
                    <h1>فروشگاه مقدم</h1>
                    <p style={{ marginBottom: "60px" }}>
                        باسلام این فروشگاه مفتخر است بابیش از ۲۰سال تجربه کاری
                        در امر فروش کنسولهای بازی ولوازم جانبی تعمیرات، سخت
                        افزار، نرم افزار، لوازم جانبی کامپیوتر، موس، کیبورد،
                        دسته، هدفون، هدست، لوازم جانبی موبایل، ایرپد، شارژ،
                        انواع کابل،
                    </p>
                    <div
                        style={{
                            backgroundColor: "white",
                            height: 1,
                        }}
                    ></div>
                    <div
                        style={{
                            width: "260px",
                            margin: "auto",
                            overflowWrap: "break-word",
                            marginTop: "20%",
                            display: "block",
                        }}
                    >
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                                float: "right",
                                margin: "15px 0 0 10px",
                            }}
                            src={require("../../Assets/imgs/discuss.png")}
                        />
                        <p
                            style={{
                                textAlign: "justify",
                                textAlignLast: "center",
                            }}
                        >
                            مشاوره رایگان در امر خرید کنسول تعمیرات پشتیبانی
                            ضمانتنامه کنسول پخش به سراسر کشور پیک رایگان محدوده
                            شهر مشهد تعویض بازی گیم ساخت اکانت پلاس قانونی پلاس
                            هکی تعمیرات انواع کنسول در اسرع وقت تعویض دستگاه نسل
                            قدیم با جدید
                        </p>
                    </div>
                </div>
                <div
                    style={{ backgroundColor: "white", height: 1, margin: 100 }}
                ></div>
            </div>
            <div style={{ marginBottom: 100 }}>
                <h1>تماس با ما</h1>
                <h5>پیام ، نظر و انتقادات خود را با ما درمیان بگذارید</h5>
                <br />
                <FormControl
                    dir="rtl"
                    className="baseStartMenu"
                    style={{
                        padding: 20,
                        backgroundColor: "#363c48",
                        color: "white",
                    }}
                    variant="standard"
                >
                    <b>نام و نام خانوادگی :</b>
                    <br />
                    <EdInputRtl width={"50%"} color={"white"} />
                    <b>پست الکترونیکی :</b>
                    <EdInputRtl width={"50%"} color={"white"} />

                    <b>پیام :</b>
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        inputProps={{
                            style: { fontFamily: "Arial", color: "white" },
                        }}
                    />
                    <Button
                        style={{
                            width: 120,
                            marginRight: "40%",
                            marginTop: "5%",
                        }}
                        variant="contained"
                    >
                        ارسال
                    </Button>
                </FormControl>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
