import "../styles/ResumeDisplay.css";

function ResumeDisplay({ generalInfo, educationInfo, practicalInfo, customInfo, skillsInfo, certInfo}) {
  return (
    <div className="resume-display">
      <section className="info-section">
        <section className="name-title">
          <h2 className="name-title-text">{generalInfo.name}</h2>
          <p className="job-title-text">{generalInfo.job}</p>
        </section>
        <section className="info-text-container">
          <p className="info-text">{generalInfo.email}</p>
          <p className="info-text">{generalInfo.phone}</p>
        </section>
      </section>
      <section className="side-container">
        <section className="left-side">
            <section className="work-section">
              <h3 className="work-title">Work Experience</h3>
              {practicalInfo.map((exp, index) => (
                <section key={index} className="info-container">
                  <section className="time-container">
                    <p>{exp.dateFrom} <strong> - </strong> {exp.dateUntil}</p>
                  </section>
                  <section className="work-info">
                    <p><strong>{exp.positionTitle}</strong></p>
                    <p>{exp.companyName}</p>
                    <p>{exp.mainTasks}</p>
                  </section>
                </section>
              ))}
            </section>

            <section className="edu-section">
              <h3 className="edu-title">Education</h3>
              {educationInfo.map((edu, index) => (
                <section key={index} className="info-container">
                  <section className="time-container">
                    <p>{edu.dateOfStudy}</p>
                    <p>{edu.location}</p>
                  </section>
                  <section className="edu-info">
                    <p><strong>{edu.schoolName}</strong></p>
                    <p>{edu.titleOfStudy}</p>
                  </section>
                </section>
              ))}
            </section>

            <section className="custom-sections">
              {customInfo && customInfo.map((custom, index) => (
                <section key={index} className="custom-section">
                  <h3 className="custom-title">{custom.name}</h3>
                  <section className="custom-container">
                    <section className="custom-info">
                      <p>{custom.info}</p>
                    </section>
                  </section>
                </section>
              ))}
            </section>
          </section>

          <section className="right-side">
            <section className="skill-section">
              {skillsInfo.map((skill, index) => (
                <div key={index}>
                  <section className="skill-container">
                    <h3 className="skill-title">{skill.title}</h3>
                  </section>
                  <section className="skill-info">
                    <p>{skill.info}</p>
                  </section>
                </div>
              ))}
            </section>
          
            <section className="cert-section">
              <h3 className="cert-title">Certifications</h3>
              <div className="cert-container">
                {certInfo && certInfo.map((cert, index) => (
                  <section key={index} className="cert-info">
                    <p><strong>{cert.certName}</strong></p>
                    <p>{cert.certInfo}</p>
                  </section>
                ))}
              </div>
            </section>
          </section>
      </section>

    </div>
  );
}

export default ResumeDisplay;
