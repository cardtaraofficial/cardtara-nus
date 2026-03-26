"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";
import { useEffect, useState, useRef } from "react";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [currentLocale, setCurrentLocale] = useState<Locale>("id");
    
    // This state controls whether our custom menu is open or closed
    const [isOpen, setIsOpen] = useState(false); 
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const segments = pathname.split("/").filter(Boolean);
        const firstSegment = segments[0] as Locale;
        if (locales.includes(firstSegment)) {
            setCurrentLocale(firstSegment);
        }
    }, [pathname]);

    // This closes the menu if the user clicks anywhere outside of it
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const switchLanguage = (newLocale: Locale) => {
        setIsOpen(false); // Close the menu after clicking
        if (currentLocale === newLocale) return;

        if (typeof window !== "undefined") {
            localStorage.setItem("cardtara_lang", newLocale);
        }

        const segments = pathname.split("/").filter(Boolean);
        segments[0] = newLocale;
        const newPath = "/" + segments.join("/");

        router.push(newPath);
    };

    const languages = {
        id: { code: "id", label: "ID", flag: "🇮🇩" },
        en: { code: "en", label: "EN", flag: "🇬🇧" }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* The Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-bold hover:bg-gray-50 hover:border-red-900/30 transition-all focus:outline-none shadow-sm"
                aria-label="Toggle language menu"
            >
                <span className="text-base">{languages[currentLocale].flag}</span>
                <span>{languages[currentLocale].label}</span>
                <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* The Hidden Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="py-1">
                        {Object.values(languages).map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => switchLanguage(lang.code as Locale)}
                                className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors hover:bg-red-50 hover:text-red-900 ${
                                    currentLocale === lang.code ? "bg-red-50 text-red-900 font-bold" : "text-gray-700 font-medium"
                                }`}
                            >
                                <span className="text-base">{lang.flag}</span>
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}