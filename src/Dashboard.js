import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>This is your dashboard. View <Link to="/reporting">Reporting</Link>.</p>
    </div>
  );
}

export default Dashboard;
