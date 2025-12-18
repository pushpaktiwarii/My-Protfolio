const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://i.pinimg.com/736x/45/c9/30/45c930089bd6991ac39e475423a1bb61.jpg';
const outputPath = path.join(__dirname, '../public/favicon.jpg');
const appFaviconPath = path.join(__dirname, '../src/app/icon.jpg');

https.get(imageUrl, (response) => {
  if (response.statusCode === 200) {
    const fileStream = fs.createWriteStream(outputPath);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      // Also copy to app directory as icon.jpg for Next.js App Router
      fs.copyFileSync(outputPath, appFaviconPath);
      console.log('Favicon downloaded successfully to both public and app directories');
    });
  } else {
    console.error('Failed to download image:', response.statusCode);
  }
}).on('error', (err) => {
  console.error('Error downloading image:', err);
});

