import React, { Component } from "react";

import instagram from "./Media/instagram.jpg";
import dp from "./Media/dp2.jpg";
import discord from "./Media/discord.jpg";
import medium from "./Media/medium.jpg";
import linkedin from "./Media/linkedin.jpg";
import twitter from "./Media/twitter.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./contact.css";
import SocialWidget from "./Socialwidget";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFeedbackOpen: false,
    };
    this.toggleButton = this.toggleButton.bind(this);
  }
  toggleButton() {
    this.setState({ isFeedbackOpen: !this.state.isFeedbackOpen });
  }

  render() {
    const feedBackForm = (status) => {
      if (status) {
        return (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScHjF_EzA1engfQ5MWiFrK-0UKRXejR2kFdqXAIbv7WqR0KDA/viewform?embedded=true"
            width="100%"
            height="1000rem"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        );
      }
    };
    return (
      <div className="contact">
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
//         <br/> <br/>
//          <SocialWidget
//           logo={instagram}
//           direction="left"
//           link="https://www.instagram.com/sabz_qetuowryip_1357924680/"
//           textColor="black"
//           bgColor="rgb(204, 0, 102)"
//           id="@sabz_qetuowryip_1357924680"
//         />
//  <br/> 
//         <SocialWidget
//           logo={instagram}
//           direction="left"
//           link="https://www.instagram.com/beingcodeworm/"
//           textColor="black"
//           bgColor="rgb(204, 0, 102)"
//           id="@beingcodeworm"
//         /> 
 <br/> <br/>
        <SocialWidget
          logo={linkedin}
          direction="right"
          link="https://www.linkedin.com/in/sabariganeshk/"
          textColor="black"
          bgColor="rgb(0, 102, 255)"
          id="@sabariganeshk"
        />
 <br/> 
        <SocialWidget
          logo={medium}
          direction="right"
          link="https://medium.com/@k.sabarii.ganesh/"
          textColor="black"
          bgColor="white"
          id="@k.sabarii.ganesh"
        />
 <br/> <br/>
        <SocialWidget
          logo={discord}
          direction="left"
          link="#"
          textColor="black"
          bgColor="#a366ff"
          id="@SabariGaneshK#1057"
        />
 <br/>
        <SocialWidget
          logo={twitter}
          direction="left"
          link="https://twitter.com/SABARISABS1"
          textColor="black"
          bgColor="lightblue"
          id=" @SABARISABS1"
        />
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: "1rem",
              textAlign: "center",
              color: "white",
            }}
          >
            GOT FEEDBACKS ? WORRY NOT !! FEEL FREE TO SEND IT..
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="feedback">
              <button class="bttn" onClick={this.toggleButton}>
                OPEN FEEDBACK
              </button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__flip" animateOnce={true}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {feedBackForm(this.state.isFeedbackOpen)}
            <br />
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}
export default Contact;
