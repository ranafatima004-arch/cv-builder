import html2pdf from 'html2pdf.js'

const waitForFonts = async () => {
  if (document.fonts?.ready) await document.fonts.ready
}

export async function downloadPDF(elementId, fileName = 'resume') {
  const element = document.getElementById(elementId)
  if (!element) throw new Error('Resume preview is not available yet.')

  await waitForFonts()
  const safeName = fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'resume'
  const options = {
    margin: [10, 10, 10, 10],
    filename: `${safeName}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
    pagebreak: { mode: ['css', 'legacy'] },
  }

  await html2pdf().set(options).from(element).save()
}

export const printResume = downloadPDF
