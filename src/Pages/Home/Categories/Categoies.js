import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { BiCategoryAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

/**
 *
 * @param {{imgSrc?: string, url?: string, title: string}} param0
 * @returns
 */
const Category = ({ imgSrc, url, title }) => {
    return (
        <div className={styles.categoryItem}>
            <a href={url}>
                <img src={imgSrc} alt="a" />
                <div className={styles.title}>{title}</div>
            </a>
        </div>
    );
};

function Categories() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        (async function () {
            setData(await getCategories());
        })();
    }, []);

    return (
        <React.Fragment>
            <div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 50,
                }}
            >
                {/* <div
                    style={{
                        marginLeft: "35px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <IoCaretBackCircle
                        size={30}
                        color={"#5583e0"}
                        onClick={() => {
                            alert();
                        }}
                    />
                    <IoCaretForwardCircle size={30} color={"#5583e0"} />
                </div> */}

                <h3
                    style={{
                        paddingTop: "10px",
                        textAlign: "right",
                    }}
                    className="section-title"
                >
                    دسته بندی ها
                    <BiCategoryAlt style={{ marginLeft: 10 }} />
                </h3>
            </div>

            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                freeMode={true}
                style={{ padding: "50px" }}
                modules={[FreeMode]}
            >
                {data.map((category, index) => (
                    <SwiperSlide className={styles.swiperSlide} key={index}>
                        <Category
                            url={category.link}
                            imgSrc={category.img}
                            title={category.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </React.Fragment>
    );
}

async function getCategories() {
    const res = await fetch("http://localhost:5000/some-categories");
    const data = res.json();

    return data;
}

export default Categories;