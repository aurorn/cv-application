import JsPDF from 'jspdf';

export default function Download({ generalInfo, educationInfo, practicalInfo, customInfo, skillsInfo, certInfo }) {
  const downloadPDF = () => {
    const doc = new JsPDF();
    let yPos = 20;
    const leftMargin = 20;
    const rightMargin = 190;
    const lineHeight = 10;
    const middlePoint = 140; 
    const leftColumnWidth = 100;
    const rightColumnWidth = 50;

    const addSectionTitle = (doc, text, yPos, leftMargin, width) => {
      const titleWidth = doc.getTextWidth(text);
      const centerX = leftMargin + (width / 2) - (titleWidth / 2);
      
      doc.setFillColor(200, 200, 200);
      doc.rect(leftMargin - 5, yPos - 7, width + 10, 10, 'F');
      doc.text(text, centerX, yPos);
      
      return yPos + lineHeight * 1.5;
    };

    const addRightColumnTitle = (doc, text, yPos) => {
      const titleWidth = doc.getTextWidth(text);
      const centerX = middlePoint + (rightColumnWidth / 2) - (titleWidth / 2);
      
      doc.setFillColor(200, 200, 200);
      doc.rect(middlePoint - 5, yPos - 7, rightColumnWidth + 10, 10, 'F');
      doc.text(text, centerX, yPos);
      
      return yPos + lineHeight * 1.5;
    };

    // Header section
    doc.setFillColor(0, 47, 90); 
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text(generalInfo.name, leftMargin, yPos);
    doc.setFontSize(12);
    doc.text(`${generalInfo.job}`, leftMargin, yPos + lineHeight);
    doc.text(`${generalInfo.email}`, rightMargin, yPos, { align: 'right' });
    doc.text(`${generalInfo.phone}`, rightMargin, yPos + lineHeight, { align: 'right' });
    yPos += lineHeight * 4;

    // Reset text color to black
    doc.setTextColor(0, 0, 0);

    // Work Experience Section
    doc.setFontSize(16);
    yPos = addSectionTitle(doc, "Work Experience", yPos, leftMargin, leftColumnWidth);

    doc.setFontSize(10);
    practicalInfo.forEach((exp) => {
      const dateWidth = 40;
      doc.text(`${exp.dateFrom}`, leftMargin, yPos);
      doc.text(`${exp.dateUntil}`, leftMargin, yPos + lineHeight);
      doc.setFont(undefined, 'bold');
      doc.text(exp.positionTitle, leftMargin + dateWidth, yPos);
      doc.setFont(undefined, 'normal');
      yPos += lineHeight;
      doc.text(exp.companyName, leftMargin + dateWidth, yPos);
      yPos += lineHeight;
      const tasks = doc.splitTextToSize(exp.mainTasks, leftColumnWidth - dateWidth);
      doc.text(tasks, leftMargin + dateWidth, yPos);
      yPos += lineHeight + 20;
    });

    // Education Section
    doc.setFontSize(16);
    yPos = addSectionTitle(doc, "Education", yPos, leftMargin, leftColumnWidth);

    doc.setFontSize(10);
    educationInfo.forEach(edu => {
      const dateWidth = 40;
      doc.text(`${edu.dateFrom}`, leftMargin, yPos+ lineHeight);
      doc.setFont(undefined, 'bold');
      doc.text(edu.schoolName, leftMargin + dateWidth, yPos);
      doc.setFont(undefined, 'normal');
      yPos += lineHeight;
      doc.text(edu.titleOfStudy, leftMargin + dateWidth, yPos);
      yPos += lineHeight + 5 ;
    });

    // Professional Summary (Custom Info)
    if (customInfo && customInfo.length > 0) {
      doc.setFontSize(16);
      doc.setFillColor(80, 80, 88, 0.26);
      doc.rect(leftMargin - 5, yPos - 5, leftColumnWidth, 10, 'F');
      doc.text("Professional Summary", leftMargin, yPos);
      yPos += lineHeight * 1.5;

      doc.setFontSize(10);
      customInfo.forEach(custom => {
        const summary = doc.splitTextToSize(custom.info, leftColumnWidth);
        doc.text(summary, leftMargin, yPos);
        yPos += lineHeight * summary.length;
      });
      yPos += lineHeight;
    }

    // Right column section
    let rightColumnY = 60;

    // Skills Section
    doc.setFontSize(16);
    rightColumnY = addRightColumnTitle(doc, "Skills", rightColumnY);

    doc.setFontSize(10);
    skillsInfo.forEach(skill => {
      doc.setFont(undefined, 'bold');
      doc.text(skill.title, middlePoint, rightColumnY);
      doc.setFont(undefined, 'normal');
      rightColumnY += lineHeight;
      const skills = doc.splitTextToSize(skill.info, rightColumnWidth);
      doc.text(skills, middlePoint, rightColumnY);
      rightColumnY += lineHeight * skills.length + 5;
    });

    rightColumnY += lineHeight;

    // Certifications Section
    doc.setFontSize(16);
    rightColumnY = addRightColumnTitle(doc, "Certifications", rightColumnY);

    doc.setFontSize(10);
    certInfo.forEach(cert => {
      doc.setFont(undefined, 'bold');
      doc.text(cert.certName, middlePoint, rightColumnY);
      doc.setFont(undefined, 'normal');
      rightColumnY += lineHeight;
      const certText = doc.splitTextToSize(cert.certInfo, rightColumnWidth);
      doc.text(certText, middlePoint, rightColumnY);
      rightColumnY += lineHeight * certText.length + 5;
    });

    doc.save('resume.pdf');
  };

  return (
    <button onClick={downloadPDF} className="download-btn">
      Download PDF
      <span className="download-icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path fill="currentColor" d="M220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Zm260-153L287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193Z"/>
        </svg>
      </span>
    </button>
  );
}