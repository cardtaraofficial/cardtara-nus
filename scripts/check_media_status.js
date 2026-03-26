const fs = require('fs');
const path = require('path');
const d = path.join('c:', 'cardtara', 'public', 'tribes');
const tribes = fs.readdirSync(d).sort();

const result = {};
tribes.forEach(t => {
    const md = path.join(d, t, 'media');
    const mediaFiles = fs.existsSync(md) ? fs.readdirSync(md) : [];
    const hasAudio = fs.existsSync(path.join(d, t, 'audio.mp3'));
    
    // Read content.json to get expected files
    const cPath = path.join(d, t, 'content.json');
    if (!fs.existsSync(cPath)) return;
    const data = JSON.parse(fs.readFileSync(cPath, 'utf-8'));
    
    const cards = {};
    data.cards.forEach(card => {
        const slug = card.slug.toLowerCase();
        const expectedImages = (card.images || []).map(i => path.basename(i));
        const img1 = expectedImages[0] || `${slug}-1.jpg`;
        const img2 = expectedImages[1] || `${slug}-2.jpg`;
        const has1 = mediaFiles.includes(img1);
        const has2 = mediaFiles.includes(img2);
        cards[card.slug] = {
            title: card.title.id,
            img1: { file: img1, exists: has1 },
            img2: { file: img2, exists: has2 },
            complete: has1 && has2
        };
    });
    
    result[t] = { audio: hasAudio, cards };
});

// Print report
console.log('=== LAPORAN STATUS MEDIA ===\n');
let totalImg = 0, totalImgOk = 0, totalAudio = 0, totalAudioOk = 0;

Object.keys(result).forEach(tribe => {
    const r = result[tribe];
    const audioStatus = r.audio ? '✅' : '❌';
    totalAudio++;
    if (r.audio) totalAudioOk++;
    
    console.log(`## ${tribe.toUpperCase()} | Audio: ${audioStatus}`);
    
    Object.keys(r.cards).forEach(slug => {
        const c = r.cards[slug];
        const s1 = c.img1.exists ? '✅' : '❌';
        const s2 = c.img2.exists ? '✅' : '❌';
        totalImg += 2;
        if (c.img1.exists) totalImgOk++;
        if (c.img2.exists) totalImgOk++;
        const allOk = c.img1.exists && c.img2.exists ? '🟢' : '🔴';
        console.log(`  ${allOk} ${slug} ${c.title} | ${c.img1.file}:${s1} ${c.img2.file}:${s2}`);
    });
    console.log('');
});

console.log('=== RINGKASAN ===');
console.log(`Gambar: ${totalImgOk}/${totalImg}`);
console.log(`Audio: ${totalAudioOk}/${totalAudio}`);
