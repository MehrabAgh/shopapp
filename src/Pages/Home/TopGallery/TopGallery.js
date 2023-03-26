import React from "react";

export default function TopGallery() {
    /**
     * @type {{top: object, right: object, left: object}}
     */
    const [data, setData] = React.useState({
        top: {
            link: "",
            cost: 0,
            img: "",
        },
        right: {
            link: "",
            cost: 0,
            img: "",
        },
        left: {
            link: "",
            cost: 0,
            img: "",
        },
    });
    React.useEffect(() => {
        (async function () {
            setData(await getGalleryItems());
        })();
    }, []);

    return (
        <div className="gallery">
            <div className="gallery__item gallery__item--2">
                <CoverHeader
                    buyLink={data.top.link}
                    price={data.top.cost}
                    img={data.top.img}
                />
            </div>

            <div className="gallery__item gallery__item--3">
                <CoverHeader
                    buyLink={data.left.link}
                    price={data.left.cost}
                    img={data.left.img}
                />
            </div>

            <div className="gallery__item gallery__item--4">
                <CoverHeader
                    buyLink={data.right.link}
                    price={data.right.cost}
                    img={data.right.img}
                />
            </div>
        </div>
    );
}

async function getGalleryItems() {
    const res = await fetch("http://localhost:5000/top-gallery");
    const data = await res.json();

    return data;
}

/**
 *
 * @param {{img: string, price: number, buyLink: string}} props
 * @returns
 */
const CoverHeader = props => {
    return (
        <>
            <img src={props.img} className={"gallery__img"} alt="ss" />
            <div className="container">
                <a
                    className="buyBtnHome"
                    onClick={() => {
                        console.log("a");
                    }}
                    href={props.buyLink}
                >
                    <b>خرید</b>
                </a>
                <p style={{ direction: "rtl" }}>
                    <strong>{props.price}</strong> تومان{" "}
                </p>
            </div>
        </>
    );
};
