import { useState } from "react";
import "../styles/Education.css";
import PopupForm from "./Popup";
import Cog from "../assets/cog.svg";
import Bin from "../assets/bin.svg";

function Education({ data, setData }) {
  const [education, setEducation] = useState(data || []);
  const [editing, setEditing] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const emptyEducation = {
    schoolName: '',
    titleOfStudy: '',
    dateFrom: '',
    dateUntil: ''
  };

  const [currentEdu, setCurrentEdu] = useState(emptyEducation);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEducation = editing !== null
    ? education.map((edu, i) => (i === editing ? currentEdu : edu))
    : [...education, currentEdu];
    
    setEducation(updatedEducation);
    setData(updatedEducation);
    closePopup();
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentEdu({ ...emptyEducation });
    setEditing(null);
  };

  const handleEdit = (index) => {    
    setCurrentEdu(education[index]);
    setEditing(index);
    setShowPopup(true);
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
              <span>{edu.titleOfStudy}</span>
              <div className="education-actions">
                <button className="item-button" onClick={() => handleEdit(index)}><img className="edit-icon" src={Cog} alt="Edit" /></button>
                <button className="item-button" onClick={() => handleDelete(index)}><img className="del-icon" src={Bin} alt="Delete" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {education.length < 2 && (
        <button onClick={() => setShowPopup(true)}>Add Education</button>
      )}
      {education.length >= 2 && (
        <p className="section-limit-message">Maximum 2 education entries allowed</p>
      )}

        <PopupForm 
        show={showPopup}
        close={closePopup}
        onSubmit={handleSubmit}
        title={editing !== null ? "Edit Education" : "Add Education"}
      >
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
            <span>Finished:</span>
            <input
              type="date"
              value={currentEdu.dateFrom}
              onChange={(e) => setCurrentEdu({...currentEdu, dateFrom: e.target.value})}
            />
          </label>
          
        </PopupForm>
    </div>
  );
}

export default Education;
