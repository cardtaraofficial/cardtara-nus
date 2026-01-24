"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, type Locale } from "@/lib/i18n";

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        // Check localStorage first
        const savedLang = localStorage.getItem("cardtara_lang") as Locale | null;
        if (savedLang === "id" || savedLang === "en") {
            router.replace(`/${savedLang}`);
            return;
        }

        // Auto-detect from browser
        const browserLang = navigator.language.toLowerCase();
        const detectedLocale: Locale = browserLang.includes("en") ? "en" : defaultLocale;

        // Save to localStorage
        localStorage.setItem("cardtara_lang", detectedLocale);

        // Redirect
        router.replace(`/${detectedLocale}`);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nusantara-cream via-amber-50 to-orange-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-nusantara-indigo border-t-transparent mx-auto mb-4"></div>
                <p className="text-gray-600">Loading...</p>
            </div>
        </div>
    );
}
