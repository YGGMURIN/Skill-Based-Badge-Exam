import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reporting.css';

function Reporting() {
  const navigate = useNavigate();

  return (
    <div className="reporting-container">
      <h1>Reporting Page</h1>
      <p>This page is used to display reports and analytics.</p>
      
      <button onClick={() => alert('Generate Report Clicked')}>Generate Report</button>
      <br /><br />
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}

export default Reporting;
