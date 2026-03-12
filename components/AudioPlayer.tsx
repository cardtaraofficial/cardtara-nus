"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

type AudioPlayerProps = {
    audioPath: string;
    title: string;
    subtitle: string;
};

export default function AudioPlayer({ audioPath, title, subtitle }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Update current time
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => setIsPlaying(false);
        const handleError = (e: Event) => {
            console.error("Audio error:", (e.target as HTMLAudioElement).error);
            setIsPlaying(false);
        };

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        audio.addEventListener("canplaythrough", updateDuration);
        audio.addEventListener("ended", handleEnded);
        audio.addEventListener("error", handleError);

        // Try to load duration immediately if already loaded
        if (audio.readyState >= 1) {
            updateDuration();
        }

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
            audio.removeEventListener("canplaythrough", updateDuration);
            audio.removeEventListener("ended", handleEnded);
            audio.removeEventListener("error", handleError);
        };
    }, [audioPath]);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Failed to play audio:", error);
                setIsPlaying(false);
            }
        }
    };

    const handleSkip = (seconds: number) => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const bounds = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const percentage = x / bounds.width;
        audio.currentTime = percentage * audio.duration;
    };

    const formatTime = (seconds: number): string => {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="flex flex-col gap-4 rounded-xl bg-background-light dark:bg-background-dark/50 p-4 border border-primary/5">
            <audio ref={audioRef} src={audioPath} preload="metadata" />

            <div className="flex items-center gap-3 md:gap-6">
                {/* Album Art Placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl w-12 h-12 md:w-16 md:h-16 shrink-0 shadow-md ring-2 ring-white dark:ring-[#2d1a1c] flex items-center justify-center">
                    <span className="text-2xl md:text-3xl">🎭</span>
                </div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-1">
                        {subtitle}
                    </h4>
                    <p className="text-gray-900 dark:text-white text-base md:text-lg font-bold leading-tight line-clamp-2">
                        {title}
                    </p>
                </div>

                {/* Player Controls */}
                <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    <button
                        onClick={() => handleSkip(-10)}
                        className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 text-gray-600 hover:bg-primary/10 hover:text-primary transition-all"
                        aria-label="Skip backward 10 seconds"
                    >
                        <SkipBack className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={togglePlay}
                        className="flex shrink-0 items-center justify-center rounded-full w-14 h-14 md:w-16 md:h-16 bg-primary text-white shadow-xl shadow-primary/30 hover:scale-105 transition-transform"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? <Pause className="w-7 h-7 md:w-8 md:h-8" fill="white" /> : <Play className="w-7 h-7 md:w-8 md:h-8" fill="white" />}
                    </button>
                    <button
                        onClick={() => handleSkip(10)}
                        className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 text-gray-600 hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
                        aria-label="Skip forward 10 seconds"
                    >
                        <SkipForward className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
                <div
                    className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer overflow-hidden"
                    onClick={handleProgressClick}
                >
                    <div
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-100"
                        style={{ width: `${progress}%` }}
                    ></div>
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-white dark:border-background-dark shadow-md transition-all duration-100"
                        style={{ left: `${progress}%`, transform: `translateX(-50%) translateY(-50%)` }}
                    ></div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-bold tracking-wider">
                        {formatTime(currentTime)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-bold tracking-wider">
                        {formatTime(duration)}
                    </p>
                </div>
            </div>
        </div>
    );
}
