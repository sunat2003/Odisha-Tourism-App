import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';
import React from  'react-dom';
import { useState } from "react";
import { Link } from "react-router-dom";
export function Navbar(){
    

    const [toggle,setToggle]=useState({top:'-8000px'})
    function handleToggleOpenClick(){
        setToggle(
            {top:'0px'}
        )
    }

    function handleToggleCloseClick(){
        setToggle(
            {top:'-8000px'}
        )
    }
    return(
        <nav className="nav-bar">
            <h2 className='logo'>Odisha <span>Tourism</span></h2>
            <ul className="menu-bar" style={toggle}>
                <li><Link className="link t-link" to='/'>Home</Link></li>
                <li>Toure Pakage</li>
                <li>Destination</li>
                <li>Hotels & Restores</li>
                <li>MICE</li>
                <li>Weddings</li>
                <li>Contacts</li>
                <RxCross2 className="nav-icons" onClick={handleToggleCloseClick} />
            </ul>
            <button className="nav-btn">Book Tour</button>
            <GiHamburgerMenu className='toggle-ham' onClick={handleToggleOpenClick} />
        </nav>
    )
}