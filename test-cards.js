// Test script to verify all 52 cards can be loaded
const fs = require('fs');
const path = require('path');

const tribesMapping = {
    'A': 'jakarta',
    '2': 'minang',
    '3': 'papua',
    '4': 'jabar',
    '5': 'jateng',
    '6': 'jatim',
    '7': 'baduy',
    '8': 'dayak',
    '9': 'bugis',
    '10': 'toraja',
    'J': 'bali',
    'Q': 'sasak',
    'K': 'gayo'
};

const suits = ['S', 'H', 'D', 'C'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

console.log('Testing all 52 cards...\n');

let foundCount = 0;
let notFoundCards = [];

for (const rank of ranks) {
    const tribeSlug = tribesMapping[rank];
    const filePath = path.join(process.cwd(), 'public', 'tribes', tribeSlug, 'content.json');

    if (!fs.existsSync(filePath)) {
        console.log(`❌ MISSING FILE: ${tribeSlug}/content.json (rank ${rank})`);
        suits.forEach(suit => notFoundCards.push(`${rank}${suit}`));
        continue;
    }

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const tribeData = JSON.parse(fileContent);

        console.log(`\n📁 ${tribeSlug} (Rank ${rank}):`);
        console.log(`   Tribe field: "${tribeData.tribe}" (expected: "${tribeSlug}")`);

        if (tribeData.tribe !== tribeSlug) {
            console.log(`   ⚠️  WARNING: tribe field mismatch!`);
        }

        for (const suit of suits) {
            const expectedSlug = `${rank}${suit}`;
            const card = tribeData.cards.find(c => c.slug === expectedSlug);

            if (card) {
                console.log(`   ✅ ${expectedSlug} - ${card.title.id}`);
                foundCount++;
            } else {
                console.log(`   ❌ ${expectedSlug} - NOT FOUND`);
                notFoundCards.push(expectedSlug);
            }
        }
    } catch (error) {
        console.log(`❌ ERROR parsing ${tribeSlug}/content.json: ${error.message}`);
        suits.forEach(suit => notFoundCards.push(`${rank}${suit}`));
    }
}

console.log(`\n\n========================================`);
console.log(`TOTAL CARDS FOUND: ${foundCount}/52`);

if (notFoundCards.length > 0) {
    console.log(`\nMISSING CARDS (${notFoundCards.length}):`);
    console.log(notFoundCards.join(', '));
} else {
    console.log(`\n🎉 ALL 52 CARDS ARE AVAILABLE!`);
}
console.log(`========================================\n`);
