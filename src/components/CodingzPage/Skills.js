import React, { PureComponent, useContext, useEffect } from "react";
import python from "./Media/python.jpg";
import js from "./Media/js.jpg";
import react from "./Media/react.jpg";
import git from "./Media/git.jpg";

import next from "./Media/next.jpg";
import ethers from "./Media/ethers.jpg";
import angular from "./Media/angular.jpg";
import node from "./Media/node.png";
import rest from "./Media/rest.png";
import ts from "./Media/ts.png";
import tailwind from "./Media/tailwind.png";
import mui from "./Media/mui.png";
import foundry from './Media/foundry.png'
import tweb from './Media/3web.png'

import qn from "./Media/qnode.png";
import truffle from "./Media/truffle.png";
import alchemy from "./Media/alchemy.png";
import brownie from "./Media/brownie.png";
import aave from "./Media/aave.jpeg";
import defi from "./Media/defi.png";
import oz from "./Media/oz.png";
import chain from "./Media/chainlink.png";

import solidity from "./Media/solidity.jpg";
import moralis from "./Media/moralis.jpg";
import hardhat from "./Media/hardhat.jpg";

import { Row, Col } from "react-bootstrap";
import firebase from "./Media/firebase.jpg";
import reactnative from "./Media/reactnative.jpg";
import expo from "./Media/expo.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./codingz.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export const Skills = () => {
  return (
    <div>
      {" "}

      <br />
      <br />
      <ScrollAnimation animateIn="animate__flipInX" animateOnce={true}>
        <div className="subtitle">Blockchain Skills</div>
        <div className="container">
          <Row style={{ textAlign: "center" }}>
            <Col>
              <img src={solidity} className="skill_logo" alt="skill" />
              <img src={hardhat} className="skill_logo" alt="skill" />
              <img src={truffle} className="skill_logo" alt="skill" />
              <img src={brownie} className="skill_logo" alt="skill" />
              <img src={foundry} className="skill_logo" alt="skill" />

              <img src={moralis} className="skill_logo" alt="skill" />
              <img src={qn} className="skill_logo" alt="skill" />
              <img src={alchemy} className="skill_logo" alt="skill" />
              <img src={tweb} className="skill_logo" alt="skill" />

              <img src={aave} className="skill_logo" alt="skill" />
              <img src={defi} className="skill_logo" alt="skill" />
              <img src={oz} className="skill_logo" alt="skill" />
              <img src={chain} className="skill_logo" alt="skill" />

              <img src={ethers} className="skill_logo" alt="skill" />
            </Col>
          </Row>
        </div>
        <div className="subtitle">Full Stack Dev Skills</div>
        <div className="container">
          <Row style={{ textAlign: "center" }}>
            <Col>
              <img src={react} className="skill_logo" alt="skill" />
              <img src={next} className="skill_logo" alt="skill" />
              <img src={angular} className="skill_logo" alt="skill" />
              <img src={firebase} className="skill_logo" alt="skill" />
              <img src={node} className="skill_logo" alt="skill" />
              <img src={rest} className="skill_logo" alt="skill" />
            <img src={reactnative} className="skill_logo" alt="skill" />
              <img src={expo} className="skill_logo" alt="skill" />
              <img src={js} className="skill_logo" alt="skill" />
              <img src={ts} className="skill_logo" alt="skill" />
              <img src={git} className="skill_logo" alt="skill" />
              <img src={tailwind} className="skill_logo" alt="skill" />
              <img src={mui} className="skill_logo" alt="skill" />
            </Col>
          </Row>
        </div>

        <br />
      </ScrollAnimation>
      <br />
      <br />
    </div>
  );
};
