import { ReactNode } from "react";

type CardVariant = "batik" | "toraja" | "pandan" | "songket" | "sasirangan" | "tenun" | "lombok" | "betawi";

interface HeroCardProps {
    variant?: CardVariant;
    icon: string;
    title: string;
    description: string;
    className?: string;
}

const variantStyles: Record<CardVariant, { from: string; to: string; accent: string; shadow: string }> = {
    batik: {
        from: "from-nusantara-batik-red",
        to: "to-nusantara-batik-maroon",
        accent: "border-nusantara-batik-red/30",
        shadow: "shadow-nusantara-batik-red/20",
    },
    toraja: {
        from: "from-nusantara-toraja-blue",
        to: "to-nusantara-toraja-navy",
        accent: "border-nusantara-toraja-blue/30",
        shadow: "shadow-nusantara-toraja-blue/20",
    },
    pandan: {
        from: "from-nusantara-pandan-green",
        to: "to-nusantara-pandan-dark",
        accent: "border-nusantara-pandan-green/30",
        shadow: "shadow-nusantara-pandan-green/20",
    },
    songket: {
        from: "from-nusantara-songket-gold",
        to: "to-nusantara-songket-amber",
        accent: "border-nusantara-songket-gold/30",
        shadow: "shadow-nusantara-songket-gold/20",
    },
    sasirangan: {
        from: "from-nusantara-sasirangan-purple",
        to: "to-nusantara-sasirangan-violet",
        accent: "border-nusantara-sasirangan-purple/30",
        shadow: "shadow-nusantara-sasirangan-purple/20",
    },
    tenun: {
        from: "from-nusantara-tenun-orange",
        to: "to-nusantara-tenun-red",
        accent: "border-nusantara-tenun-orange/30",
        shadow: "shadow-nusantara-tenun-orange/20",
    },
    lombok: {
        from: "from-nusantara-lombok-pink",
        to: "to-nusantara-lombok-rose",
        accent: "border-nusantara-lombok-pink/30",
        shadow: "shadow-nusantara-lombok-pink/20",
    },
    betawi: {
        from: "from-nusantara-betawi-teal",
        to: "to-nusantara-betawi-cyan",
        accent: "border-nusantara-betawi-teal/30",
        shadow: "shadow-nusantara-betawi-teal/20",
    },
};

export default function HeroCard({ variant = "batik", icon, title, description, className = "" }: HeroCardProps) {
    const styles = variantStyles[variant];

    return (
        <div
            className={`
                relative group
                bg-white/95 backdrop-blur-sm
                rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8
                border-2 ${styles.accent}
                shadow-lg md:shadow-xl ${styles.shadow}
                hover:shadow-2xl
                hover:scale-105
                hover:-translate-y-2
                transition-all duration-300
                overflow-hidden
                ${className}
            `}
        >
            {/* Decorative Gradient Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r ${styles.from} ${styles.to}`}></div>

            {/* Decorative Corner Patterns */}
            <div className={`absolute top-2 md:top-3 left-2 md:left-3 w-4 md:w-6 h-4 md:h-6 border-t-2 border-l-2 ${styles.accent} opacity-40`}></div>
            <div className={`absolute bottom-2 md:bottom-3 right-2 md:right-3 w-4 md:w-6 h-4 md:h-6 border-b-2 border-r-2 ${styles.accent} opacity-40`}></div>

            {/* Icon with Glow */}
            <div className="relative mb-4 md:mb-6">
                <div className={`
                    inline-flex items-center justify-center
                    w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                    bg-gradient-to-br ${styles.from} ${styles.to}
                    rounded-xl md:rounded-2xl
                    text-2xl sm:text-3xl md:text-4xl
                    shadow-md md:shadow-lg
                    group-hover:animate-float
                    transition-transform
                `}>
                    <span className="filter drop-shadow-lg">{icon}</span>
                </div>
            </div>

            {/* Content */}
            <h3 className={`
                text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3
                bg-gradient-to-r ${styles.from} ${styles.to}
                bg-clip-text text-transparent
            `}>
                {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {description}
            </p>

            {/* Hover Effect Overlay */}
            <div className={`
                absolute inset-0
                bg-gradient-to-br ${styles.from} ${styles.to}
                opacity-0 group-hover:opacity-5
                transition-opacity duration-300
                pointer-events-none
                rounded-xl md:rounded-2xl
            `}></div>
        </div>
    );
}
