"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [currentLocale, setCurrentLocale] = useState<Locale>("id");

    useEffect(() => {
        // Detect current locale from pathname
        const segments = pathname.split("/").filter(Boolean);
        const firstSegment = segments[0] as Locale;
        if (locales.includes(firstSegment)) {
            setCurrentLocale(firstSegment);
        }
    }, [pathname]);

    const switchLanguage = () => {
        const newLocale: Locale = currentLocale === "id" ? "en" : "id";

        // Save preference to localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem("cardtara_lang", newLocale);
        }

        // Build new path
        const segments = pathname.split("/").filter(Boolean);
        segments[0] = newLocale;
        const newPath = "/" + segments.join("/");

        router.push(newPath);
    };

    return (
        <button
            onClick={switchLanguage}
            className="fixed top-4 right-4 z-50 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-nusantara-indigo/20 rounded-lg shadow-md hover:shadow-lg transition-all text-sm font-medium text-nusantara-indigo hover:bg-nusantara-indigo hover:text-white"
            aria-label="Switch language"
        >
            {currentLocale === "id" ? "EN" : "ID"}
        </button>
    );
}
