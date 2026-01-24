// Supported locales
export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = "id";

// Locale labels
export const localeLabels: Record<Locale, string> = {
    id: "Indonesia",
    en: "English",
};

// Validate locale
export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}

// Get locale from path
export function getLocaleFromPath(path: string): Locale {
    const segments = path.split("/").filter(Boolean);
    const firstSegment = segments[0];
    return isValidLocale(firstSegment) ? firstSegment : defaultLocale;
}

// Build localized path
export function buildLocalizedPath(locale: Locale, path: string): string {
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}
