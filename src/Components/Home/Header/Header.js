import React from 'react';
import Banner from '../Banner/Banner';
import Menubar from '../Menubar/Menubar';
import'./Header.css'
const Header = () => {
    return (
        <div className="header">
            <Menubar/>
            <Banner/>
        </div>
    );
};

export default Header;