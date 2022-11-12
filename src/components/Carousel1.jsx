import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homedata from './CarouselData';
import CarouselCard from "./CarouselCard";


export default class Carousel1 extends Component {
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
        <div>
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