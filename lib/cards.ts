// Updated to use tribes-loader instead of static cards.ts
// All card data now loaded from public/tribes/{tribe}/content.json

import { getCardBySlug as getCardFromTribes, getAllCards as getAllCardsFromTribes, getAllCardSlugs as getAllSlugsFromTribes } from "./tribes-loader";
import { generateAllSlugs, getCardName } from "@/content/utils";
import type { Card } from "@/content/utils";

// Get card by slug - now loads from tribes folder
export async function getCardBySlug(slug: string): Promise<Card | null> {
    return await getCardFromTribes(slug);
}

// Get all cards - now loads from all tribes
export async function getAllCards(): Promise<Card[]> {
    return await getAllCardsFromTribes();
}

// Get all card slugs (for static generation)
export async function getAllCardSlugs(): Promise<string[]> {
    return await getAllSlugsFromTribes();
}

// Generate 52 slugs (helper) - kept for reference
export { generateAllSlugs, getCardName };
