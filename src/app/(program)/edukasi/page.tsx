import Link from 'next/link'
import Image from 'next/image'
import ArrowLeft from 'public/svg/arrow-left.svg'
import ArrowRight from 'public/svg/arrow-right.svg'
import ArrowDown from 'public/svg/arrow-down.svg'
import GambarMakanan from 'public/makan.png'
import IconTangan from 'public/svg/hand-love.svg'
import ProgramCard from '@/components/ProgramCard';

const ceritaKeberhasilan = [
  {
    image: GambarMakanan,
    icon: IconTangan,
    title: "Penyelamatan Makanan",
    description: "Mengumpulkan kelebihan makanan berkualitas dari restoran, hotel, dan toko untuk mencegah pemborosan. Program ini telah menyelamatkan lebih dari 5.000 kg makanan.",
    link: "/penyelamatan",
    flag: "Flagship Program",
  },
  {
    image: GambarMakanan,
    icon: IconTangan,
    title: "Distribusi Makanan",
    description: "Menyalurkan makanan yang diselamatkan ke panti asuhan, lansia, dan komunitas yang membutuhkan. Telah membantu lebih dari 10.000 penerima manfaat.",
    link: "/distribusi",
    flag: "High Impact",
  },
  {
    image: GambarMakanan,
    icon: IconTangan,
    title: "Edukasi Masyarakat",
    description: "Menyelenggarakan lokakarya dan kampanye untuk meningkatkan kesadaran tentang masalah limbah makanan. 50+ workshop telah dilaksanakan.",
    link: "/edukasi",
    flag: "Community Program",
  },
]

export default function Page() {
  return (
    <>
      <section className='bg-sky-100 -mx-2 md:-mx-32 py-6 text-center '>
      <div className="ml-8 md:ml-32">
        <div className="flex flex-row gap-x-2">
          <p className="text-gray-500">Beranda</p>
          <p>{' > '}</p>
          <p className="text-gray-500">Program</p>
        </div>
        <Link
          href={'./'}
          className="flex flex-row text-navy"
        >
          <Image
            width={30}
            src={ArrowLeft}
            alt="icon-air"
            className="mt-1 mr-2"
          />
          Kembali ke Beranda
        </Link>
      </div>

        <div className='py-12 text-center'>
        <h1 className='text-5xl font-bold'>Program Edukasi dan kampanye</h1>
        <p className=' mt-8 text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Membangun dan mengajak masyarakat untuk berperan aktif dalam mengurangi limbah makanan melalui edukasi dan kampanye yang kreatif</p>
        <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
      </section>
      <section className="py-12 px-6 md:px-32">

  <div className='flex flex-col md:flex-row gap-8 justify-center min-h-screen'>
    {/* Left Section */}
  <div className="flex flex-col max-w-lg w-full">
    {/* Workshop & Pelatihan */}
    <div className="flex-1 bg-teal-50 shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Workshop & Pelatihan</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <div className="bg-teal-500 text-white p-3 rounded-full">
            <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11C20 6.58172 16.4183 3 12 3Z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-md">Food Waste Management</p>
            <p className="text-sm text-slate-500">Pelatihan praktis tentang pengelolaan dan pengurangan limbah makanan</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="bg-teal-500 text-white p-3 rounded-full">
            <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11C20 6.58172 16.4183 3 12 3Z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-md">Sustainable Cooking</p>
            <p className="text-sm text-slate-500">Tips dan trik memasak dengan pendekatan zero-waste</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <div className="bg-teal-500 text-white p-3 rounded-full">
            <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11C20 6.58172 16.4183 3 12 3Z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-md">Composting 101</p>
            <p className="text-sm text-slate-500">Cara mengolah sisa makanan menjadi kompos berkualitas</p>
          </div>
        </li>
      </ul>
    </div>

    {/* Jadwal Workshop Mendatang */}
    <div className="bg-white shadow-md rounded-lg p-6  mt-12">
  <h2 className="text-lg font-bold mb-4">Jadwal Workshop Mendatang</h2>
  <div className="space-y-4">
    {/* Workshop 1 */}
    <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg">
      <div className="flex justify-start gap-4 items-center">
        <div>
          <p className="font-bold text-teal-500 text-md">MEI</p>
          <p className="font-bold text-md">15</p>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-700">Food Waste Management</p>
          <p className="text-xs text-slate-500">09:00 - 12:00 WIB</p>
        </div>
      </div>
      <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-600">
        Daftar
      </button>
    </div>
    {/* Workshop 2 */}
    <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg">
      <div className="flex justify-start gap-4 items-center">
        <div>
          <p className="font-bold text-teal-500 text-md">MEI</p>
          <p className="font-bold text-md">22</p>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-700">Sustainable Cooking</p>
          <p className="text-xs text-slate-500">13:00 - 16:00 WIB</p>
        </div>
      </div>
      <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-600">
        Daftar
      </button>
    </div>
    {/* Workshop 3 */}
    <div className="flex justify-between items-center bg-slate-100 p-4 rounded-lg">
      <div className="flex justify-start gap-4 items-center">
        <div>
          <p className="font-bold text-teal-500 text-md">MEI</p>
          <p className="font-bold text-md">25</p>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-700">Sustainable Life</p>
          <p className="text-xs text-slate-500">13:00 - 16:00 WIB</p>
        </div>
      </div>
      <button className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-teal-600">
        Daftar
      </button>
    </div>
  </div>
</div>
    

    
  </div>
  
  {/* Right Section */}
  <div className="flex flex-col gap-8 max-w-lg w-full">
    {/* Kampanye Aktif */}
    <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Kampanye Aktif</h2>
        <div className="space-y-4">
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
            <p className="font-bold text-md">#JogjaNoFoodWaste</p>
            <p className="text-xs bg-navy-light text-navy py-2 px-3 rounded-full hover:bg-teal-600">Sedang Berlangsung</p>
            </div>
            <p className="text-sm text-slate-500">Kampanye digital untuk meningkatkan kesadaran masyarakat tentang limbah makanan</p>
            <p className="text-xs text-slate-400 mt-2">1.2K Partisipan • 5K Posts</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-md">Sekolah Bebas Limbah</p>
              <p className="text-xs bg-navy-light text-navy py-2 px-3 rounded-full hover:bg-teal-600">Program Baru</p>
            </div>
            <p className="text-sm text-slate-500">Program edukasi di sekolah-sekolah tentang pengelolaan limbah makanan</p>
            <p className="text-xs text-slate-400 mt-2">15 Sekolah • 500+ Siswa</p>
          </div>
        </div>
    </div>
    

    {/* Materi Edukasi */}
    <div className="bg-teal-50 shadow-md rounded-lg p-6 mt-12">
      <h2 className="text-lg font-bold mb-4">Materi Edukasi</h2>
      <div className="grid grid-cols-2 gap-4">
        
        <div className="flex bg-white p-4 rounded-lg text-left gap-2 items-center">
        <Image
          src={IconTangan}
          alt="icon-air"
          className="mt-1 mr-1"
          />
          <div>
          <p className="font-bold text-md">Panduan Food Waste</p>
          <p className="text-xs text-slate-500">Download PDF</p>
          </div>
        </div>
        <div className="flex bg-white p-4 rounded-lg text-left gap-2 items-center">
        <Image
          src={IconTangan}
          alt="icon-air"
          className="mt-1 mr-1"
          />
          <div>
          <p className="font-bold text-md">Video Tutorial</p>
          <p className="text-xs text-slate-500">Tonton Online</p>
          </div>
        </div>
        <div className="flex bg-white p-4 rounded-lg text-left gap-2 items-center">
        <Image
          src={IconTangan}
          alt="icon-air"
          className="mt-1 mr-1"
          />
          <div>
          <p className="font-bold text-md">E-Book</p>
          <p className="text-xs text-slate-500">Baca Online</p>
          </div>
        </div>
        <div className="flex bg-white p-4 rounded-lg text-left gap-2 items-center">
        <Image
          src={IconTangan}
          alt="icon-air"
          className="mt-1 mr-1"
          />
          <div>
          <p className="font-bold text-md">Presentasi</p>
          <p className="text-xs text-slate-500">Download PPT</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</section>

      <section>
        <div className='py-12 text-center'>
          <h1 className='text-4xl font-bold'>Dampak program edukasi</h1>
          <p className=' mt-8 font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Data pencapaian program penyelamatan makanan tahun 2025</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Card 1: Workshop Terlaksana */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20V20H4V4ZM6 6V18H18V6H6ZM8 8H16V10H8V8ZM8 12H12V14H8V12Z" />
        </svg>
      </div>
      <h2 className="text-lg font-bold">Workshop Terlaksana</h2>
      <p className="text-2xl font-bold text-teal-500 mt-2">24</p>
      <p className="text-sm text-slate-500">Workshop tahun 2025</p>
    </div>

    {/* Card 2: Peserta Terlatih */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4ZM12 18C9.33 18 6.97 16.67 5.5 14.5C6.97 12.33 9.33 11 12 11C14.67 11 17.03 12.33 18.5 14.5C17.03 16.67 14.67 18 12 18Z" />
        </svg>
      </div>
      <h2 className="text-lg font-bold">Peserta Terlatih</h2>
      <p className="text-2xl font-bold text-teal-500 mt-2">720+</p>
      <p className="text-sm text-slate-500">Peserta aktif</p>
    </div>

    {/* Card 3: Kampanye Digital */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4ZM12 18C9.33 18 6.97 16.67 5.5 14.5C6.97 12.33 9.33 11 12 11C14.67 11 17.03 12.33 18.5 14.5C17.03 16.67 14.67 18 12 18Z" />
        </svg>
      </div>
      <h2 className="text-lg font-bold">Kampanye Digital</h2>
      <p className="text-2xl font-bold text-teal-500 mt-2">15K+</p>
      <p className="text-sm text-slate-500">Reach kampanye</p>
    </div>

    {/* Card 4: Materi Diunduh */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4ZM12 18C9.33 18 6.97 16.67 5.5 14.5C6.97 12.33 9.33 11 12 11C14.67 11 17.03 12.33 18.5 14.5C17.03 16.67 14.67 18 12 18Z" />
        </svg>
      </div>
      <h2 className="text-lg font-bold">Materi Diunduh</h2>
      <p className="text-2xl font-bold text-teal-500 mt-2">2.5K</p>
      <p className="text-sm text-slate-500">Download materi</p>
    </div>
  </div>
      </section>

      <section>
        <div className='py-12 text-center'>
          <h1 className='text-4xl font-bold'>Testimoni peserta</h1>
          <p className=' mt-8 font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Apa kata mereka tentang program edukasi kami</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    {/* Testimonial 1 */}
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src="/path-to-image.jpg"
        alt="Sarah Wijaya"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <p className="font-bold text-md">Sarah Wijaya</p>
      <p className="text-xs text-slate-500">Peserta Workshop</p>
      <p className="mt-4 text-sm text-slate-600">
        "Workshop yang sangat informatif dan praktis. Saya jadi lebih paham cara mengelola makanan dengan bijak."
      </p>
      <div className="mt-4 flex">
        <span className="text-yellow-500">★★★★★</span>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src="/path-to-image.jpg"
        alt="Budi Santoso"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <p className="font-bold text-md">Budi Santoso</p>
      <p className="text-xs text-slate-500">Guru SMA</p>
      <p className="mt-4 text-sm text-slate-600">
        "Program Sekolah Bebas Limbah sangat membantu siswa-siswa kami memahami pentingnya mengurangi limbah makanan."
      </p>
      <div className="mt-4 flex">
        <span className="text-yellow-500">★★★★★</span>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src="/path-to-image.jpg"
        alt="Rina Putri"
        className="w-16 h-16 rounded-full object-cover mb-4"
      />
      <p className="font-bold text-md">Rina Putri</p>
      <p className="text-xs text-slate-500">Food Blogger</p>
      <p className="mt-4 text-sm text-slate-600">
        "Sesi Sustainable Cooking membuka mata saya tentang berbagai cara kreatif untuk memanfaatkan sisa bahan makanan."
      </p>
      <div className="mt-4 flex">
        <span className="text-yellow-500">★★★★☆</span>
      </div>
    </div>
  </div>
  <div className="text-center mt-8">
    <Link
      href="/testimoni"
      className="text-teal-500 font-semibold hover:underline"
    >
      Lihat Semua Testimoni →
    </Link>
  </div>
  </div>
</section>
<section className="bg-teal-500 py-12  md:-mx-32 text-center">
  <div className="text-center">
    <h1 className="text-4xl font-bold text-white">Jadilah Bagian dari Perubahan</h1>
    <p className="mt-4 text-white text-md md:text-lg font-medium">
      Bergabunglah dengan kami dalam misi mengurangi limbah makanan dan membantu sesama di Yogyakarta.
    </p>
  </div>
  <div className="flex justify-center gap-4 mt-8">
    {/* Button: Jadi Relawan */}
    <Link
      href="/donasi"
      className="bg-white text-teal-500 font-semibold py-2 px-6 rounded-full text-sm md:text-md shadow-md hover:bg-teal-100"
    >
      Jadi Relawan
    </Link>
    {/* Button: Jadi Mitra */}
    <Link
      href="/donasi"
      className="border border-white text-white font-semibold py-2 px-6 rounded-full text-sm md:text-md hover:bg-teal-600"
    >
      Jadi Mitra
    </Link>
  </div>
</section>
    </>
  );
}
