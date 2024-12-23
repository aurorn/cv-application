import { useState } from "react";
import "../styles/Skills.css";
import PopupForm from "./Popup";
import Cog from "../assets/cog.svg";
import Bin from "../assets/bin.svg";


function Skills({ data, setData }) {
  const [skills, setSkills] = useState(data || []);
  const [editing, setEditing] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const emptySkill = {
    title: '', 
    info: '' 
  };

  const [currentSkill, setCurrentSkill] = useState(emptySkill);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSkills = editing !== null
      ? skills.map((skill, i) => (i === editing ? currentSkill : skill))
      : [...skills, currentSkill];

    setSkills(updatedSkills);
    setData(updatedSkills);
    closePopup();
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentSkill({ ...emptySkill });
    setEditing(null);
  };

  const handleEdit = (index) => {
    setCurrentSkill(skills[index]);
    setEditing(index);
    setShowPopup
  };

  const handleDelete = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    setData(updatedSkills);
  };

  return (
    <div className="skills-section">
      <h2>Skills</h2>      
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span>{skill.title} - {skill.info}</span>
            <div className="skill-actions">
              <button onClick={() => handleEdit(index)}><img className="edit-icon" src={Cog} alt="Edit" /></button>
                              <button onClick={() => handleDelete(index)}><img className="del-icon" src={Bin} alt="Delete" /></button>
            </div>
          </div>
        ))}
      </div>

      
      <button onClick={() => setShowPopup(true)}>Add Skill</button>
      

      <PopupForm 
        show={showPopup}
        close={closePopup}
        onSubmit={handleSubmit}
        title={editing !== null ? "Edit Skills" : "Add Skills"}
      >
          <label>
            <span>Skill Category:</span>
            <input
              type="text"
              value={currentSkill.title}
              onChange={(e) => setCurrentSkill({...currentSkill, title: e.target.value})}
            />
          </label>
          <label>
            <span>Skills List:</span>
            <input
              type="text"
              value={currentSkill.info}
              onChange={(e) => setCurrentSkill({...currentSkill, info: e.target.value})}
            />
          </label>
       </PopupForm>
    </div>
  );
}

export default Skills;