"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaInstagram, FaShoppingBag } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

export default function Footer() {
    const pathname = usePathname();
    const locale = pathname.split("/")[1] as "id" | "en";

    const content = {
        id: {
            aboutDesc: "Memberdayakan pelestarian budaya melalui teknologi phygital yang inovatif. Berbasis di Jakarta, Indonesia.",
            copyright: "© 2026 CARDTARA Innovation. Hak cipta dilindungi.",
            privacy: "Kebijakan Privasi",
            terms: "Ketentuan Layanan",
        },
        en: {
            aboutDesc: "Empowering cultural preservation through innovative phygital technology. Based in Jakarta, Indonesia.",
            copyright: "© 2026 CARDTARA Innovation. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
        },
    };

    const t = content[locale] || content.en;

    return (
        <footer className="bg-background-dark text-white py-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content - Centered */}
                <div className="flex flex-col items-center text-center mb-2">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                            </svg>
                        </div>
                        <span className="text-lg font-extrabold tracking-tight text-white font-display">CARDTARA</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs leading-relaxed mb-2 max-w-md">
                        {t.aboutDesc}
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex gap-1.5 mb-3">
                        <a href="https://instagram.com/cardtara" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                            <FaInstagram className="text-base text-white" />
                        </a>
                        <a href="https://shopee.co.id/cardtara" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Shopee">
                            <SiShopee className="text-base text-white" />
                        </a>
                        <a href="https://tokopedia.com/cardtara" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Tokopedia">
                            <FaShoppingBag className="text-base text-white" />
                        </a>
                    </div>
                </div>

                {/* Copyright Bar - Centered */}
                <div className="pt-3 border-t border-white/5 flex flex-col items-center gap-1.5 text-gray-500 text-xs">
                    <p>{t.copyright}</p>
                    <div className="flex gap-3">
                        <span className="cursor-default">{t.privacy}</span>
                        <span>•</span>
                        <span className="cursor-default">{t.terms}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
