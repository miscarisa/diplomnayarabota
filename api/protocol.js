const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  try {
    const baseDir = path.join(process.cwd(), 'assets', 'protocol-radja');
    const base64 = Array.from({ length: 8 }, (_, index) => {
      const fileName = `chunk${String(index + 1).padStart(2, '0')}.b64`;
      return fs.readFileSync(path.join(baseDir, fileName), 'utf8');
    }).join('').replace(/\s+/g, '');

    const pdf = Buffer.from(base64, 'base64');

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="protocol.pdf"');
    res.setHeader('Content-Length', String(pdf.length));
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.status(200).send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to load protocol PDF');
  }
};
