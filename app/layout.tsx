import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Setup the serif font for headings
const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
});

// 2. Setup the sans-serif font for body text
const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jakarta",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "CARDTARA - Kartu Budaya Nusantara",
    description: "52 kartu remi dengan konten budaya Indonesia. Scan QR code untuk belajar budaya Nusantara melalui quiz interaktif.",
    keywords: ["budaya indonesia", "nusantara", "edukasi", "kartu", "quiz"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // 3. Inject both font variables into the HTML
        <html lang="id" className={`${plusJakarta.variable} ${playfair.variable}`} suppressHydrationWarning>
            {/* 4. Apply the base sans font to the body */}
            <body className="font-sans antialiased" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}