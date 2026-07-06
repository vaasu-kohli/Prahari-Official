const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const pagesText = [
    [
      { text: 'PRAHARI', size: 40, y: 700, bold: true },
      { text: 'Smart Public Infrastructure for Urban India', size: 20, y: 650 },
      { text: 'prahari-official.vercel.app', size: 14, y: 620, color: rgb(0, 0, 1) },
    ],
    [
      { text: 'THE CHALLENGE', size: 30, y: 700, bold: true },
      { text: 'Public Spaces Deserve Better.', size: 20, y: 650 },
      { text: 'No Emergency Access', size: 16, y: 600, bold: true },
      { text: 'Citizens in danger have no visible, physical way to reach help', size: 14, y: 570 },
      { text: 'in a public emergency.', size: 14, y: 550 },
      { text: 'Disconnected Spaces', size: 16, y: 500, bold: true },
      { text: 'Public environments lack the connected infrastructure needed', size: 14, y: 470 },
      { text: 'for realtime safety and response.', size: 14, y: 450 },
    ],
    [
      { text: 'THE SOLUTION', size: 30, y: 700, bold: true },
      { text: 'One Intelligent Infrastructure Pillar.', size: 20, y: 650 },
      { text: 'PRAHARI turns every public space into a productive,', size: 14, y: 600 },
      { text: 'connected, and safe environment.', size: 14, y: 580 },
      { text: 'Why PRAHARI Works:', size: 16, y: 530, bold: true },
      { text: '• Advertising revenue funds public safety', size: 14, y: 500 },
      { text: '• Citizens get visible, accessible emergency access', size: 14, y: 480 },
      { text: '• Cities gain real-time monitoring', size: 14, y: 460 },
      { text: '• Local businesses get affordable outdoor advertising', size: 14, y: 440 },
    ],
    [
      { text: 'MEET PRAHARI', size: 30, y: 700, bold: true },
      { text: 'Engineered for Urban India.', size: 20, y: 650 },
      { text: '360 Degree Surveillance', size: 16, y: 600, bold: true },
      { text: 'Dome camera, continuous coverage', size: 14, y: 580 },
      { text: 'Emergency SOS Button', size: 16, y: 540, bold: true },
      { text: 'IP67 physical button, live operator', size: 14, y: 520 },
      { text: 'Smart Digital Display', size: 16, y: 480, bold: true },
      { text: 'High-brightness outdoor screen', size: 14, y: 460 },
      { text: 'Two-Way Communication', size: 16, y: 420, bold: true },
      { text: 'Live audio and video to responders', size: 14, y: 400 },
    ],
    [
      { text: 'DEPLOYMENT ENVIRONMENTS', size: 30, y: 700, bold: true },
      { text: 'Engineered to Deploy Across Every Public Setting.', size: 18, y: 650 },
      { text: '01. Smart Cities', size: 16, y: 600, bold: true },
      { text: 'Municipal districts and smart city corridors', size: 14, y: 580 },
      { text: '02. Universities', size: 16, y: 540, bold: true },
      { text: 'Campus grounds and student precincts', size: 14, y: 520 },
      { text: '03. Metro Stations & Airports', size: 16, y: 480, bold: true },
      { text: 'Platforms, concourses, terminal entrances', size: 14, y: 460 },
      { text: '04. Commercial Areas & Parks', size: 16, y: 420, bold: true },
      { text: 'High streets, markets, open spaces', size: 14, y: 400 },
    ],
    [
      { text: 'FOUNDER AND VISION', size: 30, y: 700, bold: true },
      { text: 'Founder\'s Message:', size: 20, y: 650, bold: true },
      { text: 'I founded PRAHARI to solve two persistent urban challenges:', size: 14, y: 610 },
      { text: 'immediate access to help during emergencies and affordable', size: 14, y: 590 },
      { text: 'public visibility for local businesses.', size: 14, y: 570 },
      { text: 'Vaasu Deep Kohli', size: 16, y: 510, bold: true },
      { text: 'Founder & CEO', size: 14, y: 490 },
      { text: 'prahari-official.vercel.app', size: 14, y: 450, color: rgb(0, 0, 1) },
      { text: 'vasudeepkohli@gmail.com', size: 14, y: 430 },
      { text: '+91 77809 87246', size: 14, y: 410 },
    ]
  ];

  for (const items of pagesText) {
    const page = pdfDoc.addPage();
    for (const item of items) {
      page.drawText(item.text, {
        x: 50,
        y: item.y,
        size: item.size,
        font: item.bold ? boldFont : font,
        color: item.color || rgb(0, 0, 0),
      });
    }
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/PRAHARI_Brochure_Final.pdf', pdfBytes);
  console.log('Successfully created fresh 6-page PDF');
}
createPdf().catch(console.error);
