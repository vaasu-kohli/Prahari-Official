const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--allow-file-access-from-files']
  });
  const page = await browser.newPage();
  const filePath = path.resolve(__dirname, 'brochure_ready.html');
  await page.setViewport({width: 1200, height: 1600});
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'html_screenshot.png', fullPage: true });
  await browser.close();
})();
