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

class Contact extends Component {


  render() {
  

    return (
      <div className="contact">
        <Header  status = {3}/>
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
          <img src={dp} style={{ borderRadius: "15rem", width: "20rem" }} />
        </div>
        <br/> <br/>

          <div>
            <Media link = "https://www.instagram.com/sabz_qetuowryip_1357924680/" tag = "@sabz_qetuowryip_1357924680"  img = {instagram} />
            <Media link = "https://www.linkedin.com/in/sabariganeshk/" tag = "@sabariganeshk"  img = {linkedin} />
            <Media link = "k.sabarii.ganesh@gmail.com" tag = "k.sabarii.ganesh@gmail.com"  img = {email} />
            <Media link = "https://github.com/SabariGanesh-K" tag = "@SabariGanesh-K"  img = {github} />
            <Media link = "https://medium.com/@k.sabarii.ganesh" tag = "@k.sabarii.ganesh"  img = {medium} />
            <Media link = "" tag = "@Doge_To_The_Moon🚀🚀#1057"  img = {discord}  />
            <Media link = "https://twitter.com/SABARISABS1" tag = "@sabz_qetuowryip_1357924680"  img = {twitter} />
          </div>


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
</div>
    );
  
}
}
export default Contact;
