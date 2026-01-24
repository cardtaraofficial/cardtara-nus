"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = {
    params: Promise<{ lang: string }>;
};

export default function ScanPage({ params }: Props) {
    const [locale, setLocale] = useState<Locale>("id");
    const [isScanning, setIsScanning] = useState(false);
    const [facingMode, setFacingMode] = useState<"user" | "environment">("environment"); // user = front, environment = back
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const router = useRouter();

    useEffect(() => {
        params.then(({ lang }) => {
            setLocale(lang as Locale);
        });
    }, [params]);

    const content = {
        id: {
            title: "Scan Kartu QR",
            subtitle: "Arahkan kamera ke QR code di kartu CARDTARA",
            startButton: "Mulai Scan",
            stopButton: "Berhenti",
            backButton: "Kembali ke Beranda",
            ready: "Kamera siap!",
            instruction: "Posisikan QR code di dalam bingkai",
        },
        en: {
            title: "Scan Card QR",
            subtitle: "Point your camera at the QR code on CARDTARA card",
            startButton: "Start Scanning",
            stopButton: "Stop",
            backButton: "Back to Home",
            ready: "Camera ready!",
            instruction: "Position QR code within the frame",
        },
    };

    const t = content[locale];

    const startScanning = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: facingMode },
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                streamRef.current = stream;
                await videoRef.current.play();
                setIsScanning(true);
            }
        } catch (err) {
            console.error("Camera error:", err);
            alert("Gagal akses kamera. Pastikan Anda mengizinkan akses kamera.");
        }
    };

    const stopScanning = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setIsScanning(false);
    };

    const switchCamera = async () => {
        // Toggle between front and back camera
        const newFacingMode = facingMode === "environment" ? "user" : "environment";
        setFacingMode(newFacingMode);

        // Restart stream with new camera
        if (isScanning) {
            stopScanning();
            // Wait a bit then restart with new camera
            setTimeout(() => {
                startScanning();
            }, 100);
        }
    };

    const handleManualInput = () => {
        const slug = prompt("Enter card slug (e.g., AS, 2S, KH):");
        if (slug) {
            stopScanning();
            router.push(`/${locale}/k/${slug.toUpperCase()}`);
        }
    };

    useEffect(() => {
        return () => stopScanning();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 to-background-light">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                        {t.title}
                    </h1>
                    <p className="text-gray-600 text-lg">{t.subtitle}</p>
                </div>

                {/* Pre-mounted Video Element */}
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    style={{ transform: "scaleX(-1)" }}
                    className={isScanning ? "w-full aspect-square object-cover rounded-2xl" : "hidden"}
                />

                {!isScanning ? (
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                        <div className="text-8xl mb-6">📸</div>
                        <button
                            onClick={startScanning}
                            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg mb-4"
                        >
                            {t.startButton}
                        </button>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-3">Untuk testing:</p>
                            <button
                                onClick={handleManualInput}
                                className="text-primary font-semibold hover:underline"
                            >
                                Input Manual Card Slug →
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-6 bg-gray-50">
                            <p className="text-center text-gray-600 mb-4 font-semibold">
                                ✅ {t.ready} - {t.instruction}
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={switchCamera}
                                    className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    🔄 {facingMode === "environment" ? "Depan" : "Belakang"}
                                </button>
                                <button
                                    onClick={stopScanning}
                                    className="flex-1 bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
                                >
                                    {t.stopButton}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center mt-8">
                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-semibold"
                    >
                        ← {t.backButton}
                    </Link>
                </div>
            </div>
        </div>
    );
}
