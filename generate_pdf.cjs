const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const html = fs.readFileSync('brochure.html', 'utf8');
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    
    // Convert relative path to absolute file URL
    const filePath = path.resolve(__dirname, 'brochure.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
    
    await page.pdf({
      path: 'public/PRAHARI_Brochure_Final.pdf',
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log('PDF successfully generated at public/PRAHARI_Brochure_Final.pdf');
    await browser.close();
  } catch (err) {
    console.error('Error generating PDF:', err);
    process.exit(1);
  }
})();
