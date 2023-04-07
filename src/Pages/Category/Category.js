import React, { useState } from "react";
import img from "../../Assets/imgs//logo.png";
import gameImg from "../../Assets/imgs/ps5.jpg";

import Footer from "../../Components/Footer/Footer";
import styles from "./styles.module.scss";
import CategoryItem from "./CategoryItem/CategoryItem";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const colors = [
    { color: "#FAE100", used: false },
    { color: "#900DFF", used: false },
    { color: "#FF0181", used: false },
    { color: "#32DBF0", used: false },
    { color: "#89E941", used: false },
];

shuffle(colors);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const Category = () => {
    /**
     * @type {{state: number, img: string, title: string}[]}
     */
    const data = [
        {
            title: "کنسول بازی",
            state: 2,
            img: require("../../Assets/imgs/gaming-console.webp"),
        },
        {
            title: "لوازم جانبی",
            state: 3,
            img: require("../../Assets/imgs/accessories.webp"),
        },
        { title: "عناوین بازی", state: 1, img: gameImg },
        {
            title: "تجهیزات گیمینگ",
            state: 4,
            img: require("../../Assets/imgs/Equipment.webp"),
        },
        {
            title: "دیگر کالاها",
            state: 4,
            img: require("../../Assets/imgs/other-product.jpg"),
        },
    ];

    console.log(colors);
    const ShowCategory = () => {
        return (
            <>
                <ScrollToTop />
                <div className={styles.grid}>
                    {data.map((item, index) => {
                        let color = colors[index];

                        return (
                            <CategoryItem
                                state={item.state}
                                img={item.img}
                                key={item}
                                title={item.title}
                                overlayColor={color.color}
                            />
                        );
                    })}
                </div>
            </>
        );
    };
    return (
        <div>
            <ShowCategory />
            <Footer />
        </div>
    );
};

export default Category;
