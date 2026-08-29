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
  const exportRoot = element.cloneNode(true);
  exportRoot.id = `${elementId}-export`;
  exportRoot.style.cssText = `${element.style.cssText}; position: absolute; left: -100000px; top: 0; width: ${element.getBoundingClientRect().width}px; height: auto; min-height: 0; max-height: none; overflow: visible; box-sizing: border-box; padding: 24px 28px; background: #ffffff;`;
  exportRoot.querySelectorAll('*').forEach((node) => {
    node.style.maxHeight = 'none';
    node.style.height = 'auto';
    node.style.overflow = 'visible';
    node.style.breakInside = 'avoid';
    node.style.pageBreakInside = 'avoid';
  });
  document.body.appendChild(exportRoot);

  try {
    const exportWidth = exportRoot.scrollWidth;
    const exportHeight = exportRoot.scrollHeight;
    const canvas = await html2canvas(exportRoot, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      scrollX: 0,
      scrollY: 0,
      width: exportWidth,
      height: exportHeight,
      windowWidth: exportWidth,
      windowHeight: exportHeight,
    });

    const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
    const margin = 12;
    const pageWidth = 210;
    const pageHeight = 297;
    const contentWidth = pageWidth - margin * 2;
    const contentHeight = pageHeight - margin * 2;
    const pxPerMm = canvas.width / contentWidth;
    const pageCanvasHeight = Math.floor((contentHeight - 4) * pxPerMm);
    const pageCount = Math.max(1, Math.ceil(canvas.height / pageCanvasHeight));

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
  } finally {
    exportRoot.remove();
  }
};
