import React, { PureComponent } from "react";
import python from "./Media/python.jpg";
import js from "./Media/js.jpg";
import react from "./Media/react.jpg";
import git from "./Media/git.jpg";
import html from "./Media/html.jpg";
import css from "./Media/css.jpg";
import github from "./Media/github.jpg";
import instagram from "./Media/instagram.jpg";
import hackerrank from "./Media/hackerrank.jpg";
import hacto2020 from "./Media/hacto2020.jpg";
import hacto2021 from "./Media/hacto2021.jpg";
import hacto2020swags from "./Media/hacto2020swags.jpg";
import courserafrontend from "./Media/courserafrontend.jpg";
import udemykotlin from "./Media/udemykotlin.jpg";
import badges from "./Media/badges.jpg";
import { Card, Row, Col } from "react-bootstrap";

import { Carousel } from "react-responsive-carousel";
import "./codingz.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
class Codingz extends PureComponent {
  render() {
    return (
      <div className="codingz">
        <ScrollAnimation animateIn="animate__slideInDown" animateOnce={true}>
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
        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce={true}>
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
        <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce={true}>
          <div
            className="container"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Row>
              <Col style={{ padding: "0.5rem" }}>
                <a href="https://github.com/SabariGanesh-K" target="_blank" style = {{textDecoration:'none'}}>
                  <Card
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={github}
                      style={{ width: "50%",borderRadius:'45px' }}
                    />
                    <Card.Body>
                      <span style={{ color: "white", fontWeight: "bolder" }}>
                        <Card.Title>
                          OPEN <br /> SOURCE 🔥
                        </Card.Title>
                      </span>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: "0.5rem" }}>
                <a
                  href="https://www.hackerrank.com/K_Sabari_Ganesh"
                  target="_blank"
                  style = {{textDecoration:'none'}}
                >
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
                      style={{ width: "50%",borderRadius:'45px'  }}
                    />
                    <Card.Body>
                      <span style={{ color: "white", fontWeight: "bolder" }}>
                        <Card.Title>
                          COMPETITIVE <br /> CODING 🚀
                        </Card.Title>
                      </span>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
            <Row>
              <Col style={{ padding: "0.5rem" }}>
                <a
                  href="https://www.instagram.com/beingcodeworm/"
                  target="_blank"
                  style = {{textDecoration:'none'}}
                >
                  <Card
                    style={{
                      width: "100%",
                      backgroundColor: "#bc2a8d",
                      borderRadius: "8px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={instagram}
                      style={{ width: "50%",borderRadius:'45px'  }}
                    />

                    <Card.Body>
                      <span style={{ color: "white", fontWeight: "bolder" }}>
                        <Card.Title>
                          INSTA <br />
                          creations 🤩
                        </Card.Title>
                      </span>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          </div>
        </ScrollAnimation>
        <br /> <br />
        <ScrollAnimation animateIn="animate__backInLeft" animateOnce={true}>
          <div
            className="glass"
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
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
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
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
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
        <br />
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                fontFamily: "Audiowide",
                fontSize: "2rem",
                color: "black",
              }}
            >
              HACTOBERFEST{" "}
            </div>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                fontWeight: "bolder",
              }}
            >
              I successfully completed the Hactoberfest challenge consecutively
              for2years 2020 and 2021{" "}
            </span>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="carousel-container"
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                padding: "2.5rem",
                fontSize: "2rem",
                width: "50%",
                paddingLeft: "5rem",
                paddingRight: "5rem",
              }}
            >
              <Carousel
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
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
        <ScrollAnimation
          animateIn="animate__lightSpeedInLeft"
          animateOnce={true}
        >
          {" "}
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                fontFamily: "Audiowide",
                fontSize: "2rem",
                textAlign: "center",
                color: "black",
              }}
            >
              HACKERRANK BADGES{" "}
            </div>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                fontWeight: "bolder",
              }}
            >
              Starting my journey with Competitive programming ,I achieved
              following badges in Hackerrank
            </span>
          </div>
          <br />
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={badges} width="75%" />
          </div>
          <br />
          <br />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__lightSpeedInRight"
          animateOnce={true}
        >
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                fontFamily: "Audiowide",
                fontSize: "2rem",
                color: "black",
              }}
            >
              COURSES{" "}
            </div>
          </div>
          <div
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                fontWeight: "bolder",
              }}
            >
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
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                padding: "2.5rem",
                fontSize: "2rem",
                width: "50%",
                paddingLeft: "5rem",
                paddingRight: "5rem",
              }}
            >
              <Carousel
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
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
        <br />
        <br />
        <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
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
  
        <br />
        <ScrollAnimation animateIn="animate__rotateIn" animateOnce={true}>
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
            MORE TO GO... <br />
            🚀🚀🚀
          </div>
        </ScrollAnimation>{" "}
        <br />
        <br />
      </div>
    );
  }
}
export default Codingz;
