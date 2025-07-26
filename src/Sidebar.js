import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>Dashboard</li>
        <li>Add Record</li>
        <li>Edit Records</li>
        <li>Reports</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
