import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import img1 from "../../images/slider/pexels-bich-tran-709237.jpg";
import img2 from "../../images/slider/pexels-dan-cristian-pădureț-1476320.jpg";
import img3 from "../../images/slider/pexels-digital-buggu-167538.jpg";
import img4 from "../../images/slider/pexels-fauxels-3183197.jpg";
import img5 from "../../images/slider/pexels-rodnae-productions-8369590.jpg";
import img6 from "../../images/slider/pexels-shvets-production-8972801.jpg";
import img7 from "../../images/slider/pexels-stanislav-kondratiev-2908953.jpg";

function Slider() {
  return (
    <div className="container-fluid">
      <Carousel className="carousel-inner home_page_carousel">
        <CarouselItem className="carousel-item home_page_carousel_img active">
          <img className="d-block w-100 " src={img1} alt="First slide" />
        </CarouselItem>
        <CarouselItem className="carousel-item home_page_carousel_img ">
          <img className="d-block w-100 " src={img2} alt="First slide" />
        </CarouselItem>
        <CarouselItem className="carousel-item home_page_carousel_img ">
          <img className="d-block w-100 " src={img3} alt="First slide" />
        </CarouselItem>
        <CarouselItem className="carousel-item home_page_carousel_img ">
          <img className="d-block w-100 " src={img4} alt="First slide" />
        </CarouselItem>
        <CarouselItem className="carousel-item home_page_carousel_img ">
          <img className="d-block w-100 " src={img5} alt="First slide" />
        </CarouselItem>
        <CarouselItem className="carousel-item home_page_carousel_img ">
          <img className="d-block w-100 " src={img6} alt="First slide" />
        </CarouselItem>
        <CarouselItem className="carousel-item home_page_carousel_img ">
          <img className="d-block w-100 " src={img7} alt="First slide" />
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default Slider;
