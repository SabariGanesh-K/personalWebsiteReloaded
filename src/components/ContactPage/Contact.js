import React, { Component, useContext, useEffect } from "react";
import bgpage from "../HomePage/Media/bgpage.mp4";
import instagram from "./Media/instagram.png";
import dp from "./Media/dp2.png";
import discord from "./Media/discord.png";
import medium from "./Media/medium.png";
import linkedin from "./Media/linkedin.png";
import twitter from "./Media/twitter.png";
import email from "./Media/email.png";
import github from "./Media/github.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./contact.css";

import Header from "../MainComponent/Header";
import Media from "./media";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../MainComponent/Footer";
import { AppContext } from "../../context/AppConfig";

function Contact() {


  const {setstatus} = useContext(AppContext)
  useEffect(()=>{
    setstatus(4);
    window.scrollTo(0, 0);
  },[])
  

    return (
      <div className="contact" style={{ width: "100%" }}>
        <video id="bgvideo" autoPlay loop muted>
        <source src={bgpage} type="video/mp4" />
      </video>
          <div className="stickercont">
      <Header />
      </div>
        <ScrollToTop/>
        <div
          className="container"
          style={{
            fontFamily: "estonia",
            fontSize: "4.5rem",
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
        >
          <br/>
          Lets Catch Up😈
        </div>

        <br />

        <div
        
          style={{ display: "flex", justifyContent: "center",flexDirection:"row" , zIndex:'100' }}
        >
          <img src={dp} style={{ borderRadius: "15rem", width: "20rem" }} alt = "me:)"/>
        </div>
        <br/> <br/>
        <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce={true}>
          <div className="container" >
            <Media  link = "https://www.instagram.com/sabari.krishna.2004/" tag = "sabari.krishna.2004"  img = {instagram} />
            <Media  link = "https://www.linkedin.com/in/sabariganeshk/" tag = "sabariganeshk"  img = {linkedin} />
            <Media link = "https://twitter.com/Sabari_ganesh_k" tag = "Sabari_ganesh_k"  img = {twitter} />
            <Media  link = "" tag = "k.sabarii.ganesh@gmail.com"  img = {email} />
            <Media link = "https://github.com/SabariGanesh-K" tag = "SabariGanesh-K"  img = {github} />
            <Media  link = "https://medium.com/@k.sabarii.ganesh" tag = "k.sabarii.ganesh"  img = {medium} />
            <Media link = "" tag = "sabariganesh.crypto"  img = {discord}  />
           
          </div>
</ScrollAnimation>

 <br/> <br/>
        <ScrollAnimation animateIn="animate__flip" animateOnce={true}>
          <br />
          <div
            className="container"
            style={{
              fontFamily: "estonia",
              fontSize: "5rem",
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            SEE YA ALL ..... :)
          </div>
          <br />
          <br />
 </ScrollAnimation>
 <Footer/>
</div>
    );
  

}
export default Contact;
