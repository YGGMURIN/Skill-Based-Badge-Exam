import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (formData.name.trim() === '' || formData.email.trim() === '') return;

    if (editIndex !== null) {
      const updated = [...records];
      updated[editIndex] = formData;
      setRecords(updated);
      setEditIndex(null);
    } else {
      setRecords([...records, formData]);
    }

    setFormData({ name: '', email: '' });
  };

  const handleEdit = (index) => {
    setFormData(records[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
    setEditIndex(null);
    setFormData({ name: '', email: '' });
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const goToReporting = () => {
    navigate('/reporting');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div>
          <button onClick={goToReporting}>Go to Reporting</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="form-section">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <div className="records-section">
        <h2>Records</h2>
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              <span>{record.name} ({record.email})</span>
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
