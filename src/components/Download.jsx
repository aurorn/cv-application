import JsPDF from 'jspdf';

export default function Download({ generalInfo, educationInfo, practicalInfo, customInfo, skillsInfo, certInfo }) {
  const downloadPDF = () => {
    const doc = new JsPDF();
    let yPos = 20;
    const leftMargin = 20;
    const rightMargin = 190;
    const lineHeight = 10;

    // Header section with blue background
    doc.setFillColor(0, 47, 90); // #002f5a
    doc.rect(0, 0, 210, 40, 'F');
    
    // Header/General Info (in white text)
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text(generalInfo.name, leftMargin, yPos);
    
    doc.setFontSize(12);
    doc.text(`${generalInfo.job}`, leftMargin, yPos + lineHeight);
    // Use setTextAlign instead of setTextAlignment
    doc.text(`${generalInfo.email}`, rightMargin, yPos, { align: 'right' });
    doc.text(`${generalInfo.phone}`, rightMargin, yPos + lineHeight, { align: 'right' });
    yPos += lineHeight * 4;

    // Reset text color to black
    doc.setTextColor(0, 0, 0);

    // Professional Summary (Custom Info)
    if (customInfo && customInfo.length > 0) {
      doc.setFontSize(16);
      doc.setFillColor(80, 80, 88, 0.26);
      doc.rect(leftMargin - 5, yPos - 5, 120, 10, 'F');
      doc.text("Professional Summary", leftMargin, yPos);
      yPos += lineHeight * 2;

      doc.setFontSize(12);
      customInfo.forEach(custom => {
        const summary = doc.splitTextToSize(custom.info, 170);
        doc.text(summary, leftMargin, yPos);
        yPos += lineHeight * summary.length + lineHeight;
      });
    }

    // Work Experience Section
    doc.setFontSize(16);
    doc.setFillColor(80, 80, 88, 0.26);
    doc.rect(leftMargin - 5, yPos - 5, 120, 10, 'F');
    doc.text("Work Experience", leftMargin, yPos);
    yPos += lineHeight * 2;

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
    doc.setFillColor(80, 80, 88, 0.26);
    doc.rect(leftMargin - 5, yPos - 5, 120, 10, 'F');
    doc.text("Education", leftMargin, yPos);
    yPos += lineHeight * 2;

    doc.setFontSize(12);
    educationInfo.forEach(edu => {
      doc.setFont(undefined, 'bold');
      doc.text(edu.schoolName, leftMargin, yPos);
      doc.setFont(undefined, 'normal');
      yPos += lineHeight;
      doc.text(edu.titleOfStudy, leftMargin, yPos);
      yPos += lineHeight;
      doc.text(`${edu.dateFrom} - ${edu.dateUntil}`, leftMargin, yPos);
      yPos += lineHeight * 2;
    });

    // Right column sections
    let rightColumnY = 70;
    const middlePoint = 140;

    // Skills Section
    doc.setFontSize(16);
    doc.setFillColor(80, 80, 88, 0.26);
    doc.rect(middlePoint - 5, rightColumnY - 5, 60, 10, 'F');
    doc.text("Skills", middlePoint, rightColumnY);
    rightColumnY += lineHeight * 2;

    doc.setFontSize(12);
    skillsInfo.forEach(skill => {
      doc.setFont(undefined, 'bold');
      doc.text(skill.title, middlePoint, rightColumnY);
      doc.setFont(undefined, 'normal');
      rightColumnY += lineHeight;
      const skills = doc.splitTextToSize(skill.info, 60);
      doc.text(skills, middlePoint, rightColumnY);
      rightColumnY += lineHeight * skills.length + 5;
    });

    // Certifications Section
    doc.setFontSize(16);
    doc.setFillColor(80, 80, 88, 0.26);
    doc.rect(middlePoint - 5, rightColumnY - 5, 60, 10, 'F');
    doc.text("Certifications", middlePoint, rightColumnY);
    rightColumnY += lineHeight * 2;

    doc.setFontSize(12);
    certInfo.forEach(cert => {
      doc.setFont(undefined, 'bold');
      doc.text(cert.certName, middlePoint, rightColumnY);
      doc.setFont(undefined, 'normal');
      rightColumnY += lineHeight;
      const certInfo = doc.splitTextToSize(cert.certInfo, 60);
      doc.text(certInfo, middlePoint, rightColumnY);
      rightColumnY += lineHeight * certInfo.length + 5;
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