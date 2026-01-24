import { notFound } from "next/navigation";
import { getAllCardSlugs, getCardBySlug } from "@/lib/cards";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import CardDetailClient from "@/components/CardDetailClient";

type Props = {
    params: Promise<{ lang: string; slug: string }>;
};

export async function generateStaticParams() {
    const slugs = await getAllCardSlugs();
    const params: { lang: string; slug: string }[] = [];

    for (const locale of locales) {
        for (const slug of slugs) {
            params.push({ lang: locale, slug });
        }
    }

    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang, slug } = await params;
    const locale = lang as Locale;
    const card = await getCardBySlug(slug);

    if (!card) {
        return {
            title: "Card Not Found",
        };
    }

    return {
        title: `${card.title[locale]} - CARDTARA`,
        description: card.paragraphs[locale][0].substring(0, 150) + "...",
        alternates: {
            languages: {
                id: `/id/k/${slug}`,
                en: `/en/k/${slug}`,
            },
        },
    };
}

export default async function CardPage({ params }: Props) {
    const { lang, slug } = await params;
    const locale = lang as Locale;

    const card = await getCardBySlug(slug);

    if (!card) {
        notFound();
    }

    return <CardDetailClient card={card} locale={locale} />;
}
