import { useState } from "react";
import "../styles/Skills.css";

function Skills({ data, setData }) {
  const [skills, setSkills] = useState(data || []);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const emptySkill = {
    title: '',  // Changed from skillName
    info: ''    // Changed from proficiency
  };

  const [currentSkill, setCurrentSkill] = useState(emptySkill);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing !== null) {
      const updatedSkills = [...skills];
      updatedSkills[editing] = currentSkill;
      setSkills(updatedSkills);
      setData(updatedSkills);
    } else {
      const newSkills = [...skills, currentSkill];
      setSkills(newSkills);
      setData(newSkills);
    }
    setCurrentSkill(emptySkill);
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentSkill(skills[index]);
    setEditing(index);
    setShowForm(true);
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
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add Skill</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
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
          <div className="form-actions">
            <button type="submit">{editing !== null ? 'Update' : 'Add'}</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Skills;