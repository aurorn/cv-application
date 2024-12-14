import { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracExp from './components/PracExp';
import ResumeDisplay from './components/ResumeDisplay';

function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [educationInfo, setEducationInfo] = useState({ schoolName: '', titleOfStudy: '', dateOfStudy: '' });
  const [practicalInfo, setPracticalInfo] = useState({ companyName: '', positionTitle: '', mainTasks: '', dateFrom: '', dateUntil: '' });

  return (
    <div className="app-container">
      <div className="form-section">
        <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
        <Education data={educationInfo} setData={setEducationInfo} />
        <PracExp data={practicalInfo} setData={setPracticalInfo} />
      </div>
      <div className="display-section">
        <ResumeDisplay
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          practicalInfo={practicalInfo}
        />
      </div>
    </div>
  );
}

export default App;
