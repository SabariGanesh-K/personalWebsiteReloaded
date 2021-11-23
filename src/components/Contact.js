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

        <Button style={{ borderRadius: "1rem" }}>
          @sabz_qetuowryip_1357924680
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
      >
        <img src={instagram} width="5%" />

        <Button style={{ borderRadius: "1rem" }}> &nbsp; &nbsp;&nbsp; &nbsp;  @beingcodeworm &nbsp; &nbsp;&nbsp; &nbsp;  </Button>
      </div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "right", padding: "1rem" }}
      >
        <img src={linkedin} width="5%" />

        <Button style={{ borderRadius: "1rem" }}>
          @sabariganeshk&nbsp; &nbsp; 
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "right", padding: "1rem" }}
      >
        <img src={medium} width="5%" />

        <Button style={{ borderRadius: "1rem" }}>
        @k.sabarii.ganesh
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
      >
        <img src={discord} width="5%" />

        <Button style={{ borderRadius: "1rem" }}>
          @SabariGaneshK#1057
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "left", padding: "1rem" }}
      >
        <img src={twitter} width="5%" />

        <Button style={{ borderRadius: "1rem" }}>
        &nbsp; &nbsp; @SABARISABS1&nbsp; &nbsp; &nbsp; 
        </Button>
        
      </div>
      <br/>
      <div
        className="container"
        style={{ fontFamily: "estonia", fontSize: "5rem",display:'flex',justifyContent:'center' }}
      >
        SEE YA ALL ..... :)
      </div>
      <br/><br/>

    </div>
  );
}
export default Contact;
