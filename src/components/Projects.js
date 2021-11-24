import { Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
function RenderProject({ skill, tag, desc, git, view, uses }) {
    return (
      <div
        className="container"
        style={{ background: "orange", padding: "2rem", borderRadius: "1rem" }}
      >
        <Row>
          <Col>
            <span style={{ fontSize: "2rem" }}>{skill}</span>
            <span style={{ fontSize: "1rem" }}> {tag}</span>
          </Col>
  
          <Col style={{ fontSize: "1rem", textAlign: "center" }}>
            <span>{desc}</span>
          </Col>
          <Col>
            <span>{uses}</span>
          </Col>
  
          <Col>
            <Button
              style={{
                fontSize: "2rem",
                background: "rgba(0,0,0,0)",
                color: "#d42404",
              }}
            >
              VIEW
            </Button>
            <Button
              style={{
                fontSize: "2rem",
                background: "rgba(0,0,0,0)",
                color: "black",
              }}
            >
              GITHUB
            </Button>
          </Col>
        </Row>
      </div>
    );
  }

  export default RenderProject;