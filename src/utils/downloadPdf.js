export const downloadPDF = async (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) throw new Error('Resume preview not found');

  if (document.fonts?.ready) await document.fonts.ready;
  element.setAttribute('data-print-target', 'true');
  window.print();
  window.setTimeout(() => element.removeAttribute('data-print-target'), 300);
};

export const printResume = downloadPDF;
