import React ,{useEffect, useState}from 'react';
import { NavLink } from 'react-router-dom';
import cross from './assets/cross.png';
import menu from './assets/menu.png';
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useContext } from 'react';
import { AppContext } from '../../context/AppConfig';
const MobileHeader = () =>{
    const [togglemenu,settogglemenu] = useState(false);
    const {status,setstatus} = useContext(AppContext)
    console.log(status===0)
    function toggle(index){
        console.log(index,status)
        if (!isNaN(index)){
            setstatus(index)
        }
     
        settogglemenu(!togglemenu);

  
    }


   
    
    return(
        <div style = {{position:'fixed',margin:'2%'}} className='mobile-header-master-container'>
        {togglemenu ? <img  src = {cross} onClick={toggle} alt = "on"/>:<img src = {menu} onClick={toggle} alt = "off"/> }
        {togglemenu && (
            <div className='mobileheadercontainer'>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <NavLink className = "no-link" to = "/home" > <button  onClick={(e)=>toggle(0)} className='mobileheaderitem'  style = {status===0 ?  {fontSize:'3rem'}: {fontSize:'20px'} } >Home</button></NavLink>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <NavLink className = "no-link" to = "/codingz" > <button onClick={(e)=>toggle(1)} className='mobileheaderitem'  style = {status===1 ?  {fontSize:'3rem'}: {fontSize:'20px'} }  > Codingz</button></NavLink>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <NavLink className = "no-link" to = "/about" > <button onClick={(e)=>toggle(2)} className='mobileheaderitem'  style = {status===2 ?  {fontSize:'3rem'}: {fontSize:'20px'} } >About Me</button></NavLink>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <NavLink className = "no-link" to = "/projects"> <button  onClick={(e)=>toggle(3)} className='mobileheaderitem'  style = {status===3 ?  {fontSize:'3rem'}: {fontSize:'20px'} } >PROJECTS</button></NavLink>
  </ScrollAnimation>
                <NavLink className = "no-link" to = "/contact" > <button onClick={(e)=>toggle(4)} className='mobileheaderitem'  style = {status===4 ?  {fontSize:'3rem'}: {fontSize:'20px'} } >Catch Me</button></NavLink>
         
                
          
            </div>
            
        ) }
        </div>
    )
}

export default MobileHeader;