import { Card } from "./utils";

// Dummy data untuk 3 kartu sebagai contoh
// Anda bisa extend ini untuk semua 52 kartu

export const cardsData: Card[] = [
    {
        slug: "AS",
        cardName: "Ace of Spades",
        tribe: "jakarta",
        title: {
            id: "Tari Andun dari Bengkulu",
            en: "Andun Dance from Bengkulu",
        },
        region: {
            id: "Bengkulu",
            en: "Bengkulu",
        },
        paragraphs: {
            id: [
                "Tari Andun adalah tarian tradisional dari Bengkulu yang dibawakan secara berkelompok. Tarian ini biasanya dipentaskan pada acara-acara adat dan perayaan penting di masyarakat Bengkulu.",
                "Gerakan tari Andun mencerminkan semangat kebersamaan dan kegotong-royongan masyarakat Bengkulu. Para penari bergerak dengan kompak mengikuti irama musik tradisional yang dimainkan dengan alat musik seperti gendang dan serunai.",
                "Kostum yang digunakan dalam Tari Andun sangat khas dengan warna-warna cerah yang melambangkan keceriaan. Tarian ini menjadi salah satu warisan budaya Bengkulu yang terus dilestarikan hingga saat ini.",
            ],
            en: [
                "Andun Dance is a traditional dance from Bengkulu performed in groups. This dance is usually performed at traditional ceremonies and important celebrations in the Bengkulu community.",
                "The movements of Andun Dance reflect the spirit of togetherness and mutual cooperation of the Bengkulu people. The dancers move in sync following the rhythm of traditional music played with instruments such as drums and serunai flutes.",
                "The costumes used in Andun Dance are very distinctive with bright colors that symbolize cheerfulness. This dance is one of Bengkulu's cultural heritages that continues to be preserved to this day.",
            ],
        },
        image: "/media/as.webp",
        audio: "/media/as.mp3",
        quiz: [
            {
                q: {
                    id: "Dari mana asal Tari Andun?",
                    en: "Where does Andun Dance originate from?",
                },
                choices: {
                    id: ["Jakarta", "Bengkulu", "Bali", "Sumatera Utara"],
                    en: ["Jakarta", "Bengkulu", "Bali", "North Sumatra"],
                },
                answerIndex: 1,
                explain: {
                    id: "Tari Andun berasal dari Bengkulu dan merupakan warisan budaya daerah tersebut.",
                    en: "Andun Dance originates from Bengkulu and is a cultural heritage of the region.",
                },
            },
            {
                q: {
                    id: "Apa yang tercermin dalam gerakan Tari Andun?",
                    en: "What is reflected in the movements of Andun Dance?",
                },
                choices: {
                    id: ["Semangat perang", "Kebersamaan dan gotong royong", "Kehidupan laut", "Perburuan"],
                    en: ["Spirit of war", "Togetherness and cooperation", "Marine life", "Hunting"],
                },
                answerIndex: 1,
                explain: {
                    id: "Gerakan Tari Andun mencerminkan semangat kebersamaan dan kegotong-royongan masyarakat.",
                    en: "Andun Dance movements reflect the spirit of togetherness and mutual cooperation.",
                },
            },
            {
                q: {
                    id: "Kapan Tari Andun biasanya dipentaskan?",
                    en: "When is Andun Dance usually performed?",
                },
                choices: {
                    id: ["Setiap hari", "Acara adat dan perayaan penting", "Hanya saat pemakaman", "Saat musim panen"],
                    en: ["Every day", "Traditional ceremonies and important celebrations", "Only at funerals", "During harvest season"],
                },
                answerIndex: 1,
                explain: {
                    id: "Tari Andun dipentaskan pada acara-acara adat dan perayaan penting di masyarakat Bengkulu.",
                    en: "Andun Dance is performed at traditional ceremonies and important celebrations in the Bengkulu community.",
                },
            },
        ],
    },
    {
        slug: "2S",
        cardName: "2 of Spades",
        tribe: "minang",
        title: {
            id: "Batik Mega Mendung dari Cirebon",
            en: "Mega Mendung Batik from Cirebon",
        },
        region: {
            id: "Cirebon, Jawa Barat",
            en: "Cirebon, West Java",
        },
        paragraphs: {
            id: [
                "Batik Mega Mendung adalah motif batik khas dari Cirebon, Jawa Barat. Motif ini terkenal dengan pola awan yang melengkung dan gradasi warna yang khas, biasanya biru atau merah.",
                "Nama 'Mega Mendung' berasal dari kata 'mega' yang berarti awan dan 'mendung' yang berarti gelap. Motif ini melambangkan sifat tenang dan sabar seperti awan yang bergerak perlahan di langit.",
                "Batik Mega Mendung memiliki pengaruh budaya China yang kuat, terlihat dari warna dan bentuk awannya. Motif ini menjadi salah satu identitas budaya Cirebon yang sangat terkenal di Indonesia dan mancanegara.",
            ],
            en: [
                "Mega Mendung Batik is a distinctive batik pattern from Cirebon, West Java. This pattern is famous for its curved cloud patterns and characteristic color gradations, usually blue or red.",
                "The name 'Mega Mendung' comes from the words 'mega' meaning cloud and 'mendung' meaning dark. This motif symbolizes calm and patient nature like clouds moving slowly in the sky.",
                "Mega Mendung Batik has strong Chinese cultural influences, seen from the colors and shapes of the clouds. This motif has become one of Cirebon's cultural identities that is very famous in Indonesia and abroad.",
            ],
        },
        image: "/media/2s.webp",
        audio: "/media/2s.mp3",
        quiz: [
            {
                q: {
                    id: "Dari mana asal Batik Mega Mendung?",
                    en: "Where does Mega Mendung Batik originate from?",
                },
                choices: {
                    id: ["Solo", "Yogyakarta", "Cirebon", "Pekalongan"],
                    en: ["Solo", "Yogyakarta", "Cirebon", "Pekalongan"],
                },
                answerIndex: 2,
                explain: {
                    id: "Batik Mega Mendung berasal dari Cirebon, Jawa Barat.",
                    en: "Mega Mendung Batik originates from Cirebon, West Java.",
                },
            },
            {
                q: {
                    id: "Apa arti dari 'Mega Mendung'?",
                    en: "What does 'Mega Mendung' mean?",
                },
                choices: {
                    id: ["Gunung tinggi", "Awan gelap", "Laut dalam", "Matahari terik"],
                    en: ["High mountain", "Dark cloud", "Deep sea", "Scorching sun"],
                },
                answerIndex: 1,
                explain: {
                    id: "'Mega' berarti awan dan 'mendung' berarti gelap, jadi Mega Mendung berarti awan gelap.",
                    en: "'Mega' means cloud and 'mendung' means dark, so Mega Mendung means dark cloud.",
                },
            },
            {
                q: {
                    id: "Pengaruh budaya apa yang kuat dalam Batik Mega Mendung?",
                    en: "What cultural influence is strong in Mega Mendung Batik?",
                },
                choices: {
                    id: ["Arab", "India", "China", "Eropa"],
                    en: ["Arabic", "Indian", "Chinese", "European"],
                },
                answerIndex: 2,
                explain: {
                    id: "Batik Mega Mendung memiliki pengaruh budaya China yang kuat, terlihat dari warna dan bentuk awannya.",
                    en: "Mega Mendung Batik has strong Chinese cultural influences, seen from the colors and shapes of the clouds.",
                },
            },
        ],
    },
    {
        slug: "KH",
        cardName: "King of Hearts",
        tribe: "gayo",
        title: {
            id: "Rumah Gadang dari Minangkabau",
            en: "Rumah Gadang from Minangkabau",
        },
        region: {
            id: "Sumatera Barat",
            en: "West Sumatra",
        },
        paragraphs: {
            id: [
                "Rumah Gadang adalah rumah adat tradisional masyarakat Minangkabau di Sumatera Barat. Rumah ini memiliki ciri khas berupa atap yang melengkung menyerupai tanduk kerbau, yang melambangkan kemenangan dalam legenda Minangkabau.",
                "Struktur Rumah Gadang dibangun dengan sistem rumah panggung yang tinggi dan menggunakan kayu sebagai bahan utama. Rumah ini tidak menggunakan paku, melainkan teknik pasak dan sambungan kayu yang sangat kuat.",
                "Rumah Gadang berfungsi sebagai tempat tinggal keluarga besar dalam sistem matrilineal Minangkabau. Setiap ukiran dan ornamen pada rumah memiliki makna filosofis yang mendalam tentang nilai-nilai kehidupan masyarakat Minangkabau.",
            ],
            en: [
                "Rumah Gadang is a traditional house of the Minangkabau people in West Sumatra. This house has a distinctive curved roof resembling buffalo horns, which symbolizes victory in Minangkabau legend.",
                "The structure of Rumah Gadang is built with a high stilt house system and uses wood as the main material. This house does not use nails, but rather uses pegs and wooden joints that are very strong.",
                "Rumah Gadang functions as a residence for extended families in the Minangkabau matrilineal system. Each carving and ornament on the house has deep philosophical meaning about the values of Minangkabau society.",
            ],
        },
        image: "/media/kh.webp",
        audio: "/media/kh.mp3",
        quiz: [
            {
                q: {
                    id: "Apa ciri khas atap Rumah Gadang?",
                    en: "What is the distinctive feature of Rumah Gadang's roof?",
                },
                choices: {
                    id: ["Datar", "Melengkung seperti tanduk kerbau", "Kerucut", "Piramida"],
                    en: ["Flat", "Curved like buffalo horns", "Cone-shaped", "Pyramid"],
                },
                answerIndex: 1,
                explain: {
                    id: "Atap Rumah Gadang melengkung menyerupai tanduk kerbau, melambangkan kemenangan dalam legenda Minangkabau.",
                    en: "Rumah Gadang's roof curves like buffalo horns, symbolizing victory in Minangkabau legend.",
                },
            },
            {
                q: {
                    id: "Apa yang digunakan untuk menyambung kayu di Rumah Gadang?",
                    en: "What is used to join wood in Rumah Gadang?",
                },
                choices: {
                    id: ["Paku besi", "Pasak dan sambungan kayu", "Lem", "Kawat"],
                    en: ["Iron nails", "Pegs and wooden joints", "Glue", "Wire"],
                },
                answerIndex: 1,
                explain: {
                    id: "Rumah Gadang tidak menggunakan paku, melainkan teknik pasak dan sambungan kayu yang sangat kuat.",
                    en: "Rumah Gadang does not use nails, but rather uses pegs and wooden joints that are very strong.",
                },
            },
            {
                q: {
                    id: "Sistem kekerabatan apa yang berlaku dalam Rumah Gadang?",
                    en: "What kinship system applies in Rumah Gadang?",
                },
                choices: {
                    id: ["Patrilineal", "Matrilineal", "Bilateral", "Tidak ada sistem"],
                    en: ["Patrilineal", "Matrilineal", "Bilateral", "No system"],
                },
                answerIndex: 1,
                explain: {
                    id: "Rumah Gadang berfungsi sebagai tempat tinggal keluarga besar dalam sistem matrilineal Minangkabau.",
                    en: "Rumah Gadang functions as a residence for extended families in the Minangkabau matrilineal system.",
                },
            },
        ],
    },
];
