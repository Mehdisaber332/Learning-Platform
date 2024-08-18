import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Lessons from './components/Lessons';
import Login from './components/Login'; 
import Posts from './components/Posts'; // Import Posts component
import ForgotPassword from './components/ForgotPassword';
import About from './components/About';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/posts" element={<Posts />} /> {/* Add route for Posts */}
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;