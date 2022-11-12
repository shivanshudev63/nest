import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web1 from "../images/banner_home.jpg";
import web2 from "../images/banner_home1.jpg";
import SampleNextArrow from './SampleNextArrow';
import SamplePreviousArrow from "./SampleNextArrow";

import classes from "./HomeCarousel.module.css";

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 8000,
      fade: true,
      cssEase: "linear",
      nextArrow:<SampleNextArrow />,
      prevArrow:<SamplePreviousArrow />
    };
    return (
      <div className={`${classes.slick_slide}`}>
        <Slider {...settings}>
          <div  >
            <img style={{ boxShadow: "1px 2px 9px grey"}} src={web1} alt="" />
            <div className="text-on-image" style={{width:"80%"}}>
              <h1 className="d-flex justify-content-center my-2" id="navimgtext1">
                {" "}
                <strong>THE LEGACY BORN AGAIN</strong>
              </h1>
              <h2 className="d-flex justify-content-center my-2">
                <strong>NEST IS WORKING FOR TRIBAL YOUTH</strong>
              </h2>
              <h3 className="d-flex text-center my-2" id="navimgtext3">
                <strong>
                  SRI NARAYAN JEE ATTENDING INTERNATIONAL TRIBAL WELFARE PROGRAM
                </strong>
              </h3>
            </div>
          </div>
          <div>
            <img src={web2} className="img-fluid" alt="" />
            <div className="text-on-image d-flex text-center" style={{width:"80%"}}>
              <h1 id="navimgtext1">
                {" "}
                <strong>THE JOURNEY GOES ON...</strong>
              </h1>
              <h2>
                <strong>
                  NARAYAN JEE REPRESENTING INDIA IN THE INTERNATIONAL MEET
                  RELATED TO SOCIAL WELFARE
                </strong>
              </h2>
              <h3 id="navimgtext3">
                <strong>
                  SRI NARAYAN JEE WITH FIRST PRESIDENT OF INDIA DR. RAJENDRA
                  PRASAD
                </strong>
              </h3>
            </div>
          </div>
        </Slider>

      </div>
    );
  }
}
