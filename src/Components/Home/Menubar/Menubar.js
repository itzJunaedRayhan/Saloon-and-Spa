import React from 'react';
import './Menubar.css'
import {NavDropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import brand from '../../../images/brand.png'
const Menubar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="brand">
                <a href="">
                    <img src={brand} alt="" height="35px" width="40px" className="img-responsive"/>
                </a>
            </div>
            <div className="searchbar ml-auto">
                <label class="dropdown">
                    <div class="dd-button">
                        Delhi NCR
                    </div>
                    <input type="checkbox" class="dd-input" id="test" />
                    <ul class="dd-menu">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </label>
                <div className="search-box">
                    <input type="text" class="search" placeholder="search for a service"/>
                    <button type="submit" class="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="menu-items ml-auto">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/offer">Offer</a></li>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown" style={{backgroundColor: 'transparent'}}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Refer</a></li>
                    <li><a href="" className="login">Login/signup</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Menubar;