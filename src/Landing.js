import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="container">
      <h1>Welcome to the App</h1>
      <p>Click below to continue</p>
      <Link to="/login" className="btn">Login</Link>
    </div>
  );
}

export default Landing;
