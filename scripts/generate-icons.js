const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputSvg = path.join(__dirname, '../public/icon.svg');

async function generateIcons() {
  for (const size of sizes) {
    const outputPath = path.join(__dirname, `../public/icon-${size}x${size}.png`);
    
    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`Generated: icon-${size}x${size}.png`);
  }
  
  console.log('All icons generated successfully!');
}

generateIcons().catch(console.error);
