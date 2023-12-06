import React, { PureComponent, useContext, useEffect } from "react";
import bgpage from "../HomePage/Media/bgpage.mp4";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./codingz.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Header from "../MainComponent/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../MainComponent/Footer";
import { AppContext } from "../../context/AppConfig";
import { Experiences } from "./Experiences";

import { SkillsMinimized } from "./SkillsMinimized";
function Codingz() {
  const { setstatus } = useContext(AppContext);
  useEffect(() => {
    setstatus(1);
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div  className="codingz" style={{ width: "100%" }}>
    <video id="bgvideo" autoPlay loop muted>
        <source src={bgpage} type="video/mp4" />
      </video>
      <div className="stickercod">
        <Header />
      </div>
   
      <ScrollToTop />
      <br />
      <br />
      <br />
      <br />
      {/* <ScrollAnimation animateIn="animate__slideInDown" animateOnce={true}> */}
      <div className="introwords">
        In ❤️ with CODING , <br /> exploring WEB 3.0 🚀🚀🚀
      </div>
      {/* </ScrollAnimation> */}
      <br /> <br />
      {/* <Skills/> */}
      <SkillsMinimized />
      <br />
      <br />
      <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
        <div className="subtitle">Honours and achievements</div>
      </ScrollAnimation>
      <Experiences />
      <br />
      <br />
      <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
        <div className="subtitle">Honours and achievements</div>
      </ScrollAnimation>
      <br />
      <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="achievementtitle">
            <div>
            🏆🥇 LUMOS METAVERSE Buidl for WEB3 Hackathon Winner !!
            </div>
         <a href="#"   target="_blank"
                  rel="noreferrer"> <button  className="achieveButton">Visit and Know more</button></a>
          </div>
        </div>

      </ScrollAnimation>
      <br />
      <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="achievementtitle">
            <div>
            🏆🥇 ETHIndia ETH4ALL Hackathon WINNER
            </div>
         <a href="#"   target="_blank"
                  rel="noreferrer"> <button  className="achieveButton">Visit and Know more</button></a>
          </div>
        </div>

      </ScrollAnimation>
      <br />
      <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="achievementtitle">
            <div>
            🏆🥇 Buildspace Nights and Weekends Season3 Grad
            </div>
         <a href="#"   target="_blank"
                  rel="noreferrer"> <button  className="achieveButton">Visit and Know more</button></a>
          </div>
        </div>

      </ScrollAnimation>

   
   
      
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Codingz;
