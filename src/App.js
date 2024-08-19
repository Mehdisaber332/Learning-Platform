import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Lessons from './components/Lessons';
import Login from './components/Login'; 
import Posts from './components/Posts';
import About from './components/About'; 
import Contact from './components/Contact'; // Import Contact component
import ForgotPassword from './components/ForgotPassword';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> {/* Add route for Contact */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;