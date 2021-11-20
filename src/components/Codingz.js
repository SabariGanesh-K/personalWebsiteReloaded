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
import python from '../shared/codingz/python.png';
import js from '../shared/codingz/js.png';
import react from '../shared/codingz/react.png'
import git from '../shared/codingz/git.png'
import html from '../shared/codingz/html.png'
import css from '../shared/codingz/css.png'
import github from "../shared/codingz/github.png";
import instagram from "../shared/codingz/instagram.png";
import hackerrank from "../shared/codingz/hackerrank.png";
import { Card,Row,Col } from "react-bootstrap";




function Codingz() {


  const inCard = "";
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
          textAlign:'center'
        }}
      >
        Here is A GLIMPSE.....
      </div>

<br/> <br/>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "center",
        }}
      >

       
        <Card
          style={{
            width: "10rem",
            backgroundColor: "black",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Card.Img
            variant="top"
            src={github}
            style={{ width: "50%"}}
          />
          <Card.Body>
            <Card.Title>OPEN SOURCE</Card.Title>
          </Card.Body>
        </Card>
         
      
        <Card
          style={{
            width: "10rem",
            backgroundColor: "darkgreen",
            borderRadius: "10px",
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
       
       
        <Card
          style={{
            width: "10rem",
            backgroundColor: "#bc2a8d",
            borderRadius: "10px",
            textAlign: "center",
       
          }}
        >
          <Card.Img
            variant="top"
            src={instagram}
            style={{ width: "50%" }}
          />
          <Card.Body>
            <Card.Title>INSTA creations</Card.Title>
          </Card.Body>
        </Card>
      
      </div>
          <br/> <br/>
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
      
      <div className = "container" >
          <Row style = {{textAlign:'center'}}>
            <Col>
            <img src = {python} width = "15%" height = "15%" style = {{padding:'20px'}}/>
            <img src = {js} width = "15%" height = "15%" style = {{padding:'20px'}}/>
            <img src = {react} width = "15%" height = "15%" style = {{padding:'20px'}}/>
            </Col>
          </Row>
      </div>
      <div>my works</div>
      <div>Honours and achievements</div>
    </div>
  );
}
export default Codingz;
