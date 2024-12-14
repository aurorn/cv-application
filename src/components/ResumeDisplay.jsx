
import "../styles/ResumeDisplay.css";

function ResumeDisplay({ generalInfo, educationInfo, practicalInfo }) {
  return (
    <div className="resume-display">
      <section className="info-section">
        <section className="name-title">
          <h2>{generalInfo.name}</h2>
          <p className="job-title-text">Job Title:</p>
        </section>
        <section className="info-text-container">
          <h3></h3>
          <p className="info-text">{generalInfo.email}</p>
          <p className="info-text">{generalInfo.phone}</p>
        </section>
      </section>
    
      <section>
        <h3>Work Experience</h3>
        <p><strong>Company Name:</strong> {practicalInfo.companyName}</p>
        <p><strong>Position Title:</strong> {practicalInfo.positionTitle}</p>
        <p><strong>Responsibilities:</strong> {practicalInfo.mainTasks}</p>
        <p><strong>From:</strong> {practicalInfo.dateFrom} <strong>Until:</strong> {practicalInfo.dateUntil}</p>
      </section>

      <section>
        <h3>Education</h3>
        <p><strong>School:</strong> {educationInfo.schoolName}</p>
        <p><strong>Title of Study:</strong> {educationInfo.titleOfStudy}</p>
        <p><strong>Date of Study:</strong> {educationInfo.dateOfStudy}</p>
      </section>
    </div>
  );
}

export default ResumeDisplay;
