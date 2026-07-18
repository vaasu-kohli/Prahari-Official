const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

function getBase64Image(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  let mimeType = 'image/jpeg';
  if (ext === '.png') mimeType = 'image/png';
  else if (ext === '.svg') mimeType = 'image/svg+xml';
  
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath).toString('base64');
    return `data:${mimeType};base64,${data}`;
  }
  return '';
}

(async () => {
  try {
    let html = fs.readFileSync('brochure.html', 'utf8');

    // Replace all file:///app/applet/src/assets/images/... with base64
    html = html.replace(/file:\/\/\/app\/applet\/src\/assets\/images\/([^"'\\]+\.(png|jpg))/g, (match, filename) => {
      const realPath = path.join(__dirname, 'src/assets/images', filename);
      const b64 = getBase64Image(realPath);
      return b64 ? b64 : match;
    });
    
    fs.writeFileSync('brochure_base64.html', html);

    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--allow-file-access-from-files']
    });
    const page = await browser.newPage();
    
    // Wait for everything to load, including web fonts
    const filePath = path.resolve(__dirname, 'brochure_base64.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
    
    // Evaluate if there are blank pages
    const bodyHTML = await page.evaluate(() => document.body.innerHTML.length);
    console.log('Body HTML length:', bodyHTML);

    await page.pdf({
      path: 'public/PRAHARI_Brochure_Final.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log('PDF successfully generated at public/PRAHARI_Brochure_Final.pdf');
    await browser.close();
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
