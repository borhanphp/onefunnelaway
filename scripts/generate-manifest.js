const fs = require('fs');
const path = require('path');

const manifestData = {
  name: "One Funnel Away - ClickFunnels Resources and Guides",
  short_name: "One Funnel Away",
  description: "Get the best ClickFunnels resources, tutorials, and comparison guides for building high-converting sales funnels.",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#2563eb",
  icons: [
    {
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ]
};

const publicDir = path.join(__dirname, '../public');
const manifestPath = path.join(publicDir, 'manifest.json');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write manifest file
fs.writeFileSync(manifestPath, JSON.stringify(manifestData, null, 2));

console.log('Manifest file generated successfully at', manifestPath); 