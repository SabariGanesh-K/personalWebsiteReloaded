import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () =>{
return(
    <>
    <div className='large-devices'>
        <DesktopHeader/>
    </div>
    <div className='small-devices'>
        <MobileHeader/>
    </div>
    </>
)
}

export default Header;