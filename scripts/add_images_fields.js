const fs = require('fs');
const path = require('path');

const tribesDir = path.join('c:', 'cardtara', 'public', 'tribes');

// Caption mapping: slug -> { id: [caption1, caption2], en: [caption1, caption2] }
const captionMap = {
  // JAKARTA
  'AH': {
    id: ['Perkampungan Budaya Betawi Setu Babakan', 'Danau Setu Babakan yang asri dan hijau'],
    en: ['Setu Babakan Betawi Cultural Village', 'The serene green lake of Setu Babakan']
  },
  'AD': {
    id: ['Kerak Telor, jajanan khas Betawi', 'Proses pembuatan Kerak Telor tradisional'],
    en: ['Kerak Telor, iconic Betawi snack', 'Traditional Kerak Telor cooking process']
  },
  'AC': {
    id: ['Pertunjukan musik Gambang Kromong Betawi', 'Alat musik Gambang Kromong tradisional'],
    en: ['Gambang Kromong Betawi music performance', 'Traditional Gambang Kromong musical instruments']
  },

  // MINANG
  '2H': {
    id: ['Jam Gadang, ikon Kota Bukittinggi', 'Taman Jam Gadang dari dekat'],
    en: ['Jam Gadang, icon of Bukittinggi City', 'Jam Gadang Park up close']
  },
  '2D': {
    id: ['Rendang, masakan terenak di dunia asal Minangkabau', 'Proses memasak Rendang tradisional'],
    en: ['Rendang, the world\'s most delicious food from Minangkabau', 'Traditional Rendang cooking process']
  },
  '2C': {
    id: ['Penari Tari Piring Minangkabau', 'Aksi memecahkan piring dalam Tari Piring'],
    en: ['Minangkabau Plate Dance performers', 'Plate-breaking action in the Plate Dance']
  },

  // PAPUA
  '3S': {
    id: ['Burung Cenderawasih, burung surga dari Papua', 'Burung Cenderawasih di habitat alaminya'],
    en: ['Bird of Paradise, the heavenly bird from Papua', 'Bird of Paradise in its natural habitat']
  },
  '3H': {
    id: ['Keindahan bawah laut Raja Ampat', 'Panorama kepulauan Raja Ampat dari udara'],
    en: ['The underwater beauty of Raja Ampat', 'Aerial panorama of Raja Ampat islands']
  },
  '3D': {
    id: ['Papeda, makanan pokok khas Papua', 'Papeda disajikan dengan ikan kuah kuning'],
    en: ['Papeda, staple food of Papua', 'Papeda served with yellow fish soup']
  },
  '3C': {
    id: ['Penari perang dari suku Papua', 'Atraksi Tari Perang tradisional Papua'],
    en: ['War dancers from Papuan tribes', 'Traditional Papuan War Dance performance']
  },

  // JABAR (SUNDA)
  '4S': {
    id: ['Gunung Tangkuban Perahu, saksi legenda Sangkuriang', 'Ilustrasi legenda Sangkuriang dan Dayang Sumbi'],
    en: ['Mount Tangkuban Perahu, witness to the Sangkuriang legend', 'Illustration of Sangkuriang and Dayang Sumbi legend']
  },
  '4H': {
    id: ['Kawah Putih Ciwidey, Bandung', 'Danau kawah berwarna putih kehijauan yang memesona'],
    en: ['Kawah Putih Ciwidey, Bandung', 'The mesmerizing white-greenish crater lake']
  },
  '4D': {
    id: ['Nasi Timbel, hidangan khas Sunda', 'Nasi Timbel lengkap dengan lauk pauk tradisional'],
    en: ['Nasi Timbel, iconic Sundanese dish', 'Nasi Timbel complete with traditional side dishes']
  },
  '4C': {
    id: ['Pertunjukan Angklung di Saung Angklung Udjo', 'Alat musik Angklung dari bambu warisan UNESCO'],
    en: ['Angklung performance at Saung Angklung Udjo', 'Angklung bamboo instrument, UNESCO heritage']
  },

  // JATENG
  '5S': {
    id: ['Candi Prambanan, saksi legenda Roro Jonggrang', 'Relief cerita Roro Jonggrang di Candi Prambanan'],
    en: ['Prambanan Temple, witness to the Roro Jonggrang legend', 'Roro Jonggrang relief carvings at Prambanan Temple']
  },
  '5H': {
    id: ['Candi Borobudur saat matahari terbit', 'Relief dan stupa Candi Borobudur yang megah'],
    en: ['Borobudur Temple at sunrise', 'The majestic reliefs and stupas of Borobudur Temple']
  },
  '5D': {
    id: ['Gudeg Jogja, kuliner legendaris Jawa Tengah', 'Gudeg lengkap dengan telur dan ayam kampung'],
    en: ['Gudeg Jogja, legendary Central Javanese cuisine', 'Complete Gudeg with egg and free-range chicken']
  },
  '5C': {
    id: ['Pertunjukan Wayang Kulit dengan dalang', 'Bayangan Wayang Kulit di layar pertunjukan'],
    en: ['Wayang Kulit performance with the puppeteer', 'Shadow puppets projected on the performance screen']
  },

  // JATIM
  '6S': {
    id: ['Pertunjukan Reog Ponorogo yang megah', 'Topeng Singa Barong dalam Reog Ponorogo'],
    en: ['The magnificent Reog Ponorogo performance', 'Singa Barong mask in Reog Ponorogo']
  },
  '6H': {
    id: ['Gunung Bromo saat matahari terbit', 'Lautan pasir di kaki Gunung Bromo'],
    en: ['Mount Bromo at sunrise', 'The sea of sand at the foot of Mount Bromo']
  },
  '6D': {
    id: ['Rawon, sup hitam khas Jawa Timur', 'Semangkuk Rawon dengan tauge dan sambal'],
    en: ['Rawon, black soup specialty of East Java', 'A bowl of Rawon with bean sprouts and sambal']
  },
  '6C': {
    id: ['Pertunjukan Ludruk Jawa Timur', 'Pemain Ludruk beraksi di atas panggung'],
    en: ['Ludruk theater performance of East Java', 'Ludruk performers acting on stage']
  },

  // BADUY
  '7S': {
    id: ['Masyarakat Suku Baduy Dalam dengan pakaian putih', 'Perkampungan adat Suku Baduy'],
    en: ['Inner Baduy tribe members in white clothing', 'Traditional Baduy tribe village']
  },
  '7H': {
    id: ['Pantai Tanjung Lesung, Banten', 'Pemandangan indah Pantai Tanjung Lesung'],
    en: ['Tanjung Lesung Beach, Banten', 'Beautiful scenery of Tanjung Lesung Beach']
  },
  '7D': {
    id: ['Sate Bandeng khas Banten', 'Sate Bandeng yang gurih dan empuk'],
    en: ['Sate Bandeng, Banten specialty', 'Savory and tender Sate Bandeng']
  },
  '7C': {
    id: ['Pertunjukan Debus Banten', 'Atraksi kekebalan tubuh dalam kesenian Debus'],
    en: ['Debus performance of Banten', 'Body invulnerability act in Debus art']
  },

  // DAYAK
  '8S': {
    id: ['Burung Enggang, simbol sakral suku Dayak', 'Burung Enggang Gading di hutan Kalimantan'],
    en: ['Hornbill, sacred symbol of the Dayak tribe', 'Helmeted Hornbill in Kalimantan forest']
  },
  '8H': {
    id: ['Danau Sentarum di Kalimantan Barat', 'Hutan air tawar Danau Sentarum yang unik'],
    en: ['Sentarum Lake in West Kalimantan', 'The unique freshwater forest of Sentarum Lake']
  },
  '8D': {
    id: ['Bubur Pedas khas Kalimantan Barat', 'Semangkuk Bubur Pedas Sambas yang lezat'],
    en: ['Spicy Porridge from West Kalimantan', 'A delicious bowl of Sambas Spicy Porridge']
  },
  '8C': {
    id: ['Penari Tari Mandau suku Dayak', 'Aksi pedang Mandau dalam tarian tradisional Dayak'],
    en: ['Dayak Mandau Dance performer', 'Mandau sword action in traditional Dayak dance']
  },

  // BUGIS
  '9S': {
    id: ['Naskah La Galigo, epik sastra terpanjang di dunia', 'Pertunjukan teater I La Galigo'],
    en: ['La Galigo manuscript, the longest literary epic in the world', 'I La Galigo theater performance']
  },
  '9H': {
    id: ['Pantai Losari Makassar saat senja', 'Suasana ramai Pantai Losari'],
    en: ['Losari Beach Makassar at dusk', 'The bustling atmosphere of Losari Beach']
  },
  '9D': {
    id: ['Coto Makassar, kuliner legendaris Sulawesi Selatan', 'Semangkuk Coto Makassar dengan ketupat'],
    en: ['Coto Makassar, legendary South Sulawesi cuisine', 'A bowl of Coto Makassar with ketupat']
  },
  '9C': {
    id: ['Penari Tari Pakarena yang anggun', 'Gerakan gemulai Tari Pakarena Makassar'],
    en: ['Graceful Pakarena Dance performer', 'Elegant movements of the Makassar Pakarena Dance']
  },

  // TORAJA
  '10S': {
    id: ['Masyarakat Toraja dalam upacara adat Rambu Solo', 'Pemandangan indah Tana Toraja'],
    en: ['Toraja people in Rambu Solo ceremony', 'Beautiful landscape of Tana Toraja']
  },
  '10H': {
    id: ['Kuburan batu Londa di tebing Toraja', 'Tau-tau di situs pemakaman Londa'],
    en: ['Londa stone burial site on Toraja cliff', 'Tau-tau effigies at Londa burial site']
  },
  '10D': {
    id: ['Pa\'piong, masakan bambu tradisional Toraja', 'Proses memasak Pa\'piong dalam ruas bambu'],
    en: ['Pa\'piong, traditional Toraja bamboo cooking', 'Pa\'piong cooking process inside bamboo tubes']
  },
  '10C': {
    id: ['Rumah Tongkonan khas Toraja dengan atap melengkung', 'Deretan Rumah Tongkonan di Tana Toraja'],
    en: ['Iconic Tongkonan house with curved roof', 'Row of Tongkonan houses in Tana Toraja']
  },

  // BALI
  'JS': {
    id: ['Pertunjukan Tari Barong dan Rangda di Bali', 'Topeng Barong yang sakral'],
    en: ['Barong and Rangda Dance performance in Bali', 'The sacred Barong mask']
  },
  'JH': {
    id: ['Pura Tanah Lot saat senja yang memesona', 'Keindahan Pura Tanah Lot dari kejauhan'],
    en: ['The enchanting Tanah Lot Temple at sunset', 'Beauty of Tanah Lot Temple from afar']
  },
  'JD': {
    id: ['Babi Guling, kuliner khas Bali', 'Babi Guling disajikan utuh dalam acara adat'],
    en: ['Babi Guling, iconic Balinese cuisine', 'Whole roasted Babi Guling served at ceremonies']
  },
  'JC': {
    id: ['Pertunjukan Tari Kecak di Uluwatu', 'Penari Tari Kecak membentuk lingkaran besar'],
    en: ['Kecak Dance performance at Uluwatu', 'Kecak dancers forming a large circle']
  },

  // SASAK
  'QS': {
    id: ['Pantai Mandalika, tempat legenda Putri Mandalika', 'Ilustrasi kisah Putri Mandalika Lombok'],
    en: ['Mandalika Beach, site of Princess Mandalika legend', 'Illustration of the Princess Mandalika story']
  },
  'QH': {
    id: ['Pantai Pink Lombok yang eksotis', 'Pasir merah muda Pantai Pink yang langka'],
    en: ['The exotic Pink Beach of Lombok', 'The rare pink sand of Pink Beach']
  },
  'QD': {
    id: ['Ayam Taliwang, kuliner pedas khas Lombok', 'Ayam Taliwang dengan sambal pedas yang menggugah selera'],
    en: ['Ayam Taliwang, spicy Lombok specialty', 'Ayam Taliwang with appetizing spicy sambal']
  },
  'QC': {
    id: ['Pertunjukan Gendang Beleq suku Sasak', 'Pemain Gendang Beleq dalam kostum tradisional'],
    en: ['Sasak Gendang Beleq performance', 'Gendang Beleq player in traditional costume']
  },

  // GAYO
  'KS': {
    id: ['Danau Lut Tawar di Takengon, Aceh', 'Panorama indah Danau Lut Tawar'],
    en: ['Lut Tawar Lake in Takengon, Aceh', 'Beautiful panorama of Lut Tawar Lake']
  },
  'KH': {
    id: ['Masjid Raya Baiturrahman Banda Aceh', 'Keindahan arsitektur Masjid Raya Baiturrahman'],
    en: ['Baiturrahman Grand Mosque Banda Aceh', 'The architectural beauty of Baiturrahman Grand Mosque']
  },
  'KD': {
    id: ['Kopi Gayo, kopi arabika premium dari Aceh', 'Proses pengolahan biji Kopi Gayo'],
    en: ['Gayo Coffee, premium Arabica from Aceh', 'Gayo Coffee bean processing']
  },
  'KC': {
    id: ['Pertunjukan Tari Saman Aceh yang memukau', 'Gerakan kompak penari Tari Saman'],
    en: ['The stunning Saman Dance of Aceh', 'Synchronized movements of Saman dancers']
  },
};

const tribes = fs.readdirSync(tribesDir);

let totalUpdated = 0;
let totalSkipped = 0;

tribes.forEach(tribe => {
  const contentPath = path.join(tribesDir, tribe, 'content.json');
  if (!fs.existsSync(contentPath)) return;

  console.log(`\nProcessing: ${tribe}`);
  const raw = fs.readFileSync(contentPath, 'utf-8');
  const data = JSON.parse(raw);
  let modified = false;

  data.cards.forEach(card => {
    const slug = card.slug;

    // Skip if already has images
    if (card.images && card.images.length > 0) {
      console.log(`  SKIP ${slug} (already has images)`);
      totalSkipped++;
      return;
    }

    const captions = captionMap[slug];
    if (!captions) {
      console.log(`  WARN ${slug} (no caption mapping found)`);
      totalSkipped++;
      return;
    }

    const slugLower = slug.toLowerCase();
    card.images = [
      `/tribes/${tribe}/media/${slugLower}-1.webp`,
      `/tribes/${tribe}/media/${slugLower}-2.webp`
    ];
    card.imagesCaptions = {
      id: captions.id,
      en: captions.en
    };

    console.log(`  ADDED ${slug}`);
    modified = true;
    totalUpdated++;
  });

  if (modified) {
    // Reorder keys per card
    data.cards = data.cards.map(card => {
      const properOrder = {};
      const keyOrder = ['slug', 'cardName', 'title', 'region', 'paragraphs', 'images', 'imagesCaptions', 'tags', 'quiz'];
      keyOrder.forEach(k => {
        if (card[k] !== undefined) properOrder[k] = card[k];
      });
      Object.keys(card).forEach(k => {
        if (properOrder[k] === undefined) properOrder[k] = card[k];
      });
      return properOrder;
    });

    fs.writeFileSync(contentPath, JSON.stringify(data, null, 4).replace(/\r?\n/g, '\r\n'), 'utf-8');
    console.log(`  SAVED ${tribe}/content.json`);
  }
});

console.log(`\n===========================`);
console.log(`Total updated: ${totalUpdated}`);
console.log(`Total skipped: ${totalSkipped}`);
console.log(`Done!`);
