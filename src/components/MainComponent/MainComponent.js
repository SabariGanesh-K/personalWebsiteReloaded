import React, { PureComponent } from "react";

import { Routes, Route} from "react-router-dom";
import Home from "../HomePage/Home";
import About from "../AboutPage/About";

import Contact from "../ContactPage/Contact";
import Codingz from "../CodingzPage/Codingz";
import ProjectPage from "../ProjectsPage/projectspage";
class Main extends PureComponent {
  render() {
    return (
     
        <div>
        

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/codingz" element={<Codingz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="*" element={<Home />} />
          </Routes>

          {/* <Footer /> */}
        </div>
    
    );
  }
}

export default Main;
