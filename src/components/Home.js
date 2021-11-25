import { Carousel } from "react-responsive-carousel";
import { Row, Col, Container } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import demo from "../shared/home/carouselBG.jpg";
import dp from "../shared/home/dp.png";
import homeintro from "../shared/home/homeintro.png";
import dpintro from "../shared/home/dpintro.png";
function Home() {
  return (
    <div className="home">
      <div style = {{display:'flex',justifyContent:'center'}}> 
        <img src = {homeintro} width='50%'/>
         </div>
      <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
      <div
        className="carousel-container"
        style={{
          display: "flex",
          textAlign: "center",
          alignContent: "center",
          width:'75%'
        //   paddingLeft: "5rem",
        //   paddingRight: "5rem",
        }}
      >
        <Carousel style={{ display: "flex", textAlign: "center" }}>
          <div>
            <img src={demo} />
            <p className="legend"> First slide</p>
          </div>

          <div>
            <img src={demo} />
            <p className="legend"> First slide</p>
          </div>

          <div>
            <img src={demo} />
            <p className="legend"> First slide</p>
          </div>
        </Carousel>
      </div>
      </div>

      <div
        className="glass"
        height="45%"
        width="100%"
      
        // style={{ paddingLeft: "12rem" }}
      >
        <Container>
          <Row auto>
            <Col auto>
              <img
                src={dp}
                height="45%"
                width="45%"
         
              />
              <img
                src={dpintro}
                height="50%"
                width="50%"
         
              />
              <span
                height="45%"
                width="45%"
                
             
              >
               
                  <Row>
                <a href = "#"><span className="fa fa-3x fa-linkedin" style = {{paddingLeft : '3rem',color:'blue'}} /> </a>
                <a href = "#"><span className="fa fa-3x fa-instagram" style = {{paddingLeft : '3rem',color:'#f5022f'}} /> </a>
                <a href = "#"><span className="fa fa-3x fa-github"style = {{paddingLeft : '3rem',color:'white'}} /> </a>
                
                </Row>
              </span>
              
            </Col>
          </Row>
        </Container>
      </div>

      <div>ABOUT</div>
    </div>
  );
}

export default Home;
