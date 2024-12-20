import { useState } from "react";
import "../styles/Certification.css";

function Certification({ data, setData }) {
  const [certifications, setCertifications] = useState(data || []);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const emptyCertification = {
    certName: '',
    certInfo: ''
  };

  const [currentCert, setCurrentCert] = useState(emptyCertification);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing !== null) {
      const updatedCertifications = [...certifications];
      updatedCertifications[editing] = currentCert;
      setCertifications(updatedCertifications);
      setData(updatedCertifications);
    } else {
      const newCertifications = [...certifications, currentCert];
      setCertifications(newCertifications);
      setData(newCertifications);
    }
    setCurrentCert(emptyCertification);
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentCert(certifications[index]);
    setEditing(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCertifications);
    setData(updatedCertifications);
  };

  return (
    <div className="certifications-section">
      <h2>Certifications</h2>
      
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <span>{cert.certName} - {cert.certInfo}</span>
            <div className="certification-actions">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add Certification</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            <span>Certification Name:</span>
            <input
              type="text"
              value={currentCert.certName}
              onChange={(e) => setCurrentCert({...currentCert, certName: e.target.value})}
            />
          </label>
          <label>
            <span>Certification Details:</span>
            <input
              type="text"
              value={currentCert.certInfo}
              onChange={(e) => setCurrentCert({...currentCert, certInfo: e.target.value})}
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

export default Certification;