import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login attempted with Email: ${email}`);
    // TODO: integrate with backend
  };

  return (
    <div className="login-container">
      <img
        className="login-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon Logo"
      />
      <div className="login-box">
        <h2>Sign-In</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            id="email"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">Sign-In</button>
        </form>

        <p className="login-help">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <a href="#" className="login-need-help">Need help?</a>
      </div>

      <div className="login-new-to">
        <span>New to Amazon?</span>
        <button className="create-account-button">Create your Amazon account</button>
      </div>
    </div>
  );
}