import { useState } from "react";
import "../styles/Custom.css";
import PopupForm from "./Popup";
import Cog from "../assets/cog.svg";
import Bin from "../assets/bin.svg";


function Custom({ data, setData }) {
  const [customs, setCustoms] = useState(data || []);
  const [editing, setEditing] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const emptyCustom = {
    name: '',
    info: ''
  };

  const [currentCustom, setCurrentCustom] = useState(emptyCustom);


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCustoms = editing !== null 
      ? customs.map((cert, i) => (i === editing ? currentCustom : cert))
      : [...customs, currentCustom];

    setCustoms(updatedCustoms);
    setData(updatedCustoms);
    closePopup();
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentCustom({ name: "", info: "" });
    setEditing(null);
  };


  const handleEdit = (index) => {
    setCurrentCustom(customs[index]);
    setEditing(index);
    setShowPopup(true);
  };

  const handleDelete = (index) => {
    const updatedCustoms = customs.filter((_, i) => i !== index);
    setCustoms(updatedCustoms);
    setData(updatedCustoms);
  };

  return (
    <div className="custom-section">
      <h2>Additional Sections</h2>
      <div className="customs-list">
        {customs.map((custom, index) => (
          <div key={index} className="custom-item">
            <div className="custom-summary">
              <span>{custom.name}</span>
              <div className="custom-actions">
                <button className="item-button" onClick={() => handleEdit(index)}><img className="edit-icon" src={Cog} alt="Edit" /></button>
                <button className="item-button" onClick={() => handleDelete(index)}><img className="del-icon" src={Bin} alt="Delete" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <button onClick={() => setShowPopup(true)}>Add Section</button>
      
      <PopupForm 
        show={showPopup}
        close={closePopup}
        onSubmit={handleSubmit}
        title={editing !== null ? "Edit Section" : "Add Section"}
      >
          <label>
            <span>Section Title:</span>
            <input
              type="text"
              value={currentCustom.name}
              onChange={(e) => setCurrentCustom({
                ...currentCustom, name: e.target.value
              })}
              placeholder="e.g., Projects, Achievements, Languages"
              required
            />
          </label>
          <label>
            <span>Section Content:</span>
            <textarea
            type="text"
              value={currentCustom.info}
              onChange={(e) => setCurrentCustom({
                ...currentCustom,
                 info: e.target.value
                })}
              placeholder="Enter the content for this section"
              required
            />
          </label>
      </PopupForm>
    </div>
  );
}

export default Custom;