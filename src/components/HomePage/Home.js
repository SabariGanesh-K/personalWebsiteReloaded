import { Carousel } from "react-responsive-carousel";
import { Row, Col, Container } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import './home.css'
import dp from "./Media/dp.jpeg";
import homeintro from "./Media/homeintro.png";
import dpintro from "./Media/dpintro.png";
import carousel1 from "./Media/carousel1.jpg";
import carousel2 from "./Media/carousel2.jpg";
import carousel3 from "./Media/carousel3.jpg";
import ScrollAnimation from 'react-animate-on-scroll';
import React, { PureComponent } from "react";

import "animate.css/animate.min.css";
function Home() {

return(
<div className="home" style={{ width: "100%" }}>

<div style={{ display: "flex", justifyContent: "center" }}><img src={homeintro} width="50%" /></div>
<ScrollAnimation animateIn="animate__fadeInRight" animateOnce = {true}> 
<div style={{ display: "flex", justifyContent: "center" }}><div className="carousel-container"style={{display: "flex",justifyContent: "center",textAlign: "center" ,alignContent: "center",width: "75%",paddingLeft: "5rem",paddingRight: "5rem",}}>
 <Carousel style={{}}>
<div><img src={carousel1} /></div>
<div><img src={carousel2} /></div>
<div><img src={carousel3} /></div>
</Carousel>
</div>
</div>
</ScrollAnimation >


<ScrollAnimation animateIn="animate__fadeInRight" animateOnce = {true}> 

<div style={{ display: "flex", justifyContent: "center" }}>
<div className="glass" height="45%" width="95%">
<Container><Row><Col>
<img src={dp} height="45%" width="45%" style={{ padding: "2%" }}/>
<img src={dpintro} height="50%" width="50%" />
<span height="45%" width="45%">
<Row style={{display: "flex",justifyContent: "center",background: "black",borderRadius: "2rem",padding: "1%",}}>
<a href="#"><span className="fa fa-3x fa-linkedin"style={{ color: "blue" }}/></a>&nbsp; &nbsp; &nbsp; &nbsp;
<a href="#"><span className="fa fa-3x fa-instagram"style={{ color: "#f5022f" }}/></a>&nbsp; &nbsp; &nbsp; &nbsp;
<a href="#"><span className="fa fa-3x fa-github"style={{ color: "white" }}/></a>
</Row></span></Col></Row></Container>
</div> </div></ScrollAnimation><br/><br/> 
<ScrollAnimation animateIn="animate__fadeInRight" animateOnce = {true}> 
<div className = "container" style = {{width:'100%',display:'flex',justifyContent:'center',textAlign:"center"}}> <span className = "mark"><span style = {{opacity:'1'}}> Lorem Ipsum is simply dummy text of the printing  <br/><br/>and typeseta galley of type and scrambled itto <br/><br/>make a type specimen book. It has survivednot only five centuries, <br/><br/>but also theleap into electronic typesetting,<br/><br/> remainingessentially unchanged.</span></span></div>
<br/><br/></ScrollAnimation></div>
);}
export default Home;