import React, { useContext, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import RenderProject from "./Projects";
import "./projects.css";
import bgpage from "../HomePage/Media/bgpage.mp4";
import { data } from "./projectsdata";
import Header from "../MainComponent/Header";
import Footer from "../MainComponent/Footer";
import ScrollToTop from "react-scroll-to-top";
import { AppContext } from "../../context/AppConfig";
const ProjectPage = () => {
  const [category, setcategory] = useState("fullstack");

  const { setstatus } = useContext(AppContext);
  useEffect(() => {
    setstatus(3);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projectspage">
          <video id="bgvideo" autoPlay loop muted>
        <source src={bgpage} type="video/mp4" />
      </video>
      <div className="stickerpro">
        <Header />
      </div>
      <ScrollToTop />
      <br />
      <br />
      <br />
      <br />
        <div className="categories_options_container">
        <div
            onClick={(e) => setcategory("fullstack")}
            className={
              category == "fullstack"
                ? "categories_option_selected"
                : "categories_option_unselected"
            }
          >
            Fullstack App
          </div>
          <div
            onClick={(e) => setcategory("blockchain")}
            className={
              category == "blockchain"
                ? "categories_option_selected"
                : "categories_option_unselected"
            }
          >
            Blockchain 
          </div>
          <div
            onClick={(e) => setcategory("frontend")}
            className={
              category == "frontend"
                ? "categories_option_selected"
                : "categories_option_unselected"
            }
          >
            Frontend Web
          </div>
        
          <div
            onClick={(e) => setcategory("wix")}
          
            className={
              category == "wix"
                ? "categories_option_selected"
                : "categories_option_unselected"
            }
          >
            Wix
          </div>
        
          <div
            className={
              category == "app"
                ? "categories_option_selected"
                : "categories_option_unselected"
            }
            onClick={(e) => setcategory("app")}
          
          >
            App
          </div>
        </div>
     
        <div className="mobile_cat_selector">
          <select
            className="selector"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
              <option value="fullstack">Fullstack</option>
            <option value="frontend">Frontend</option>
            <option value="blockchain">Blockchain</option>
            <option selected value="wix">
              Wix
            </option>
          
            <option value="app">App</option>
          </select>
        </div>
      

      {/* <ScrollToTop/> */}
      {/* <ScrollAnimation
animateIn="animate__fadeInRightBig"
animateOnce={true}
> */}
      {data.map(
        (item, index) =>
          (item.category === category || !category) && (
            <div key={index}>
              <RenderProject
                skill={item.skill}
                tag={item.tag}
                desc={item.desc}
                desc2={item.desc2}
                git={item.git}
                view={item.view}
                uses={item.uses}
              />
            </div>
          )
      )}
      {/* </ScrollAnimation> */}
      {
        <ScrollAnimation animateIn="animate__rotateIn" animateOnce={true}>
          <div
            className="container"
            style={{
              display: "flex",
              fontFamily: "Grechen Fuemen",
              fontSize: "3rem",
              textAlign: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            MORE TO GO... <br />
            🚀🚀🚀
          </div>
        </ScrollAnimation>
      }
      <Footer />
    </div>
  );
};
export default ProjectPage;
