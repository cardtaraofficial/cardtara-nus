import { Locale } from "@/lib/i18n";

// Bilingual text type
export type BilingualText = {
    id: string;
    en: string;
};

// Tribe information
export type TribeInfo = {
    slug: string; // e.g., "jakarta", "minang"
    name: BilingualText;
    audioPath: string; // path to tribe's background music
};

// Quiz question structure
export type QuizQuestion = {
    q: BilingualText;
    choices: {
        id: string[];
        en: string[];
    };
    answerIndex: number;
    explain: BilingualText;
};

// Card data structure
export type Card = {
    slug: string;
    cardName: string; // e.g., "Ace of Spades"
    tribe: string; // tribe slug, e.g., "jakarta"
    title: BilingualText;
    region: BilingualText;
    paragraphs: {
        id: string[];
        en: string[];
    };
    image: string; // path to image in /public (deprecated, use images instead)
    images?: string[]; // array of image paths (jpg/png/jpeg), typically 2 images
    imagesCaptions?: {
        id: string[];
        en: string[];
    }; // captions for images, same length as images array
    audio: string; // path to audio in /public
    quiz: QuizQuestion[];
    tags?: string[]; // hashtags for the card
};

// Suit types
export type Suit = "S" | "H" | "D" | "C";
export type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

// Generate all 52 card slugs
export function generateAllSlugs(): string[] {
    const suits: Suit[] = ["S", "H", "D", "C"];
    const ranks: Rank[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const slugs: string[] = [];
    for (const rank of ranks) {
        for (const suit of suits) {
            slugs.push(`${rank}${suit}`);
        }
    }
    return slugs;
}

// Get full card name
export function getCardName(slug: string): string {
    const suitNames: Record<string, string> = {
        S: "Spades",
        H: "Hearts",
        D: "Diamonds",
        C: "Clubs",
    };

    const rankNames: Record<string, string> = {
        A: "Ace",
        J: "Jack",
        Q: "Queen",
        K: "King",
    };

    const suit = slug.slice(-1);
    const rank = slug.slice(0, -1);

    const rankName = rankNames[rank] || rank;
    const suitName = suitNames[suit] || "";

    return `${rankName} of ${suitName}`;
}
