import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-display",
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
        <html lang="id" suppressHydrationWarning>
            <body className={plusJakarta.variable} suppressHydrationWarning>{children}</body>
        </html>
    );
}
