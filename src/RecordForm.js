import React, { useEffect, useState } from "react";
import "./RecordForm.css";

function RecordForm({ onAdd, onUpdate, editRecord }) {
  const [record, setRecord] = useState({ name: "", amount: "", status: "Pending" });

  useEffect(() => {
    if (editRecord) {
      setRecord(editRecord);
    }
  }, [editRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editRecord ? onUpdate(record) : onAdd(record);
    setRecord({ name: "", amount: "", status: "Pending" });
  };

  return (
    <form className="record-form" onSubmit={handleSubmit}>
      <h3>{editRecord ? "Edit" : "Add"} Record</h3>
      <input
        type="text"
        placeholder="Name"
        value={record.name}
        onChange={(e) => setRecord({ ...record, name: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={record.amount}
        onChange={(e) => setRecord({ ...record, amount: e.target.value })}
        required
      />
      <select
        value={record.status}
        onChange={(e) => setRecord({ ...record, status: e.target.value })}
      >
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">{editRecord ? "Update" : "Add"}</button>
    </form>
  );
}

export default RecordForm;
