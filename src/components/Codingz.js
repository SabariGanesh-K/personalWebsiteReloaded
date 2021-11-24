import React, { Component } from "react";
// import {
//   Row,
//   Col,
//   CardBody,
//   CardTitle,
//   CardImg,
//   CardText,
//   Button,
// } from "reactstrap";
import demo from "../shared/home/carouselBG.jpg";
import python from "../shared/codingz/python.png";
import js from "../shared/codingz/js.png";
import react from "../shared/codingz/react.png";
import git from "../shared/codingz/git.png";
import html from "../shared/codingz/html.png";
import css from "../shared/codingz/css.png";
import github from "../shared/codingz/github.png";
import instagram from "../shared/codingz/instagram.png";
import hackerrank from "../shared/codingz/hackerrank.png";
import hacto2020 from "../shared/codingz/hacto2020.jpg"
import hacto2021 from "../shared/codingz/hacto2021.jpg"
import hacto2020swags from "../shared/codingz/hacto2020swags.png"
import courserafrontend from "../shared/codingz/courserafrontend.jpg"
import udemykotlin from "../shared/codingz/udemykotlin.jpg"
import badges from "../shared/codingz/badges.png"
import { Card, Row, Col } from "react-bootstrap";
import RenderProject from "./Projects";
import { Carousel } from "react-responsive-carousel";


class Codingz extends Component {
  render() {
    return (
      <div>
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
        <br />
        <br />
        <div
          className="container"
          style={{
            fontFamily: "Roboto Slab",
            color: "black",
            fontWeight: "bolder",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Here is A GLIMPSE.....
        </div>
        <br /> <br />
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Row>
            <Col style={{ padding: "0.5rem" }}>
              <Card
                style={{
                  width: "7.5rem",
                  backgroundColor: "black",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Card.Img variant="top" src={github} style={{ width: "50%" }} />
                <Card.Body>
                  <Card.Title>
                    OPEN <br /> SOURCE
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "0.5rem" }}>
              <Card
                style={{
                  width: "7.5rem",
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
                  <Card.Title>COMPETITIVE CODING</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: "0.5rem" }}>
              <Card
                style={{
                  width: "7.5rem",
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
                  <Card.Title>
                    INSTA <br />
                    creations
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <br /> <br />
        <div
          style={{
            fontFamily: "Roboto Slab",
            color: "black",
            fontWeight: "bolder",
            fontSize: "2rem",
          }}
        >
          MY SKILLS INCLUDE
        </div>
        <br />
        <br />
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
        <br />
        <br />
        <div
          className="container"
          style={{
            fontFamily: "Roboto Slab",
            color: "black",
            fontWeight: "bolder",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          MY WORKS{" "}
        </div>
        <br />
        <div>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <RenderProject
              skill="PERSONAL WEBSITE"
              tag="<This Website/>"
              desc="This is a website blah blah blah blahcbeijvbvkbedkjvbvnkdjn"
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="uses blah blah and all"
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "left" }}>
            <RenderProject
              skill="WIX WEBSITE"
              tag="<Personal website 2/>"
              desc="This is a website blah blah blah blahcbeijvbvkbedkjvbvnkdjn"
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="Uses blah,blah and all"
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "right" }}>
            <RenderProject
              skill="SECUREZ"
              tag="<Desktop app/>"
              desc="This is a website blah blah blah blahcbeijvbvkbedkjvbvnkdjn"
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="Uses blah,blah and all"
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "left" }}>
            <RenderProject
              skill="COVID TRACKER"
              tag="<Guided/>"
              desc="This is a website blah blah blah blahcbeijvbvkbedkjvbvnkdjn"
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="Uses blah,blah and all"
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "right" }}>
            <RenderProject
              skill="Restaurant Website"
              tag="<Guided/>"
              desc="This is a website blah blah blah blahcbeijvbvkbedkjvbvnkdjn"
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="Uses blah,blah and all"
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "left" }}>
            <RenderProject
              skill="PORTFOLIO"
              tag="<ONLY DESKTOP />"
              desc="This is a website blah blah blah blahcbeijvbvkbedkjvbvnkdjn"
              git="cfecec.com"
              view="fewcfecfe.com"
              uses="Uses blah,blah and all"
            />
          </div>
        </div>
        <br/><br/><br/>
        <div
          className="container"
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
        <br/>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ fontFamily: "Audiowide", fontSize: "2rem" }}>
            HACTOBERFEST{" "}
          </div>
        </div>
  
          <span style = {{display:'flex',textAlign:'center',justifyContent:'center'}}>
         I successfully completed the Hactoberfest challenge consecutively for  2years 2020 and 2021 
         </span>
         
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
          width:'50%'
        //   paddingLeft: "5rem",
        //   paddingRight: "5rem",
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
     

        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ fontFamily: "Audiowide", fontSize: "2rem",textAlign:'center' }}>
            HACKERRANK BADGES {" "}
          </div>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span style = {{display:'flex',textAlign:'center',justifyContent:'center'}}>
          Starting my journey with Competitive programming ,I achieved following badges in Hackerrank
          </span>
          </div>
          <br />
          <div className = "container" style = {{display:'flex',justifyContent:'center'}}>
          <img src = {badges} width='75%'/>
          </div>
        
          <br/><br/>

        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ fontFamily: "Audiowide", fontSize: "2rem" }}>
            COURSES{" "}
          </div>
        </div>
          <span style = {{display:'flex',textAlign:'center',justifyContent:'center'}}>
          Sucessfully completed these online courses to gain TECH skills
          </span>
        
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
          width:'50%'
        //   paddingLeft: "5rem",
        //   paddingRight: "5rem",
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

      <br/><br/>
      </div>

      
    );
  }
}
export default Codingz;
