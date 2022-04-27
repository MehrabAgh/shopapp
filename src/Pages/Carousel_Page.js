import React from 'react';
import { Carousel } from 'react-carousel-minimal';


const data = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: "San Francisco"
  },
  {
    image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Scotland"
  },
  {
    image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Darjeeling"
  },
];
const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}

const Carousel_Page = () => {
  return (
    <div>
      <Carousel        
        data={data}
        time={4000}
        width="2100px"
        height="400px"
        automatic={true}
        slideBackgroundColor="darkgrey"        
        style={{
          textAlign: "center",
          maxWidth: "2100px",
          maxHeight: "400px",
        }} />        
    </div>
  );
}

export default Carousel_Page;
