import { useState } from "react";
import "../styles/PracExp.css";
import PopupForm from "./Popup";
import Cog from "../assets/cog.svg";
import Bin from "../assets/bin.svg";


function PracExp({ data, setData }) {
  const [experiences, setExperiences] = useState(data || []);
  const [showPopup, setShowPopup] = useState(false);
  const [currentExp, setCurrentExp] = useState({
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    dateFrom: "",
    dateUntil: ""
  });
  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExperiences =
      editing !== null
        ? experiences.map((exp, i) => (i === editing ? currentExp : exp))
        : [...experiences, currentExp];

    setExperiences(updatedExperiences);
    setData(updatedExperiences);
    closePopup();
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentExp({
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      dateFrom: "",
      dateUntil: ""
    });
    setEditing(null);
  };

  const handleEdit = (index) => {
    setCurrentExp(experiences[index]);
    setEditing(index);
    setShowPopup(true);
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
              <span>
                {exp.positionTitle}
              </span>
              <div className="experience-actions">
                <button className="item-button" onClick={() => handleEdit(index)}><img className="edit-icon" src={Cog} alt="Edit" /></button>
                <button className="item-button" onClick={() => handleDelete(index)}><img className="del-icon" src={Bin} alt="Delete" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setShowPopup(true)}>Add Experience</button>

      {showPopup && (
        <PopupForm
          show={showPopup}
          close={closePopup}
          onSubmit={handleSubmit}
          title={editing !== null ? "Edit Work" : "Add Work"}
        >
          <label>
            <span>Company Name:</span>
            <input
              type="text"
              value={currentExp.companyName}
              onChange={(e) =>
                setCurrentExp({ ...currentExp, companyName: e.target.value })
              }
            />
          </label>
          <label>
            <span>Position Title:</span>
            <input
              type="text"
              value={currentExp.positionTitle}
              onChange={(e) =>
                setCurrentExp({ ...currentExp, positionTitle: e.target.value })
              }
            />
          </label>
          <label>
            <span>Main Responsibilities:</span>
            <textarea
              value={currentExp.mainTasks}
              onChange={(e) =>
                setCurrentExp({ ...currentExp, mainTasks: e.target.value })
              }
            />
          </label>
          <label>
            <span>Date From:</span>
            <input
              type="date"
              value={currentExp.dateFrom}
              onChange={(e) =>
                setCurrentExp({ ...currentExp, dateFrom: e.target.value })
              }
            />
          </label>
          <label>
            <span>Date Until:</span>
            <input
              type="date"
              value={currentExp.dateUntil}
              onChange={(e) =>
                setCurrentExp({ ...currentExp, dateUntil: e.target.value })
              }
            />
          </label>
        </PopupForm>
      )}
    </div>
  );
}

export default PracExp;
