import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ lang: string }>;
    children: React.ReactNode;
};

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const locale = lang as Locale;

    const titles = {
        id: "CARDTARA - Kartu Budaya Nusantara",
        en: "CARDTARA - Indonesian Cultural Cards",
    };

    const descriptions = {
        id: "52 kartu remi dengan konten budaya Indonesia. Scan QR code untuk belajar budaya Nusantara melalui quiz interaktif.",
        en: "52 playing cards with Indonesian cultural content. Scan QR code to learn about Indonesian culture through interactive quizzes.",
    };

    return {
        title: titles[locale],
        description: descriptions[locale],
        alternates: {
            languages: {
                id: "/id",
                en: "/en",
            },
        },
    };
}

export default async function LangLayout({ params, children }: Props) {
    const { lang } = await params;

    // Validate locale
    if (!locales.includes(lang as Locale)) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
}
