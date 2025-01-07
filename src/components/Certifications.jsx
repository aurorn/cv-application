import { useState } from "react";
import "../styles/Certification.css";
import PopupForm from "./Popup";
import Cog from "../assets/cog.svg";
import Bin from "../assets/bin.svg";


function Certifications({ data, setData }) {
  const [certifications, setCertifications] = useState(data || []);
  const [showPopup, setShowPopup] = useState(false);
  const [currentCert, setCurrentCert] = useState({ certName: "", certInfo: "" });
  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCerts = editing !== null 
      ? certifications.map((cert, i) => (i === editing ? currentCert : cert))
      : [...certifications, currentCert];
    
    setCertifications(updatedCerts);
    setData(updatedCerts);
    closePopup();
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentCert({ certName: "", certInfo: "" });
    setEditing(null);
  };

  const handleEdit = (index) => {
    setCurrentCert(certifications[index]);
    setEditing(index);
    setShowPopup(true);
  };

  const handleDelete = (index) => {
    const updatedCerts = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCerts);
    setData(updatedCerts);
  };

  return (
    <div className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <div className="certification-summary">
              <span>{cert.certName}</span>
              <div className="certification-actions">
                <button className="item-button" onClick={() => handleEdit(index)}><img className="edit-icon" src={Cog} alt="Edit" /></button>
                <button className="item-button" onClick={() => handleDelete(index)}><img className="del-icon" src={Bin} alt="Delete" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setShowPopup(true)}>Add Certification</button>

      <PopupForm 
        show={showPopup}
        close={closePopup}
        onSubmit={handleSubmit}
        title={editing !== null ? "Edit Certification" : "Add Certification"}
      >
        <label>
          <span>Certification Name:</span>
          <input
            type="text"
            value={currentCert.certName}
            onChange={(e) => setCurrentCert({ 
              ...currentCert, 
              certName: e.target.value 
            })}
            required
          />
        </label>
        <label>
          <span>Certification Details:</span>
          <input
            type="text"
            value={currentCert.certInfo}
            onChange={(e) => setCurrentCert({ 
              ...currentCert, 
              certInfo: e.target.value 
            })}
            required
          />
        </label>
      </PopupForm>
    </div>
  );
}

export default Certifications;
