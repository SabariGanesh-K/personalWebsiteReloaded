import vit from "../shared/about/vit.jpg";
import nsn from "../shared/about/nsn.jpg";
import leader from "../shared/about/leader.jpg";
import karate from "../shared/about/karate.jpg";
function About() {
  return (
    <div>
      <div className="container">To Brief , blah blah blah about me</div>
      <br />
      <div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "2.5rem",
            textAlign: "center",
          }}
        >
          EDUCATION
        </div>
        <br />
        <br />
        <div style={{ fontFamily: "Comfortaa" }}>
          I am currently pursuing my UG @{" "}
        </div>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
          }}
        >
          <img src={vit} style={{ width: "30rem" }} />

          <div
            className="glass"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "0px",
              fontFamily: "cursive",
              fontSize: "1rem",
            }}
          >
            VIT Chennai <br />
            (2021-2025)
            <br />
            Btech in Computer Science and Engineering <br/>with specialisation in
            Cyber Physical Systems
          </div>
        </div>
        <br />
        <br />
        <div style={{ fontFamily: "Comfortaa" }}>
          I completed my School life @{" "}
        </div>

        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "black",
          }}
        >
          <img src={nsn} style={{ width: "30rem" }} />

          <div
            className="glass"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "0px",
              fontFamily: "cursive",
              fontSize: "1rem",
            }}
          >
            NSN MEMORIAL SENIOR SECONDARY SCHOOL <br />
            (2006-2021)
            <br />
            Grade 10 , Grade 12 : C.B.S.E
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <div>NOT ONLY ACADEMICS :) , </div>
        <br />
        <div
          style={{ position: "relative", textAlign: "center", color: "white" }}
        >
          <img src={leader} style={{ width: "30rem" }} />
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "0px",
              background: "brown",
            }}
          >
            I equipped myself to be a LEADER acquiring relevant skills <br /> by
            becoming the Assistant HEAD BOY and HEAD BOY of my School.
            <br />
          </div>
        </div>

        <br />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "black",
            fontWeight: "bolder",
            fontFamily: "cursive",
          }}
        >
          <img src={karate} style={{ width: "30rem" }} />
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "0px",
              background: "orange",
            }}
          >
            I attained a BROWN -1 grade in karate trained by <br />
            UNIVERSAL SHITO-RYU SPORTS KARATE SCHOOL
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
