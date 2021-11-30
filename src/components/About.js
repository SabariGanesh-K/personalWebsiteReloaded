import vit from "../shared/about/vit.jpg";
import nsn from "../shared/about/nsn.jpg";
import leader from "../shared/about/leader.jpg";
import karate from "../shared/about/karate.jpg";
import aboutdp from "../shared/about/aboutdp.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import React,{ PureComponent }  from "react";
 <span style = {{fontFamily:'Dancing Script',fontSize:'2rem'}}></span> 
class About extends PureComponent {
  render(){
  return (
  
    <div className = "about">
             <ScrollAnimation animateIn="animate__slideInLeft" animateOnce = {true}>
      <div style = {{textAlign:'center',justifyContent:'center'}}>

  
          <br/><br/>

            <img src = {aboutdp} style = {{width:'25rem'}}/>
            <br/><br/>
            <div style = {{display :'flex', textAlign:'center',justifyContent:'center'}}>
            <div  className = "glass" style = {{textAlign:'center',width:'80%',fontFamily:'Dancing Script',fontWeight:'bolder', fontSize:'2rem'}}>
              <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            </div>
            </div>

      </div>
      </ScrollAnimation >
    
      <br />
      <ScrollAnimation animateIn="animate__slideInRight" animateOnce = {true}>
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
        <div className = "container" style = {{fontSize:'1.5rem',fontWeight:'bolder'}}>
          I PURSUING MY UG  @
        </div>
        <br/>
        <div style = {{display:'flex',justifyContent:'center'}}>
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
        <div className = "container" style = {{fontSize:'1.5rem',fontWeight:'bolder'}}>
          I COMPLETED MY SCHOOL LIFE @
        </div>
        <br/>
        <div style = {{display:'flex',justifyContent:'center'}}>
          <div  style = {{display:'flex',justifyContent:'left'}}>
          <div  className = "glass" style = {{display:'flex',justifyContent:'center',textAlign:'center'}}>
           NSN MEMORIAL SENIOR SECONDARY SCHOOL (2006=2021) <br/> CBSE : Grade 10 and Grade 12
            </div> 
            <img src = {nsn} width='50%'/>


          </div>
          <div style = {{display:'flex',justifyContent:'left'}}>
           
          </div>
        </div>
  
      </div>
      </ScrollAnimation >
      <br />
      <br />
      <div>
       <ScrollAnimation animateIn="animate__zoomInLeft" animateOnce = {true}>
       <div style={{ fontFamily: "Audiowide", fontSize: "2rem" ,color:'black'}}>NOT ONLY ACADEMICS :) , </div>
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
        </ScrollAnimation >
        <br />
        <ScrollAnimation animateIn="animate__zoomInRight" animateOnce = {true}>
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
        </ScrollAnimation >
      </div>
    </div>
   
  );
          }
}
export default About;
