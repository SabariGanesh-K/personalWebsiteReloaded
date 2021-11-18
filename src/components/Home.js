import { Carousel } from "react-responsive-carousel";
import { Row, Col, Container } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import demo from "../shared/home/carouselBG.jpg";
import dp from "../shared/home/dp.png";
function Home() {
  return (
    <div className="home">
      <div>WELCOME</div>
      <div
        className="carousel-container"
        style={{
          display: "flex",
          textAlign: "center",
          alignContent: "center",
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
                //   style={{ paddingLeft: "1rem" }}
              />
              <span
                height="45%"
                width="45%"
                
                //   style={{ paddingLeft: "1rem" }}
              >
                  <Row>
                <a href = "#"><span className="fa fa-3x fa-linkedin" style = {{paddingLeft : '3rem'}} /> </a>
                <a href = "#"><span className="fa fa-3x fa-instagram" style = {{paddingLeft : '3rem'}} /> </a>
                <a href = "#"><span className="fa fa-3x fa-github"style = {{paddingLeft : '3rem'}} /> </a>
                
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
