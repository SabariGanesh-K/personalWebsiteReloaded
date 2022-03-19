import React, { PureComponent } from "react";
import python from "./Media/python.jpg";
import js from "./Media/js.jpg";
import react from "./Media/react.jpg";
import git from "./Media/git.jpg";
import html from "./Media/html.jpg";
import css from "./Media/css.jpg";
import github from "./Media/github.jpg";
import instagram from "./Media/instagram.jpg";
import hackerrank from "./Media/hackerrank.jpg";
import hacto2020 from "./Media/hacto2020.jpg";
import hacto2021 from "./Media/hacto2021.jpg";
import hacto2020swags from "./Media/hacto2020swags.jpg";
import courserafrontend from "./Media/courserafrontend.jpg";
import udemykotlin from "./Media/udemykotlin.jpg";
import badges from "./Media/badges.jpg";
import {  Row, Col } from "react-bootstrap";
import firebase from "./Media/firebase.jpg";
import reactnative from "./Media/reactnative.jpg";
import expo from "./Media/expo.jpg";
import { Carousel } from "react-responsive-carousel";
import "./codingz.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Header from "../MainComponent/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../MainComponent/Footer";
class Codingz extends PureComponent {
  render() {
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
        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce={true}>
          <div className="subtitle" >
            Here is A GLIMPSE.....
          </div>
        </ScrollAnimation>
        <br /> <br />

<ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce={true}>
<div className="glimpse-container">
  <div className="glimpse"><img src = {github} className="glimpse-image" alt = "github"/><a href = "https://github.com/SabariGanesh-K" className="glimpse-title" target="_blank" rel="noreferrer"><span className="glimpse-title">Open Source 🚀</span></a></div>
  <div className="glimpse"><img src = {hackerrank} className="glimpse-image" alt = "github"/><a href = "https://www.hackerrank.com/K_Sabari_Ganesh " className="glimpse-title"  target="_blank" rel="noreferrer"><span className="glimpse-title">Competitive Coding 🚀</span></a></div>
  <div className="glimpse"><img src = {instagram} className="glimpse-image" alt = "github"/><a href = "https://www.instagram.com/beingcodeworm/" className="glimpse-title"  target="_blank" rel="noreferrer"><span className="glimpse-title">Insta Creations 🚀</span></a></div>
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
            <div className="carousel-container">
              <Carousel style={{display: "flex",textAlign: "center",justifyContent: "center"}}>
                <div><img src={hacto2020swags} alt = "carousel" /></div>
                <div><img src={hacto2020} alt = "carousel" /></div>
                <div><img src={hacto2021} alt = "carousel"  /></div>
              </Carousel>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__lightSpeedInLeft"
          animateOnce={true}
        >
          {" "}
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="achievementtitle">HACKERRANK BADGES{" "}</div>
      </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className="achievementdesc">
              Starting my journey with Competitive programming ,I achieved
              following badges in Hackerrank
            </span>
          </div>
          <br />
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={badges} width="75%" alt = "badges"  />
          </div>
          <br />
          <br />
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
          
          <div className="container" style={{ display: "flex", justifyContent: "center" }}>

            <div className="carousel-container" >
              <Carousel  style={{display: "flex",textAlign: "center",justifyContent: "center"}}>
                <div>  <img src={courserafrontend} alt = "carousel"  /></div>
                <div>  <img src={udemykotlin} alt = "carousel"  /></div>
              </Carousel>
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
