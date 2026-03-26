const fs = require('fs');
const path = require('path');

const tribesDir = path.join('c:', 'cardtara', 'public', 'tribes');
const tribes = fs.readdirSync(tribesDir);
let totalChanged = 0;

tribes.forEach(tribe => {
  const contentPath = path.join(tribesDir, tribe, 'content.json');
  if (!fs.existsSync(contentPath)) return;

  const data = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
  let modified = false;

  data.cards.forEach(card => {
    if (card.images) {
      card.images = card.images.map(img => {
        if (img.endsWith('.webp')) {
          const newImg = img.replace('.webp', '.jpg');
          console.log(`  ${tribe}/${card.slug}: ${img} -> ${newImg}`);
          totalChanged++;
          modified = true;
          return newImg;
        }
        return img;
      });
    }
  });

  if (modified) {
    fs.writeFileSync(contentPath, JSON.stringify(data, null, 4).replace(/\r?\n/g, '\r\n'), 'utf-8');
    console.log(`  SAVED ${tribe}/content.json`);
  }
});

console.log(`\nDone! Changed ${totalChanged} paths from .webp to .jpg`);
