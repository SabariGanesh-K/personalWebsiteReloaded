import React from 'react';
import './contact.css'
const Media = (props) =>{
    return(
        <a href = {props.link} target = "_blank" style = {{textDecoration:'none'}} rel="noreferrer">
        <button className = "mediabox">
            <div>
            <img src = {props.img} alt = "logo"/>
            </div>
            <div><span className='mediatag'><></>{props.tag}</span></div>
          
        </button>
        </a>
    
    )
}

export default Media;