import type { TribeInfo } from "./utils";

// 13 Suku Indonesia berdasarkan rank kartu
// Setiap rank (A, 2, 3, ..., K) mewakili 1 suku
// Setiap suku memiliki 4 kartu (Spades, Hearts, Diamonds, Clubs)

export const tribesData: TribeInfo[] = [
    {
        slug: "jakarta",
        name: {
            id: "DKI Jakarta",
            en: "DKI Jakarta",
        },
        audioPath: "/tribes/jakarta/audio.mp3",
    },
    {
        slug: "minang",
        name: {
            id: "Sumatera Barat",
            en: "West Sumatra",
        },
        audioPath: "/tribes/minang/audio.mp3",
    },
    {
        slug: "papua",
        name: {
            id: "Papua",
            en: "Papua",
        },
        audioPath: "/tribes/papua/audio.mp3",
    },
    {
        slug: "jabar",
        name: {
            id: "Jawa Barat",
            en: "West Java",
        },
        audioPath: "/tribes/jabar/audio.mp3",
    },
    {
        slug: "jateng",
        name: {
            id: "Jawa Tengah",
            en: "Central Java",
        },
        audioPath: "/tribes/jateng/audio.mp3",
    },
    {
        slug: "jatim",
        name: {
            id: "Jawa Timur",
            en: "East Java",
        },
        audioPath: "/tribes/jatim/audio.mp3",
    },
    {
        slug: "baduy",
        name: {
            id: "Banten",
            en: "Banten",
        },
        audioPath: "/tribes/baduy/audio.mp3",
    },
    {
        slug: "dayak",
        name: {
            id: "Kalimantan Barat",
            en: "West Kalimantan",
        },
        audioPath: "/tribes/dayak/audio.mp3",
    },
    {
        slug: "bugis",
        name: {
            id: "Sulawesi Selatan",
            en: "South Sulawesi",
        },
        audioPath: "/tribes/bugis/audio.mp3",
    },
    {
        slug: "toraja",
        name: {
            id: "Tana Toraja",
            en: "Tana Toraja",
        },
        audioPath: "/tribes/toraja/audio.mp3",
    },
    {
        slug: "bali",
        name: {
            id: "Bali",
            en: "Bali",
        },
        audioPath: "/tribes/bali/audio.mp3",
    },
    {
        slug: "sasak",
        name: {
            id: "Nusa Tenggara Barat",
            en: "West Nusa Tenggara",
        },
        audioPath: "/tribes/sasak/audio.mp3",
    },
    {
        slug: "gayo",
        name: {
            id: "Aceh",
            en: "Aceh",
        },
        audioPath: "/tribes/gayo/audio.mp3",
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
