import React from "react";
import styles from "./styles.module.scss";

/**
 *
 * @param {{comments: {}[]}} props
 * @returns
 */
export default function CommentsTab(props) {
    return (
        <div className={styles.container}>
            <Comment
                imgSrc={require("../../../Assets/imgs/console.jpg")}
                name="نام کاربر آزمایشی"
                text="متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی "
                date="1405/12/12"
            />
            <Comment
                imgSrc={require("../../../Assets/imgs/console.jpg")}
                name="نام کاربر آزمایشی"
                text="متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی "
                date="1405/12/12"
            />
            <Comment
                imgSrc={require("../../../Assets/imgs/console.jpg")}
                name="نام کاربر آزمایشی"
                text="متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی "
                date="1405/12/12"
            />
            <Comment
                imgSrc={require("../../../Assets/imgs/console.jpg")}
                name="نام کاربر آزمایشی"
                text="متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی "
                date="1405/12/12"
            />
            <Comment
                imgSrc={require("../../../Assets/imgs/console.jpg")}
                name="نام کاربر آزمایشی"
                text="متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی متن آزمایشی "
                date="1405/12/12"
            />
        </div>
    );
}

/**
 *
 * @param {{name: string, imgSrc: string, text: string, date: string}} props
 * @returns
 */
function Comment(props) {
    return (
        <div className={styles.comment}>
            <div className={styles.top}>
                <div className={styles.img}>
                    <img
                        src={props.imgSrc}
                        alt={props.name + "-profile-image"}
                    />
                </div>
                <div className={styles.name}>{props.name}</div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>{props.text}</div>
                <div className={styles.date}>تاریخ: {props.date}</div>
            </div>
        </div>
    );
}
