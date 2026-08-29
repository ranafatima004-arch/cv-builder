import html2pdf from 'html2pdf.js';

export const downloadPDF = async (elementId, fileName = 'resume') => {
  const element = document.getElementById(elementId);
  if (!element) throw new Error('Resume preview not found');

  const safeName = fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'resume';
  await html2pdf().set({
    margin: [10, 10, 10, 10],
    filename: `${safeName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false, scrollX: 0, scrollY: 0, windowWidth: element.scrollWidth },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
    pagebreak: { mode: ['css', 'legacy'], before: '.page-break-before', after: '.page-break-after', avoid: ['.resume-block', '.resume-entry'] },
  }).from(element).toPdf().get('pdf').then((pdf) => {
    const pageCount = pdf.internal.getNumberOfPages();
    for (let page = 1; page <= pageCount; page += 1) pdf.setPage(page);
  }).save();
};
