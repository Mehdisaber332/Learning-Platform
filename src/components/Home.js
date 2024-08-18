import React from 'react';
import { useSpring, animated } from 'react-spring';
import StartNowButton from './StartNowButton';
import background from '../assets/images/background.jpg';
import './Home.css'; // Create this CSS file for additional styles

const Home = () => {
    // Animation for the title
    const titleAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 }
    });

    // Animation for the button
    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(0.8)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 1000 }
    });

    return (
        <div className="home-container" style={{ backgroundImage: `url(${background})` }}>
            <animated.h1 style={titleAnimation} className="home-title">
                Learn French and English the Best Way
            </animated.h1>
            <animated.div style={buttonAnimation}>
                <StartNowButton />
            </animated.div>
            <div className="home-info">
                <h2>About Our Lessons</h2>
                <p>
                    Our platform offers a variety of lessons tailored for both beginners and advanced learners. 
                    Join us to explore the beauty of the French and English languages.
                </p>
                <p>
                    Sign up today and start your learning journey with us!
                </p>
            </div>
        </div>
    );
};

export default Home;