import { useState } from "react";
import "../styles/Education.css";

function Education({ data, setData }) {
  const [education, setEducation] = useState(data || []);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const emptyEducation = {
    schoolName: '',
    titleOfStudy: '',
    dateFrom: '',
    dateUntil: ''
  };

  const [currentEdu, setCurrentEdu] = useState(emptyEducation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing !== null) {
      const updatedEducation = [...education];
      updatedEducation[editing] = currentEdu;
      setEducation(updatedEducation);
      setData(updatedEducation);
    } else {
      const newEducation = [...education, currentEdu];
      setEducation(newEducation);
      setData(newEducation);
    }
    setCurrentEdu(emptyEducation);
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentEdu(education[index]);
    setEditing(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
    setData(updatedEducation);
  };

  return (
    <div className="education-section">
      <h2>Education</h2>
      
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-summary">
              <span>{edu.titleOfStudy} {edu.schoolName}</span>
              <div className="education-actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add Education</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            <span>School Name:</span>
            <input
              type="text"
              value={currentEdu.schoolName}
              onChange={(e) => setCurrentEdu({...currentEdu, schoolName: e.target.value})}
            />
          </label>
          <label>
            <span>Title of Study:</span>
            <input
              type="text"
              value={currentEdu.titleOfStudy}
              onChange={(e) => setCurrentEdu({...currentEdu, titleOfStudy: e.target.value})}
            />
          </label>
          <label>
            <span>From:</span>
            <input
              type="text"
              value={currentEdu.dateFrom}
              onChange={(e) => setCurrentEdu({...currentEdu, dateFrom: e.target.value})}
            />
          </label>
          <label>
            <span>Until:</span>
            <input
              type="text"
              value={currentEdu.dateUntil}
              onChange={(e) => setCurrentEdu({...currentEdu, dateUntil: e.target.value})}
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

export default Education;
