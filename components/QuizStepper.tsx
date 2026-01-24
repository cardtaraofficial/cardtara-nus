"use client";

import { useState } from "react";
import Link from "next/link";
import type { Card } from "@/content/utils";
import type { Locale } from "@/lib/i18n";

type QuizStepperProps = {
    card: Card;
    locale: Locale;
};

export default function QuizStepper({ card, locale }: QuizStepperProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [currentSelection, setCurrentSelection] = useState<number | null>(null);
    const [showResults, setShowResults] = useState(false);

    const texts = {
        id: {
            culturalChallenge: "Tantangan Budaya",
            question: "Pertanyaan",
            of: "dari",
            progress: "Progress",
            previous: "Sebelumnya",
            nextQuestion: "Pertanyaan Selanjutnya",
            seeResults: "Lihat Hasil",
            yourScore: "Skor Anda",
            correctAnswers: "Jawaban Benar",
            retryQuiz: "Coba Lagi",
            backToContent: "Kembali ke Konten",
            feedback: {
                poor: "Coba lagi! Baca kontennya lebih teliti ya 😊",
                good: "Mantap! Pengetahuan budaya kamu lumayan nih  👍",
                excellent: "Hebat! Kamu benar-benar memahami budaya ini! 🎉",
            },
        },
        en: {
            culturalChallenge: "Cultural Challenge",
            question: "Question",
            of: "of",
            progress: "Progress",
            previous: "Previous",
            nextQuestion: "Next Question",
            seeResults: "See Results",
            yourScore: "Your Score",
            correctAnswers: "Correct Answers",
            retryQuiz: "Retry Quiz",
            backToContent: "Back to Content",
            feedback: {
                poor: "Try again! Read the content more carefully  😊",
                good: "Nice! Your cultural knowledge is pretty good   👍",
                excellent: "Excellent! You truly understand this culture!  🎉",
            },
        },
    };

    const t = texts[locale];

    const totalQuestions = card.quiz.length;
    const progressPercentage = Math.round(((currentQuestion + 1) / totalQuestions) * 100);

    const handleSelectAnswer = (index: number) => {
        setCurrentSelection(index);
    };

    const handleNext = () => {
        if (currentSelection === null) return;

        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = currentSelection;
        setSelectedAnswers(newAnswers);
        setCurrentSelection(null);

        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setCurrentSelection(selectedAnswers[currentQuestion - 1] ?? null);
        }
    };

    const calculateScore = () => {
        let score = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === card.quiz[index].answerIndex) {
                score++;
            }
        });
        return score;
    };

    const getFeedback = (score: number) => {
        const percentage = (score / totalQuestions) * 100;
        if (percentage < 50) return t.feedback.poor;
        if (percentage < 80) return t.feedback.good;
        return t.feedback.excellent;
    };

    const retryQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setCurrentSelection(null);
        setShowResults(false);
    };

    // Results Screen
    if (showResults) {
        const score = calculateScore();
        const feedback = getFeedback(score);
        const scorePercentage = Math.round((score / totalQuestions) * 100);

        return (
            <div className="w-full max-w-[800px] mx-auto flex flex-col gap-10 px-4 py-12">
                {/* Header Badge */}
                <section className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                        <span className="text-base">🏆</span>
                        Quiz Completed
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 font-display">
                        {t.yourScore}
                    </h1>
                </section>

                {/* Main Results Card */}
                <section className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-primary/5 flex flex-col items-center gap-8 relative overflow-hidden">
                    {/* Decorative Corners */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary/20 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary/20 rounded-br-3xl"></div>

                    {/* Score Gauge */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center p-1 bg-gradient-to-br from-primary to-primary/70 shadow-lg">
                            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                                <span className="text-5xl md:text-6xl font-black text-primary font-display">
                                    {scorePercentage}%
                                </span>
                                <span className="text-gray-600 text-sm font-bold uppercase tracking-widest">
                                    Score
                                </span>
                            </div>
                        </div>
                        {/* Badge Icon */}
                        <div className="absolute -top-2 -right-2 bg-primary text-white p-3 rounded-full shadow-lg">
                            <span className="text-2xl">🎖️</span>
                        </div>
                    </div>

                    {/* Feedback Text */}
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display">
                            {feedback}
                        </h2>
                        <p className="text-gray-600 text-lg">
                            {score} {t.of} {totalQuestions} {t.correctAnswers}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-6 border-t border-primary/10">
                        <div className="flex flex-col items-center p-3 rounded-xl bg-green-50 border border-green-100">
                            <span className="text-green-600 font-black text-2xl">{score}</span>
                            <span className="text-green-800 text-xs font-bold uppercase">Correct</span>
                        </div>
                        <div className="flex flex-col items-center p-3 rounded-xl bg-red-50 border border-red-100">
                            <span className="text-red-600 font-black text-2xl">{totalQuestions - score}</span>
                            <span className="text-red-800 text-xs font-bold uppercase">Incorrect</span>
                        </div>
                        <div className="flex flex-col items-center p-3 rounded-xl bg-blue-50 border border-blue-100">
                            <span className="text-blue-600 font-black text-2xl">{totalQuestions}</span>
                            <span className="text-blue-800 text-xs font-bold uppercase">Total</span>
                        </div>
                        <div className="flex flex-col items-center p-3 rounded-xl bg-primary/10 border border-primary/20">
                            <span className="text-primary font-black text-2xl">+{score * 50}</span>
                            <span className="text-primary text-xs font-bold uppercase">XP Gained</span>
                        </div>
                    </div>
                </section>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                    <button
                        onClick={retryQuiz}
                        className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-white text-primary border-2 border-primary rounded-xl font-bold hover:bg-primary/5 transition-all"
                    >
                        <span>↻</span>
                        {t.retryQuiz}
                    </button>
                    <Link
                        href={`/${locale}`}
                        className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all"
                    >
                        <span>←</span>
                        {t.backToContent}
                    </Link>
                </div>
            </div>
        );
    }

    // Quiz Screen
    const question = card.quiz[currentQuestion];

    return (
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 px-4 py-8">
            {/* Progress Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm font-bold uppercase tracking-widest">
                            {t.culturalChallenge}
                        </span>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white font-display">
                            {t.question} {currentQuestion + 1} {t.of} {totalQuestions}
                        </h3>
                    </div>
                    <div className="text-right">
                        <span className="text-primary font-bold text-lg">{progressPercentage}%</span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs block font-medium">
                            {t.progress}
                        </span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-white dark:bg-[#2d1a1c] rounded-full overflow-hidden border border-primary/5 shadow-inner">
                    <div
                        className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(236,19,37,0.3)] transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white dark:bg-[#2d1a1c] rounded-2xl p-8 md:p-12 shadow-xl border border-primary/5 relative overflow-hidden">
                {/* Decorative Icon */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-6xl">❓</span>
                </div>

                <div className="relative z-10 flex flex-col gap-8">
                    {/* Question */}
                    <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight font-display">
                        {question.q[locale]}
                    </h1>

                    {/* Answer Choices */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {question.choices[locale].map((choice, index) => {
                            const isSelected = currentSelection === index;
                            const letter = String.fromCharCode(65 + index);

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleSelectAnswer(index)}
                                    className={`group relative flex items-center gap-4 p-5 bg-background-light dark:bg-background-dark/50 rounded-xl border-2 transition-all text-left ${isSelected
                                        ? "border-primary/50 bg-primary/5 dark:bg-primary/10"
                                        : "border-transparent hover:border-primary/30"
                                        }`}
                                >
                                    <span
                                        className={`flex items-center justify-center w-10 h-10 rounded-lg font-bold text-lg transition-colors ${isSelected
                                            ? "bg-primary text-white"
                                            : "bg-white dark:bg-[#2d1a1c] border border-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                                            }`}
                                    >
                                        {letter}
                                    </span>
                                    <span className="text-gray-900 dark:text-white font-bold text-base md:text-lg flex-1">
                                        {choice}
                                    </span>
                                    {isSelected && <span className="text-primary text-2xl">✓</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 font-bold transition-all ${currentQuestion === 0
                        ? "border-gray-200 text-gray-400 cursor-not-allowed"
                        : "border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100"
                        }`}
                >
                    <span>←</span>
                    {t.previous}
                </button>

                {/* Pagination Dots */}
                <div className="hidden sm:flex items-center gap-2">
                    {Array.from({ length: totalQuestions }).map((_, index) => (
                        <div
                            key={index}
                            className={`rounded-full transition-all ${index === currentQuestion
                                ? "w-3 h-3 bg-primary"
                                : "w-2 h-2 bg-gray-300 dark:bg-gray-600"
                                }`}
                        ></div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentSelection === null}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold shadow-xl transition-all ${currentSelection === null
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary text-white hover:scale-[1.02] active:scale-95 shadow-primary/20"
                        }`}
                >
                    {currentQuestion === totalQuestions - 1 ? t.seeResults : t.nextQuestion}
                    <span>→</span>
                </button>
            </div>
        </div>
    );
}
