import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/online-compiler/python">CodeSphere</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/online-compiler/python">Python Compiler</Link></li>
                    {/* Add more links here later */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
