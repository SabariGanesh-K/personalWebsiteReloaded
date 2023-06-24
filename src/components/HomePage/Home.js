import "./home.css";
import dp from "./Media/dp2.jpg";
import homeintro from "./Media/homeintro.png";
import dpintro from "./Media/dpintro.png";

import ScrollAnimation from "react-animate-on-scroll";
import React, { useContext, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import "animate.css/animate.min.css";
import Header from "../MainComponent/Header";
import Footer from "../MainComponent/Footer";
import { AppContext } from "../../context/AppConfig";

export const Home = () => {
  const { setstatus } = useContext(AppContext);
  useEffect(() => {
    setstatus(0);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home" style={{ width: "100%" }}>
      <div className="sticker">
        <Header />
      </div>
      <ScrollToTop />
      <div className="greeting">
        <img src={homeintro} width="50%" alt="hello world" />
      </div>
      <br />
      <br />

      {/* <ScrollAnimation animateIn="animate__fade" animateOnce={true}> */}
      <div className="home_wrapper">
        <div className="glass_home">
          <div className="home_dp_wrapper">
            <div className="home_dp">
              <div className="home_image_wrapper">
                <img className="dp_img" src={dp} alt="DP" />
              </div>
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
                  href="https://www.instagram.com/sabariganesh.crypto"
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
            </div>
          </div>
          <div className="home_desc">
            <div className="home_image_wrapper">
              <img className="dp_img" src={dpintro} alt="DP" />
            </div>
          </div>
        </div>
      </div>
      {/* </ScrollAnimation> */}

      <br />
      <br />
      <div className="home_button_containers">
        <a href="/projects">
          {" "}
          <button2> View Projects</button2>
        </a>
        <a href="/codingz">
          <button2> View Skills & Experiences</button2>{" "}
        </a>
      </div>

      <br />
      <br />
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="container">
          <span className="mark">
            <span style={{ opacity: "1" }}>
              {" "}
              Coder ☕ &lt;&gt; Love CRYPTO 🚀 &lt;&gt; Tech Enthusiast 💻
              &lt;&gt; Melophile🎧 &lt;&gt;Introvert , but Extrovert :) &lt;&gt;{" "}
              <br />
              <br /> 2K+ Network in Linkedin 🚀 <br />
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
      <Footer />
    </div>
  );
};
export default Home;
