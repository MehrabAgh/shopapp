import React from "react";
import { SiHotjar } from "react-icons/si";

const initData = {
    topLeft: { link: "", cost: 0, img: "" },
    topRight: { link: "", cost: 0, img: "" },
    bottomLeft: { link: "", cost: 0, img: "" },
    bottomRight: { link: "", cost: 0, img: "" },
};

export default function BottomGallery() {
    const [data, setData] = React.useState(initData);

    React.useEffect(() => {
        (async function () {
            setData(await getGalleryItems());
        })();
    }, []);

    return (
        <div
            style={{
                backgroundColor: "#181526ee",
                paddingBottom: "30px",
                marginTop: "5%",
                width: "100%",
                borderTop: "1px solid #ffffffaa",
                borderBottom: "1px solid #ffffffaa",
            }}
        >
            <br />
            <h3
                className="section-title"
                style={{
                    textAlign: "right",
                    marginRight: "40px",
                    width: "100%",
                }}
            >
                پرفروشترین کنسول ها
                <SiHotjar style={{ marginLeft: 10 }} />
            </h3>
            <div className="gallery-2">
                <a
                    href={data.topLeft.link}
                    className="gallery2__item gallery2__item--1"
                >
                    <CoverSellProduct
                        price={data.topLeft.cost}
                        img={data.topLeft.img}
                    />
                </a>
                <a
                    href={data.topRight.link}
                    className="gallery2__item gallery2__item--2"
                >
                    <CoverSellProduct
                        price={data.topRight.cost}
                        img={data.topRight.img}
                    />
                </a>
                <a
                    href={data.bottomLeft.link}
                    className="gallery2__item gallery2__item--3"
                >
                    <CoverSellProduct
                        price={data.bottomLeft.cost}
                        img={data.bottomLeft.img}
                    />
                </a>
                <a
                    href={data.bottomRight.link}
                    className="gallery2__item gallery2__item--4"
                >
                    <CoverSellProduct
                        price={data.bottomRight.cost}
                        img={data.bottomRight.img}
                    />
                </a>
            </div>
        </div>
    );
}

const CoverSellProduct = props => {
    return (
        <>
            <img src={props.img} className={"gallery__img"} alt="ss" />
            <div
                style={{
                    backgroundColor: "cornflowerblue",
                    top: "0",
                    margin: "20px",
                    position: "absolute",
                    padding: ".1rem",
                    borderRadius: "5px",
                    width: "20%",
                    fontSize: "70%",
                    boxShadow: "-5px -5px 18px blue inset",
                }}
            >
                <p style={{ direction: "rtl", fontWeight: "bold" }}>
                    <span> {props.price} </span> $
                </p>
            </div>
        </>
    );
};

async function getGalleryItems() {
    const res = await fetch("http://localhost:5000/Bottom-gallery");
    const data = await res.json();

    return data;
}
