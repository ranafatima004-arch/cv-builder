import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadPDF = async (elementId) => {
  const input = document.getElementById(elementId);

  if (!input) {
    return;
  }

  const canvas = await html2canvas(input, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('resume.pdf');
};
