import { useNavigate } from 'react-router-dom';
import './Reporting.css';

function Reporting() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="reporting-container">
      <h1>Reporting Page</h1>
      <p>This is where reports would be shown.</p>
      <div className="button-group">
        <button onClick={handleBack} className="back-btn">Back to Dashboard</button>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Reporting;
