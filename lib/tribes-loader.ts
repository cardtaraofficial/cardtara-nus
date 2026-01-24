import { Card } from "@/content/utils";
import fs from "fs";
import path from "path";

export type TribeContent = {
    tribe: string;
    tribeName: {
        id: string;
        en: string;
    };
    cards: Card[];
};

/**
 * Load content.json for a specific tribe
 */
export async function loadTribeContent(tribeSlug: string): Promise<TribeContent | null> {
    try {
        const filePath = path.join(process.cwd(), "public", "tribes", tribeSlug, "content.json");

        if (!fs.existsSync(filePath)) {
            console.warn(`[tribes-loader] content.json not found for tribe: ${tribeSlug}`);
            return null;
        }

        const fileContent = fs.readFileSync(filePath, "utf-8");
        const tribeData: TribeContent = JSON.parse(fileContent);

        return tribeData;
    } catch (error) {
        console.error(`[tribes-loader] Error loading tribe ${tribeSlug}:`, error);
        return null;
    }
}

/**
 * Load all tribes from public/tribes/
 */
export async function loadAllTribes(): Promise<TribeContent[]> {
    const tribesDir = path.join(process.cwd(), "public", "tribes");

    if (!fs.existsSync(tribesDir)) {
        console.error("[tribes-loader] public/tribes directory not found!");
        return [];
    }

    const tribeFolders = fs.readdirSync(tribesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    const tribes: TribeContent[] = [];

    for (const tribeSlug of tribeFolders) {
        const tribeData = await loadTribeContent(tribeSlug);
        if (tribeData) {
            tribes.push(tribeData);
        }
    }

    return tribes;
}

/**
 * Find a specific card by slug across all tribes
 */
export async function getCardBySlug(slug: string): Promise<Card | null> {
    const tribes = await loadAllTribes();

    for (const tribe of tribes) {
        const card = tribe.cards.find(c => c.slug.toUpperCase() === slug.toUpperCase());
        if (card) {
            return card;
        }
    }

    console.warn(`[tribes-loader] Card not found: ${slug}`);
    return null;
}

/**
 * Get all cards from all tribes
 */
export async function getAllCards(): Promise<Card[]> {
    const tribes = await loadAllTribes();
    const allCards: Card[] = [];

    for (const tribe of tribes) {
        allCards.push(...tribe.cards);
    }

    return allCards;
}

/**
 * Get all card slugs for static generation
 */
export async function getAllCardSlugs(): Promise<string[]> {
    const allCards = await getAllCards();
    return allCards.map(card => card.slug);
}
