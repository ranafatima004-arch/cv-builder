import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const waitForFonts = async () => {
  if (document.fonts?.ready) await document.fonts.ready;
};

export const downloadPDF = async (elementId, fileName = 'resume') => {
  const element = document.getElementById(elementId);
  if (!element) throw new Error('Resume preview not found');

  await waitForFonts();
  const safeName = fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'resume';
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false,
    scrollX: 0,
    scrollY: 0,
    width: element.scrollWidth,
    height: element.scrollHeight,
    windowWidth: Math.max(element.scrollWidth, document.documentElement.clientWidth),
    windowHeight: Math.max(element.scrollHeight, document.documentElement.clientHeight),
  });

  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
  const margin = 10;
  const pageWidth = 210;
  const pageHeight = 297;
  const contentWidth = pageWidth - margin * 2;
  const contentHeight = pageHeight - margin * 2;
  const pxPerMm = canvas.width / contentWidth;
  const pageCanvasHeight = Math.floor(contentHeight * pxPerMm);
  const pageCount = Math.ceil(canvas.height / pageCanvasHeight);

  for (let page = 0; page < pageCount; page += 1) {
    if (page > 0) pdf.addPage();
    const sourceY = page * pageCanvasHeight;
    const sliceHeight = Math.min(pageCanvasHeight, canvas.height - sourceY);
    const slice = document.createElement('canvas');
    slice.width = canvas.width;
    slice.height = sliceHeight;
    slice.getContext('2d').drawImage(canvas, 0, sourceY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);
    const renderedHeight = sliceHeight / pxPerMm;
    pdf.addImage(slice.toDataURL('image/jpeg', 0.98), 'JPEG', margin, margin, contentWidth, renderedHeight, undefined, 'FAST');
  }

  pdf.save(`${safeName}.pdf`);
};
