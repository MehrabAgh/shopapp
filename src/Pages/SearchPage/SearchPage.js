import {
    IconButton,
    TextField,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import Cards from "../../Components/Cards/Cards";
import EdInputRtl from "../../Components/CusotmizeInput/CustomizeInput";
import Footer from "../../Components/Footer/Footer";
import styles from "./styles.module.scss";
import RightSide from "./RightSide/RightSide";

/**
 * @type {{name: string,
 * haveOff: boolean,
 * img: string,
 * price: string,
 * rate: number,
 * commentCount: number,
 * visitCount: number}[]}
 */
let initializeSearchedItems = [
    {
        id: 0,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 1,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 2,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 3,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 4,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 5,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 6,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 7,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 8,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 9,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 10,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 11,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 12,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 13,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 14,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 15,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 16,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 17,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 18,
        name: "test",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
];

const SearchPage = () => {
    const [searchedItems, setSearchedItems] = React.useState(
        initializeSearchedItems
    );

    // const location = useLocation();
    // const Namett = location.state;
    // {
    //     console.log(Namett);
    // }

    console.log(searchedItems);

    return (
        <div className={styles.rootContainer}>

            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.into}>
                        <TextField
                            inputProps={{
                                style: {
                                    fontFamily: "Arial",
                                    color: "white",
                                    borderColor: "white",
                                    direction: "rtl",
                                },
                            }}
                            id="search-bar"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& > fieldset": {
                                        borderColor: "white",
                                        borderRadius: 10,
                                    },
                                },
                            }}
                            className={styles.searchTextFiled}
                            onInput={e => {
                                //   setSearchQuery(e.target.value);
                            }}
                            variant="outlined"
                            placeholder="جستجو ..."
                            size="small"
                        />
                        <IconButton
                            style={{ marginLeft: 10 }}
                            color="success"
                            aria-label="search"
                            sx={{ border: "1px solid white" }}
                        >
                            <IoSearch style={{ fill: "white" }} />
                        </IconButton>
                    </div>
                </div>
                <div className={styles.listContainer}>
                    {searchedItems.map(item => {
                        return (
                            <Cards
                                key={item.id}
                                name={item.name}
                                img={item.img}
                                rate={item.rate}
                                price={item.price}
                                commentCount={item.commentCount}
                                visitCount={item.visitCount}
                            />
                        );
                    })}
                </div>
                <RightSide />
            </div>
            <Footer />
        </div>
    );
};

export default SearchPage;
