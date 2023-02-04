import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"


export default class Carousel extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
      return (
        <div>
          <Slider {...settings}>
            <div >
              <h5 style={{background:"#FF9933",width:"40%",borderTopRightRadius:"15px",borderBottomRightRadius:"15px",color:"white"}} ><strong className="py-1 d-flex  justify-content-center "> OUR MISSION</strong></h5>
              <span><strong>Building Network Of People, Skills, Experience And Geniuses To Make A Positive Global Impact</strong></span>
            </div>
            <div >
              <h5 style={{background:"#FF9933",width:"40%",borderTopRightRadius:"15px",borderBottomRightRadius:"15px",color:"white"}} ><strong className="py-1 d-flex  justify-content-center ">OUR VISION</strong></h5>
              <span><strong>Taking the Lowest and the Youngest to the Ladder Of Progress through Evolutionary Efforts, Embracing Education and Values Together and Providing Equal Opportunity To All</strong></span>
            </div>
            <div >
              <h5 style={{background:"#FF9933",width:"40%",borderTopRightRadius:"15px",borderBottomRightRadius:"15px",color:"white"}} ><strong className="py-1 d-flex  justify-content-center ">OUR VALUES</strong></h5>
              <span><strong>Service Beyond Self Through Our Core Values : Gaining Insight, Wisdom, Accountability And Kindness, Are The Real Energies Of Life!</strong></span>
            </div>
          </Slider>
        </div>
      );
    }
  }