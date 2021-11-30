import { Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
function RenderProject({ skill, tag, desc, git, view, uses,desc2 }) {
    return (
      <div
        className="projectBGM"
        
      >
        <Row>
          <Col>
            <span style={{ fontSize: "2rem" ,color:'#360167',backgroundColor:'#FB8CAB'}}>{skill}</span>
            <span style={{ fontSize: "1rem" ,color:'chocolate'}}> {tag}</span>
          </Col>
  
          <Col style={{ fontSize: "1rem", textAlign: "center",color:'white'}}>
            <span >{desc}</span>
            <br/>
            <span>{desc2}</span>
          </Col>
          <br/>
          <Col style={{ fontSize: "1rem", textAlign: "center",color:'white' }}>
            <span>{uses}</span>
          </Col>
  
          <Col>
            <Button
           
              style={{
                fontSize: "2rem",
                background: "white",
                color: "black",
              }}
            >
              VIEW &gt;
            </Button>

            <Button
           
           style={{
             fontSize: "2rem",
             background: "black",
             color: "white",
           }}
         >
           GITHUB &gt;
         </Button>

          </Col>
        </Row>
      </div>
    );
  }

  export default RenderProject;