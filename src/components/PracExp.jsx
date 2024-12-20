import { useState } from "react";
import "../styles/PracExp.css";

function PracExp({ data, setData }) {
  const [experiences, setExperiences] = useState(data || []);
  const [editing, setEditing] = useState(null); 
  const [showForm, setShowForm] = useState(true);

  const emptyExperience = {
    companyName: '',
    positionTitle: '',
    mainTasks: '',
    dateFrom: '',
    dateUntil: ''
  };

  const [currentExp, setCurrentExp] = useState(emptyExperience);

  const MAX_EXPERIENCES = 3;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing !== null) {
      const updatedExperiences = [...experiences];
      updatedExperiences[editing] = currentExp;
      setExperiences(updatedExperiences);
      setData(updatedExperiences);
    } else if (experiences.length < MAX_EXPERIENCES) {
      const newExperiences = [...experiences, currentExp];
      setExperiences(newExperiences);
      setData(newExperiences);
    }
    setCurrentExp(emptyExperience);
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentExp(experiences[index]);
    setEditing(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
    setData(updatedExperiences);
  };

  return (
    <div className="practical-experience">
      <h2>Work Experience</h2>
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-summary">
              <span>{exp.positionTitle} at {exp.companyName}</span>
              <div className="experience-actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showForm && experiences.length < MAX_EXPERIENCES && (
        <button onClick={() => setShowForm(true)}>Add Experience</button>
      )}

      {!showForm && experiences.length >= MAX_EXPERIENCES && (
        <p className="experience-limit-message">
          Maximum number of experiences (3) reached
        </p>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            <span>Company Name:</span>
            <input
              type="text"
              value={currentExp.companyName}
              onChange={(e) => setCurrentExp({...currentExp, companyName: e.target.value})}
            />
          </label>
          <label>
            <span>Position Title:</span>
            <input
              type="text"
              value={currentExp.positionTitle}
              onChange={(e) => setCurrentExp({...currentExp, positionTitle: e.target.value})}
            />
          </label>
          <label>
            <span>Main Responsibilities:</span>
            <textarea
              value={currentExp.mainTasks}
              onChange={(e) => setCurrentExp({...currentExp, mainTasks: e.target.value})}
            />
          </label>
          <label>
            <span>Date From:</span>
            <input
              type="date"
              value={currentExp.dateFrom}
              onChange={(e) => setCurrentExp({...currentExp, dateFrom: e.target.value})}
            />
          </label>
          <label>
            <span>Date Until:</span>
            <input
              type="date"
              value={currentExp.dateUntil}
              onChange={(e) => setCurrentExp({...currentExp, dateUntil: e.target.value})}
            />
          </label>
          <div className="form-actions">
            <button type="submit">{editing !== null ? 'Update' : 'Add'}</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default PracExp;
