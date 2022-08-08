import React from 'react';
import { useContext } from 'react';

import { AppContext } from '../../context/AppConfig';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () =>{
    const {status,setstatus} = useContext(AppContext);
return(
    <>
    <div className='large-devices'>
        <DesktopHeader status = {status}  />
    </div>
    <div className='small-devices'>
        <MobileHeader status = {status}/>
    </div>
    </>
)
}

export default Header;