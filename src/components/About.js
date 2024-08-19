import React from 'react';
import './About.css'; // Create this CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h2>About Our Learning Platform</h2>
            <p>
                Welcome to our learning platform, where we strive to provide an engaging and effective way to learn French and English.
                Our mission is to empower students with the language skills they need to succeed in today's globalized world.
            </p>
            <p>
                Our platform offers a variety of lessons tailored for different skill levels, from beginners to advanced learners. 
                With a focus on interactive learning, we provide resources that make studying enjoyable and effective.
            </p>
            <h3>What We Offer</h3>
            <ul>
                <li>Comprehensive lessons covering grammar, vocabulary, and pronunciation.</li>
                <li>Interactive exercises and quizzes to reinforce learning.</li>
                <li>Access to a community of learners for support and collaboration.</li>
                <li>Regular updates with new content and resources.</li>
            </ul>
            <h3>Join Us Today!</h3>
            <p>
                Sign up now to start your journey towards mastering French and English with us. 
                Together, we can achieve your language learning goals!
            </p>
        </div>
    );
};

export default About;