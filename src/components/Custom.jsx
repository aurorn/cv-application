import { useState } from "react";
import "../styles/Custom.css";

function Custom({ data, setData }) {
  const [customs, setCustoms] = useState(data || []);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const emptyCustom = {
    name: '',
    info: ''
  };

  const [currentCustom, setCurrentCustom] = useState(emptyCustom);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing !== null) {
      const updatedCustoms = [...customs];
      updatedCustoms[editing] = currentCustom;
      setCustoms(updatedCustoms);
      setData(updatedCustoms);
    } else {
      const newCustoms = [...customs, currentCustom];
      setCustoms(newCustoms);
      setData(newCustoms);
    }
    setCurrentCustom(emptyCustom);
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setCurrentCustom(customs[index]);
    setEditing(index);
    setShowForm(true);
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
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add Section</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            <span>Section Title:</span>
            <input
              type="text"
              value={currentCustom.name}
              onChange={(e) => setCurrentCustom({...currentCustom, name: e.target.value})}
              placeholder="e.g., Projects, Achievements, Languages"
            />
          </label>
          <label>
            <span>Section Content:</span>
            <textarea
              value={currentCustom.info}
              onChange={(e) => setCurrentCustom({...currentCustom, info: e.target.value})}
              placeholder="Enter the content for this section"
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

export default Custom;