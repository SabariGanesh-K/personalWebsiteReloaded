import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = (props) =>{
return(
    <>
    <div className='large-devices'>
        <DesktopHeader status = {props.status}  />
    </div>
    <div className='small-devices'>
        <MobileHeader status = {props.status}/>
    </div>
    </>
)
}

export default Header;