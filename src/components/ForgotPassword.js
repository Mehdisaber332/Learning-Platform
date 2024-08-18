import React from 'react';
import './ForgotPassword.css'; // Create this CSS file for styling

const ForgotPassword = () => {
    return (
        <div className="forgot-password-container">
            <h2>Reset Your Password</h2>
            <form>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
            <p>
                Remembered your password? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default ForgotPassword;