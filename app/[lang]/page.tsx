import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = {
    params: Promise<{ lang: string }>;
};

export default async function LandingPage({ params }: Props) {
    const { lang } = await params;
    const locale = lang as Locale;

    const content = {
        id: {
            hero: {
                badge: "Inovasi Tradisi",
                title: "CARDTARA: Membawa Warisan Indonesia ke ",
                titleHighlight: "Ujung Jari Anda",
                description: "Buka keajaiban budaya digital melalui kartu remi interaktif berbasis QR. Dirancang untuk pelajar, wisatawan, dan penggemar budaya.",
                cta1: "Mulai",
                cta2: "Scan Kartu Anda",
            },
            features: {
                title: "Memadukan Tradisi dengan Inovasi",
                description: "Rasakan kekayaan warisan Indonesia melalui teknologi modern yang dirancang untuk era digital.",
                items: [
                    {
                        title: "Motif Batik",
                        description: "Motif tradisional yang rumit menjadi hidup secara digital dengan konteks sejarah dan makna simbolis yang terperinci.",
                    },
                    {
                        title: "Cerita Wayang",
                        description: "Siluet wayang kulit menceritakan kisah kuno melalui animasi augmented reality dan sulih suara profesional.",
                    },
                    {
                        title: "Cerita Rakyat Digital",
                        description: "Bercerita interaktif melalui teknologi QR yang menghubungkan kartu fisik ke ekosistem digital yang kaya.",
                    },
                ],
            },
            howItWorks: {
                title: "Cara Kerja",
                steps: [
                    {
                        title: "Dapatkan Kartu Anda",
                        description: "Pesan deck CARDTARA fisik Anda dengan desain premium dari seluruh nusantara Indonesia.",
                    },
                    {
                        title: "Scan QR",
                        description: "Gunakan kamera smartphone Anda untuk memindai kode QR unik di bagian belakang kartu apa pun.",
                    },
                    {
                        title: "Rasakan Budaya",
                        description: "Langsung tonton, dengarkan, dan pelajari tentang warisan budaya yang diwakili pada kartu.",
                    },
                ],
                testimonial: "Belajar sejarah belum pernah semenyenangkan dan interaktif ini!",
            },
            cta: {
                title: "Siap Memulai Perjalanan Budaya Anda?",
                description: "Bergabunglah dengan ribuan pelajar dan wisatawan yang menjelajahi Indonesia dengan cara yang sama sekali baru.",
                button1: "Belanja Sekarang",
                button2: "Pelajari Lebih Lanjut",
            },
        },
        en: {
            hero: {
                badge: "Innovating Tradition",
                title: "CARDTARA: Bringing Indonesian Heritage to ",
                titleHighlight: "Your Fingertips",
                description: "Unlock the magic of digital culture through interactive QR-based playing cards. Designed for students, tourists, and culture enthusiasts.",
                cta1: "Get Started",
                cta2: "Scan Your Card",
            },
            features: {
                title: "Blending Tradition with Innovation",
                description: "Experience Indonesia's rich heritage through modern technology designed for the digital age.",
                items: [
                    {
                        title: "Batik Patterns",
                        description: "Intricate traditional motifs come to life digitally with detailed historical context and symbolic meanings.",
                    },
                    {
                        title: "Wayang Stories",
                        description: "Shadow puppet silhouettes tell ancient tales through augmented reality animations and professional voiceovers.",
                    },
                    {
                        title: "Digital Folklore",
                        description: "Interactive storytelling through QR technology that connects the physical cards to a rich digital ecosystem.",
                    },
                ],
            },
            howItWorks: {
                title: "How It Works",
                steps: [
                    {
                        title: "Get Your Card",
                        description: "Order your physical CARDTARA deck featuring premium designs from across the Indonesian archipelago.",
                    },
                    {
                        title: "Scan the QR",
                        description: "Use your smartphone camera to scan the unique QR code on the back of any playing card.",
                    },
                    {
                        title: "Experience Culture",
                        description: "Instantly watch, listen, and learn about the cultural heritage represented on the card.",
                    },
                ],
                testimonial: "Learning history has never been this fun and interactive!",
            },
            cta: {
                title: "Ready to Start Your Cultural Journey?",
                description: "Join thousands of students and tourists exploring Indonesia in a whole new way.",
                button1: "Shop Now",
                button2: "Learn More",
            },
        },
    };

    const t = content[locale];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative overflow-hidden">{/* Removed all padding */}
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/hero-bg.png)' }}
                ></div>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-28 lg:pt-32">{/* Increased pt to account for navbar */}
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Content */}
                        <div className="z-10">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 shadow-lg">
                                <span className="text-sm">✨</span>
                                {t.hero.badge}
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6 md:mb-10 font-display drop-shadow-2xl">
                                {t.hero.title}
                                <span className="text-yellow-300">{t.hero.titleHighlight}</span>
                            </h1>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-white/95 mb-8 md:mb-10 max-w-lg leading-relaxed drop-shadow-lg">
                                {t.hero.description}
                            </p>

                            {/* Hero Image Placeholder - Mobile only, shows BEFORE buttons */}
                            <div className="relative lg:hidden mb-8">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border-4 border-white/30">
                                    <div className="aspect-[4/3] flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <div className="text-6xl mb-4">🎴</div>
                                            <p className="text-white font-semibold drop-shadow-lg">Card Image Placeholder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`#about`}
                                    scroll={true}
                                    className="flex items-center justify-center gap-2 bg-white text-primary px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base hover:scale-[1.02] transition-transform shadow-2xl border-2 border-white"
                                >
                                    <span>🚀</span>
                                    {t.hero.cta1}
                                </Link>
                                <Link
                                    href={`/${locale}/scan`}
                                    className="flex items-center justify-center gap-2 bg-primary/90 backdrop-blur-sm text-white border-2 border-white/50 px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base hover:bg-primary transition-colors shadow-xl"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                    </svg>
                                    {t.hero.cta2}
                                </Link>
                            </div>
                        </div>

                        {/* Right - Hero Image Placeholder - Desktop only */}
                        <div className="relative hidden lg:block">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500 bg-white/10 backdrop-blur-sm border-4 border-white/30">
                                <div className="aspect-[4/3] flex items-center justify-center p-8">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🎴</div>
                                        <p className="text-white font-semibold drop-shadow-lg">Card Image Placeholder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wayang Divider - Seamless connection */}
            <div className="w-full h-16 md:h-24 -mt-16 md:-mt-24 bg-gradient-to-b from-transparent to-primary/5 flex justify-center items-end overflow-hidden">
                <span className="text-6xl md:text-8xl text-primary/20 select-none translate-y-8">🎭</span>
                <span className="text-6xl md:text-8xl text-primary/20 select-none translate-y-8">🌋</span>
                <span className="text-6xl md:text-8xl text-primary/20 select-none translate-y-8">🎭</span>
            </div>

            {/* Features Section - Now serves as About */}
            <section id="about" className="relative py-16 md:py-24 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/features-bg.jpg)' }}
                ></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/97"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 md:mb-4 font-display">
                            {t.features.title}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            {t.features.description}
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {t.features.items.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-background-light p-6 md:p-8 rounded-2xl border border-transparent hover:border-primary/20 transition-all hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-2xl md:text-3xl">
                                        {index === 0 ? "🎨" : index === 1 ? "📖" : "💻"}
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 font-display">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                                    {item.description}
                                </p>

                                {/* Image Placeholder */}
                                <div className="aspect-video rounded-lg overflow-hidden">
                                    {index === 0 ? (
                                        <img
                                            src="/feature-batik.jpg"
                                            alt="Batik Patterns"
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : index === 1 ? (
                                        <img
                                            src="/feature-wayang.jpg"
                                            alt="Wayang Stories"
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                            <span className="text-4xl opacity-30">📱</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/how-to-bg.jpg)' }}
                ></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-background-light/85"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
                        {/* Left - Steps */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 md:mb-8 font-display">
                                {t.howItWorks.title}
                            </h2>
                            <div className="space-y-6 md:space-y-8">
                                {t.howItWorks.steps.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 font-display">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm md:text-base text-gray-600">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Video with Testimonial */}
                        <div className="lg:w-1/2 bg-primary/5 rounded-3xl p-6 md:p-8 border border-primary/10">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                                {/* Video Player */}
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    controls
                                >
                                    <source src="/how-it-works.mp4" type="video/mp4" />
                                    <source src="/how-it-works.webm" type="video/webm" />
                                    {/* Fallback untuk browser yang tidak support video */}
                                    <div className="text-center p-8">
                                        <div className="text-7xl mb-4">📱</div>
                                        <p className="text-gray-600 font-semibold">Your browser does not support video</p>
                                    </div>
                                </video>

                                {/* Testimonial Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
                                    <div className="text-white">
                                        <span className="text-xs font-bold uppercase tracking-widest bg-primary px-2 py-1 rounded mb-2 inline-block">
                                            Live Demo
                                        </span>
                                        <p className="text-base md:text-lg font-medium italic">
                                            "{t.howItWorks.testimonial}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-primary overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 batik-overlay"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 font-display">
                        {t.cta.title}
                    </h2>
                    <p className="text-white/80 text-base md:text-lg mb-8 md:mb-10">
                        {t.cta.description}
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                        <Link
                            href={`/${locale}/k/AS`}
                            className="bg-white text-primary px-8 md:px-10 py-3 md:py-4 rounded-xl font-extrabold text-base md:text-lg hover:bg-gray-100 transition-colors shadow-xl"
                        >
                            {t.cta.button1}
                        </Link>
                        <Link
                            href={`/${locale}`}
                            className="bg-transparent text-white border-2 border-white/30 px-8 md:px-10 py-3 md:py-4 rounded-xl font-extrabold text-base md:text-lg hover:bg-white/10 transition-colors"
                        >
                            {t.cta.button2}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
