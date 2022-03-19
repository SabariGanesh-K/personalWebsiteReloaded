import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import RenderProject from './Projects'
import './projects.css'

import { data } from './projectsdata';
import Header from '../MainComponent/Header';
import Footer from '../MainComponent/Footer';
const ProjectPage = () =>{
return (
    <div className="projectspage" >
<Header  status = {4}/>
<ScrollAnimation
animateIn="animate__fadeInRightBig"
animateOnce={true}
>
    {data.map((item,index)=>(
        <div key = {index}  >
            <RenderProject skill = {item.skill} tag = {item.tag} desc = {item.desc} desc2 = {item.desc2} git = {item.git} view = {item.view} uses = {item.uses}/>
            </div>
))}
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__rotateIn" animateOnce={true}>
          <div className="container"
            style={{
              display: "flex",
              fontFamily: "Grechen Fuemen",
              fontSize: "3rem",
              textAlign: "center",
              justifyContent: "center",
              color:'white'
            }}
          >
            MORE TO GO... <br />
            🚀🚀🚀
          </div>
        </ScrollAnimation>
    <Footer/>
</div>
)
}
export default ProjectPage;