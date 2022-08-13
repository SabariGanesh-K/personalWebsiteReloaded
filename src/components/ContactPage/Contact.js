import React, { Component } from "react";

import instagram from "./Media/instagram.png";
import dp from "./Media/dp2.jpg";
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

class Contact extends Component {


  render() {
  

    return (
      <div className="contact">
          <div className="sticker">
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
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={dp} style={{ borderRadius: "15rem", width: "20rem" }} alt = "me:)"/>
        </div>
        <br/> <br/>
        <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce={true}>
          <div>
            <Media  link = "https://www.instagram.com/sabari.eth/" tag = "sabari.eth"  img = {instagram} />
            <Media  link = "https://www.linkedin.com/in/sabariganeshk/" tag = "sabariganeshk"  img = {linkedin} />
            <Media  link = "" tag = "k.sabarii.ganesh@gmail.com"  img = {email} />
            <Media link = "https://github.com/SabariGanesh-K" tag = "SabariGanesh-K"  img = {github} />
            <Media  link = "https://medium.com/@k.sabarii.ganesh" tag = "k.sabarii.ganesh"  img = {medium} />
            <Media link = "" tag = "sabari.eth🚀🚀🚀#1057"  img = {discord}  />
            <Media link = "https://twitter.com/SABARISABS1" tag = "SABARISABS1"  img = {twitter} />
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
}
export default Contact;
