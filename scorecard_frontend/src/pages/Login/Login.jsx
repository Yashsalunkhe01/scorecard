import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      setSuccess('');
      return;
    }

    if (username === 'admin' && password === '1234') {
      setSuccess('Login successful!');
      setError('');
      setTimeout(() => {
        navigate('/home');
      }, 1000); // Optional delay to show success message
    } else {
      setError('Invalid credentials.');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="new-user">
          New user? <a href="/register">Create an account</a>
        </p>
      </div>

      <footer className="footer">
        <p>📧 Email: yashsalunkhe12@gmail.com</p>
        <p>📞 Contact: +1 234 567 8901</p>
      </footer>
    </div>
  );
};

export default LoginPage;
