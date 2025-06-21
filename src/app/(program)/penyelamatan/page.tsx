'use client';
import { useEffect, useState } from 'react';
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
    aos: 'fade-right'
  },
  {
    image: GambarMakanan,
    icon: IconTangan,
    title: "Distribusi Makanan",
    description: "Menyalurkan makanan yang diselamatkan ke panti asuhan, lansia, dan komunitas yang membutuhkan. Telah membantu lebih dari 10.000 penerima manfaat.",
    link: "/distribusi",
    flag: "High Impact",
    aos: 'fade-up'
  },
  {
    image: GambarMakanan,
    icon: IconTangan,
    title: "Edukasi Masyarakat",
    description: "Menyelenggarakan lokakarya dan kampanye untuk meningkatkan kesadaran tentang masalah limbah makanan. 50+ workshop telah dilaksanakan.",
    link: "/edukasi",
    flag: "Community Program",
    aos: 'fade-left'
  },
]

export default function Page() {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768); // Check if screen width is >= md breakpoint (768px)
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
        <h1 className='text-5xl font-bold'>Program Penyelamatan Makanan</h1>
        <p className=' mt-8 text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Menyelamatkan makanan berlebih dari pembuangan dan mengubahnya menjadi berkah bagi sesama adalah langkah awal menuju ketahanan pangan nasional</p>
        <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
      </section>
      <section className='-mx-2 md:-mx-32 py-12 text-center'>
      <div className='py-12 text-center'>
        <h1 className='text-4xl font-bold'>Proses penyelamatan</h1>
        <p className=' mt-8 font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Setiap langkah dalam proses penyelamatan makanan dirancang untuk memastikan kualitas dan keamanan</p>
        <div className='bg-navy my-8 h-1 w-30 m-auto'></div>


        <div className='flex justify-between my-12 gap-x-6 gap-y-6 px-6 md:px-48 flex-col md:flex-row'> 
          <div className='text-left items-start relative bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
            <div className='bg-navy-light ml-2 w-max p-6 shadow-md rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM10.875 5.625V12C10.875 12.375 11.0625 12.7266 11.3766 12.9375L15.8766 15.9375C16.3922 16.2844 17.0906 16.1437 17.4375 15.6234C17.7844 15.1031 17.6437 14.4094 17.1234 14.0625L13.125 11.4V5.625C13.125 5.00156 12.6234 4.5 12 4.5C11.3766 4.5 10.875 5.00156 10.875 5.625Z" fill="#009CA6" />
              </svg>
            </div>
            {isMdScreen ? (
            <Image
            width={50}
            src={ArrowRight}
            alt="icon-air"
            className="absolute right-[-12] md:right-[-20]"
            />
            ) : (
            <Image
              width={50}
              src={ArrowDown}
              alt="icon-air"
              className="left-1/2 transform -translate-x-1/2 absolute bottom-[-12px] md:bottom-[-20px]"
            />)}
            <h2 className='ml-2 font-semibold text-md'>1. Identifikasi</h2>
            <div className='ml-2 text-slate-500'>Menerima informasi dari mitra tentang makanan berlebih yang perlu diselamatkan</div>
          </div>
          
          <div className='text-left relative bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
            <div className='ml-2 bg-navy-light m-auto w-max p-6 shadow-md rounded-full'>
              <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2_10119)">
                  <path d="M6.75 0C7.74456 0 8.69839 0.395088 9.40165 1.09835C10.1049 1.80161 10.5 2.75544 10.5 3.75C10.5 4.74456 10.1049 5.69839 9.40165 6.40165C8.69839 7.10491 7.74456 7.5 6.75 7.5C5.75544 7.5 4.80161 7.10491 4.09835 6.40165C3.39509 5.69839 3 4.74456 3 3.75C3 2.75544 3.39509 1.80161 4.09835 1.09835C4.80161 0.395088 5.75544 0 6.75 0ZM24 0C24.9946 0 25.9484 0.395088 26.6516 1.09835C27.3549 1.80161 27.75 2.75544 27.75 3.75C27.75 4.74456 27.3549 5.69839 26.6516 6.40165C25.9484 7.10491 24.9946 7.5 24 7.5C23.0054 7.5 22.0516 7.10491 21.3484 6.40165C20.6451 5.69839 20.25 4.74456 20.25 3.75C20.25 2.75544 20.6451 1.80161 21.3484 1.09835C22.0516 0.395088 23.0054 0 24 0ZM0 14.0016C0 11.2406 2.24062 9 5.00156 9H7.00312C7.74844 9 8.45625 9.16406 9.09375 9.45469C9.03281 9.79219 9.00469 10.1438 9.00469 10.5C9.00469 12.2906 9.79219 13.8984 11.0344 15C11.025 15 11.0156 15 11.0016 15H0.998437C0.45 15 0 14.55 0 14.0016ZM18.9984 15C18.9891 15 18.9797 15 18.9656 15C20.2125 13.8984 20.9953 12.2906 20.9953 10.5C20.9953 10.1438 20.9625 9.79688 20.9062 9.45469C21.5438 9.15938 22.2516 9 22.9969 9H24.9984C27.7594 9 30 11.2406 30 14.0016C30 14.5547 29.55 15 29.0016 15H18.9984ZM10.5 10.5C10.5 9.30653 10.9741 8.16193 11.818 7.31802C12.6619 6.47411 13.8065 6 15 6C16.1935 6 17.3381 6.47411 18.182 7.31802C19.0259 8.16193 19.5 9.30653 19.5 10.5C19.5 11.6935 19.0259 12.8381 18.182 13.682C17.3381 14.5259 16.1935 15 15 15C13.8065 15 12.6619 14.5259 11.818 13.682C10.9741 12.8381 10.5 11.6935 10.5 10.5ZM6 22.7484C6 19.2984 8.79844 16.5 12.2484 16.5H17.7516C21.2016 16.5 24 19.2984 24 22.7484C24 23.4375 23.4422 24 22.7484 24H7.25156C6.5625 24 6 23.4422 6 22.7484Z" fill="#009CA6" />
                </g>
                <defs>
                  <clipPath id="clip0_2_10119">
                    <path d="M0 0H30V24H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {isMdScreen ? (
            <Image
            width={50}
            src={ArrowRight}
            alt="icon-air"
            className="absolute invisible md:visible right-[-12] md:right-[-20]"
            />
            ) : (
            <Image
              width={50}
              src={ArrowDown}
              alt="icon-air"
              className="left-1/2 transform -translate-x-1/2 absolute visible md:invisible bottom-[-12px] md:bottom-[-20px]"
            />)}
            <h2 className='ml-2 font-semibold text-md'>2. Evaluasi</h2>
            <div className='ml-2 text-slate-500'>Tim ahli mengevaluasi kelayakan dan keamanan makanan untuk dikonsumsi.</div>
          </div>

          <div className='text-left relative bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
            <div className='ml-2 bg-navy-light m-auto w-max p-6 shadow-md rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 24H0V0H24V24Z" stroke="#E5E7EB" />
                <path d="M2.23125 14.0813L10.7016 21.9891C11.0531 22.3172 11.5172 22.5 12 22.5C12.4828 22.5 12.9469 22.3172 13.2984 21.9891L21.7687 14.0813C23.1938 12.7547 24 10.8938 24 8.94844V8.67657C24 5.40001 21.6328 2.60626 18.4031 2.06719C16.2656 1.71094 14.0906 2.40938 12.5625 3.93751L12 4.50001L11.4375 3.93751C9.90938 2.40938 7.73438 1.71094 5.59688 2.06719C2.36719 2.60626 0 5.40001 0 8.67657V8.94844C0 10.8938 0.80625 12.7547 2.23125 14.0813Z" fill="#009CA6" />
              </svg>
            </div>
            {isMdScreen ? (
            <Image
            width={50}
            src={ArrowRight}
            alt="icon-air"
            className="absolute invisible md:visible right-[-12] md:right-[-20]"
            />
            ) : (
            <Image
              width={50}
              src={ArrowDown}
              alt="icon-air"
              className="left-1/2 transform -translate-x-1/2 absolute visible md:invisible bottom-[-12px] md:bottom-[-20px]"
            />)}
            <h2 className='ml-2 font-semibold text-md'>3. Pengambilan</h2>
            <div className='ml-2 text-slate-500'>Pengambilan makanan dengan kendaraan berpendingin khusus untuk menjaga kualitas.</div>
          </div>

          <div className='text-left bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
            <div className='ml-2 bg-navy-light m-auto w-max p-6 shadow-md rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3899 23.5898C30.474 23.6037 31.5601 23.5898 32.6445 23.5898C33.2676 24.7126 33.857 25.8496 34.4584 26.9836L37.3502 32.4313C37.9365 33.5215 38.0869 33.3585 38.0857 34.5742L38.084 36.114H4.01041L4.00855 34.6157C4.00748 33.4275 4.12367 33.5341 4.68786 32.4354C5.14842 31.5386 5.62566 30.6504 6.07288 29.7466C7.04167 27.7379 8.14712 25.6416 9.20321 23.6615C10.3702 23.6848 11.5487 23.607 12.7131 23.6615C13.4147 24.4949 14.0465 25.4647 14.757 26.3294H10.8962C10.5349 26.9439 10.2313 27.5945 9.91245 28.2318L8.70273 30.6092C8.29102 31.4176 7.59794 32.571 7.30212 33.4045H20.3038C21.2387 32.6678 22.3069 31.5341 23.1379 30.6709C24.9876 28.75 26.7846 26.8113 28.4637 24.7395C28.7733 24.3573 29.0716 23.9648 29.3899 23.5898ZM31.0334 26.4519C30.6935 26.7375 30.3379 27.0021 29.9887 27.2758L22.3335 33.4045H26.1731H34.7718C34.4527 32.7552 31.1338 26.5008 31.0334 26.4519Z" fill="#009CA6" />
                <path d="M20.9606 5.42548L20.9813 5.42511C27.645 5.33233 32.6081 12.3103 29.8453 18.5773C28.3281 22.0192 23.6683 26.9341 21.0729 29.5837C21.0314 29.6177 20.9881 29.671 20.9401 29.6246C18.6827 27.4405 16.1883 24.4426 14.3586 21.9443C12.741 19.7357 11.4851 17.7588 11.4345 14.9234C11.3399 9.62276 15.7615 5.49528 20.9606 5.42548ZM20.6884 10.8895C18.3331 11.2012 16.6488 13.1561 16.9846 15.5759C17.2849 17.7387 19.218 19.155 21.3489 19.0307C25.0558 18.5382 26.4409 13.9665 23.3937 11.6855C22.6507 11.1293 21.6223 10.7898 20.6884 10.8895Z" fill="#009CA6" />
              </svg>
            </div>
            
            <h2 className='ml-2 font-semibold text-md'>4. Penyimpanan</h2>
            <div className='ml-2 text-slate-500'>Penyimpanan dengan suhu terkontrol sebelum didistribusikan ke penerima manfaat.</div>
          </div>

        </div>
        </div>
      </section>

      <section>
        <div className='py-12 text-center'>
          <h1 className='text-4xl font-bold'>Statistik Penyelamatan</h1>
          <p className=' mt-8 font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Data pencapaian program penyelamatan makanan tahun 2025</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
        <div className="bg-slate-100 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-32">
            {/* Left Chart: Makanan Terselamatkan per Kategori */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Makanan Terselamatkan per Kategori</h2>
              <div className="flex items-end content-end justify-between h-40">
                <div className="flex flex-col items-center h-40">
                  <div className="w-16 h-[60%] rounded-t-md"></div>
                  <div className="bg-teal-500 w-16 h-[40%] rounded-t-md"></div>
                  <p className="mt-2 text-sm font-semibold">40%</p>
                  <p className="mt-1 text-sm text-slate-500">Siap Saji</p>
                </div>
                <div className="flex flex-col items-center h-40">
                  <div className="w-16 h-[65%] rounded-t-md"></div>
                  <div className="bg-navy w-16 h-[35%] rounded-t-md"></div>
                  <p className="mt-2 text-sm font-semibold">35%</p>
                  <p className="mt-1 text-sm text-slate-500">Bahan Mentah</p>
                </div>
                <div className="flex flex-col items-center h-40">
                  <div className="w-16 h-[75%] rounded-t-md"></div>
                  <div className="bg-teal-100 w-16 h-[25%] rounded-t-md"></div>
                  <p className="mt-2 text-sm font-semibold">25%</p>
                  <p className="mt-1 text-sm text-slate-500">Kemasan</p>
                </div>
              </div>
            </div>

            {/* Right Chart: Tingkat Keberhasilan Penyelamatan */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Tingkat Keberhasilan Penyelamatan</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold">Restoran</p>
                  <div className="bg-slate-200 h-2 rounded-full">
                    <div className="bg-teal-500 h-2 rounded-full w-[95%]"></div>
                  </div>
                  <p className="text-sm text-right mt-1">95%</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Hotel</p>
                  <div className="bg-slate-200 h-2 rounded-full">
                    <div className="bg-teal-500 h-2 rounded-full w-[88%]"></div>
                  </div>
                  <p className="text-sm text-right mt-1">88%</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Katering</p>
                  <div className="bg-slate-200 h-2 rounded-full">
                    <div className="bg-teal-500 h-2 rounded-full w-[92%]"></div>
                  </div>
                  <p className="text-sm text-right mt-1">92%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-32">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-500">15.4 Ton</h3>
              <p className="text-sm font-semibold text-slate-500">Makanan Terselamatkan</p>
              <div className="bg-slate-200 h-2 rounded-full mt-4">
                <div className="bg-teal-500 h-2 rounded-full w-[80%]"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-500">48</h3>
              <p className="text-sm font-semibold text-slate-500">Mitra Aktif</p>
              <div className="bg-slate-200 h-2 rounded-full mt-4">
                <div className="bg-teal-500 h-2 rounded-full w-[70%]"></div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-teal-500">4.2 Ton</h3>
              <p className="text-sm font-semibold text-slate-500">CO2 Terhindarkan</p>
              <div className="bg-slate-200 h-2 rounded-full mt-4">
                <div className="bg-teal-500 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='py-12 text-center'>
          <h1 className='text-4xl font-bold'>Cerita Keberhasilan</h1>
          <p className=' mt-8 font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Kisah-kisah inspiratif dari program penyelamatan makanan kami</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-x-12 gap-y-12 my-12 px-4 md:px-0'>
                  {ceritaKeberhasilan.map((e, i) => {
                    return (
                      <ProgramCard
                        image={e.image}
                        description={e.description}
                        link={e.link}
                        title={e.title}
                        icon={e.icon}
                        flag={e.flag}
                        aos={e.aos}
                        key={i}
                      />
                    )
                  })}
        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-32 py-12">
          {/* Left Card: Testimoni Mitra */}
          <div className="bg-teal-50 shadow-md rounded-lg p-6 flex flex-col gap-4">
            <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full w-max">
              Featured
            </span>
            <h2 className="text-lg font-bold">Testimoni Mitra</h2>
            <p className="text-slate-600 text-sm">
            &quot;Program ini sangat membantu kami dalam mengelola surplus makanan dengan lebih efektif dan berkelanjutan.&quot;
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                width={50}
                src="/path-to-image.jpg"
                alt="Budi Santoso"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm">Budi Santoso</p>
                <p className="text-xs text-slate-500">Manager Operasional, Grand Hotel</p>
              </div>
            </div>
          </div>

          {/* Right Card: Dampak Sosial */}
          <div className="bg-teal-900 text-white shadow-md rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-4">❝</div>
              <h2 className="text-lg font-bold mb-4">Dampak Sosial</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-teal-300">✔</span>
                  <p className="text-sm">Membantu 1000+ keluarga prasejahtera</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-300">✔</span>
                  <p className="text-sm">Mengurangi 30% limbah makanan</p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-300">✔</span>
                  <p className="text-sm">Memberdayakan 200+ relawan aktif</p>
                </li>
              </ul>
            </div>
            <button className="bg-white text-teal-900 font-semibold py-2 px-4 rounded-full mt-6 w-max">
              Bergabung Sebagai Relawan →
            </button>
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
