"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const locale = pathname.split("/")[1] as "id" | "en";

    const nav = {
        id: {
            home: "Beranda",
            about: "Tentang",
            howItWorks: "Cara Kerja",
            getCards: "Dapatkan Kartu",
        },
        en: {
            home: "Home",
            about: "About",
            howItWorks: "How It Works",
            getCards: "Get Cards",
        },
    };

    const t = nav[locale] || nav.en;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href={`/${locale}`} className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                            </svg>
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-primary font-display">CARDTARA</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href={`/${locale}`} className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                            {t.home}
                        </Link>
                        <Link href={`/${locale}#about`} className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                            {t.about}
                        </Link>
                        <Link href={`/${locale}#how-it-works`} className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                            {t.howItWorks}
                        </Link>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <LanguageSwitcher />
                        <Link
                            href={`/${locale}#cta`}
                            scroll={true}
                            className="hidden md:block bg-primary hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
                        >
                            {t.getCards}
                        </Link>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3 px-2">
                            <Link
                                href={`/${locale}`}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.home}
                            </Link>
                            <Link
                                href={`/${locale}#about`}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.about}
                            </Link>
                            <Link
                                href={`/${locale}#how-it-works`}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.howItWorks}
                            </Link>
                            
                            {/* New Mobile Get Cards Button */}
                            <Link
                                href={`/${locale}#cta`}
                                className="mx-4 mt-4 bg-primary text-white text-center py-3 rounded-lg font-bold shadow-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.getCards}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
