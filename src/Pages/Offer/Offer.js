import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import CardsOffer from "../../Components/CardsOffer/CardsOffer";
import Footer from "../../Components/Footer/Footer";
import Banner from "./Banner/Banner";
import styles from "./styles.module.scss";

function Offer() {
    return (
        <div className={styles.container}>
            <Banner/>
            <div className={styles.bodyOffer}>
                <CardsOffer
                    Name={"ss"}
                    img={require("../../Assets/imgs/poster1.jpg")}
                    price={"40000"}
                    off={true}
                    rates={"60"}
                    offer={"50"}
                />
                <CardsOffer
                    Name={"ss"}
                    img={require("../../Assets/imgs/poster2.jpg")}
                    price={"40000"}
                    off={true}
                    rates={"60"}
                    offer={"50"}
                />
                <CardsOffer
                    Name={"ss"}
                    img={require("../../Assets/imgs/poster4.jpg")}
                    price={"40000"}
                    off={true}
                    rates={"60"}
                    offer={"50"}
                />
                <CardsOffer
                    Name={"ss"}
                    img={require("../../Assets/imgs/poster3.jpg")}
                    price={"40000"}
                    off={true}
                    rates={"60"}
                    offer={"50"}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Offer;
