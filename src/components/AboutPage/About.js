import vit from "./Media/vit.png";
import nsn from "./Media/nsn.jfif";
import leader from "./Media/leadership.png";
import karate from "./Media/karate.jpg";
import bgpage from "../HomePage/Media/bgpage.mp4";
import dao from '../CodingzPage/Media/dao.png';
import pxp from '../CodingzPage/Media/placexp.png';
import nwork from "./Media/networking.png"
import aboutdp from "./Media/aboutdp.png";
import ScrollAnimation from "react-animate-on-scroll";
import c0 from "./Media/c0.jpg"
import c1 from "./Media/c1.jpg"
import c2 from "./Media/c2.png"

import c3 from "./Media/c3.jpg"
import c4 from "./Media/c4.jpg"

import "animate.css/animate.min.css";
import './about.css'
import ReactDOM from 'react-dom';
import React, { PureComponent, useContext, useEffect } from "react";
import Header from "../MainComponent/Header";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../MainComponent/Footer";
import Facts from "./facts";
import { AppContext } from "../../context/AppConfig";
import Marquee from "./Marquee";

function About() {
  const {setstatus} = useContext(AppContext)
  useEffect(()=>{
    setstatus(2);
    window.scrollTo(0, 0);
  },[])
  const images = [
c0,c1,c2,c3,c4,c0,c1,c2,c3,c4,c0,c1,c2,c3,c4
];
  let reactSwipeEl;

    return (
      <div className="about">    
       <video id="bgvideo" autoPlay loop muted>
        <source src={bgpage} type="video/mp4" />
      </video>
      <div className="stickerabt">
      <Header />
      </div>
      <ScrollToTop/>
      <br/><br/>
        <ScrollAnimation  animateIn="animate__slideInLeft"  animateOnce={true} >

          <div className="about_container">
            <br />
            <br />
        <div className="img_container">
            <img  src={aboutdp} className='img_about'  alt = "me:)" />
            </div>
            <br />

            <br />
            <div  className="about_words_container">
              <div
                className="about_words"
                
              >
                <div>
             
Hello there! I'm Sabari Ganesh, a dedicated Full Stack Software Developer specializing in Web3 and Cloud Technologies. Currently immersed in my B.Tech journey at VIT Chennai, I anticipate graduating in 2025. <br/><br/>

My professional identity is a unique blend of being a tech enthusiast and a versatile individual with a knack for networking, community building, and event organization. I've had the privilege of sharing my insights at various events and workshops, collaborating with industry giants like Polygon Lumos. <br/><br/>

In the dynamic world of startups, I've not only expressed my love for innovation but actively contributed to building some remarkable ventures while working alongside visionary founders. My freelancing experience has further honed my skills and provided a diverse range of challenges. <br/><br/>

Beyond my technical prowess, I pride myself on being a strong-minded individual, capable of getting the job done efficiently. I thrive in multitasking, handling even the most challenging work with a stress-free demeanor, always giving my best. As an extrovert with excellent communication skills, I find great interest in entrepreneurship, making meaningful connections in the process. <br/><br/>
                  
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <br />


        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
          <div>
            <div className="subtitle_about">
            <div className="subtitle_about">
              EDUCATION
              </div>
            </div>
            <br />
           
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
              style={{ fontSize: "1.5rem", fontWeight: "bolder",zIndex:'130' }}
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

        {/* <Marquee images={images} /> */}
      
        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
        <div className="subtitle_about">
              EXPERIENCE
            </div>
            <br />
          <ScrollAnimation animateIn="animate__zoomInRight" animateOnce={true}>
            <div className="skill_master_container">
                      <div className="skill_container" style={{color:'black',background:'white',width:'80%'}}>
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
            {/* <Experiences/> */}
            </ScrollAnimation>
        <div>
          <ScrollAnimation animateIn="animate__zoomInLeft" animateOnce={true}>
            <div className="subtitle_about">
              NOT ONLY ACADEMICS :) ,{" "}
            </div>
            <br/>
            <ScrollAnimation animateIn="animate__zoomInRight" animateOnce={true}>
            <div className="skill_master_container" >
            <div className="skill_container" style={{color:'black',background:'white',width:'80%'}}>
             <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
              <img className="skill_logo" src = {dao}  alt = "karate"/>
            <a href="https://instagram.com/dao_vitcc" > <button className="about_button"> VISIT </button></a> 
              </div>
              <div className="skill_desc">
             LEAD DAO Community , A VIT CHENNAI OFFICIAL COMMUNITY AS PRESIDENT <br/>
Managing a community of 200+ blockchain enthusiasts run by a DAO as a overall facilitator and also working with the tech team coding the revolutionary DAO in our university ! <br/><br/>
Boosted the outreach of community by networking and bringing leading web3 companies like Lumos Metaverse ,Polygon, Shardeum , Venus Protocol , IntoTheVerse , Push Protocol , Router Protocol , Kana labs etc<br/><br/>
Managed mutiple projects made FOR the Community , By the Community built and deployed under varieties of Tech stack.
                  <br />  
              
                <br />
              </div>
            </div>
            </div>
          </ScrollAnimation>
          <br/>
            <ScrollAnimation animateIn="animate__zoomInRight" animateOnce={true}>
            <div className="skill_master_container" >
            <div className="skill_container" style={{color:'black',background:'white',width:'80%'}}>
             <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
              <img className="skill_logo" src = {pxp}  alt = "karate"/>
            <a href="https://instagram.com/dao_vitcc" > <button className="about_button"> VISIT </button></a> 
              </div>
              <div className="skill_desc">
             WebDev Lead of PlaceXP  - Official club of VIT Chennai <br/><br/>
             Managed multiple projects of web development with my team . Took care of the complete 
             workflows of projects from ideating to coding to deployment.Also as a tech dept lead took care of  
             technical events 
                  <br />  
              
                <br />
              </div>
            </div>
            </div>
          </ScrollAnimation>
          <br />
            <ScrollAnimation animateIn="animate__zoomInRight" animateOnce={true}>
            <div className="skill_master_container">
                      <div className="skill_container" style={{color:'black',background:'white',width:'80%'}}>
              <img className="skill_logo" src = {nwork}  alt = "karate"/>
              <div className="skill_desc">
Also was a part of Multiple Clubs and networked with diverse people in my university . Also contributed to projects of different domains
              
                <br />
              </div>
            </div>
            </div>
          </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="animate__zoomInRight" animateOnce={true}>
            <div className="skill_master_container">
                      <div className="skill_container" style={{color:'black',background:'white',width:'80%'}}>
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
         
        </div>
        <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
         {/* <Facts/> */}
          </ScrollAnimation>

<br/> <br/><br/>
        <Footer/>
      </div>
    );
  }

export default About;
