import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to the Landing Page</h1>
      <p>Please <Link to="/login">Login</Link> to continue.</p>
    </div>
  );
}

export default Landing;
