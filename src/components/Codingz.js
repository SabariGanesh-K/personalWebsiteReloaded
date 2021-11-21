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
import { Card, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

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
          textAlign: "center",
        }}
      >
        Here is A GLIMPSE.....
      </div>
      <br /> <br />
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "center",
        }}
      > */}
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
      <div></div>
      <div>Honours and achievements</div>
      <div className="container">
        <Row style={{ textAlign: "center" }}>
          <Col>
            <span>PERSONAL WEBSITE</span>
            <span> &lt; This website/ &gt; </span>
          </Col>
          <Col>
            <span>
              This is a webite blah blah qhbewuhbidhcbidhchbdihcbdscwncjwdncj
            </span>
          </Col>
          <Col>
            <span>Uses:- blah, this,that</span>
          </Col>

          <Col>
          <Button >VIEW</Button>
          <Button >GITHUB</Button>
          </Col>
        </Row>

        
      </div>
    </div>
  );
}
export default Codingz;
