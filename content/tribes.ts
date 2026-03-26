import type { TribeInfo } from "./utils";

// 13 Suku Indonesia berdasarkan rank kartu
// Setiap rank (A, 2, 3, ..., K) mewakili 1 suku
// Setiap suku memiliki 4 kartu (Spades, Hearts, Diamonds, Clubs)

export const tribesData: TribeInfo[] = [
    {
        slug: "jakarta",
        name: { id: "DKI Jakarta", en: "DKI Jakarta" },
        audioPath: "/tribes/jakarta/audio.mp3",
        audioTitle: { id: "Jali-Jali (Lagu Betawi)", en: "Jali-Jali (Betawi Folk Song)" },
    },
    {
        slug: "minang",
        name: { id: "Sumatera Barat", en: "West Sumatra" },
        audioPath: "/tribes/minang/audio.mp3",
        audioTitle: { id: "Kampuang Nan Jauh Di Mato (Lagu Minang)", en: "Kampuang Nan Jauh Di Mato (Minang Folk Song)" },
    },
    {
        slug: "papua",
        name: { id: "Papua", en: "Papua" },
        audioPath: "/tribes/papua/audio.mp3",
        audioTitle: { id: "Apuse (Lagu Rakyat Papua)", en: "Apuse (Papua Folk Song)" },
    },
    {
        slug: "jabar",
        name: { id: "Jawa Barat", en: "West Java" },
        audioPath: "/tribes/jabar/audio.mp3",
        audioTitle: { id: "Bubuy Bulan (Lagu Sunda)", en: "Bubuy Bulan (Sundanese Folk Song)" },
    },
    {
        slug: "jateng",
        name: { id: "Jawa Tengah", en: "Central Java" },
        audioPath: "/tribes/jateng/audio.mp3",
        audioTitle: { id: "Gundul-Gundul Pacul (Lagu Jawa Tengah)", en: "Gundul-Gundul Pacul (Central Java Folk Song)" },
    },
    {
        slug: "jatim",
        name: { id: "Jawa Timur", en: "East Java" },
        audioPath: "/tribes/jatim/audio.mp3",
        audioTitle: { id: "Rek Ayo Rek (Lagu Surabaya)", en: "Rek Ayo Rek (Surabaya Folk Song)" },
    },
    {
        slug: "baduy",
        name: { id: "Banten", en: "Banten" },
        audioPath: "/tribes/baduy/audio.mp3",
        audioTitle: { id: "Cokek Banten (Musik Tradisional Banten)", en: "Cokek Banten (Banten Traditional Music)" },
    },
    {
        slug: "dayak",
        name: { id: "Kalimantan Barat", en: "West Kalimantan" },
        audioPath: "/tribes/dayak/audio.mp3",
        audioTitle: { id: "Sape Dayak (Musik Sape Kalimantan)", en: "Sape Dayak (Kalimantan Sape Music)" },
    },
    {
        slug: "bugis",
        name: { id: "Sulawesi Selatan", en: "South Sulawesi" },
        audioPath: "/tribes/bugis/audio.mp3",
        audioTitle: { id: "Anging Mammiri (Lagu Makassar)", en: "Anging Mammiri (Makassar Folk Song)" },
    },
    {
        slug: "toraja",
        name: { id: "Tana Toraja", en: "Tana Toraja" },
        audioPath: "/tribes/toraja/audio.mp3",
        audioTitle: { id: "Ma'badong (Nyanyian Ritual Toraja)", en: "Ma'badong (Toraja Ritual Chant)" },
    },
    {
        slug: "bali",
        name: { id: "Bali", en: "Bali" },
        audioPath: "/tribes/bali/audio.mp3",
        audioTitle: { id: "Kecak Bali (Paduan Suara Tari Kecak)", en: "Kecak Bali (Kecak Dance Chorus)" },
    },
    {
        slug: "sasak",
        name: { id: "Nusa Tenggara Barat", en: "West Nusa Tenggara" },
        audioPath: "/tribes/sasak/audio.mp3",
        audioTitle: { id: "Tuaq Tegining (Lagu Sasak Lombok)", en: "Tuaq Tegining (Sasak Lombok Folk Song)" },
    },
    {
        slug: "gayo",
        name: { id: "Aceh", en: "Aceh" },
        audioPath: "/tribes/gayo/audio.mp3",
        audioTitle: { id: "Bungong Jeumpa (Lagu Aceh)", en: "Bungong Jeumpa (Aceh Folk Song)" },
    },
];

// Mapping rank to tribe
export const rankToTribe: Record<string, string> = {
    "A": "jakarta",   // Ace → Jakarta
    "2": "minang",    // 2 → Minang
    "3": "papua",     // 3 → Papua
    "4": "jabar",     // 4 → Jawa Barat
    "5": "jateng",    // 5 → Jawa Tengah
    "6": "jatim",     // 6 → Jawa Timur
    "7": "baduy",     // 7 → Baduy
    "8": "dayak",     // 8 → Dayak
    "9": "bugis",     // 9 → Bugis
    "10": "toraja",   // 10 → Toraja
    "J": "bali",      // Jack → Bali
    "Q": "sasak",     // Queen → Sasak
    "K": "gayo",      // King → Gayo
};

// Get tribe by rank
export function getTribeByRank(rank: string): TribeInfo | undefined {
    const tribeSlug = rankToTribe[rank];
    return tribesData.find((tribe) => tribe.slug === tribeSlug);
}

// Get tribe by slug
export function getTribeBySlug(slug: string): TribeInfo | undefined {
    return tribesData.find((tribe) => tribe.slug === slug);
}
