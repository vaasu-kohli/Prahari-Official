const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const imageFiles = [
  'src/assets/images/prahari_hero_new.png',
  'src/assets/images/prahari_commercial_1782825441207.jpg',
  'src/assets/images/prahari_smartcity_1782825503372.jpg',
  'src/assets/images/prahari_front.jpg.png',
  'src/assets/images/env_smartcity.png',
  'src/assets/images/env_metro.png',
  'src/assets/images/env_park.png',
  'src/assets/images/env_market.png',
  'src/assets/images/vaasu_picture.png'
];

async function compressImages() {
  if (!fs.existsSync('public/compressed')) {
    fs.mkdirSync('public/compressed', { recursive: true });
  }
  for (const file of imageFiles) {
    const filename = path.basename(file);
    const dest = path.join('public/compressed', filename.replace('.png', '.jpg'));
    await sharp(file)
      .resize(1000)
      .jpeg({ quality: 75 })
      .toFile(dest);
  }
}

function getBase64Image(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath).toString('base64');
    return `data:image/jpeg;base64,${data}`;
  }
  return '';
}

(async () => {
  try {
    await compressImages();
    console.log('Images compressed successfully.');

    let html = fs.readFileSync('brochure.html', 'utf8');
    html = html.replace(/file:\/\/\/app\/applet\/src\/assets\/images\/([^"'\\]+\.(png|jpg))/g, (match, filename) => {
      const jpgFilename = filename.replace('.png', '.jpg');
      const realPath = path.join(__dirname, 'public/compressed', jpgFilename);
      const b64 = getBase64Image(realPath);
      return b64 ? b64 : match;
    });
    
    fs.writeFileSync('brochure_ready.html', html);

    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--allow-file-access-from-files']
    });
    const page = await browser.newPage();
    
    const filePath = path.resolve(__dirname, 'brochure_ready.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
    
    // Wait an extra 2 seconds to ensure Tailwind CDN and fonts are completely applied
    await new Promise(r => setTimeout(r, 2000));

    await page.evaluate(async () => {
      // Force all images to load
      const selectors = Array.from(document.querySelectorAll("img"));
      await Promise.all(selectors.map(img => {
        if (img.complete) return;
        return new Promise((resolve, reject) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', reject);
        });
      }));
    });

    await page.pdf({
      path: 'public/PRAHARI_Brochure_Final.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
    });

    console.log('PDF successfully generated at public/PRAHARI_Brochure_Final.pdf');
    await browser.close();
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
