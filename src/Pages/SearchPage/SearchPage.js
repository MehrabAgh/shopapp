import { IconButton, TextField } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import Cards from "../../Components/Cards/Cards";
import EdInputRtl from "../../Components/CusotmizeInput/CustomizeInput";
import Footer from "../../Components/Footer/Footer";
import styles from "./styles.module.scss";
import RightSide from "./RightSide/RightSide";
import Loading from "../../Components/Loading/Loading";

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
        name: "test 1",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 1,
        name: "test ha 2",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 2,
        name: "test konim 3",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 3,
        name: "test hardam 4",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 4,
        name: "test eshgh 5",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 5,
        name: "test kala 6 ",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 6,
        name: "test disk 7",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 7,
        name: "test past 8",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 8,
        name: "test bezan 9",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 9,
        name: "test bia 10",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 10,
        name: "test eleven 11",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 11,
        name: "test davazdah 12",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 12,
        name: "test dige 13",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 13,
        name: "test chizi 14",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 14,
        name: "test be 15",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 15,
        name: "test zehnam 16",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 16,
        name: "test nemi rese 17",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 17,
        name: "test hey 18",
        price: 20000,
        img: require("../../Assets/imgs/console.jpg"),
        commentCount: 12,
        rate: 40,
        visitCount: 14,
        haveOff: false,
    },
    {
        id: 18,
        name: "test khoda 19",
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
    const [searchTerm, setSearchTerm] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChangeSearchTextFiled = React.useCallback(e => {
        setSearchTerm(e.target.value);
    }, []);

    // const location = useLocation();
    // const Namett = location.state;
    // {
    //     console.log(Namett);
    // }

    const handleClickSearchBtn = React.useCallback(() => {
        if (typeof searchTerm === "string" && searchTerm.trim() !== "") {
            setIsLoading(true);
            const newSearchedItems = initializeSearchedItems.filter((item,index)=>{
                return item.name.includes(searchTerm.trim());
            })
            console.log(newSearchedItems)
            setSearchedItems(newSearchedItems);
            setTimeout(() => {
            setIsLoading(false);
                
            }, 1000);
        }
    }, [searchTerm]);


    // React.useEffect(()=>{
    //     if(isLoading){

    //     }
    // },[isLoading])

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
                            onInput={handleChangeSearchTextFiled}
                            variant="outlined"
                            placeholder="جستجو ..."
                            size="small"
                            value={searchTerm}
                        />
                        <IconButton
                            style={{ marginLeft: 10 }}
                            color="success"
                            aria-label="search"
                            sx={{ border: "1px solid white" }}
                            onClick={handleClickSearchBtn}
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
            <Loading open={isLoading}/>
        </div>
    );
};

export default SearchPage;
