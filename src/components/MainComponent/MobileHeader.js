import React ,{useState}from 'react';
import { NavLink } from 'react-router-dom';
import cross from './assets/cross.png';
import menu from './assets/menu.png'
const MobileHeader = () =>{
    const [togglemenu,settogglemenu] = useState(false)
const [sizeList,setSizeList] = useState(['3rem','20px','20px','20px','20px']);
    function toggle(stat){
        settogglemenu(!togglemenu);
        if (stat>-1){
            let tmp = ['20px','20px','20px','20px','20px']
            tmp[stat] = '3rem';
            console.log(tmp)
            setSizeList(tmp);
        }
  
    }
    return(
        <div className='mobile-header-master-container'>
        {togglemenu ? <img  src = {cross} onClick={e=>toggle(-1)}/>:<img src = {menu} onClick={e=>toggle(-1)}/> }
        {togglemenu && (
            <div className='mobileheadercontainer'>
                <NavLink className = "no-link" to = "/home"  onClick={e=>toggle(0)}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[0]}}  >Home</button></NavLink>
                <NavLink className = "no-link" to = "/codingz" onClick={e=>toggle(1)}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[1]}}> Codingz</button></NavLink>
                <NavLink className = "no-link" to = "/about" onClick={e=>toggle(2)}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[2]}}>About Me</button></NavLink>
                <NavLink className = "no-link" to = "/contact" onClick={e=>toggle(3)}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[3]}}>Catch Me</button></NavLink>
                <NavLink className = "no-link" to = "/projects" onClick={e=>toggle(4)}> <button className='mobileheaderitem'  style = {{fontSize:sizeList[4]}}>PROJECTS</button></NavLink>
            </div>
            
        ) }
        </div>
    )
}

export default MobileHeader;