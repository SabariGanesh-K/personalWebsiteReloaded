import React from 'react'
import { data } from './ExperiencesData'
import './about.css'
export const Experiences = () => {
  return (
    <div className='experiences_container'>
{data.map((item,i)=>(
    <div key = {i} className="experience_box" >
     
        <img src = {item.imgSrc} alt = {item.org} className ="exp_logo" />
        <div className='org'>{item.org}</div>
        {item.period!=='present'? (<div>{item.present}</div>):<div></div>  }
    <div className='desig'> {item.desig} </div>
    <div className='button_container'>
   <a href = {item.link} target = "_blank" rel="noreferrer" className='explore'><button className="cssbuttons-io">
    <span className='explore'> EXPLORE</span>
</button></a> 
</div>
    </div>
))}
    </div>
  )
}
