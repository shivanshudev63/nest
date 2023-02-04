import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homedata from './CarouselData4';
import CarouselCard1 from "./CarouselCard1";


export default class Carousel4 extends Component {
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
        <div style={{marginLeft:"3%"}}>
          <Slider {...settings}>
         
{homedata.map(homedata =>
<CarouselCard1 image={homedata.image}
key={homedata.title}
title={homedata.title} />
  )}
      
          </Slider>
        </div>
      );
    }
  }