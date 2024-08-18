import React, { useState } from 'react';
import './Login.css'; // Ensure you have this CSS file for styling

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-container">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

            <form>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" required />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" required />
                </div>

                {!isLogin && (
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" required />
                    </div>
                )}

                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>

            <p>
                {isLogin ? 'No account? ' : 'Already have an account? '}
                <button onClick={toggleForm}>
                    {isLogin ? 'Sign Up' : 'Login'}
                </button>
            </p>

            {isLogin && (
                <p>
                    <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                </p>
            )}
        </div>
    );
};

export default Login;