import React, { useState } from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`menu-items ${menuOpen ? 'show' : ''}`}>
                <Link to='/buscar' className="menu__item" onClick={toggleMenu}>Buscar</Link>
                <Link to='/salvos' className="menu__item" onClick={toggleMenu}>Salvos</Link>
            </div>
        </nav>
    );
}

export default Navbar;
