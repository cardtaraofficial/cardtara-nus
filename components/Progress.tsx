type ProgressProps = {
    current: number;
    total: number;
    label: string;
};

export default function Progress({ current, total, label }: ProgressProps) {
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">{label}</span>
                <span className="text-sm font-bold text-nusantara-indigo">
                    {current} / {total}
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-nusantara-indigo to-nusantara-pandan-green h-full transition-all duration-300"
                    style={{ width: `${(current / total) * 100}%` }}
                />
            </div>
        </div>
    );
}
