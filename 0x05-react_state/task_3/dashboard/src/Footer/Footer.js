import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';
import {AppContext }from '../App/AppContext';

const Footer = () => {
    const { user} = React.useContext(AppContext);
    return (
    <div className='App-footer'>
        {user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
    <p>
    Copyright {getFullYear()} - {getFooterCopy()}
    </p>
    </div> );
}
 
export default Footer;
