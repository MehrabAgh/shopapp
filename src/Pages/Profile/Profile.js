import React from "react";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./styles.module.scss";

import timerImg from "../../Assets/imgs/timer.svg"
import processingImg from "../../Assets/imgs/loading.svg"
import receivedImg from "../../Assets/imgs/received-pakage.png"
import cancelImg from "../../Assets/imgs/cancel.svg"
import returnedImg from "../../Assets/imgs/returnminor.svg"


const Profile = () => {
    const [orderBtns, setOrderBtn] = React.useState([
        {
            title: "در انتطار پرداخت",
            img: timerImg,
            link: "/Profile/Basket?filter=paying"
        },
        {
            title: "در حال پردازش",
            img: processingImg,
            link: "/Profile/Basket?filter=processing"
        },
        {
            title: "تحویل شده",
            img: receivedImg,
            link: "/Profile/Basket?filter=processing"
        },
        {
            title: "لغو شده",
            img: cancelImg,
            link: "/Profile/Basket?filter=processing"
        },
        {
            title: "مرجوع شده",
            img: returnedImg,
            link: "/Profile/Basket?filter=processing"
        },
    ]);
    console.log(orderBtns);

    return (
        <div className={styles.rootContainer}>
            <div className={styles.into}>
                <div className={styles.top}>
                    <div className={styles.buttons}>
                        <Link to={"/Profile/Alarms"} className={styles.btn}>
                            <NotificationsIcon />
                        </Link>
                        <Link to={"/Profile/Setting"} className={styles.btn}>
                            <SettingsIcon />
                        </Link>
                    </div>
                    <img
                        className={styles.profileImage}
                        src={require("../../Assets/imgs/profile-avatar.png")}
                        alt="profile"
                    />
                    <b className={styles.name}>محراب آقایی</b>
                    <div className={styles.phoneNumber}>09306763127</div>
                </div>
                <div className={styles.myOrder}>
                    <div className={styles.into}>
                        <div className={styles.title}>سفارش های من</div>
                        {orderBtns.map(item => (
                            <Link to={item.link} className={styles.item}>
                                <img className={styles.img} src={item.img} alt={item.title} />
                                <div className={styles.title}>{item.title}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
