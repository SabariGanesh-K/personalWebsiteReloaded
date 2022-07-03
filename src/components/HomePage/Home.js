

import "./home.css";
import dp from "./Media/dp2.jpg";
import homeintro from "./Media/homeintro.png";
import dpintro from "./Media/dpintro.png";

import ScrollAnimation from "react-animate-on-scroll";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "animate.css/animate.min.css";
import Header from "../MainComponent/Header";
import Footer from "../MainComponent/Footer";
function Home() {
  return (
    <div className="home" style={{ width: "100%" }}>
      <Header status = {0} />
<ScrollToTop/>
      <div className="greeting" >
        <img src={homeintro} width="50%" alt = "hello world" />
      </div>
<br/><br/>

{/* <ScrollAnimation animateIn="animate__fade" animateOnce={true}> */}
      <div className="glass">
        <div className="home_dp">
          <div>
          <img className="dp_img" src = {dp} alt = "DP"/>
          </div>
        <div className="socials">
        <a href="https://www.linkedin.com/in/sabariganeshk/" target = "_blank" rel="noreferrer">
                        <span className="fa fa-3x fa-linkedin" style={{ color: "blue" }} />
                      </a>
                      &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href="https://www.instagram.com/sabariganesh.tech/" target = "_blank" rel="noreferrer">
                         <span className="fa fa-3x fa-instagram" style={{ color: "#f5022f" }}/>
                       </a> 
                       &nbsp; &nbsp; &nbsp; &nbsp;
                      <a href="https://github.com/SabariGanesh-K/" target = "_blank" rel="noreferrer">
                        <span className="fa fa-3x fa-github" style={{ color: "white" }} />
                      </a>
        </div>
        </div>
        <div className="home_desc">
        <img className="dp_img" src = {dpintro} alt = "DP"/>
        </div>
     
      </div>
      {/* </ScrollAnimation> */}
   
      <br/><br/>


  


      <br />
      <br />
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="container" >
        
          <span className="mark">
            <span style={{ opacity: "1" }}>
              {" "}
               Coder ☕ &lt;&gt; Love CRYPTO 🚀 &lt;&gt; Tech Enthusiast 💻 &lt;&gt;
              Melophile🎧 &lt;&gt;Introvert , but Extrovert :) &lt;&gt; <br />
              <br /> 1.5K+ Network in Linkedin 🚀 <br />
              <br /> And I enjoy talking about Innovation and startups 🔥
              <br />
              <br /> I like Stalking Modern Gadgets and Technology😍 <br />
              <br /> Stay Connected to Know more about me :))
            </span>
          </span>
        </div>
        <br />
        <br />
      </ScrollAnimation>
    <Footer/>
    
    </div>
  );
}
export default Home;
