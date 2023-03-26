import { Button } from "@mui/material";
import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import Card from "./Card/Card";
import styles from "./styles.module.scss";

const initBasketList = [
    {
        imgSrc: require("../../Assets/imgs/ps5.webp"),
        title: "test",
        count: 12,
        cost: 20000,
    },
    {
        imgSrc: require("../../Assets/imgs/ps5.webp"),
        title: "test",
        count: 10,
        cost: 20000,
    },
    {
        imgSrc: require("../../Assets/imgs/ps5.webp"),
        title: "test",
        count: 1,
        cost: 20000,
    },
    {
        imgSrc: require("../../Assets/imgs/ps5.webp"),
        title: "test",
        count: 1,
        cost: 20000,
    },
];

export default function Basket() {
    const [basketList, setBasketList] = React.useState(initBasketList);

    return (
        <div className={styles.rootContainer}>
            <div className={styles.into}>
                <div className={styles.title}>
                    سبد خرید
                    <IoBagHandleOutline style={{ marginLeft: 5 }} />
                </div>
                <div className={styles.cards}>
                    {basketList.map(item => {
                        return (
                            <Card data={item} limitCount={10} />
                        );
                    })}
                </div>
                <Button variant="contained" style={{width: "100%", marginTop: 10}}>
                    ثبت سفارش
                </Button>
            </div>
        </div>
    );
}
