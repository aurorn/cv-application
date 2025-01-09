import JsPDF from 'jspdf';

export default function Download({ generalInfo, educationInfo, practicalInfo, customInfo, skillsInfo, certInfo }) {
  const downloadPDF = () => {
    const doc = new JsPDF();
    let yPos = 20;
    const leftMargin = 20;
    const lineHeight = 10;

    // Header/General Info
    doc.setFontSize(20);
    doc.text(generalInfo.name, leftMargin, yPos);
    
    doc.setFontSize(12);
    yPos += lineHeight;
    doc.text(`${generalInfo.job}`, leftMargin, yPos);
    yPos += lineHeight;
    doc.text(`Email: ${generalInfo.email}`, leftMargin, yPos);
    yPos += lineHeight;
    doc.text(`Phone: ${generalInfo.phone}`, leftMargin, yPos);
    yPos += lineHeight * 2;

    // Custom Info Section (usually Professional Summary)
    doc.setFontSize(16);
    doc.text("Professional Summary", leftMargin, yPos);
    yPos += lineHeight;
    doc.setFontSize(12);
    customInfo.forEach(custom => {
      const lines = doc.splitTextToSize(custom.info, 170);
      doc.text(lines, leftMargin, yPos);
      yPos += lineHeight * lines.length;
    });
    yPos += lineHeight;

    // Work Experience Section
    doc.setFontSize(16);
    doc.text("Work Experience", leftMargin, yPos);
    yPos += lineHeight;
    doc.setFontSize(12);
    practicalInfo.forEach(exp => {
      doc.setFont(undefined, 'bold');
      doc.text(exp.positionTitle, leftMargin, yPos);
      doc.setFont(undefined, 'normal');
      yPos += lineHeight;
      doc.text(`${exp.companyName} (${exp.dateFrom} - ${exp.dateUntil})`, leftMargin, yPos);
      yPos += lineHeight;
      const tasks = doc.splitTextToSize(exp.mainTasks, 170);
      doc.text(tasks, leftMargin, yPos);
      yPos += lineHeight * tasks.length + lineHeight;
    });

    // Education Section
    doc.setFontSize(16);
    doc.text("Education", leftMargin, yPos);
    yPos += lineHeight;
    doc.setFontSize(12);
    educationInfo.forEach(edu => {
      doc.setFont(undefined, 'bold');
      doc.text(edu.schoolName, leftMargin, yPos);
      doc.setFont(undefined, 'normal');
      yPos += lineHeight;
      doc.text(`${edu.titleOfStudy}`, leftMargin, yPos);
      yPos += lineHeight;
      doc.text(`${edu.location} - ${edu.dateOfStudy}`, leftMargin, yPos);
      yPos += lineHeight + 5;
    });

    // Skills Section
    doc.setFontSize(16);
    doc.text("Skills", leftMargin, yPos);
    yPos += lineHeight;
    doc.setFontSize(12);
    skillsInfo.forEach(skill => {
      doc.setFont(undefined, 'bold');
      doc.text(skill.title, leftMargin, yPos);
      doc.setFont(undefined, 'normal');
      yPos += lineHeight;
      const skills = doc.splitTextToSize(skill.info, 170);
      doc.text(skills, leftMargin, yPos);
      yPos += lineHeight * skills.length + 5;
    });

    // Certifications Section
    doc.setFontSize(16);
    doc.text("Certifications", leftMargin, yPos);
    yPos += lineHeight;
    doc.setFontSize(12);
    certInfo.forEach(cert => {
      doc.setFont(undefined, 'bold');
      doc.text(cert.certName, leftMargin, yPos);
      doc.setFont(undefined, 'normal');
      yPos += lineHeight;
      doc.text(cert.certInfo, leftMargin, yPos);
      yPos += lineHeight + 5;
    });

    doc.save('resume.pdf');
  };

  return (
    <button onClick={downloadPDF} className="download-btn">
      <span className="download-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path fill="currentColor" d="M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z"/>
        </svg>
      </span>
    </button>
  );
}