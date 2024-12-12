import React, { useState } from "react";
import "../styles/Education.css";

function Education({ data, setData }) {
  const [editing, setEditing] = useState(true);

  const [localSchoolName, setLocalSchoolName] = useState(data.schoolName);
  const [localTitleOfStudy, setLocalTitleOfStudy] = useState(data.titleOfStudy);
  const [localDateOfStudy, setLocalDateOfStudy] = useState(data.dateOfStudy);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      schoolName: localSchoolName,
      titleOfStudy: localTitleOfStudy,
      dateOfStudy: localDateOfStudy
    });
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <div className="education-info">
      <h2>Education</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <label>
            School Name:
            <input
              type="text"
              value={localSchoolName}
              onChange={(e) => setLocalSchoolName(e.target.value)}
            />
          </label>
          <label>
            Title of Study:
            <input
              type="text"
              value={localTitleOfStudy}
              onChange={(e) => setLocalTitleOfStudy(e.target.value)}
            />
          </label>
          <label>
            Date of Study:
            <input
              type="text"
              value={localDateOfStudy}
              onChange={(e) => setLocalDateOfStudy(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>School Name:</strong> {data.schoolName}</p>
          <p><strong>Title of Study:</strong> {data.titleOfStudy}</p>
          <p><strong>Date of Study:</strong> {data.dateOfStudy}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
