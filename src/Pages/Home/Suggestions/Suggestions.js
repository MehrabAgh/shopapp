import React from "react";
import { MdLocalOffer } from "react-icons/md";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../../../Components/Cards/Cards";

import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * @type {{name: string,
 * haveOff: boolean,
 * img: string,
 * price: string,
 * rate: number,
 * commentCount: number,
 * visitCount: number}[]}
 */
const initList = [
    {
        name: "Elden Ring",
        price: 4000000,
        img: require("../../../Assets/imgs/poster1.jpg"),
        rate: 10,
        visitCount: 14,
        commentCount: 5,
        haveOff: true,
    },
    {
        name: "Star Wars",
        price: 2000000,
        img: require("../../../Assets/imgs/poster2.jpg"),
        rate: 40,
        visitCount: 14,
        commentCount: 5,
        haveOff: true,
    },
    {
        name: "The last of us part I",
        price: 1500000,
        img: require("../../../Assets/imgs/poster3.jpg"),
        rate: 10,
        visitCount: 14,
        commentCount: 5,
        haveOff: true,
    },
    {
        name: "God Of War 4",
        price: 1500000,
        img: require("../../../Assets/imgs/poster5.jpg"),
        rate: 90,
        visitCount: 12,
        commentCount: 10,
        haveOff: true,
    },
    {
        name: "Whicher III",
        price: 1000000,
        img: require("../../../Assets/imgs/poster6.jpg"),
        rate: 40,
        visitCount: 14,
        commentCount: 14,
        haveOff: true,
    },
    {
        name: "Spider Man (marvel)",
        price: 1800000,
        img: require("../../../Assets/imgs/poster7.jpg"),
        rate: 80,
        visitCount: 14,
        commentCount: 5,
        haveOff: true,
    },
    {
        name: "infamous Second Son",
        price: 800000,
        img: require("../../../Assets/imgs/poster8.webp"),
        rate: 70,
        visitCount: 14,
        commentCount: 12,
        haveOff: true,
    },
    {
        name: "The Last Of Us Part II",
        price: 4000000,
        img: require("../../../Assets/imgs/poster9.jpg"),
        rate: 20,
        visitCount: 14,
        commentCount: 5,
        haveOff: true,
    },
    {
        name: "Batman Arkhamnight",
        price: 1000000,
        img: require("../../../Assets/imgs/poster10.jpg"),
        rate: 30,
        visitCount: 14,
        commentCount: 12,
        haveOff: true,
    },
];

export default function Suggestions() {
    const [list, setList] = React.useState(initList);

    React.useEffect(() => {
        (async function () {
            setList(await getSuggestions());
        })();
    }, []);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 className="section-title">
                    بازی های پیشنهادی ما
                    <MdLocalOffer style={{ marginLeft: 10 }} />
                </h3>
            </div>

            <div style={{ position: "relative", padding: "0 30px" }}>
                <div className={styles.prevBtn}>
                    <BsCaretLeftFill />
                </div>
                <div className={styles.nextBtn}>
                    <BsFillCaretRightFill />
                </div>
                <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: "." + styles.prevBtn,
                        nextEl: "." + styles.nextBtn,
                    }}
                    modules={[Navigation]}
                    style={{
                        width: "95%",
                        display: "flex",
                        margin: "auto",
                        padding: 20,
                    }}
                >
                    {list.map((item, index) => {
                        return (
                            <SwiperSlide
                                style={{ width: "fit-content" }}
                                key={index}
                            >
                                <Cards
                                    name={item.name}
                                    haveOff={item.haveOff??false}
                                    img={item.img}
                                    price={item.price}
                                    rate={item.rate}
                                    commentCount={item.commentCount}
                                    visitCount={item.visitCount}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}

async function getSuggestions() {
    const res = await fetch("http://localhost:5000/suggestions");
    const data = res.json();

    return data;
}
