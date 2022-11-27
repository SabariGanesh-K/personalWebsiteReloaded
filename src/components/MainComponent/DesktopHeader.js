import React, { useState } from "react";
import {  Navbar } from "reactstrap";
import {NavLink} from 'react-router-dom';

import './header.css'
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppConfig";




export const DesktopHeader = (props) =>  {

  const {setstatus} = useContext(AppContext)

    return (

      <>
      
      {/* <div className = "large-devices"> */}
      <Navbar  dark expand = "md">
       
       <div className="header-button-containers">
          
          <NavLink className = "nav-link" to = "/home">
          <button onClick={()=>setstatus(0)} className = {`${props.status===0 ? "buttons-selected ":"buttons"}  `} style = {{padding:'0rem'}} > <span className="fa fa-1x  fa-home"></span> HOME </button>
          </NavLink>
      
          <NavLink className = "nav-link" to = "/codingz">
          <button onClick={()=>setstatus(1)} className = {`${props.status===1 ? "buttons-selected ":"buttons"}  `}style = {{padding:'0rem'}}    > <span className="fa fa-1x  fa-code"></span> CODINGZ </button>
          </NavLink>
      
          <NavLink className = "nav-link" to = "/about">
          <button onClick={()=>setstatus(2)} className = {`${props.status===2 ? "buttons-selected ":"buttons"}  `}style = {{padding:'0rem'}}   > <span className="fa fa-1x  fa-user-secret"></span> ABOUT ME  </button>
          </NavLink>
 
          <NavLink className = "nav-link" to = "/projects">
          <button onClick={()=>setstatus(3)} className = {`${props.status===3 ? "buttons-selected ":"buttons"}  `} style = {{padding:'0rem'}}  > <span className="fa fa-1x  fa-brain-circuit"></span> PROJECTS  </button>
          </NavLink>

          <NavLink className = "nav-link" to = "/contact">
          <button onClick={()=>setstatus(4)} className = {`${props.status===4 ? "buttons-selected ":"buttons"}  `}style = {{padding:'0rem'}}   > <span className="fa fa-1x  fa-coffee"></span> CATCH ME  </button>
          </NavLink>
      
         </div>
        </Navbar>
      {/* </div> */}
    
      
      </>
      
    );
  }


export default DesktopHeader;
