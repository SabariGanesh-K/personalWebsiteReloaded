import vit from "./Media/vit.png";
import nsn from "./Media/nsn.jfif";
import leader from "./Media/leadership.png";
import karate from "./Media/karate.jpg";
import aboutdp from "./Media/aboutdp.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import './about.css'
import React, { PureComponent, useContext, useEffect } from "react";
import Header from "../MainComponent/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../MainComponent/Footer";
import { Experiences } from "./Experiences";
import Facts from "./facts";
import { AppContext } from "../../context/AppConfig";

function About() {
  const {setstatus} = useContext(AppContext)
  useEffect(()=>{
    setstatus(2);
    window.scrollTo(0, 0);
  },[])
    return (
      <div className="about">    
      <div className="sticker">
      <Header />
      </div>
      <ScrollToTop/>
      <br/><br/>
        <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>

          <div className="about_container">
            <br />
            <br />
        <div className="img_container">
            <img src={aboutdp} style={{ width: "25rem" }} alt = "me:)" />
            </div>
            <br />

            <br />
            <div  className="about_words_container">
              <div
                className="about_words"
                
              >
                <div>
                  Who is Sabari ? <br/>He is a handsome  😍  cool 😎self obsessed 🤩 guy who knows to Code.<br/>
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
            <div className="subtitle_about">
              EDUCATION
            </div>
            <br />
            <div
              className="container"
              style={{ fontSize: "1.5rem", fontWeight: "bolder" }}
            >
              I AM PURSUING MY UG @
            </div>
            <br />
            <div className="institute_master_container">
             
                <img src={vit}className='institute_logo' alt = "vit" />
                <div className="institute_container">
                <div className="institute_desc" >

                 <div style = {{fontWeight:'bold'}}>VIT CHENNAI : BTECH (2021-2025)</div>  
                  <br/>
                  <div> Computer Science and Engineering with specialization in Cyber
                  Physical Systems</div>
                 <div> <a href = "https://chennai.vit.ac.in" target = "_blank" rel="noreferrer">
                  <button className="inst_button"> KNOW MORE </button>
                  </a> </div>
                </div>
              </div>

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
            <div className="institute_master_container">
              <div style={{ display: "flex", justifyContent: "left" }}>
                
                <div className="institute_desc">
                   <div style = {{fontWeight:'bold'}}>NSN MEMORIAL SENIOR SECONDARY SCHOOL (2006-2021)</div>
                   <div>  CBSE :
                  Grade 10 and Grade 12</div>
                   <div> <a href = "https://www.nsnschools.com" target = "_blank" rel="noreferrer">
                  <button className="inst_button"> KNOW MORE </button>
                  </a> </div>
                </div>
                <img src={nsn} className='institute_logo' alt = "nsn" />
              </div>
   
            </div>
          </div>
        </ScrollAnimation>
        <br />
        <br />


        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
        <div className="subtitle_about">
              EXPERIENCE
            </div>
            <Experiences/>
            </ScrollAnimation>
        <div>
          <ScrollAnimation animateIn="animate__zoomInLeft" animateOnce={true}>
            <div className="subtitle_about">
              NOT ONLY ACADEMICS :) ,{" "}
            </div>
            <br />
            <ScrollAnimation animateIn="animate__zoomInRight" animateOnce={true}>
            <div className="skill_master_container">
            <div className="skill_container" style={{backgroundColor:'#e35c6c'}}>
              <img className="skill_logo" src = {leader}  alt = "karate"/>
              <div className="skill_desc">
               
              I equipped myself to be a LEADER acquiring relevant skills
                  <br />  by becoming the Assistant HEAD BOY and HEAD BOY
                  of my School.
              
                <br />
              </div>
            </div>
            </div>
          </ScrollAnimation>

          </ScrollAnimation>
          <br />
          <ScrollAnimation animateIn="animate__zoomInRight" animateOnce={true}>
            <div className="skill_master_container">
            <div className="skill_container" style={{backgroundColor:'#440d0f',color:'white'}}>
              <img className="skill_logo" src = {karate}  alt = "karate"/>
              <div className="skill_desc">
               
                  I attained a BROWN -1 grade in karate trained by 
                  <br />
                  UNIVERSAL SHITO-RYU SPORTS KARATE SCHOOL
              
                <br />
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
         <Facts/>
          </ScrollAnimation>

<br/> <br/><br/>
        <Footer/>
      </div>
    );
  }

export default About;
