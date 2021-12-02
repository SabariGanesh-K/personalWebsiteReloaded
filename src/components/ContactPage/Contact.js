import React,{ Component }  from "react";
import { Button } from "reactstrap";
import instagram from "./Media/instagram.jpg";
import dp from "./Media/dp2.jpg";
import discord from "./Media/discord.jpg";
import medium from "./Media/medium.jpg";
import linkedin from "./Media/linkedin.jpg";
import twitter from "./Media/twitter.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import './contact.css'
import Delayer from "../HomePage/delayer";
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
        

        <ScrollAnimation animateIn="animate__flip" animateOnce={true}>
        <div
          className="container"
          style={{
            fontFamily: "estonia",
            fontSize: "4.5rem",
            display: "flex",
            justifyContent: "center",
            color:'white'
          }}
        >
          Lets Catch Up😈
        </div>
        </ScrollAnimation>
        <br />
        <ScrollAnimation animateIn="animate__flip" animateOnce={true}>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={dp} style={{ borderRadius: "15rem", width: "20rem" }} />
        </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__flip" animateOnce={true}> 
      
        <div
          className="container"
          style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
        >
          
          <img src={instagram} width="5%" style = {{borderRadius:'2rem'}} />

          <Button 
         
            style={{
              borderRadius: "1rem",
              backgroundColor: "rgb(204, 0, 102)",
             
            }}
          >
            <span >
              <a  href = "https://www.instagram.com/sabz_qetuowryip_1357924680/" target = "_blank" style = {{textDecoration:'none',color: "black", fontWeight: "bolder"}}>
              @sabz_qetuowryip_1357924680
              </a>
            </span>
          </Button>
   </div>
    
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__flip" animateOnce={true}> 
      
        <div
          className="container"
          style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
        >
          <img src={instagram} width="5%" style = {{borderRadius:'2rem'}} />

          <Button 
            style={{
              borderRadius: "1rem",
              backgroundColor: "rgb(204, 0, 102)",
            }}
          >
            {" "}
            &nbsp; &nbsp;&nbsp; &nbsp;{" "}
            <span >
            <a  href = "https://www.instagram.com/beingcodeworm/" target = "_blank" style = {{textDecoration:'none',color: "black", fontWeight: "bolder"}}>
              @beingcodeworm{" "}
              </a>
            </span>
            &nbsp; &nbsp;&nbsp; &nbsp;{" "}
          </Button>
        </div>
      
         </ScrollAnimation>

        <ScrollAnimation animateIn="animate__flip" animateOnce={true}> 
        
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "right",
            padding: "1rem",
          }}
        >
          <img src={linkedin} width="5%" style = {{borderRadius:'2rem'}} />

          <Button
            style={{
              borderRadius: "1rem",
              backgroundColor: "rgb(0, 102, 255)",
            }}
          >

            <span >
            <a  href = "https://www.linkedin.com/in/sabariganeshk/" target = "_blank" style = {{textDecoration:'none',color: "black", fontWeight: "bolder"}}>
              @sabariganeshk{" "}
              </a>
            </span>{" "}
          
            &nbsp; &nbsp;
          </Button>
        </div>
      
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__flip" animateOnce={true}> 
       
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "right",
            padding: "1rem",
          }}
        >
          <img src={medium} width="5%" style = {{borderRadius:'2rem'}}/>

          <Button
            style={{
              borderRadius: "1rem",
              backgroundColor: "white",
            }}
          >
            <span>
            <a  href = "https://medium.com/@k.sabarii.ganesh/" target = "_blank" style = {{textDecoration:'none',color: "black", fontWeight: "bolder"}}>
              @k.sabarii.ganesh
              </a>
            </span>
          </Button>
        </div>
    
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__flip" animateOnce={true}> 
       
        <div
          className="container"
          style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
        >
          <img src={discord} width="5%" style = {{borderRadius:'2rem'}} />

          <Button style={{ borderRadius: "1rem", backgroundColor: "#a366ff" }}>
            <span style={{ color: "black", fontWeight: "bolder" }}>
              @SabariGaneshK#1057
            </span>
          </Button>
        </div>
        
       </ScrollAnimation>

        <ScrollAnimation animateIn="animate__flip" animateOnce={true}> 
        
        <div
          className="container"
          style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
        >
          <img src={twitter} width="5%" style = {{borderRadius:'2rem'}} />

          <Button 
            style={{ borderRadius: "1rem", backgroundColor: "lightblue" }}
          >
            &nbsp; &nbsp;{" "}
             <span >
             <a  href = "https://twitter.com/SABARISABS1" target = "_blank" style = {{textDecoration:'none',color: "black", fontWeight: "bolder"}}>
              @SABARISABS1
           </a>
            </span>
            
            &nbsp; &nbsp; &nbsp;
          </Button>
        </div>
       
        </ScrollAnimation>

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
