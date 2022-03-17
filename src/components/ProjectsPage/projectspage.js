import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import RenderProject from './Projects'
import './projects.css'

import { data } from './projectsdata';
const ProjectPage = () =>{
return (
    <div className="projectspage" style={{ width: "100%" ,margin:"0%"}}>
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
</div>
)
}
export default ProjectPage;