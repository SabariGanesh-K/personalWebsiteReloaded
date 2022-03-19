import { Carousel } from "react-responsive-carousel";
import { Row, Col, Container } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import dp from "./Media/dp2.jpeg";
import homeintro from "./Media/homeintro.png";
import dpintro from "./Media/dpintro.png";
import carousel1 from "./Media/carousel1.jpg";
import carousel2 from "./Media/carousel2.jpg";
import carousel3 from "./Media/carousel3.jpg";
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={homeintro} width="50%" alt = "hello world" />
      </div>
<br/><br/>

      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="glass" height="30%" width="95%">
            <Container>
              <Row>
                <Col>
                  <img src={dp} height="45%" width="45%" style={{ padding: "2%" }}  alt = "me:)"/>
                  <img src={dpintro} height="50%" width="50%" alt = "aboutme:)" />
                  <span height="45%" width="45%">
                    <Row style={{display: "flex",justifyContent: "center",background: "black",borderRadius: "2rem",padding: "1%",}}>
                      <a href="https://www.linkedin.com/in/sabariganeshk/" target = "_blank" rel="noreferrer">
                        <span className="fa fa-3x fa-linkedin" style={{ color: "blue" }} />
                      </a>
                      &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href="https://www.instagram.com/sabz_qetuowryip_1357924680/" target = "_blank" rel="noreferrer">
                         <span className="fa fa-3x fa-instagram" style={{ color: "#f5022f" }}/>
                       </a> 
                       &nbsp; &nbsp; &nbsp; &nbsp;
                      <a href="https://github.com/SabariGanesh-K/" target = "_blank" rel="noreferrer">
                        <span className="fa fa-3x fa-github" style={{ color: "white" }} />
                      </a>
                    </Row>
                  </span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </ScrollAnimation>
      <br/><br/>


      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="carousel-container">
            <Carousel style={{display: "flex",textAlign: "center",justifyContent: "center"}}>
              <div>
                <img src={carousel1} alt = "c1" />
              </div>
              <div>
                <img src={carousel2}  alt = "c2"/>
              </div>
              <div>
                <img src={carousel3}  alt = "c3"/>
              </div>
            </Carousel>
          </div>
        </div>
      </ScrollAnimation> 


      <br />
      <br />
      <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
        <div className="container" style={{width: "100%",display: "flex",justifyContent: "center",textAlign: "center"}}>
        
          <span className="mark">
            <span style={{ opacity: "1" }}>
              {" "}
              Asperger 👀&lt;&gt; Coder ☕ &lt;&gt; Tech Enthusiast 💻 &lt;&gt;
              Melophile🎧 &lt;&gt;Introvert , but Extrovert :) &lt;&gt; <br />
              <br /> 1.1K+ Follows in Linkedin 🚀 <br />
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
