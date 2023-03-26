import React from "react";
import { Carousel } from "react-carousel-minimal";

const iniData = [
    {
        image: require("../../Assets/imgs/best-free-games-vg247.jpg"),
        caption: "best game in 2022",
    },
    {
        image: require("../../Assets/imgs/god-of-war-ragnarok-trailer-dublado-pt-br.webp"),
        caption: "god of war ragnarok",
    },
    {
        image: require("../../Assets/imgs/gotham-knights-01.jpg"),
        caption: "gotham knights",
    },
];
const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
};

const CarouselPage = () => {
    const [data, setData] = React.useState(iniData);

    React.useEffect(() => {
        (async function () {
            // await setData(getSlides());
            // getSlides().then((value)=>{
            //   console.log(value);
            // })
            setData(await getSlides());
        })();
    }, []);

    return (
        <div>
            <Carousel
                data={data}
                time={4000}
                width="2100px"
                height="600px"
                automatic={true}
            
                slideBackgroundColor="darkgrey"
                style={{
                    textAlign: "center",
                    maxWidth: "2100px",
                    maxHeight: "400px",
                    marginBottom: 200,
                }}
            />
        </div>
    );
};

async function getSlides() {
    const res = await fetch("http://localhost:5000/main-slides");
    const data = await res.json();

    return data;
}

export default CarouselPage;
