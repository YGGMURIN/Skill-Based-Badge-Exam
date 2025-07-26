import React from "react";
import "./RecordList.css";

function RecordList({ records, onDelete, onEdit }) {
  return (
    <div className="record-list">
      <h3>Recent Records</h3>
      {records.length === 0 ? <p>No records found.</p> : null}
      <ul>
        {records.map((r) => (
          <li key={r.id}>
            <strong>{r.name}</strong> - ${r.amount} [{r.status}]
            <div className="actions">
              <button onClick={() => onEdit(r)}>Edit</button>
              <button onClick={() => onDelete(r.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecordList;
