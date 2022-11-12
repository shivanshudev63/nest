import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homedata from './CarouselData2';
import CarouselCard from "./CarouselCard";


export default class Carousel2 extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        cssEase: "linear"
      };
      return (
        <div style={{marginLeft:"2%"}}>
          <Slider {...settings}>
         
{homedata.map(homedata =>
<CarouselCard image={homedata.image}
key={homedata.title}
title={homedata.title} />
  )}
      
          </Slider>
        </div>
      );
    }
  }