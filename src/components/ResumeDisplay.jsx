
import "../styles/ResumeDisplay.css";

function ResumeDisplay({ generalInfo, educationInfo, practicalInfo }) {
  return (
    <div className="resume-display">
      <section className="info-section">
        <section className="name-title">
          <h2 className="name-title-text">{generalInfo.name}</h2>
          <p className="job-title-text">{generalInfo.jobTitle}</p>
        </section>
        <section className="info-text-container">
          <p className="info-text">{generalInfo.email}</p>
          <p className="info-text">{generalInfo.phone}</p>
        </section>
      </section>
    
      <section className="work-section">
        <h3 className="work-title">Work Experience</h3>
        <section className="info-container">
          <section className="time-container">
            <p>{practicalInfo.dateFrom} <strong> - </strong> {practicalInfo.dateUntil}</p>
            <p>{practicalInfo.Location}</p>
          </section>
          <section className="work-info">
            <p><strong>{practicalInfo.positionTitle}</strong></p>
            <p>{practicalInfo.companyName}</p>
            <p>{practicalInfo.mainTasks}</p>
          </section>
        </section>
      </section>

      <section className="edu-section">
        <h3 className="edu-title">Education</h3>
        <section className="info-container">
          <section className="time-container">
            <p>{educationInfo.dateOfStudy}</p>
            <p>{practicalInfo.Location}</p>
          </section>
          <section className="edu-info">
            <p><strong>{educationInfo.schoolName}</strong> </p>
            <p>{educationInfo.titleOfStudy}</p>
            
          </section>
        </section>
      </section>
    </div>
  );
}

export default ResumeDisplay;
