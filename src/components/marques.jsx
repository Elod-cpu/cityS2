import React, { Component } from "react";
import Slider from "react-slick";
import Nike from "../images/Nike.png";
import Adidas from "../images/Adidas.png";
import Reebok from "../images/Reebok.png";
import Puma from "../images/Puma.png";
import Asics from "../images/Asics.png";
import Vans from "../images/Vans.png";



export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="marqbox">
        <Slider {...settings}>
          <div className="marq">
              <img src={Nike} alt="Nike" className="logo" style={{width: 130}}/>
          </div>
          <div className="marq">
              <img src={Adidas} alt="Nike" className="logo" style={{width: 130}}/>
          </div>
          <div className="marq">
              <img src={Vans} alt="Nike" className="logo" style={{width: 130}}/>
          </div>
          <div className="marq">
               <img src={Puma} alt="Nike" className="logo" style={{width: 130}}/>
          </div>
          <div className="marq">
              <img src={Reebok} alt="Nike" className="logo" style={{width: 130}}/>
          </div>
          <div className="marq">
          <img src={Asics} alt="Nike" className="logo" style={{width: 130}}/>
          </div>
        </Slider>
      </div>
    );
  }
}