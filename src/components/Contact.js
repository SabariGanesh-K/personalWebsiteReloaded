import { Button } from "reactstrap";
import instagram from "../shared/codingz/instagram.png";
import dp from "../shared/contact/dp2.png";
import discord from "../shared/contact/discord.png"
import medium from "../shared/contact/medium.png"
import linkedin from "../shared/contact/linkedin.png"
import twitter from "../shared/contact/twitter.jpg"

function Contact() {
  return (
    <div>
      <div
        className="container"
        style={{ fontFamily: "estonia", fontSize: "5rem",display:'flex',justifyContent:'center' }}
      >
        Lets Catch Up 🎉🎉🎉
      </div>
      <br/>
      <div className = "container" style = {{display:'flex',justifyContent:'center'}}>
          <img src = {dp} width = "30%" style = {{borderRadius:'15rem'}} />
      </div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
      >
        <img src={instagram} width="5%" />

        <Button style={{ borderRadius: "1rem",backgroundColor:"rgb(204, 0, 102)" }}>
        <span style = {{color:'black',fontWeight:'bolder'}}> @sabz_qetuowryip_1357924680 </span>
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
      >
        <img src={instagram} width="5%" />

        <Button style={{ borderRadius: "1rem" ,backgroundColor:"rgb(204, 0, 102)"}}> &nbsp; &nbsp;&nbsp; &nbsp;  <span style = {{color:'black',fontWeight:'bolder'}}>@beingcodeworm </span>&nbsp; &nbsp;&nbsp; &nbsp;  </Button>
      </div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "right", padding: "1rem" }}
      >
        <img src={linkedin} width="5%" />

        <Button style={{ borderRadius: "1rem" ,backgroundColor:"rgb(0, 102, 255)"}}>
        <span style = {{color:'white',fontWeight:'bolder'}}>
          @sabariganeshk </span> &nbsp; &nbsp; 
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "right", padding: "1rem" }}
      >
        <img src={medium} width="5%" />

        <Button style={{ borderRadius: "1rem" ,backgroundColor:"black"}}>
        <span style = {{color:'white',fontWeight:'bolder'}}>
        @k.sabarii.ganesh
        </span>
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
      >
        <img src={discord} width="5%" />

        <Button style={{ borderRadius: "1rem" ,backgroundColor:"#a366ff"}}>
        <span style = {{color:'black',fontWeight:'bolder'}}>
          @SabariGaneshK#1057
          </span>
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
      >
        <img src={twitter} width="5%" />

        <Button style={{ borderRadius: "1rem",backgroundColor:"lightblue" }}>
        &nbsp; &nbsp; <span style = {{color:'black',fontWeight:'bolder'}}>@SABARISABS1</span>&nbsp; &nbsp; &nbsp; 
        </Button>
        
      </div>
      <br/>
      <div
        className="container"
        style={{ fontFamily: "estonia", fontSize: "5rem",display:'flex',justifyContent:'center' }}
      >
        SEE YA ALL ..... :)
      </div>
      <div style = {{display:'flex',justifyContent:'center'}}>GOT FEEDBACKS ? WORRY NOT !! FEEL FREE TO SEND IT..</div>
      <br/><br/>
      <div style = {{display:'flex',justifyContent:'center'}}>
      
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScHjF_EzA1engfQ5MWiFrK-0UKRXejR2kFdqXAIbv7WqR0KDA/viewform?embedded=true" width="100%" height="1000rem" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
    </div>
  );
}
export default Contact;
