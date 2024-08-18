import React from 'react';
import StartNowButton from './StartNowButton';
import background from '../assets/images/background.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <StartNowButton />
    </div>
  );
}

export default Home;
