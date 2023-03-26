import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Swiper
                speed={1000}
                className={styles.swiper}
                spaceBetween={20}
                pagination={{ type: "progressbar" }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={require("../../../Assets/imgs/slide.png")} alt="" />
                    <div className={styles.title}>games</div>
                    <div className={styles.overlay}></div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img
                        src={require("../../../Assets/imgs/slide2.avif")}
                        alt=""
                    />
                    <div className={styles.title}>Disks</div>
                    <div className={styles.overlay}></div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={require("../../../Assets/imgs/slide3.jpg")} alt="" />
                    <div className={styles.title}>Funny Games</div>
                    <div className={styles.overlay}></div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={require("../../../Assets/imgs/slide4.jpg")} alt="" />
                    <div className={styles.title}>Survivor Games</div>
                    <div className={styles.overlay}></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
