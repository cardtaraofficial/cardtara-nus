import QRCode from "qrcode";
import * as fs from "fs";
import * as path from "path";

// Config
const CARD_SLUG = "AS"; // ← Ganti ini kalau mau kartu lain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://cardtara-nus.vercel.app";

async function generateSingleQR() {
    console.log(`🎯 Generating QR code for card: ${CARD_SLUG}\n`);

    // Create output directory
    const outputDir = path.join(process.cwd(), "public", "qrs");
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log("✅ Created directory: public/qrs\n");
    }

    try {
        const url = `${BASE_URL}/id/k/${CARD_SLUG}`;
        const outputPath = path.join(outputDir, `${CARD_SLUG}.png`);

        await QRCode.toFile(outputPath, url, {
            width: 300,
            margin: 2,
            color: {
                dark: "#4F46E5", // Indigo color
                light: "#FFFFFF",
            },
        });

        console.log(`✅ QR Code generated!`);
        console.log(`📍 URL: ${url}`);
        console.log(`💾 Saved to: ${outputPath}\n`);
    } catch (error) {
        console.error(`❌ Error: ${error}`);
        process.exit(1);
    }
}

// Run
generateSingleQR();
