import React, { useState } from 'react';
import './contact.css'
const Media = (props) =>{
    const [popup,setpopup] = useState(false)
    const copyToClipboard = () =>{
        navigator.clipboard.writeText(props.tag);
        setpopup(true)
        setTimeout(()=>{
            setpopup(false)
        },2000)
    }
    return(
        <div  className="container">
      {props.link && <a href = {props.link} target = "_blank" style = {{textDecoration:'none'}} rel="noreferrer">
        <button className = "mediabox " >
            <div>
            <img className='social_logo' src = {props.img} alt = "logo"/>
            </div>
            <div><span className='mediatag'><></>@{props.tag}</span></div>
          
        </button>
        </a>}
        {!props.link &&<>
        <button className = "mediabox" onClick={copyToClipboard} >
            <div>
            <img className='social_logo' src = {props.img} alt = "logo"/>
            </div>
            <div><span className='mediatag'><></>@{props.tag}</span></div>
           
        </button>
         {popup && <div style = {{color:'white',fontSize:"1rem",fontFamily:'Inter', textAlign:'center',backgroundColor:'black'}}>ID copied to clipboard</div>}</>
        }
        </div>
        // onClick={()=>{props.cpyclip && navigator.clipboard.writeText(props.tag)}}
    )
}

export default Media;