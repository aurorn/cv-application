import { useState } from "react";
import "../styles/PracExp.css";

function PracticalExperience({ data, setData }) {
  const [editing, setEditing] = useState(true);

  const [localCompanyName, setLocalCompanyName] = useState(data.companyName);
  const [localPositionTitle, setLocalPositionTitle] = useState(data.positionTitle);
  const [localMainTasks, setLocalMainTasks] = useState(data.mainTasks);
  const [localDateFrom, setLocalDateFrom] = useState(data.dateFrom);
  const [localDateUntil, setLocalDateUntil] = useState(data.dateUntil);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      companyName: localCompanyName,
      positionTitle: localPositionTitle,
      mainTasks: localMainTasks,
      dateFrom: localDateFrom,
      dateUntil: localDateUntil
    });
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Company Name:
            <input
              type="text"
              value={localCompanyName}
              onChange={(e) => setLocalCompanyName(e.target.value)}
            />
          </label>
          <label>
            Position Title:
            <input
              type="text"
              value={localPositionTitle}
              onChange={(e) => setLocalPositionTitle(e.target.value)}
            />
          </label>
          <label>
            Main Responsibilities:
            <textarea
              value={localMainTasks}
              onChange={(e) => setLocalMainTasks(e.target.value)}
            />
          </label>
          <label>
            Date From:
            <input
              type="text"
              value={localDateFrom}
              onChange={(e) => setLocalDateFrom(e.target.value)}
            />
          </label>
          <label>
            Date Until:
            <input
              type="text"
              value={localDateUntil}
              onChange={(e) => setLocalDateUntil(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company Name:</strong> {data.companyName}</p>
          <p><strong>Position Title:</strong> {data.positionTitle}</p>
          <p><strong>Main Responsibilities:</strong> {data.mainTasks}</p>
          <p><strong>From:</strong> {data.dateFrom} <strong>Until:</strong> {data.dateUntil}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PracticalExperience;
