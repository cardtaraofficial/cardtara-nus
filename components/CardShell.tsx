import { ReactNode } from "react";

type CardShellProps = {
    children: ReactNode;
    className?: string;
};

export default function CardShell({ children, className = "" }: CardShellProps) {
    return (
        <div className={`min-h-screen bg-gradient-to-br from-nusantara-cream via-amber-50 to-orange-50 p-4 ${className}`}>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-nusantara-gold/20 overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
}
