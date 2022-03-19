import React ,{useEffect, useState}from 'react';
import { NavLink } from 'react-router-dom';
import cross from './assets/cross.png';
import menu from './assets/menu.png'
const MobileHeader = (props) =>{
    const [togglemenu,settogglemenu] = useState(false)
const [sizeList,setSizeList] = useState(['3rem','20px','20px','20px','20px']);
    const  toggle=()=>{

        settogglemenu(!togglemenu);

  
    }

    useEffect(()=>{
        let tmp = ['20px','20px','20px','20px','20px']
        tmp[props.status] = '3rem';
        // console.log(tmp)
        setSizeList(tmp);
    },[])
    
    return(
        <div className='mobile-header-master-container'>
        {togglemenu ? <img  src = {cross} onClick={toggle}/>:<img src = {menu} onClick={toggle}/> }
        {togglemenu && (
            <div className='mobileheadercontainer'>
                <NavLink className = "no-link" to = "/home"  onClick={toggle}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[0]}}  >Home</button></NavLink>
                <NavLink className = "no-link" to = "/codingz" onClick={toggle}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[1]}}> Codingz</button></NavLink>
                <NavLink className = "no-link" to = "/about" onClick={toggle}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[2]}}>About Me</button></NavLink>
                <NavLink className = "no-link" to = "/contact" onClick={toggle}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[3]}}>Catch Me</button></NavLink>
                <NavLink className = "no-link" to = "/projects" onClick={toggle}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[4]}}>PROJECTS</button></NavLink>
            </div>
            
        ) }
        </div>
    )
}

export default MobileHeader;