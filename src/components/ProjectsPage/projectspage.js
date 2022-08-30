import React, { useContext, useEffect, useState } from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import RenderProject from './Projects'
import './projects.css'

import { data } from './projectsdata';
import Header from '../MainComponent/Header';
import Footer from '../MainComponent/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { AppContext } from '../../context/AppConfig';
const ProjectPage = () =>{
  const [category,setcategory] = useState('frontend')
  const {setstatus} = useContext(AppContext)
  useEffect(()=>{
    setstatus(4);
    window.scrollTo(0, 0);
  },[])
return (
    <div className="projectspage" >
   <div>
      <Header />
      </div>
      <ScrollToTop/>
{<div className='categories_options_container'>
  <div  onClick={e=>setcategory("frontend")} style = {category=="frontend"?{backgroundColor:'darkred',color:'black'}:{backgroundColor:'#1a1a1a'}} className='categories_option'>
    Frontend Web
  </div>
  <div  onClick={e=>setcategory("blockchain")} style = {category=="blockchain"?{backgroundColor:'darkred',color:'black'}:{backgroundColor:'#1a1a1a'}} className={`categories_option  `}>
    Blockchain
  </div>
  <div  onClick={e=>setcategory("wix")} style = {category=="wix"?{backgroundColor:'darkred',color:'black'}:{backgroundColor:'#1a1a1a'}} className='categories_option'>
    Wix 
  </div>
  <div  onClick={e=>setcategory("fullstack") }style = {category=="fullstack"?{backgroundColor:'darkred',color:'black'}:{backgroundColor:'#1a1a1a'}} className='categories_option'>
    Fullstack Web
  </div>
  <div  onClick={e=>setcategory("app")} style = {category=="app"?{backgroundColor:'darkred',color:'black'}:{backgroundColor:'#1a1a1a'}} className='categories_option'>
    App 
  </div>
  
</div>}


{
  <div className='mobile_cat_selector'>
  <select  className='selector' value={category} onChange={(e)=>setcategory(e.target.value)}>
  <option value="frontend">Frontend</option>
  <option value="blockchain">Blockchain</option>
  <option selected value="wix">Wix</option>
  <option value="fullstack">Fullstack</option>
  <option value="app">App</option>
</select>
</div>
}

{/* <ScrollToTop/> */}
<ScrollAnimation
animateIn="animate__fadeInRightBig"
animateOnce={true}
>
    {data.map((item,index)=>( (item.category===category|| !category ) &&
        <div key = {index}  >
            <RenderProject skill = {item.skill} tag = {item.tag} desc = {item.desc} desc2 = {item.desc2} git = {item.git} view = {item.view} uses = {item.uses}/>
            </div>
))}
    </ScrollAnimation>
   {<ScrollAnimation animateIn="animate__rotateIn" animateOnce={true}>
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
        </ScrollAnimation>}
    <Footer/>
</div>
)
}
export default ProjectPage;