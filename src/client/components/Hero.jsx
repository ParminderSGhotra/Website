import React, { Component } from 'react';
import { Jumbotron, Carousel} from "react-bootstrap";
import "./../css/Hero.css"

const img1 = require('./../../../dist/images/Carousel/1.jpg');
const img2 = require('./../../../dist/images/Carousel/2.jpg');
const img3 = require('./../../../dist/images/Carousel/3.jpg');
const img4 = require('./../../../dist/images/Carousel/4.jpg');
const img5 = require('./../../../dist/images/Carousel/5.jpg');

class Hero extends Component {
  render() {
    return (
        
      <div className="Hero">
      {/* <Jumbotron></Jumbotron> */}
      <div className="container-fluid">
        <Carousel>
            <Carousel.Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={img1}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={img2}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={img3}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={img4}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={img5}
                />
            </Carousel.Item>                        
        </Carousel>
        </div>
       </div>
    );
  }
}

export default Hero;
