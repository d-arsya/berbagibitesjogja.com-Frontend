import Link from "next/link";

export default function HomeLayout() {
    return (
        <div className="flex items-center justify-center py-36 px-4">
            <div className="text-center max-w-xl">
                <h1 className="text-6xl font-extrabold text-red-600">404</h1>
                <h2 className="mt-3 text-2xl font-bold text-gray-800">Halaman Tidak Ditemukan</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Wah, kamu tersesat! Tapi jangan khawatir — masih banyak cara untuk membantu.
                    💛 Jadi relawan dan bantu selamatkan makanan berlebih.
                    🍱 Kurangi limbah makanan dengan menjadi bagian dari <strong>food rescue movement</strong>.
                    🙌 Ajak temanmu untuk berbagi donasi, bukan sisa.
                </p>
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <Link href="/" className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </div>
    );
}

