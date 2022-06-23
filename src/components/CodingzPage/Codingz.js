import React, { PureComponent } from "react";
import python from "./Media/python.jpg";
import js from "./Media/js.jpg";
import react from "./Media/react.jpg";
import git from "./Media/git.jpg";
import html from "./Media/html.jpg";
import css from "./Media/css.jpg";
import azure from './Media/azurecertificate.jpg';
import soliditycertificate from './Media/soliditycourse.jpg';
import hacto2020 from "./Media/hacto2020.jpg";
import hacto2021 from "./Media/hacto2021.jpg";
import hacto2020swags from "./Media/hacto2020swags.jpg";
import courserafrontend from "./Media/courserafrontend.jpg";
import udemykotlin from "./Media/udemykotlin.jpg";
import solidity from "./Media/solidity.jpg";
import moralis from "./Media/moralis.jpg";
import hardhat from "./Media/hardhat.jpg"
import badges from "./Media/badges.jpg";
import {  Row, Col } from "react-bootstrap";
import firebase from "./Media/firebase.jpg";
import reactnative from "./Media/reactnative.jpg";
import expo from "./Media/expo.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./codingz.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Header from "../MainComponent/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../MainComponent/Footer";
class Codingz extends PureComponent {
 
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="codingz">
        <Header  status = {1}/>
        <ScrollToTop/>
        <ScrollAnimation animateIn="animate__slideInDown" animateOnce={true}>
          <div className="introwords">
            In ❤️ with CODING , <br /> exploring WEB 3.0 🚀🚀🚀
          </div>
        </ScrollAnimation>
    

        <br /> <br />
        
        <ScrollAnimation animateIn="animate__backInLeft" animateOnce={true}>
          <div className="subtitle">
            MY SKILLS INCLUDE
          </div>
        </ScrollAnimation>
        <br /><br />
        
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <div className="container">
            <Row style={{ textAlign: "left" }}>
              <Col>
                <img src={python} width="15%" height="15%" style={{ padding: "20px" }}  alt = "skill"/>
                <img src={js} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
                <img src={react} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
              </Col>
            </Row>
          </div>

          <br />
          <div className="container">
            <Row style={{ textAlign: "right" }}>
              <Col>
                <img src={git} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
                <img src={html} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
                <img src={css} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
              </Col>
            </Row>
          </div>
          
          <br/>
          <div className="container">
            <Row style={{ textAlign: "left" }}>
              <Col>
                <img src={reactnative} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
                <img src={firebase} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
                <img src={expo} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
              </Col>
            </Row>
          </div>

          <br />
          <div className="container">
            <Row style={{ textAlign: "right" }}>
              <Col>
                <img src={hardhat} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
                <img src={moralis} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
                <img src={solidity} width="15%" height="15%" style={{ padding: "20px" }} alt = "skill"/>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <div className="subtitle">
            Honours and achievements
          </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="achievementtitle">
              HACTOBERFEST{" "}
            </div>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className="achievementdesc">
              I successfully completed the Hactoberfest challenge consecutively
              for2years 2020 and 2021{" "}
            </span>
          </div>
          <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          

            <div className="carousel_master_container">
            <div className="carousel_wrapper">
            <Slider {...settings}>
   
      <div>
      <div>  <img src={hacto2020swags}  className="carousel_img"  alt = "carousel_img"  /></div>
      </div>
      <div>
      <div>  <img src={hacto2020} className="carousel_img"  alt = "carousel_img"  /></div>
      </div>
      <div>
      <div>  <img src={hacto2021} className="carousel_img"  alt = "carousel_img"  /></div>
      </div>
     
    </Slider>
    </div>
    </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="animate__lightSpeedInRight"
          animateOnce={true}
        >
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className = "achievementtitle">COURSES</div>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className="achievementdesc">
              Sucessfully completed these online courses to gain TECH skills
            </span>
          </div>
          
    <br/>
            <div className="carousel_master_container">
            <div className="carousel_wrapper">
            <Slider {...settings}>
      <div  >
   <img src={courserafrontend} alt = "carousel" className="carousel_img" />
      </div>
      <div>
      <div>  <img src={soliditycertificate}  className="carousel_img"  alt = "carousel_img"  /></div>
      </div>
      <div>
      <div>  <img src={azure} className="carousel_img"  alt = "carousel_img"  /></div>
      </div>
      <div>
      <div>  <img src={udemykotlin} className="carousel_img"  alt = "carousel_img"  /></div>
      </div>
     
    </Slider>
    </div>
    </div>
          
        </ScrollAnimation>
        <br />
        <br />
 <br />
   
        <br />
        <br />
        <Footer/>
      </div>
    );
  }
}
export default Codingz;
