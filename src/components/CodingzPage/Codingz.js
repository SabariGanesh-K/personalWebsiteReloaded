import React, { PureComponent, useContext, useEffect } from "react";

import azure from './Media/azurecertificate.jpg';
import soliditycertificate from './Media/soliditycourse.jpg';
import hacto2020 from "./Media/hacto2020.jpg";
import hacto2021 from "./Media/hacto2021.jpg";
import hacto2020swags from "./Media/hacto2020swags.jpg";
import courserafrontend from "./Media/courserafrontend.jpg";
import udemykotlin from "./Media/udemykotlin.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lumoscert from './Media/lumos1.png'
import lumoscert2 from './Media/lumos2.png'
import "./codingz.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Header from "../MainComponent/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../MainComponent/Footer";
import {AppContext} from '../../context/AppConfig'
import { Experiences } from "./Experiences";
import { Skills } from "./Skills";
  function Codingz() {
 const {setstatus} = useContext(AppContext)
  useEffect(()=>{
    setstatus(1);
    window.scrollTo(0, 0);
  },[])
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="codingz">
          <div className="sticker">
      <Header />
      </div>
        <ScrollToTop/>
        <br/><br/><br/><br/>
        {/* <ScrollAnimation animateIn="animate__slideInDown" animateOnce={true}> */}
          <div className="introwords">
            In ❤️ with CODING , <br /> exploring WEB 3.0 🚀🚀🚀
          </div>
        {/* </ScrollAnimation> */}
    

        <br /> <br />
        <Skills/>
        <br/><br/>
    
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <div className="subtitle">
            Honours and achievements
          </div>
        </ScrollAnimation>
        <Experiences/>
        <br/><br/>
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
            🏆🥇   LUMOS METAVERSE Buidl for WEB3 Hackathon Winner !!
            </div>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span className="achievementdesc">
             Team "Green genesis" won the Polygon Pool track where we built a Decentralized funding project with verifications and dispute handlings secured by blockchain
            </span>
          </div>
          <br/>
          <div style = {{display:'flex',flexDirection:'row',justifyContent:'center',padding:'2%'}}>
          <a href = "https://github.com/SabariGanesh-K/lumos-letsgo" target = "_blank" style = {{textDecoration:'none'}} rel="noreferrer">     <button style = {{padding:'1%',backgroundColor:'black',color:'white',fontWeight:'bold',margin:'1%',cursor:'pointer'}}>View Project Github</button></a>
          <a href = "https://www.linkedin.com/posts/sabariganeshk_web3-buidlforweb3-blockchain-activity-6995690747756699648-_Q2v?utm_source=share&utm_medium=member_desktop" target = "_blank" style = {{textDecoration:'none'}} rel="noreferrer"><button style = {{padding:'1%',backgroundColor:'white',cursor:'pointer', color:'black',fontWeight:'bold'}}>View Demo </button></a> 
          
          </div>
          <br/> 
          <div className="container" style={{ display: "flex", justifyContent: "center" }}>
          

            <div className="carousel_master_container">
            <div className="carousel_wrapper">
            <Slider {...settings}>
   
      <div>
      <div>  <img src={lumoscert}  className="carousel_img"  alt = "carousel_img"  /></div>
      </div>
      <div>
      <div>  <img src={lumoscert2}  className="carousel_img"  alt = "carousel_img"  /></div>
      </div>
    
      
     
    </Slider>
    </div>
    </div>
   
          </div>
    
        </ScrollAnimation>


        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="achievementtitle">
            🏆👕 HACTOBERFEST{" "}
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
export default Codingz;
