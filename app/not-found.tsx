import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nusantara-cream via-amber-50 to-orange-50 p-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-nusantara-indigo mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Kartu Tidak Ditemukan / Card Not Found
                </h2>
                <p className="text-gray-600 mb-8">
                    Halaman yang Anda cari tidak tersedia.
                    <br />
                    The page you are looking for is not available.
                </p>
                <div className="space-x-4">
                    <Link
                        href="/id"
                        className="inline-block px-6 py-3 bg-nusantara-indigo text-white font-semibold rounded-lg hover:bg-nusantara-indigo/90 transition-all"
                    >
                        Beranda (ID)
                    </Link>
                    <Link
                        href="/en"
                        className="inline-block px-6 py-3 bg-white text-nusantara-indigo border-2 border-nusantara-indigo font-semibold rounded-lg hover:bg-nusantara-indigo/5 transition-all"
                    >
                        Home (EN)
                    </Link>
                </div>
            </div>
        </div>
    );
}
