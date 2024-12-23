import "../styles/Popup.css";

const PopupForm = ({ show, close, onSubmit, title, children }) => {
    return (
      <div className={`popup ${show ? "show" : ""}`}>
        <div className="popup-content">
          <h3 className="popup-title">{title}</h3>
          <form onSubmit={onSubmit}>
            {children}
            <div className="form-actions">
              <button type="submit">Submit</button>
              <button type="button" onClick={close}>Cancel</button>
            </div>
          </form>
          <button className="close" onClick={close}>&times;</button>
        </div>
      </div>
    );
  };

export default PopupForm;