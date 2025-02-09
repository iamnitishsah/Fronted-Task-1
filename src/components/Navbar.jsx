import React from 'react';
import NavbarSVG from '../assets/Navbar.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={NavbarSVG} alt="Navbar" className="navbar-svg"/>
        </nav>
    );
}

export default Navbar;