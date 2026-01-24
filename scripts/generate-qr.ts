import QRCode from "qrcode";
import { generateAllSlugs } from "../content/utils";
import * as fs from "fs";
import * as path from "path";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function generateQRCodes() {
    console.log("🎯 Generating QR codes for CARDTARA...\n");

    // Create output directory
    const outputDir = path.join(process.cwd(), "public", "qrs");
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log("✅ Created directory: public/qrs\n");
    }

    // Generate all 52 slugs
    const allSlugs = generateAllSlugs();
    console.log(`📦 Total cards: ${allSlugs.length}\n`);

    let successCount = 0;
    let errorCount = 0;

    for (const slug of allSlugs) {
        try {
            const url = `${BASE_URL}/id/k/${slug}`;
            const outputPath = path.join(outputDir, `${slug}.png`);

            await QRCode.toFile(outputPath, url, {
                width: 300,
                margin: 2,
                color: {
                    dark: "#4F46E5", // nusantara-indigo
                    light: "#FFFFFF",
                },
            });

            console.log(`✅ ${slug.padEnd(4)} -> ${url}`);
            successCount++;
        } catch (error) {
            console.error(`❌ ${slug.padEnd(4)} -> Error: ${error}`);
            errorCount++;
        }
    }

    console.log(`\n🎉 QR Code generation complete!`);
    console.log(`✅ Success: ${successCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`\n📁 QR codes saved to: ${outputDir}`);
}

// Run the script
generateQRCodes().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
