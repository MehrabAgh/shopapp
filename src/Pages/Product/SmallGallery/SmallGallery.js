import React from "react";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import ZoomImg from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

/**
 *
 * @param {{images: string[]}} props
 * @returns
 */
export default function SmallGallery(props) {
    return (
        <div className={styles.smallGallery}>
            <ZoomImg>
                <img
                    src={require("../../../Assets/imgs/fifa-18-800x450.jpg")}
                    alt={"ds"}
                    className={styles.img}
                />
            </ZoomImg>
            <div className={styles.swiperContainer}>
                <div className={styles.prevBtn}>
                    <BsCaretLeftFill />
                </div>
                <div className={styles.nextBtn}>
                    <BsFillCaretRightFill />
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={2}
                    navigation={{
                        nextEl: "."+styles.nextBtn,
                        prevEl: "."+styles.prevBtn,
                        disabledClass: "."+styles.disabledClass,
                        hiddenClass: "."+styles.disabledClass,
                        navigationDisabledClass: "."+styles.disabledClass,
                    }}
                    on={()=>{
                        alert("fds")
                    }}
                    modules={[Navigation]}
                    className={styles.swiper}
                >
                    {/* 
                ! درست کردن دکمه های رفت و برگشت
                 */}

                    <SwiperSlide className={styles.swiperSlide}>
                        <ZoomImg>
                            <img
                                src={require("../../../Assets/imgs/fifa-18-800x450.jpg")}
                                alt={"ds"}
                                className={styles.img}
                            />
                        </ZoomImg>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <ZoomImg>
                            <img
                                src={require("../../../Assets/imgs/fifa-18-800x450.jpg")}
                                alt={"ds"}
                                className={styles.img}
                            />
                        </ZoomImg>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <ZoomImg>
                            <img
                                src={require("../../../Assets/imgs/fifa-18-800x450.jpg")}
                                alt={"ds"}
                                className={styles.img}
                            />
                        </ZoomImg>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <ZoomImg>
                            <img
                                src={require("../../../Assets/imgs/fifa-18-800x450.jpg")}
                                alt={"ds"}
                                className={styles.img}
                            />
                        </ZoomImg>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <ZoomImg>
                            <img
                                src={require("../../../Assets/imgs/fifa-18-800x450.jpg")}
                                alt={"ds"}
                                className={styles.img}
                            />
                        </ZoomImg>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
