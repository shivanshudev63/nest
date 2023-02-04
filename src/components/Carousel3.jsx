import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homedata from './CarouselData3';
import CarouselCard from "./CarouselCard2";


export default class Carousel3 extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        cssEase: "linear", 
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              autoplaySpeed: 3000,
              speed:3000,
            }
          }
        ]
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