const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--allow-file-access-from-files']
  });
  const page = await browser.newPage();
  const filePath = path.resolve(__dirname, 'public/PRAHARI_Brochure_Final.pdf');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'pdf_screenshot.png' });
  await browser.close();
})();
