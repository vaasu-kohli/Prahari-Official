const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
async function test() {
  try {
    const pdfBytes = fs.readFileSync('public/PRAHARI_Brochure_Final.pdf');
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
    console.log('PDF is valid. Page count:', pdfDoc.getPageCount());
  } catch (e) {
    console.log('PDF load failed:', e.message);
  }
}
test();
