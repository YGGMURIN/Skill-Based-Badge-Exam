import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard.</p>
      <div className="nav-buttons">
        <Link to="/reporting" className="btn">Go to Reporting</Link>
        <button onClick={handleLogout} className="btn logout">Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
