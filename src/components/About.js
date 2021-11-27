import vit from "../shared/about/vit.jpg";
import nsn from "../shared/about/nsn.jpg";
import leader from "../shared/about/leader.jpg";
import karate from "../shared/about/karate.jpg";
import aboutdp from "../shared/about/aboutdp.jpg";
function About() {
  return (
    <div>
      <div>
        <div>{/* <img src = {aboutdp}width= "50%" /> */}</div>
      </div>
      <br />
      <div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          EDUCATION
        </div>
        <br/>
        <div className = "container">
          I PURSUING MY UG  @
        </div>
        <br/>
        <div styl = {{display:'flex',justifyContent:'center'}}>
          <div  style = {{display:'flex',justifyContent:'left'}}>
            <img src = {vit} width='50%'/>
            <div  className = "glass" style = {{display:'flex',justifyContent:'center',textAlign:'center'}}>
            VIT CHENNAI : BTECH (2021-2025) <br/>Computer Science and Engineering with specialization in Cyber Physical Systems
            </div>
          </div>
          <div style = {{display:'flex',justifyContent:'left'}}>
           
          </div>
        </div>
<br/><br/>
        <div className = "container">
          I COMPLETED MY SCHOOL LIFE @
        </div>
        <br/>
        <div styl = {{display:'flex',justifyContent:'center'}}>
          <div  style = {{display:'flex',justifyContent:'left'}}>
          <div  className = "glass" style = {{display:'flex',justifyContent:'center',textAlign:'center'}}>
           NSN MEMORIAL SENIOR SECONDARY SCHOOL (2006=2021) <br/>Computer Science and Engineering with specialization in Cyber Physical Systems
            </div>
            <img src = {nsn} width='50%'/>

          </div>
          <div style = {{display:'flex',justifyContent:'left'}}>
           
          </div>
        </div>
  
      </div>
      <br />
      <br />
      <div>
        <div>NOT ONLY ACADEMICS :) , </div>
        <br />
        <div
          style={{ position: "relative", textAlign: "center", color: "white" }}
        >
          <img
            src={leader}
            style={{
              width: "20rem",
              filter: "blur(1px)",
              WebkitFilter: "blur(1px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "0px",
            }}
          >
            <mark style={{ backgroundColor: "black", color: "white" }}>
              I equipped myself to be a LEADER acquiring relevant skills <br />{" "}
              <br /> by becoming the Assistant HEAD BOY and HEAD BOY of my
              School.
            </mark>
            <br />
          </div>
        </div>

        <br />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "black",
            fontWeight: "bolder",
          }}
        >
          <img
            src={karate}
            style={{
              width: "20rem",
              filter: "blur(1px)",
              WebkitFilter: "blur(1px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "0px",
              font: "orange",
            }}
          >
            <mark style={{ backgroundColor: "black", color: "white" }}>
              I attained a BROWN -1 grade in karate trained by <br />
              <br />
              UNIVERSAL SHITO-RYU SPORTS KARATE SCHOOL
            </mark>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
