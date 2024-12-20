import { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracExp from './components/PracExp';
import ResumeDisplay from './components/ResumeDisplay';
import Custom from './components/Custom';
import Skills from './components/Skills';
import Certification from './components/Certifications';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "John Doe",
    job: "Software Engineer",
    email: "john.doe@email.com",
    phone: "(555) 123-4567"
  });

  const [educationInfo, setEducationInfo] = useState([{
    schoolName: "University of Technology",
    titleOfStudy: "Bachelor of Science in Computer Science",
    dateOfStudy: "2024-12-11",
    location: "Boston, MA"
  }]);

  const [practicalInfo, setPracticalInfo] = useState([{
    companyName: "Tech Solutions Inc.",
    positionTitle: "Full Stack Developer",
    mainTasks: "Developed and maintained web applications using React and Node.js. Led a team of 3 developers for client projects.",
    dateFrom: "2024-12-18 - ",
    dateUntil: "Present"
  }, {
    companyName: "Digital Innovations Co.",
    positionTitle: "Junior Developer",
    mainTasks: "Built responsive web interfaces and implemented REST APIs. Collaborated with UX team for design implementation.",
    dateFrom: "2024-12-09",
    dateUntil: "2024-12-25"
  }]);

  const [skillsInfo, setSkillsInfo] = useState([{
    title: "Technical Skills",
    info: "JavaScript, React, Node.js, HTML5, CSS3, Git"
  }]);

  const [certInfo, setCertInfo] = useState([{
    certName: "AWS Certified Developer",
    certInfo: "Amazon Web Services - 2023"
  }, {
    certName: "Professional Scrum Master I",
    certInfo: "Scrum.org - 2022"
  }]);

  const [customInfo, setCustomInfo] = useState([{
    name: "Professional Summary",
    info: "Results-driven software engineer with 3+ years of experience in full-stack development. Passionate about creating efficient, scalable solutions and leading development teams to success."
  }]);

  return (
    <div className="app-container">
      <div className="input-sections">
        <div className="form-section">
          <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
        </div>
        <div className="form-section">
          <Education data={educationInfo} setData={setEducationInfo} />
        </div>
        <div className="form-section">
          <PracExp data={practicalInfo} setData={setPracticalInfo} />
        </div>
        <div className="form-section">
          <Custom data={customInfo} setData={setCustomInfo} />
        </div>
        <div className="form-section">
          <Skills data={skillsInfo} setData={setSkillsInfo} />
        </div>
        <div className="form-section">
          <Certification data={certInfo} setData={setCertInfo} />
        </div>
      </div>
      <div className="display-section">
        <ResumeDisplay
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          practicalInfo={practicalInfo}
          customInfo={customInfo}
          skillsInfo={skillsInfo}
          certInfo={certInfo}
        />
      </div>
    </div>
  );
}

export default App;
