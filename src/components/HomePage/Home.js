import "./home.css";
import dp from "./Media/dp2.jpg";
import Lottie from 'react-lottie';
import animationData from './Media/rocket.json';
import ScrollAnimation from "react-animate-on-scroll";
import React, { useContext, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import "animate.css/animate.min.css";
import Header from "../MainComponent/Header";
import Footer from "../MainComponent/Footer";
import { AppContext } from "../../context/AppConfig";
import bgpage from './Media/bgpage.mp4'
export const Home = () => {
  const { setstatus } = useContext(AppContext);
  useEffect(() => {
    setstatus(0);
    window.scrollTo(0, 0);
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="home" style={{ width: "100%" }}>
      <video id="bgvideo"  autoPlay loop muted>
          <source src = {bgpage} type = 'video/mp4' />
          </video>
      <div className="sticker">
        <Header />
      </div>
      <ScrollToTop />
      
      <br />
      <boxR>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
</boxR> 

      {/* <ScrollAnimation animateIn="animate__fade" animateOnce={true}> */}
    
        <div className="glass_home">
          <div className="home_dp_wrapper">
            <div className="home_dp">
              <div className="home_image_wrapper">
                <img className="dp_img" src={dp} width="500" alt="DP" />
              </div>
             
            </div>
          </div>
          <div className="home_desc">
            <div className="home_image_wrapper">
              <span className="profile_name">Sabari Ganesh K</span>
              <span className="profile_desig">Full Stack Software Development Engineer </span>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/sabariganeshk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="fa fa-3x fa-linkedin"
                    style={{ color: "blue" }}
                  />
                </a>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <a
                  href="https://www.instagram.com/sabs.krish"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="fa fa-3x fa-instagram"
                    style={{ color: "#f5022f" }}
                  />
                </a>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <a
                  href="https://github.com/SabariGanesh-K/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="fa fa-3x fa-github"
                    style={{ color: "white" }}
                  />
                </a>
              </div>
              <br/>
              <div className="home_button_containers" >
      
   
          <button2>   <a href="/projects">View Projects</a></button2>
      
          <button2>  <a href="/codingz"> View Skills & Experiences</a></button2>{" "}
        
      </div>
            </div>
          </div>
        </div>
      {/* </ScrollAnimation> */}

      <br />
      <br />
     

      <br />
      <br />
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="container">
          <span className="mark">
            <span style={{ opacity: "1" }}>
              {" "}
              🚀  <span>SDE Intern</span> @HashStack Finance 🚀 <br/>🚀  <span>Incoming Cryptography Researcher</span> @Nethermind 🚀 <br/> 🚀 Advocate @Polygon Labs 🚀 <br/> 🚀  Ex-President @DAO Community VITC 🚀 <br/> 🚀 Ex-Backend Edmyn  🚀<br/>
           <br/> <br/>  <span>And many more....</span>
            </span>
          </span>
        </div>
        <br />
        <br />
      </ScrollAnimation>
      <Footer />
    </div>
  );
};
export default Home;
