import vit from "./Media/vit.jpg";
import nsn from "./Media/nsn.jpg";
import leader from "./Media/leader.jpg";
import karate from "./Media/karate.jpg";
import aboutdp from "./Media/aboutdp.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import './about.css'
import React, { PureComponent } from "react";
import Header from "../MainComponent/Header";
<span style={{ fontFamily: "Dancing Script", fontSize: "2rem" }}></span>;
class About extends PureComponent {
  render() {
    return (
      <div className="about">    
      <Header  status = {2} />
        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>

          <div style={{ textAlign: "center", justifyContent: "center" }}>
            <br />
            <br />

            <img src={aboutdp} style={{ width: "25rem" }} />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="glass"
                style={{
                  textAlign: "center",
                  width: "80%",
                  fontFamily: "Dancing Script",
                  fontWeight: "bolder",
                  fontSize: "2rem",
                  color:'black'
                }}
              >
                <div>
                  Who is Sabari ? <br/>He is a cute  😍  cool 😎self obsessed 🤩 guy who knows to Code.<br/>
                  Also a  big fan of Elon Musk  and hence believes in giving sweat and 100% determination in 
                  everything he does 😎.  <br/>
                  Sabari shortly called as SABZ is empathetic , but also capable of being rude 😈 !!!<br/>
                  Fascinated by GTA  and its series , he started his coding journey which he eventually fell in love with 💪<br/>
                  Sabz can go to any extent to fetch things he wants no matter what TF comes in between 💯!! 
                  
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <br />
        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
          <div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "2.5rem",
                textAlign: "center",
                background:'lightblue'
              }}
            >
              #EDUCATION
            </div>
            <br />
            <div
              className="container"
              style={{ fontSize: "1.5rem", fontWeight: "bolder" }}
            >
              I PURSUING MY UG @
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", justifyContent: "left" }}>
                <img src={vit} width="50%" />
                <div
                  className="glass"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",

                  }}
                >
                  VIT CHENNAI : BTECH (2021-2025) <br />
                  Computer Science and Engineering with specialization in Cyber
                  Physical Systems
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "left" }}></div>
            </div>
            <br />
            <br />
            <div
              className="container"
              style={{ fontSize: "1.5rem", fontWeight: "bolder" }}
            >
              I COMPLETED MY SCHOOL LIFE @
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", justifyContent: "left" }}>
                <div
                  className="glass"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  NSN MEMORIAL SENIOR SECONDARY SCHOOL (2006=2021) <br /> CBSE :
                  Grade 10 and Grade 12
                </div>
                <img src={nsn} width="50%" />
              </div>
              <div style={{ display: "flex", justifyContent: "left" }}></div>
            </div>
          </div>
        </ScrollAnimation>
        <br />
        <br />
        <div>
          <ScrollAnimation animateIn="animate__zoomInLeft" animateOnce={true}>
            <div
              style={{
                fontFamily: "Audiowide",
                fontSize: "2rem",
                color: "black",
              }}
            >
              NOT ONLY ACADEMICS :) ,{" "}
            </div>
            <br />
            <div
              style={{
                position: "relative",
                textAlign: "center",
                color: "white",
              }}
            >
              <img
                src={leader}
                style={{
                  width: "20rem",
                  filter: "blur(1px)",
                  WebkitFilter: "blur(1px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "0px",
                }}
              >
                <mark style={{ backgroundColor: "black", color: "white" }}>
                  I equipped myself to be a LEADER acquiring relevant skills{" "}
                  <br /> <br /> by becoming the Assistant HEAD BOY and HEAD BOY
                  of my School.
                </mark>
                <br />
              </div>
            </div>
          </ScrollAnimation>
          <br />
          <ScrollAnimation animateIn="animate__zoomInRight" animateOnce={true}>
            <div
              style={{
                position: "relative",
                textAlign: "center",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <img
                src={karate}
                style={{
                  width: "20rem",
                  filter: "blur(1px)",
                  WebkitFilter: "blur(1px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "70%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "0px",
                  font: "orange",
                }}
              >
                <mark style={{ backgroundColor: "black", color: "white" }}>
                  I attained a BROWN -1 grade in karate trained by <br />
                  <br />
                  UNIVERSAL SHITO-RYU SPORTS KARATE SCHOOL
                </mark>
                <br />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}
export default About;
