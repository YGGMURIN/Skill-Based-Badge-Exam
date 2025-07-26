import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <h1>Welcome to the App</h1>
      <p>Click below to continue</p>
      <Link to="/login" className="login-button">Login</Link>
    </div>
  );
}

export default Landing;
