import "./contact.css";
import { Button } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
export default function SocialWidget({ logo, direction, link, bgColor, id }) {
  return (
    <ScrollAnimation animateIn="animate__fadeInRightBig" animateOnce={true}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: direction,
          padding: "1rem",
        }}
      >
        <a href={link} target="_blank">
          <Button
            style={{
              borderRadius: "1rem",
              backgroundColor: bgColor,
              width: "20rem",
              fontSize: "1rem",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            <img src={logo} width="10%" style={{ borderRadius: "2rem" }} /> {id}{" "}
          </Button>
        </a>
      </div>
    </ScrollAnimation>
  );
}
