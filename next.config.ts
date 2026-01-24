import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ["image/webp"],
    },
    // Generate static pages untuk semua 52 kartu × 2 bahasa
    output: undefined, // can be 'export' for static site
};

export default nextConfig;
