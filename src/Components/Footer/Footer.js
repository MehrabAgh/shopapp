/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import styles from "./styles.module.scss";
const Footer = () => {
    let Line = () => {
        return <hr style={{ opacity: 0.1 }} />;
    };
    return (
        <div className={styles.rootContainer}>
            <hr style={{ opacity: 0.1 }} />
            <div className={styles.headFooter}>
                <div className={styles.part}>
                    <h3 style={{ color: "#4e66bf" }}>ارتباط با ما</h3>
                    <p>
                        آدرس : مشهد ، خیابان سعدی ، پاساژ بهزاد ، سمت چپ ، اولین
                        و دومین مغازه
                    </p>
                    <p> 051-32229752 : شماره تماس </p>
                    <p>: ایمیل</p>
                    <p>alirezamoghaddam630@gmail.com</p>
                </div>
                <div className={styles.part}>
                    <h3 style={{ color: "#4e66bf" }}>ما را دنبال کنید</h3>
                    <p style={{ fontSize: "15px", maxWidth: "500px" }}>
                        شما میتوانید در شبکه های اجتماعی زیر مارا دنبال کنید و
                        با ما در ارتباط باشید
                    </p>
                    <IoLogoInstagram
                        color="#cc1bb1"
                        size={30}
                        style={{ marginRight: "20px" }}
                    />
                    <IoLogoWhatsapp color="green" size={30} />
                </div>
                <div className={styles.part}>
                    <h3 style={{ color: "#4e66bf" }}>فروشگاه مقدم</h3>
                    <p>
                        فروش کلیه وسایل بازی ، کنسول های بازی و لوازم جانبی فروش
                        کلیه وسایل بازی ، کنسول های بازی و لوازم جانبی
                    </p>
                </div>
            </div>
            <Line />
            <div>
                <p
                    style={{
                        fontSize: "0.8vw",
                        color: "gray",
                        opacity: 0.5,
                        direction: "rtl",
                    }}
                >
                    حق نشر تمامی حقوق برای فروشگاه مقدم محفوظ می‌باشد و هرگونه
                    کپی‌برداری مستلزم کسب اجازۀ کتبی بوده و پیگرد قانونی خواهد
                    داشت.
                </p>
            </div>
        </div>
    );
};

export default Footer;
