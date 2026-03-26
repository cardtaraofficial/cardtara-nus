const fs = require('fs');
const path = require('path');

const tribesDir = path.join('c:', 'cardtara', 'public', 'tribes');
const tribes = fs.readdirSync(tribesDir);
let totalRemoved = 0;

tribes.forEach(tribe => {
  const contentPath = path.join(tribesDir, tribe, 'content.json');
  if (!fs.existsSync(contentPath)) return;

  const data = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
  let modified = false;

  data.cards.forEach(card => {
    if (card.image !== undefined) {
      console.log(`  REMOVED "image" from ${tribe}/${card.slug}: ${card.image}`);
      delete card.image;
      modified = true;
      totalRemoved++;
    }
  });

  if (modified) {
    fs.writeFileSync(contentPath, JSON.stringify(data, null, 4).replace(/\r?\n/g, '\r\n'), 'utf-8');
    console.log(`  SAVED ${tribe}/content.json`);
  }
});

console.log(`\nDone! Removed ${totalRemoved} old "image" fields.`);
