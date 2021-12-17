import { Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

function RenderProject({ skill, tag, desc, git, view, uses, desc2 }) {
  const Buttons = (view, git) => {
    console.log(view, git);
    if ((view === "nil") & (git === "nil")) {
      return (
        <span style={{ color: "black" }}>
          The project is temporarily not available for display.**Will be
          available soon{" "}
        </span>
      );
    } else if (git == "nil") {
      return (
        <Col>
          <Button
            href={view}
            target="_blank"
            style={{
              fontSize: "2rem",
              background: "white",
              color: "black",
              textDecoration: "none",
            }}
          >
            VIEW &gt;
          </Button>
        </Col>
      );
    } else if (view == "nil") {
      return (
        <Col>
          <Button
            href={git}
            target="_blank"
            style={{
              fontSize: "2rem",
              background: "black",
              color: "white",
              textDecoration: "none",
            }}
          >
            GITHUB &gt;
          </Button>
        </Col>
      );
    } 
    
    else {
      return (
        <Col>
          <Button
            href={view}
            target="_blank"
            style={{
              fontSize: "2rem",
              background: "white",
              color: "black",
              textDecoration: "none",
            }}
          >
            VIEW &gt;
          </Button>

          <Button
            href={git}
            target="_blank"
            style={{
              fontSize: "2rem",
              background: "black",
              color: "white",
              textDecoration: "none",
            }}
          >
            GITHUB &gt;
            {/* {Message} */}
          </Button>
        </Col>
      );
    }
  };
  return (
    <div className="projectBGM">
      <Row>
        <Col>
          <span
            style={{
              fontSize: "2rem",
              color: "#360167",
              backgroundColor: "#FB8CAB",
            }}
          >
            {skill}
          </span>
          <span style={{ fontSize: "1rem", color: "#360167" ,fontWeight:'bolder'}}> {tag}</span>
        </Col>

        <Col style={{ fontSize: "1rem", textAlign: "center", color: "white" }}>
          <span>{desc}</span>
          <br />
          <span>{desc2}</span>
        </Col>
        <br />
        <Col style={{ fontSize: "1rem", textAlign: "center", color: "white" }}>
          <span>{uses}</span>
        </Col>
        {Buttons(view, git)}
      </Row>
    </div>
  );
}

export default RenderProject;
