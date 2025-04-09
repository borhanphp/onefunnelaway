const fs = require('fs');
const path = require('path');

// List of icons to generate (very simple placeholders)
const icons = [
  { name: 'favicon.ico', size: 16 },
  { name: 'icon-16x16.png', size: 16 },
  { name: 'icon-32x32.png', size: 32 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
  { name: 'apple-icon.png', size: 180 },
  { name: 'apple-icon-180x180.png', size: 180 },
];

const publicDir = path.join(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create a very simple placeholder file for each icon
// Note: In a real project, these would be actual optimized icon files
icons.forEach(icon => {
  const filePath = path.join(publicDir, icon.name);
  
  // Only create if the file doesn't exist
  if (!fs.existsSync(filePath)) {
    console.log(`Creating placeholder for ${icon.name}`);
    
    // Create a simple text file as placeholder
    // In real implementation, you would use an image processing library
    fs.writeFileSync(filePath, `Placeholder for ${icon.name} (${icon.size}x${icon.size})`);
  }
});

console.log('Favicon placeholders generated successfully!'); 