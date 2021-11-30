import React, { PureComponent } from "react";
import Header from "./Header";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";

import Footer from "./Footer";
import Contact from "./Contact";
import Codingz from "./Codingz";

class Main extends PureComponent {
  render() {
    return (
     
        <div>
          <Header />

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/codingz" element={<Codingz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>

          <Footer />
        </div>
    
    );
  }
}

export default Main;
