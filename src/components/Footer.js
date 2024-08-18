import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Learning Platform</p>
      <ul>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;