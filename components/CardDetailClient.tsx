"use client";

import { useState } from "react";
import Link from "next/link";
import { getTribeByRank } from "@/content/tribes";
import type { Locale } from "@/lib/i18n";
import type { Card } from "@/content/utils";
import QuizStepper from "@/components/QuizStepper";
import AudioPlayer from "@/components/AudioPlayer";

type Props = {
    card: Card;
    locale: Locale;
};

export default function CardDetailClient({ card, locale }: Props) {
    const [showQuiz, setShowQuiz] = useState(false);

    const content = {
        id: {
            backToScan: "Kembali ke Scan",
            home: "Beranda",
            category: "Cerita Rakyat & Mitologi",
            nowPlaying: "Sedang Diputar",
            audioJourney: "Perjalanan Audio",
            narratedBy: "Dinarasikan oleh Cardtara AI",
            narrativeTitle: "Narasi Historis & Mitos",
            quizTitle: "Siap menguji pengetahuan Anda?",
            quizDesc: "Lihat seberapa banyak yang telah Anda pelajari dan dapatkan Lencana Warisan Anda!",
            startQuiz: "Mulai Quiz",
            estimatedTime: "Estimasi waktu: 5 menit • 10 Pertanyaan",
            exploreMore: "Jelajahi Lebih Banyak Cerita Warisan",
            shareDiscovery: "Bagikan Penemuan",
        },
        en: {
            backToScan: "Back to Scan",
            home: "Home",
            category: "Folklore & Mythology",
            nowPlaying: "Now Playing",
            audioJourney: "Audio Journey",
            narratedBy: "Narrated by Cardtara AI Voice",
            narrativeTitle: "Historical Narrative & Mythos",
            quizTitle: "Ready to test your knowledge?",
            quizDesc: "See how much you've learned and earn your Heritage Badge!",
            startQuiz: "Start Quiz",
            estimatedTime: "Estimated time: 5 minutes • 10 Questions",
            exploreMore: "Explore More Heritage Stories",
            shareDiscovery: "Share Discovery",
        },
    };

    const t = content[locale];

    // Get tribe data from rank
    const rank = card.slug.slice(0, -1); // Extract rank from slug (e.g., "AS" -> "A")
    const tribe = getTribeByRank(rank);

    // If quiz is active, show QuizStepper
    if (showQuiz) {
        return (
            <main className="flex-1 px-4 md:px-40 py-8">
                <QuizStepper card={card} locale={locale} />
            </main>
        );
    }

    // Otherwise show card content
    return (
        <main className="flex-1 px-4 md:px-40 py-4">
            <div className="mx-auto max-w-[960px] flex flex-col gap-4">
                {/* Breadcrumb */}
                <nav className="flex flex-wrap gap-2 px-2 md:px-4">
                    <Link href={`/${locale}`} className="text-gray-500 text-sm md:text-base font-medium hover:underline py-2">
                        {t.home}
                    </Link>
                    <span className="text-gray-500 text-sm md:text-base font-medium py-2">/</span>
                    <span className="text-primary text-sm md:text-base font-semibold py-2">{card.title[locale]}</span>
                </nav>

                {/* Title Section */}
                <section className="bg-white dark:bg-[#2d1a1c] rounded-xl p-4 md:p-5 shadow-sm border border-primary/5">
                    <div className="flex flex-wrap justify-between items-start gap-3">
                        <div className="flex min-w-[300px] flex-col gap-2">
                            <span className="inline-flex w-fit px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                {t.category}
                            </span>
                            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] font-display">
                                {card.title[locale]}
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">
                                {card.paragraphs[locale][0]}
                            </p>
                        </div>
                        <button className="flex items-center gap-2 min-w-[140px] cursor-pointer justify-center rounded-lg h-11 px-5 bg-gray-100 dark:bg-background-dark text-gray-900 dark:text-white text-sm font-bold transition-all hover:bg-gray-200 dark:hover:bg-black">
                            <span>📤</span>
                            <span className="truncate">{t.shareDiscovery}</span>
                        </button>
                    </div>
                </section>

                {/* Audio Player Section */}
                <section className="bg-white dark:bg-[#2d1a1c] rounded-xl overflow-hidden shadow-lg border border-primary/10">
                    <div className="p-4">
                        {tribe ? (
                            <AudioPlayer
                                audioPath={tribe.audioPath}
                                title={`${t.audioJourney}: ${card.title[locale]}`}
                                subtitle={t.nowPlaying}
                            />
                        ) : (
                            <p className="text-gray-500 text-center py-4">Audio not available</p>
                        )}
                    </div>
                </section>

                {/* Historical Narrative Article */}
                <article className="bg-white dark:bg-[#2d1a1c] rounded-xl p-6 shadow-sm border border-primary/5">
                    <h3 className="text-gray-900 dark:text-white tracking-tight text-2xl font-extrabold leading-tight pb-4 flex items-center gap-2 font-display">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        {t.narrativeTitle}
                    </h3>

                    <div className="space-y-4 text-gray-900 dark:text-gray-200 text-base leading-relaxed">
                        {card.paragraphs[locale].map((paragraph, index) => (
                            <p key={index}>
                                {index === 0 && (
                                    <span className="text-4xl font-bold text-primary float-left mr-3 mt-1 leading-none">
                                        {paragraph.charAt(0)}
                                    </span>
                                )}
                                {index === 0 ? paragraph.slice(1) : paragraph}
                            </p>
                        ))}

                        {/* Image Placeholders */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                            <div className="rounded-lg overflow-hidden border border-primary/10 group">
                                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <span className="text-6xl opacity-30">🖼️</span>
                                </div>
                                <div className="p-3 bg-background-light dark:bg-background-dark/30">
                                    <p className="text-xs font-bold text-gray-600">Fig 1. Cultural Image</p>
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden border border-primary/10 group">
                                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <span className="text-6xl opacity-30">📸</span>
                                </div>
                                <div className="p-3 bg-background-light dark:bg-background-dark/30">
                                    <p className="text-xs font-bold text-gray-600">Fig 2. Heritage Photo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-primary/10 flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-lg">#WayangKulit</span>
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-lg">#JavaneseCulture</span>
                        <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-lg">#IndonesianHeritage</span>
                    </div>
                </article>

                {/* Quiz CTA Section */}
                <section className="bg-gradient-to-br from-primary/95 to-primary rounded-2xl p-6 border-2 border-primary text-center space-y-4 shadow-xl">
                    <div className="space-y-2">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white mb-1 shadow-lg">
                            <span className="text-3xl">❓</span>
                        </div>
                        <h2 className="text-white text-2xl font-extrabold tracking-tight font-display drop-shadow-lg">
                            {t.quizTitle}
                        </h2>
                        <p className="text-white/90 text-base max-w-xl mx-auto">
                            {t.quizDesc}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                        <button
                            onClick={() => setShowQuiz(true)}
                            className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-xl text-lg md:text-xl font-black shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 active:scale-95 transition-all w-full sm:w-auto"
                        >
                            <span>{t.startQuiz}</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                    <p className="text-white/75 text-sm font-medium">{t.estimatedTime}</p>
                </section>

                {/* Explore More Footer */}
                <footer className="mb-12 flex justify-center border-t border-primary/5 pt-8">
                    <Link
                        href={`/${locale}`}
                        className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 px-8 py-4 rounded-xl font-bold hover:text-primary transition-all"
                    >
                        <span className="group-hover:rotate-12 transition-transform">📚</span>
                        {t.exploreMore}
                    </Link>
                </footer>
            </div>
        </main>
    );
}
