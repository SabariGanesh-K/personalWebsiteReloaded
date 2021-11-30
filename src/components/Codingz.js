import React, { PureComponent } from "react";
import python from "../shared/codingz/python.png";
import js from "../shared/codingz/js.jpg";
import react from "../shared/codingz/react.jpg";
import git from "../shared/codingz/git.png";
import html from "../shared/codingz/html.png";
import css from "../shared/codingz/css.png";
import github from "../shared/codingz/github.jpg";
import instagram from "../shared/codingz/instagram.png";
import hackerrank from "../shared/codingz/hackerrank.jpg";
import hacto2020 from "../shared/codingz/hacto2020.jpg"
import hacto2021 from "../shared/codingz/hacto2021.jpg"
import hacto2020swags from "../shared/codingz/hacto2020swags.png"
import courserafrontend from "../shared/codingz/courserafrontend.jpg"
import udemykotlin from "../shared/codingz/udemykotlin.jpg"
import badges from "../shared/codingz/badges.jpg"
import { Card, Row, Col } from "react-bootstrap";
import RenderProject from "./Projects";
import { Carousel } from "react-responsive-carousel";

import ScrollAnimation from 'react-animate-on-scroll';

import "animate.css/animate.min.css";
class Codingz extends PureComponent {
  render() {
    return (
   
      <div className = "codingz">
        <ScrollAnimation animateIn="animate__slideInDown" animateOnce = {true}>
        <div
          className="container"
          style={{
            display: "flex",
            fontFamily: "Grechen Fuemen",
            fontSize: "3rem",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          In ❤️ with CODING , <br /> exploring WEB 3.0 🚀🚀🚀
        </div>
         </ScrollAnimation> 
        <br />
        <br />
         <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce = {true}> 
        <div
          className="glass"
          style={{
            fontFamily: "Roboto Slab",
            color: "black",
            fontWeight: "bolder",
            fontSize: "2rem",
            textAlign: "left",
            
          }}
        >
          Here is A GLIMPSE.....
        </div>
       </ScrollAnimation> 
        <br /> <br />
         <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce = {true}> 
        <div
          className="container"
          style={{
            position:'relative',
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Row>
            <Col style={{ padding: "0.5rem" }}>
              <Card
                style={{
                  width: "100%",
                  backgroundColor: "black",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Card.Img variant="top" src={github} style={{ width: "50%" }} />
                <Card.Body>
                <span style = {{color:'white',fontWeight:'bolder'}}>
                  <Card.Title>
                 
                    OPEN <br /> SOURCE
                  </Card.Title>
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "0.5rem" }}>
              <Card
                style={{
                  width: "100%",
                  backgroundColor: "green",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  src={hackerrank}
                  style={{ width: "50%" }}
                />
                <Card.Body>
                  <span style = {{color:'white',fontWeight:'bolder'}}>
                  <Card.Title>COMPETITIVE <br/> CODING</Card.Title>
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "0.5rem" }}>
              <Card
                style={{
                  width: "100%",
                  backgroundColor: "#bc2a8d",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Card.Img
                  variant="top"
                  src={instagram}
                  style={{ width: "50%" }}
                />

                <Card.Body>
                <span style = {{color:'white',fontWeight:'bolder'}}>
                  <Card.Title>
                    INSTA <br />
                    creations
                  </Card.Title>
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
       </ScrollAnimation> 
        <br /> <br />
         <ScrollAnimation animateIn="animate__backInLeft" animateOnce = {true}> 
        <div
        className='glass'
          style={{
            fontFamily: "Roboto Slab",
            color: "black",
            fontWeight: "bolder",
            fontSize: "2rem",
          }}
        >
          MY SKILLS INCLUDE
        </div>
       </ScrollAnimation> 
        <br />
        <br />
         <ScrollAnimation animateIn="animate__flipInX" animateOnce = {true}> 
        <div className="container">
          <Row style={{ textAlign: "left" }}>
            <Col>
              <img
                src={python}
                width="15%"
                height="15%"
                style={{ padding: "20px" }}
              />
              <img
                src={js}
                width="15%"
                height="15%"
                style={{ padding: "20px" }}
              />
              <img
                src={react}
                width="15%"
                height="15%"
                style={{ padding: "20px" }}
              />
            </Col>
          </Row>
        </div>
    
        <br />
        <div className="container">
          <Row style={{ textAlign: "right" }}>
            <Col>
              <img
                src={git}
                width="15%"
                height="15%"
                style={{ padding: "20px" }}
              />
              <img
                src={html}
                width="15%"
                height="15%"
                style={{ padding: "20px" }}
              />
              <img
                src={css}
                width="15%"
                height="15%"
                style={{ padding: "20px" }}
              />
            </Col>
          </Row>
        </div>
       </ScrollAnimation> 
        <br />
        <br />
         <ScrollAnimation animateIn="animate__flipInX" animateOnce = {true}> 
        <div
          className="glass"
          style={{
            fontFamily: "Roboto Slab",
            color: "black",
            fontWeight: "bolder",
            fontSize: "2rem",
            textAlign: "left",
          }}
        >
          MY WORKS{" "}
        </div>
     </ScrollAnimation> 
        <br />
        
        <div>
         <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce = {true}> 
          <div style={{ display: "flex", justifyContent: "right" }}>
            <RenderProject
              skill="PERSONAL WEBSITE"
              tag="<This Website/>"
              desc="This is a website which contains every BIT about me and my Cool coding works."
              desc2 = "Currently it is being hosted with help of github"
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="USES:- HTML 5 , CSS 3 , JS , ReactJS , Redux , Bootstrap , FontAwesome"
           
            />
          </div>
           </ScrollAnimation > 
          <br />
           <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce = {true}> 
          <div style={{ display: "flex", justifyContent: "left" }}>
            <RenderProject
              skill="WIX WEBSITE"
              tag="<Personal website 2/>"
              desc="This is again a personal website but created using Wix.com and its tools"
              desc2 = ""
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="USES:- Wix.com"
 
            />
           
          </div>
           </ScrollAnimation> 
          <br />
           <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce = {true}> 
          <div style={{ display: "flex", justifyContent: "right" }}>
            <RenderProject
              skill="SECUREZ"
              tag="<Desktop app/>"
              desc="This is a desktop app that implements a automated security call, "
              desc2 = "message to our contacts while in danger by just  a single click!"
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="Uses Python 3,Twilio,MySQL,Tkinter"
       
            />
          </div>
           </ScrollAnimation> 
          <br />
           <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce = {true}> 
          <div style={{ display: "flex", justifyContent: "left" }}>
            <RenderProject
              skill="COVID TRACKER"
              tag="<Guided/>"
              desc="This is a website created with guidance of JSmastery Youtuber. It fetches  "
              desc2 = " covid statistics froma public API and displays it with a visualization."
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="USES:- HTML 5 , CSS 3, JS , ReactJS , ChartJS,MaterialUI"
         
            />
          </div>
           </ScrollAnimation>/ 
          <br />
           <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce = {true}> 
          <div style={{ display: "flex", justifyContent: "right" }}>
            <RenderProject
              skill="Restaurant Website"
              tag="<Guided/>"
              desc="This is a  website done as a part of Coursera course I took. It was  guided by course  "
              desc2 = "instructor . It represents details about a Retaurant,its menu and management"
              git=""
              view="fewcfecfe.com"
              uses="USES:- HTML 5 , CSS 3 , Bootstrap , ReactJS , Redux , FontAwesome , "
              
            />
          </div>
           </ScrollAnimation> 
          <br />
           <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce = {true}> 
          <div style={{ display: "flex", justifyContent: "left" }}>
            <RenderProject
              skill="PORTFOLIO"
              tag="<ONLY DESKTOP />"
              desc="This is a failed project which I attempted using HTML , CSS to recreate my own Wix website."
              desc2 = "It was published but is now deprecated due to its lack of responsiveness with devices :( "
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="USES:- HTML 5 , CSS 3 "
           
            />
          </div>
           </ScrollAnimation> 
        </div>
        <br/><br/><br/>
         <ScrollAnimation animateIn="animate__flipInX" animateOnce = {true}> 
        <div
          className="glass"
          style={{
            fontFamily: "Roboto Slab",
            color: "black",
            fontWeight: "bolder",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Honours and achievements
        </div>
       </ScrollAnimation> 
        <br/>
         <ScrollAnimation animateIn="animate__flipInX" animateOnce = {true}> 
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ fontFamily: "Audiowide", fontSize: "2rem" ,color:'black'}}>
            HACTOBERFEST{" "}
          </div>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span style = {{display:'flex',textAlign:'center',justifyContent:'center',fontWeight:'bolder'}}>
         I successfully completed the Hactoberfest challenge consecutively for  2years 2020 and 2021 
         </span>
         </div>
         
          <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
        className="carousel-container"
        style={{
          display:'flex',
          justifyContent:'center',
          textAlign: "center",
          alignContent: "center",
          padding:'2.5rem',
          fontSize:'2rem',
          width:'50%',
           paddingLeft: "5rem",
           paddingRight: "5rem",
        }}
      >
        <Carousel style={{ display: "flex", textAlign: "center",justifyContent:'center'}}>
          <div> 
            <img src={hacto2020swags} />
            
          </div>

          <div>
            <img src={hacto2020} />
            
          </div>

          <div>
            <img src={hacto2021} />
            
          </div>
        </Carousel>
      </div>
      </div>
     
       </ScrollAnimation> 
       <ScrollAnimation animateIn="animate__lightSpeedInLeft" animateOnce = {true}> 
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ fontFamily: "Audiowide", fontSize: "2rem",textAlign:'center' ,color:'black'}}>
            HACKERRANK BADGES {" "}
          </div>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span style = {{display:'flex',textAlign:'center',justifyContent:'center',fontWeight:'bolder'}}>
          Starting my journey with Competitive programming ,I achieved following badges in Hackerrank
          </span>
          </div>
          <br />
          <div className = "container" style = {{display:'flex',justifyContent:'center'}}>
          <img src = {badges} width='75%'/>
          </div>
        
          <br/><br/>
           </ScrollAnimation>
          <ScrollAnimation animateIn="animate__lightSpeedInRight" animateOnce = {true}> 
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ fontFamily: "Audiowide", fontSize: "2rem" ,color:'black'}}>
            COURSES{" "}
          </div>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
        <span style = {{display:'flex',textAlign:'center',justifyContent:'center',fontWeight:'bolder'}}>
          Sucessfully completed these online courses to gain TECH skills
          </span>
          </div>
          <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
        className="carousel-container"
        style={{
          display:'flex',
          justifyContent:'center',
          textAlign: "center",
          alignContent: "center",
          padding:'2.5rem',
          fontSize:'2rem',
          width:'50%',
           paddingLeft: "5rem",
           paddingRight: "5rem",
        }}
      >
        <Carousel style={{ display: "flex", textAlign: "center",justifyContent:'center'}}>
          <div> 
            <img src={courserafrontend} />
            
          </div>

          <div>
            <img src={udemykotlin} />
            
          </div>


        </Carousel>
      </div>
      </div>
      </ScrollAnimation>
     <ScrollAnimation animateIn="animate__rotateIn" animateOnce = {true}> 
      <div
          className="container"
          style={{
            display: "flex",
            fontFamily: "Grechen Fuemen",
            fontSize: "3rem",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
         MORE TO GO... <br />  🚀🚀🚀
        </div>
         </ScrollAnimation> 
      <br/><br/>
      </div>
    

      
    );
  }
}
export default Codingz;
