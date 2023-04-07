import { Button } from "@mui/material";
import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import Footer from "../../Components/Footer/Footer";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { numberWithCommas } from "../../myModules";
import Card from "./Card/Card";
import styles from "./styles.module.scss";
import { BasketContext } from "../../Context/UserContext";

const initBasketList = [
    {
        id: 0,
        imgSrc: require("../../Assets/imgs/ps5.webp"),
        title: "test",
        count: 12,
        cost: 20000,
    },
    {
        id: 1,
        imgSrc: require("../../Assets/imgs/ps5.webp"),
        title: "test",
        count: 10,
        cost: 20000,
    },
    {
        id: 2,
        imgSrc: require("../../Assets/imgs/ps5.webp"),
        title: "test",
        count: 10,
        cost: 20000,
    },
    {
        id: 3,
        imgSrc: require("../../Assets/imgs/ps5.webp"),
        title: "test",
        count: 1,
        cost: 20000,
    },
];

export default function Basket() {
    const {basketList, setBasketList} = React.useContext(BasketContext);
    const [totalCost, setTotalCost] = React.useState(0);
    const [totalCount, setTotalCount] = React.useState(0);

    const handleCardClickEditCount = React.useCallback(
        (e, currentId, newValue) => {
            const newBasketList = basketList.map(item => {
                if (item.id == currentId) {
                    item.count = newValue;
                    console.log(currentId);
                    console.log(item);
                    let newData = item;
                    return newData;
                }
                return item;
            });

            setBasketList(newBasketList);
        },
        [basketList]
    );

    const handleCardClickDeleteItem = React.useCallback(
        (e, currentItem) => {
            const newBasketList = basketList.filter(item => {
                return !(item.id === currentItem.id);
            });
            setBasketList(newBasketList);
        },
        [basketList]
    );

    React.useEffect(() => {
        let newTotalCost = 0;
        for (const item of basketList) {
            newTotalCost += item.cost * item.count;
        }
        setTotalCost(newTotalCost);
        console.log(basketList);
    }, [basketList]);

    React.useEffect(() => {
        let newTotalCount = 0;
        for (const item of basketList) {
            newTotalCount += item.count;
        }
        setTotalCount(newTotalCount);
    }, [totalCount, basketList]);

    return (
        <div className={styles.rootContainer}>
            <ScrollToTop/>
            <div className={styles.into}>
                <div className={styles.title}>
                    سبد خرید
                    <IoBagHandleOutline style={{ marginLeft: 5 }} />
                </div>
                <div style={{width: "100%", height: 0.5, backgroundColor: "white", opacity: 0.5, marginBottom: 5}}></div>
                <div className={styles.totalSection}>
                    <div className={styles.item}>
                        جمع کل: {numberWithCommas(totalCost)}
                    </div>
                    <div className={styles.item}>جمع کل اقلام: {totalCount}</div>
                </div>
                <div className={styles.cards}>
                    {basketList.map(item => {
                        return (
                            <Card
                                data={item}
                                limitCount={10}
                                onClickEditCount={handleCardClickEditCount}
                                onClickDeleteButton={handleCardClickDeleteItem}
                            />
                        );
                    })}
                </div>
                <Button
                    variant="contained"
                    style={{ width: "100%", marginTop: 10 }}
                >
                    ثبت سفارش
                </Button>
            </div>
            <Footer />
        </div>
    );
}
