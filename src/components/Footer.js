import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Ensure you have this CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="logo">Learning Platform</p>
                <nav>
                    <ul className="footer-nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            <p>&copy; {new Date().getFullYear()} Learning Platform. All rights reserved.</p>
        </footer>
    );
};

export default Footer;