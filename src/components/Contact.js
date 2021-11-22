import { Button } from "reactstrap";
import instagram from "../shared/codingz/instagram.png";
import dp from "../shared/contact/dp2.png";
import discord from "../shared/contact/discord.png"
function Contact() {
  return (
    <div>
      <div
        className="container"
        style={{ fontFamily: "estonia", fontSize: "5rem",display:'flex',justifyContent:'center' }}
      >
        Lets Catch Up 🎉🎉
      </div>
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

        <Button style={{ borderRadius: "1rem" }}>@beingcodeworm</Button>
      </div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "right", padding: "1rem" }}
      >
        <img src={discord} width="5%" />

        <Button style={{ borderRadius: "1rem" }}>
          @SabariGaneshK#1057
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "right", padding: "1rem" }}
      >
        <img src={discord} width="5%" />

        <Button style={{ borderRadius: "1rem" }}>
          @SabariGaneshK#1057
        </Button>
        
      </div>

      <div
        className="container"
        style={{ display: "flex", justifyContent: "right", padding: "1rem" }}
      >
        <img src={discord} width="5%" />

        <Button style={{ borderRadius: "1rem" }}>
          @SabariGaneshK#1057
        </Button>
        
      </div>
    </div>
  );
}
export default Contact;
