import Link from 'next/link'
import Image from 'next/image'
import ArrowLeft from 'public/svg/arrow-left.svg'
import { Airplay, Book, Boxes, FileDown, FileText, Presentation, Recycle, School, Users, Utensils, Video } from 'lucide-react'
import TestimoniCard from '@/components/TestimoniCard'
import Ajakan from '@/components/Ajakan'

const Testimoni = [
  {
    image: "/makan.png",
    name: "Sarah Wijaya",
    role: "Peserta Workshop",
    description:
      "Workshop yang sangat informatif dan praktis. Saya jadi lebih paham cara mengelola makanan dengan bijak.",
    rating: 5,
  },
  {
    image: "/makan.png",
    name: "Budi Santoso",
    role: "Guru SMA",
    description:
      "Program Sekolah Bebas Limbah sangat membantu siswa-siswa kami memahami pentingnya mengurangi limbah makanan.",
    rating: 5,
  },
  {
    image: "/makan.png",
    name: "Rina Putri",
    role: "Food Blogger",
    description:
      "Sesi Sustainable Cooking membuka mata saya tentang berbagai cara kreatif untuk memanfaatkan sisa bahan makanan.",
    rating: 4,
  },
];


export default function Page() {
  return (
    <>
      <section className='bg-sky-100 -mx-2 md:-mx-32 py-6 text-center '>
        <div className="ml-8 md:ml-32">
          <div className='flex flex-row gap-x-2'>
            <p className='text-gray-500'>Beranda </p>
            <p className=''>{' > '}</p>
            <p className='text-gray-500'> Program</p>
          </div>
          <Link href={'./'} className='flex flex-row text-navy'><Image width={15} src={ArrowLeft} alt='icon-air' className='mt-2 mr-2' />Kembali ke Beranda</Link>
        </div>

        <div className='py-12 text-center px-3'>
          <h1 className='text-3xl md:text-4xl font-bold'>Program Edukasi dan Kampanye</h1>
          <p className='mt-8 font-medium text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-sm md:text-lg'>Membangun dan mengajak masyarakat untuk berperan aktif dalam mengurangi limbah makanan melalui edukasi dan kampanye yang kreatif</p>
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
                  <div className="bg-navy text-white p-3 rounded-full">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_4_4290)">
                        <path d="M5 2C5 0.896875 5.89687 0 7 0H18C19.1031 0 20 0.896875 20 2V11C20 12.1031 19.1031 13 18 13H10.525C10.1562 12.2031 9.59062 11.5156 8.8875 11H12V10C12 9.44687 12.4469 9 13 9H15C15.5531 9 16 9.44687 16 10V11H18V2H7V3.53437C6.4125 3.19375 5.72813 3 5 3V2ZM5 4C5.39397 4 5.78407 4.0776 6.14805 4.22836C6.51203 4.37913 6.84274 4.6001 7.12132 4.87868C7.3999 5.15726 7.62087 5.48797 7.77164 5.85195C7.9224 6.21593 8 6.60603 8 7C8 7.39397 7.9224 7.78407 7.77164 8.14805C7.62087 8.51203 7.3999 8.84274 7.12132 9.12132C6.84274 9.3999 6.51203 9.62087 6.14805 9.77164C5.78407 9.9224 5.39397 10 5 10C4.60603 10 4.21593 9.9224 3.85195 9.77164C3.48797 9.62087 3.15726 9.3999 2.87868 9.12132C2.6001 8.84274 2.37913 8.51203 2.22836 8.14805C2.0776 7.78407 2 7.39397 2 7C2 6.60603 2.0776 6.21593 2.22836 5.85195C2.37913 5.48797 2.6001 5.15726 2.87868 4.87868C3.15726 4.6001 3.48797 4.37913 3.85195 4.22836C4.21593 4.0776 4.60603 4 5 4ZM4.16563 11H5.83125C8.13437 11 10 12.8656 10 15.1656C10 15.625 9.62812 16 9.16562 16H0.834375C0.371875 16 0 15.6281 0 15.1656C0 12.8656 1.86563 11 4.16563 11Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4_4290">
                          <path d="M0 0H20V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div>
                  <div>
                    <p className="font-bold text-md">Food Waste Management</p>
                    <p className="text-sm text-slate-500">Pelatihan praktis tentang pengelolaan dan pengurangan limbah makanan</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-navy text-white p-3 rounded-full">
                    <Utensils className='text-white' />
                  </div>
                  <div>
                    <p className="font-bold text-md">Sustainable Cooking</p>
                    <p className="text-sm text-slate-500">Tips dan trik memasak dengan pendekatan zero-waste</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-navy text-white p-3 rounded-full">
                    <Recycle className='text-white' />
                  </div>
                  <div>
                    <p className="font-bold text-md">Composting 101</p>
                    <p className="text-sm text-slate-500">Cara mengolah sisa makanan menjadi kompos berkualitas</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Jadwal Workshop Mendatang */}
            <div className="bg-slate-100 shadow-md rounded-lg p-6  mt-12">
              <h2 className="text-lg font-bold mb-4">Jadwal Workshop Mendatang</h2>
              <div className="space-y-4">
                {/* Workshop 1 */}
                <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                  <div className="flex justify-start gap-4 items-center">
                    <div>
                      <p className="font-bold text-navy text-md">MEI</p>
                      <p className="font-bold text-md">15</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">Food Waste Management</p>
                      <p className="text-xs text-slate-500">09:00 - 12:00 WIB</p>
                    </div>
                  </div>
                  <button className="bg-navy text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-tosca">
                    Daftar
                  </button>
                </div>
                {/* Workshop 2 */}
                <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                  <div className="flex justify-start gap-4 items-center">
                    <div>
                      <p className="font-bold text-navy text-md">MEI</p>
                      <p className="font-bold text-md">22</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">Sustainable Cooking</p>
                      <p className="text-xs text-slate-500">13:00 - 16:00 WIB</p>
                    </div>
                  </div>
                  <button className="bg-navy text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-tosca">
                    Daftar
                  </button>
                </div>
                {/* Workshop 3 */}
                <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                  <div className="flex justify-start gap-4 items-center">
                    <div>
                      <p className="font-bold text-navy text-md">MEI</p>
                      <p className="font-bold text-md">25</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">Sustainable Life</p>
                      <p className="text-xs text-slate-500">13:00 - 16:00 WIB</p>
                    </div>
                  </div>
                  <button className="bg-navy text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-tosca">
                    Daftar
                  </button>
                </div>
              </div>
            </div>



          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-8 max-w-lg w-full">
            {/* Kampanye Aktif */}
            <div className="bg-slate-100 shadow-md rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Kampanye Aktif</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between flex-wrap gap-y-1 items-center mb-2">
                    <p className="font-bold text-md">#JogjaNoFoodWaste</p>
                    <p className="text-xs bg-navy-light text-navy py-2 px-3 rounded-full">Sedang Berlangsung</p>
                  </div>
                  <p className="text-sm text-slate-500">Kampanye digital untuk meningkatkan kesadaran masyarakat tentang limbah makanan</p>
                  <p className="text-xs text-slate-400 mt-2"> <Users className='inline text-black w-4' /> 1.2K Partisipan <span className='font-bold text-black'>#</span> 5K Posts</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between flex-wrap gap-y-1 items-center mb-2">
                    <p className="font-bold text-md">Sekolah Bebas Limbah</p>
                    <p className="text-xs bg-navy-light text-navy py-2 px-3 rounded-full">Program Baru</p>
                  </div>
                  <p className="text-sm text-slate-500">Program edukasi di sekolah-sekolah tentang pengelolaan limbah makanan</p>
                  <p className="text-xs text-slate-400 mt-2"> <School className='inline text-black w-4' /> 15 Sekolah <Users className='inline text-black w-4' /> 500+ Siswa</p>
                </div>
              </div>
            </div>


            {/* Materi Edukasi */}
            <div className="bg-navy-light shadow-md rounded-lg p-6 mt-12">
              <h2 className="text-lg font-bold mb-4">Materi Edukasi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="flex bg-white p-4 rounded-lg text-left gap-2 items-center">
                  <FileText />
                  <div>
                    <p className="font-bold text-md">Panduan Food Waste</p>
                    <p className="text-xs text-slate-500">Download PDF</p>
                  </div>
                </div>
                <div className="flex bg-white p-4 rounded-lg text-left gap-2 items-center">
                  <Video />
                  <div>
                    <p className="font-bold text-md">Video Tutorial</p>
                    <p className="text-xs text-slate-500">Tonton Online</p>
                  </div>
                </div>
                <div className="flex bg-white p-4 rounded-lg text-left gap-2 items-center">
                  <Book />
                  <div>
                    <p className="font-bold text-md">E-Book</p>
                    <p className="text-xs text-slate-500">Baca Online</p>
                  </div>
                </div>
                <div className="flex bg-white p-4 rounded-lg text-left gap-2 items-center">
                  <Presentation />
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
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-bold">Workshop Terlaksana</h2>
              <Airplay />
            </div>
            <p className="text-2xl font-bold text-navy mt-2">24</p>
            <p className="text-sm text-slate-500">Workshop tahun 2025</p>
          </div>

          {/* Card 2: Peserta Terlatih */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-bold">Peserta Terlatih</h2>
              <Users />
            </div>
            <p className="text-2xl font-bold text-navy mt-2">720+</p>
            <p className="text-sm text-slate-500">Peserta aktif</p>
          </div>

          {/* Card 3: Kampanye Digital */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-bold">Kampanye Digital</h2>
              <Boxes />
            </div>
            <p className="text-2xl font-bold text-navy mt-2">15K+</p>
            <p className="text-sm text-slate-500">Reach kampanye</p>
          </div>

          {/* Card 4: Materi Diunduh */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-bold">Materi Diunduh</h2>
              <FileDown />
            </div>
            <p className="text-2xl font-bold text-navy mt-2">2.5K</p>
            <p className="text-sm text-slate-500">Download materi</p>
          </div>
        </div>
      </section>

      <section>
        <div className='py-12 text-center'>
          <h1 className='text-4xl font-bold'>Testimoni peserta</h1>
          <p className=' mt-8 font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Apa kata mereka tentang program edukasi kami</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {Testimoni.map((e, i) => (
              <TestimoniCard
                key={i}
                image={e.image}
                name={e.name}
                role={e.role}
                description={e.description}
                rating={e.rating}
              />
            ))}

          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimoni"
              className="text-navy font-semibold hover:underline"
            >
              Lihat Semua Testimoni →
            </Link>
          </div>
        </div>
      </section>
      <Ajakan />
    </>
  );
}
