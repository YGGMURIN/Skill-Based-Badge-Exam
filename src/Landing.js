import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to the App</h1>
      <p>This is the landing page of your application.</p>
      <button onClick={() => navigate('/login')}>Go to Login</button>
    </div>
  );
}

export default Landing;
