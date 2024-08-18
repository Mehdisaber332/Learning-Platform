import React from 'react';
import { Link } from 'react-router-dom';
import './StartNowButton.css';

const StartNowButton = () => {
  return (
    <Link to="/lessons" className="start-now-button">
      Start Now
    </Link>
  );
}

export default StartNowButton;
