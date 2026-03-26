import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#8f0515",
                gold: "#ecbb65",
                "background-light": "#f8f6f6",
                "background-dark": "#221012",
                "earthy-brown": "#3e2723",
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                sans: ['var(--font-jakarta)', 'sans-serif'], // Sets default text
                display: ['var(--font-playfair)', 'serif'],
            },
            backgroundImage: {
                "lontar-pattern": "url('/textures/lontar-bg.png')",
                "batik-pattern": "linear-gradient(45deg, transparent 48%, currentColor 49%, currentColor 51%, transparent 52%), linear-gradient(-45deg, transparent 48%, currentColor 49%, currentColor 51%, transparent 52%)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-nusantara": "linear-gradient(135deg, #DC2626 0%, #D97706 25%, #059669 50%, #1E40AF 75%, #7C3AED 100%)",
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(100%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(217, 119, 6, 0.5)" },
                    "50%": { boxShadow: "0 0 40px rgba(217, 119, 6, 0.8)" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-out",
                "slide-up": "slide-up 0.6s ease-out",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "float": "float 3s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};

export default config;
