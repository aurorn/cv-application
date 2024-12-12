import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo({ data, setData }) {
  const [editing, setEditing] = useState(true);

  const [localName, setLocalName] = useState(data.name);
  const [localEmail, setLocalEmail] = useState(data.email);
  const [localPhone, setLocalPhone] = useState(data.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name: localName, email: localEmail, phone: localPhone });
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <div className="general-info">
      <h2>General Info</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <label>Name:
            <input type="text" value={localName} onChange={(e) => setLocalName(e.target.value)} />
          </label>
          <label>Email:
            <input type="email" value={localEmail} onChange={(e) => setLocalEmail(e.target.value)} />
          </label>
          <label>Phone:
            <input type="text" value={localPhone} onChange={(e) => setLocalPhone(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;