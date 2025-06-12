"use client"
import Link from 'next/link'
import Image from 'next/image'
import GambarMakanan from 'public/makan.png'
import GambarDistribusi from 'public/distribusi.jpg'
import GambarSosialisasi from 'public/sosialisasi.jpg'
import IconTangan from 'public/svg/hand-love.svg'
import IconDaun from 'public/svg/leaf.svg'
import IconPetir from 'public/svg/lightning.svg'
import IconRecycle from 'public/svg/recycle.svg'
import IconPeople from 'public/svg/people.svg'
import IconSendok from 'public/svg/fork-spoon.svg'
import IconJabat from 'public/svg/hand-shake.svg'
import IconGotong from 'public/svg/work-together.svg'
import IconBuilding from 'public/svg/building.svg'
import IconAir from 'public/svg/water.svg'
import IconAjar from 'public/svg/teach-class.svg'
import ProgramCard from '@/components/ProgramCard';
import { Instagram, Linkedin, Mail, MapPin, Music2, Phone } from 'lucide-react';
import MitraCarousel from '@/components/MitraCarousel'
import CountUp from 'react-countup'
import AOS from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";

const ourPrograms = [
  {
    image: GambarMakanan,
    icon: IconTangan,
    title: "Penyelamatan Makanan",
    description: "Mengumpulkan kelebihan makanan berkualitas dari restoran, hotel, dan toko untuk mencegah pemborosan. Program ini telah menyelamatkan lebih dari 1330 kg makanan.",
    link: "/penyelamatan",
    flag: "Flagship Program",
    aos: 'fade-right'
  },
  {
    image: GambarDistribusi,
    icon: IconGotong,
    title: "Distribusi Makanan",
    description: "Menyalurkan makanan yang diselamatkan ke panti asuhan, lansia, dan komunitas yang membutuhkan. Telah membantu lebih dari 5000 penerima manfaat.",
    link: "/distribusi",
    flag: "High Impact",
    aos: 'fade-up'
  },
  {
    image: GambarSosialisasi,
    icon: IconAjar,
    title: "Edukasi Masyarakat",
    description: "Menyelenggarakan lokakarya dan kampanye untuk meningkatkan kesadaran tentang masalah limbah makanan. 10+ workshop telah dilaksanakan.",
    link: "/edukasi",
    flag: "Community Program",
    aos: 'fade-left'
  },
]

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <>


      <section className="-mx-2 md:-mx-32 bg-cover bg-no-repeat bg-[url('/jumbotron-image.png')] bg-gray-700 bg-blend-soft-light h-screen md:h-max bg-center md:bg-right-top">
        <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-42">
          <h1 data-aos='fade-left' className="text-white font-bold text-4xl md:text-6xl w-full md:w-3/4">Bersama Kurangi <span className="text-navy">Limbah Makanan</span> di Jogja</h1>
          <p data-aos='fade-right' className="text-white w-full md:w-1/2 mt-6 font-medium text-lg md:text-xl leading-6 md:leading-10">Berbagi Bites Jogja menyelamatkan makanan berlebih dan mendistribusikannya kepada mereka yang membutuhkan untuk menciptakan Yogyakarta yang lebih berkelanjutan dan peduli.</p>
          <nav className='flex gap-x-4 mt-6'>
            <Link data-aos='fade-up' href='https://wa.me/628986950700' className='bg-navy text-sm md:text-md text-white font-medium px-2 md:px-6 py-2 rounded-md shadow-md'>
              Donasi Sekarang
            </Link>
            <Link data-aos='fade-left' href='https://wa.me/628986950700' className='bg-white text-sm md:text-md text-navy font-medium px-2 md:px-6 py-2 rounded-md shadow-md'>
              Pelajari Program Kami
            </Link>

          </nav>
        </div>
      </section>
      <section className='py-12 text-center'>
        <h1 data-aos='fade-up' className='text-navy text-4xl font-bold'>Dampak Usaha Kami</h1>
        <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        <p className='font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg'>Setiap angka yang tercatat bukan sekadar statistik, melainkan cerminan nyata dari perubahan yang kita upayakan bersama. Di balik setiap angka, terdapat langkah konkret, kerja keras, dan komitmen kolektif untuk membangun sebuah kota yang lebih inklusif, berdaya, dan berkelanjutan untuk semua warganya.</p>
        <div>
          <div className='flex flex-col md:flex-row justify-between my-12 gap-y-12 md:gap-x-12 px-4 md:px-1'>
            <div data-aos='fade-right' className='bg-navy-light rounded-md flex w-full flex-col gap-y-4 py-12 md:py-18'  >
              <div className='bg-white m-auto w-max p-6 shadow-md rounded-full'>
                <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6.5625C13.4844 6.5625 13.0625 6.14062 13.0625 5.625V4.6875C13.0625 2.09766 15.1602 0 17.75 0H18.6875C19.2031 0 19.625 0.421875 19.625 0.9375V1.875C19.625 4.46484 17.5273 6.5625 14.9375 6.5625H14ZM0.875 16.875C0.875 12.4043 2.9668 7.5 7.4375 7.5C9.03711 7.5 10.9355 8.10352 12.2832 8.63086C13.3848 9.05859 14.6211 9.05859 15.7227 8.63086C17.0645 8.10938 18.9688 7.5 20.5684 7.5C25.0391 7.5 27.1309 12.4043 27.1309 16.875C27.1309 24.375 22.4434 30 17.7559 30C16.7891 30 15.5234 29.6133 14.7383 29.3379C14.2637 29.1738 13.748 29.1738 13.2734 29.3379C12.4883 29.6133 11.2227 30 10.2559 30C5.5625 30 0.875 24.375 0.875 16.875Z" fill="#009CA6" />
                </svg>

              </div>

              <h2 className='font-bold text-navy text-4xl'><CountUp enableScrollSpy={true} end={1330} />+</h2>
              <p className='font-medium'>Kg Makanan Diselamatkan</p>
              <div className='bg-slate-400 h-0.5 w-10 m-auto'></div>
              <p className='text-slate-500 text-sm'>Sejak 2024</p>
            </div>
            <div data-aos-offset='200' data-aos='fade-down' className='bg-navy-light rounded-md flex w-full flex-col gap-y-4 py-12 md:py-18'  >
              <div className='bg-white m-auto w-max p-6 shadow-md rounded-full'>
                <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.25 0C24.3125 0 17.75 1.875 17.75 10.3125V16.875C17.75 18.9434 19.4316 20.625 21.5 20.625H23.375V28.125C23.375 29.1621 24.2129 30 25.25 30C26.2871 30 27.125 29.1621 27.125 28.125V20.625V14.0625V1.875C27.125 0.837891 26.2871 0 25.25 0ZM4.625 0.9375C4.625 0.457031 4.26758 0.0585938 3.78711 0.00585938C3.30664 -0.046875 2.87891 0.269531 2.77344 0.732422L0.998047 8.71875C0.916016 9.08789 0.875 9.46289 0.875 9.83789C0.875 12.5273 2.93164 14.7363 5.5625 14.9766V28.125C5.5625 29.1621 6.40039 30 7.4375 30C8.47461 30 9.3125 29.1621 9.3125 28.125V14.9766C11.9434 14.7363 14 12.5273 14 9.83789C14 9.46289 13.959 9.08789 13.877 8.71875L12.1016 0.732422C11.9961 0.263672 11.5566 -0.046875 11.082 0.00585938C10.6074 0.0585938 10.25 0.457031 10.25 0.9375V8.80078C10.25 9.11719 9.99219 9.375 9.67578 9.375C9.37695 9.375 9.13086 9.14648 9.10156 8.84766L8.36914 0.855469C8.32812 0.369141 7.92383 0 7.4375 0C6.95117 0 6.54688 0.369141 6.50586 0.855469L5.7793 8.84766C5.75 9.14648 5.50391 9.375 5.20508 9.375C4.88867 9.375 4.63086 9.11719 4.63086 8.80078V0.9375H4.625ZM7.45508 9.84375H7.4375H7.41992L7.4375 9.80273L7.45508 9.84375Z" fill="#009CA6" />
                </svg>
              </div>
              <h2 className='font-bold text-navy text-4xl'><CountUp enableScrollSpy={true} end={5000} />+</h2>
              <p className='font-medium'>Porsi Dibagikan</p>
              <div className='bg-slate-400 h-0.5 w-10 m-auto'></div>
              <p className='text-slate-500 text-sm'>Dan Terus Bertambah</p>
            </div>
            <div data-aos-offset='400' data-aos='fade-left' className='bg-navy-light rounded-md flex w-full flex-col gap-y-4 py-12 md:py-18'  >
              <div className='bg-white m-auto w-max p-6 shadow-md rounded-full'>
                <svg width="38" height="38" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.1992 1.99219L13.5273 6.58594C12.584 7.34766 12.4023 8.71875 13.1172 9.69727C13.873 10.7402 15.3438 10.9453 16.3574 10.1543L22.1758 5.63086C22.5859 5.31445 23.1719 5.38477 23.4941 5.79492C23.8164 6.20508 23.7402 6.79102 23.3301 7.11328L22.1055 8.0625L30.25 15.5625V4.5H30.209L29.9805 4.35352L25.7266 1.62891C24.8301 1.05469 23.7812 0.75 22.7148 0.75C21.4375 0.75 20.1953 1.18945 19.1992 1.99219ZM20.5352 9.28125L17.5059 11.6367C15.6602 13.0781 12.9824 12.7031 11.5996 10.8047C10.2988 9.01758 10.627 6.52148 12.3438 5.13281L17.2188 1.18945C16.5391 0.902344 15.8066 0.755859 15.0625 0.755859C13.9609 0.75 12.8887 1.07813 11.9688 1.6875L7.75 4.5V17.625H9.40234L14.7578 22.5117C15.9062 23.5605 17.6816 23.4785 18.7305 22.3301C19.0527 21.9727 19.2695 21.5566 19.3809 21.123L20.377 22.0371C21.5195 23.0859 23.3008 23.0098 24.3496 21.8672C24.6133 21.5801 24.8066 21.2461 24.9297 20.9004C26.0664 21.6621 27.6133 21.5039 28.5684 20.4609C29.6172 19.3184 29.541 17.5371 28.3984 16.4883L20.5352 9.28125ZM1.1875 4.5C0.671875 4.5 0.25 4.92188 0.25 5.4375V17.625C0.25 18.6621 1.08789 19.5 2.125 19.5H4C5.03711 19.5 5.875 18.6621 5.875 17.625V4.5H1.1875ZM3.0625 15.75C3.31114 15.75 3.5496 15.8488 3.72541 16.0246C3.90123 16.2004 4 16.4389 4 16.6875C4 16.9361 3.90123 17.1746 3.72541 17.3504C3.5496 17.5262 3.31114 17.625 3.0625 17.625C2.81386 17.625 2.5754 17.5262 2.39959 17.3504C2.22377 17.1746 2.125 16.9361 2.125 16.6875C2.125 16.4389 2.22377 16.2004 2.39959 16.0246C2.5754 15.8488 2.81386 15.75 3.0625 15.75ZM32.125 4.5V17.625C32.125 18.6621 32.9629 19.5 34 19.5H35.875C36.9121 19.5 37.75 18.6621 37.75 17.625V5.4375C37.75 4.92188 37.3281 4.5 36.8125 4.5H32.125ZM34 16.6875C34 16.4389 34.0988 16.2004 34.2746 16.0246C34.4504 15.8488 34.6889 15.75 34.9375 15.75C35.1861 15.75 35.4246 15.8488 35.6004 16.0246C35.7762 16.2004 35.875 16.4389 35.875 16.6875C35.875 16.9361 35.7762 17.1746 35.6004 17.3504C35.4246 17.5262 35.1861 17.625 34.9375 17.625C34.6889 17.625 34.4504 17.5262 34.2746 17.3504C34.0988 17.1746 34 16.9361 34 16.6875Z" fill="#009CA6" />
                </svg>

              </div>
              <h2 className='font-bold text-navy text-4xl'><CountUp enableScrollSpy={true} end={10} />+</h2>
              <p className='font-medium'>Mitra Donatur</p>
              <div className='bg-slate-400 h-0.5 w-10 m-auto'></div>
              <p className='text-slate-500 text-sm'>Bergabung Bersama Kami</p>
            </div>
          </div>
        </div>
      </section>
      <section className='-mx-2 md:-mx-32 py-12 text-center bg-slate-100'>
        <h1 className='text-navy text-4xl font-bold'>Tentang Kami</h1>
        <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        <p className='font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg'>Berbagi Bites Jogja adalah inisiatif nirlaba yang berfokus pada pengurangan limbah makanan melalui penyelamatan dan redistribusi makanan di seluruh Yogyakarta.</p>
        <div className='flex justify-between my-12 gap-x-6 gap-y-6 px-6 md:px-48 flex-col md:flex-row'>
          <div data-aos='fade' className='bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/5 flex flex-col gap-y-2'>
            <div className='bg-navy-light m-auto w-max p-6 shadow-md rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0ZM10.875 5.625V12C10.875 12.375 11.0625 12.7266 11.3766 12.9375L15.8766 15.9375C16.3922 16.2844 17.0906 16.1437 17.4375 15.6234C17.7844 15.1031 17.6437 14.4094 17.1234 14.0625L13.125 11.4V5.625C13.125 5.00156 12.6234 4.5 12 4.5C11.3766 4.5 10.875 5.00156 10.875 5.625Z" fill="#009CA6" />
              </svg>
            </div>
            <h2 className='font-semibold text-md'>Sejak 2024</h2>
            <div className='text-slate-500'>Atasi sampah makanan, bantu pangan Yogyakarta.</div>
          </div>
          <div data-aos='fade' data-aos-offset='100' className='bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/5 flex flex-col gap-y-2'>
            <div className='bg-navy-light m-auto w-max p-6 shadow-md rounded-full'>
              <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_10119)">
                  <path d="M6.75 0C7.74456 0 8.69839 0.395088 9.40165 1.09835C10.1049 1.80161 10.5 2.75544 10.5 3.75C10.5 4.74456 10.1049 5.69839 9.40165 6.40165C8.69839 7.10491 7.74456 7.5 6.75 7.5C5.75544 7.5 4.80161 7.10491 4.09835 6.40165C3.39509 5.69839 3 4.74456 3 3.75C3 2.75544 3.39509 1.80161 4.09835 1.09835C4.80161 0.395088 5.75544 0 6.75 0ZM24 0C24.9946 0 25.9484 0.395088 26.6516 1.09835C27.3549 1.80161 27.75 2.75544 27.75 3.75C27.75 4.74456 27.3549 5.69839 26.6516 6.40165C25.9484 7.10491 24.9946 7.5 24 7.5C23.0054 7.5 22.0516 7.10491 21.3484 6.40165C20.6451 5.69839 20.25 4.74456 20.25 3.75C20.25 2.75544 20.6451 1.80161 21.3484 1.09835C22.0516 0.395088 23.0054 0 24 0ZM0 14.0016C0 11.2406 2.24062 9 5.00156 9H7.00312C7.74844 9 8.45625 9.16406 9.09375 9.45469C9.03281 9.79219 9.00469 10.1438 9.00469 10.5C9.00469 12.2906 9.79219 13.8984 11.0344 15C11.025 15 11.0156 15 11.0016 15H0.998437C0.45 15 0 14.55 0 14.0016ZM18.9984 15C18.9891 15 18.9797 15 18.9656 15C20.2125 13.8984 20.9953 12.2906 20.9953 10.5C20.9953 10.1438 20.9625 9.79688 20.9062 9.45469C21.5438 9.15938 22.2516 9 22.9969 9H24.9984C27.7594 9 30 11.2406 30 14.0016C30 14.5547 29.55 15 29.0016 15H18.9984ZM10.5 10.5C10.5 9.30653 10.9741 8.16193 11.818 7.31802C12.6619 6.47411 13.8065 6 15 6C16.1935 6 17.3381 6.47411 18.182 7.31802C19.0259 8.16193 19.5 9.30653 19.5 10.5C19.5 11.6935 19.0259 12.8381 18.182 13.682C17.3381 14.5259 16.1935 15 15 15C13.8065 15 12.6619 14.5259 11.818 13.682C10.9741 12.8381 10.5 11.6935 10.5 10.5ZM6 22.7484C6 19.2984 8.79844 16.5 12.2484 16.5H17.7516C21.2016 16.5 24 19.2984 24 22.7484C24 23.4375 23.4422 24 22.7484 24H7.25156C6.5625 24 6 23.4422 6 22.7484Z" fill="#009CA6" />
                </g>
                <defs>
                  <clipPath id="clip0_2_10119">
                    <path d="M0 0H30V24H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className='font-semibold text-md'>100+ Relawan</h2>
            <div className='text-slate-500'>Tim dedikasi yang siap membantu</div>
          </div>
          <div data-aos='fade' data-aos-offset='200' className='bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/5 flex flex-col gap-y-2'>
            <div className='bg-navy-light m-auto w-max p-6 shadow-md rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 24H0V0H24V24Z" stroke="#E5E7EB" />
                <path d="M2.23125 14.0813L10.7016 21.9891C11.0531 22.3172 11.5172 22.5 12 22.5C12.4828 22.5 12.9469 22.3172 13.2984 21.9891L21.7687 14.0813C23.1938 12.7547 24 10.8938 24 8.94844V8.67657C24 5.40001 21.6328 2.60626 18.4031 2.06719C16.2656 1.71094 14.0906 2.40938 12.5625 3.93751L12 4.50001L11.4375 3.93751C9.90938 2.40938 7.73438 1.71094 5.59688 2.06719C2.36719 2.60626 0 5.40001 0 8.67657V8.94844C0 10.8938 0.80625 12.7547 2.23125 14.0813Z" fill="#009CA6" />
              </svg>

            </div>
            <h2 className='font-semibold text-md'>10 Komunitas</h2>
            <div className='text-slate-500'>Terlayani setiap minggunya</div>
          </div>
          <div data-aos='fade' data-aos-offset='300' className='bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/5 flex flex-col gap-y-2'>
            <div className='bg-navy-light m-auto w-max p-6 shadow-md rounded-full'>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3899 23.5898C30.474 23.6037 31.5601 23.5898 32.6445 23.5898C33.2676 24.7126 33.857 25.8496 34.4584 26.9836L37.3502 32.4313C37.9365 33.5215 38.0869 33.3585 38.0857 34.5742L38.084 36.114H4.01041L4.00855 34.6157C4.00748 33.4275 4.12367 33.5341 4.68786 32.4354C5.14842 31.5386 5.62566 30.6504 6.07288 29.7466C7.04167 27.7379 8.14712 25.6416 9.20321 23.6615C10.3702 23.6848 11.5487 23.607 12.7131 23.6615C13.4147 24.4949 14.0465 25.4647 14.757 26.3294H10.8962C10.5349 26.9439 10.2313 27.5945 9.91245 28.2318L8.70273 30.6092C8.29102 31.4176 7.59794 32.571 7.30212 33.4045H20.3038C21.2387 32.6678 22.3069 31.5341 23.1379 30.6709C24.9876 28.75 26.7846 26.8113 28.4637 24.7395C28.7733 24.3573 29.0716 23.9648 29.3899 23.5898ZM31.0334 26.4519C30.6935 26.7375 30.3379 27.0021 29.9887 27.2758L22.3335 33.4045H26.1731H34.7718C34.4527 32.7552 31.1338 26.5008 31.0334 26.4519Z" fill="#009CA6" />
                <path d="M20.9606 5.42548L20.9813 5.42511C27.645 5.33233 32.6081 12.3103 29.8453 18.5773C28.3281 22.0192 23.6683 26.9341 21.0729 29.5837C21.0314 29.6177 20.9881 29.671 20.9401 29.6246C18.6827 27.4405 16.1883 24.4426 14.3586 21.9443C12.741 19.7357 11.4851 17.7588 11.4345 14.9234C11.3399 9.62276 15.7615 5.49528 20.9606 5.42548ZM20.6884 10.8895C18.3331 11.2012 16.6488 13.1561 16.9846 15.5759C17.2849 17.7387 19.218 19.155 21.3489 19.0307C25.0558 18.5382 26.4409 13.9665 23.3937 11.6855C22.6507 11.1293 21.6223 10.7898 20.6884 10.8895Z" fill="#009CA6" />
              </svg>

            </div>
            <h2 className='font-semibold text-md'>Wilayah Cakupan</h2>
            <div className='text-slate-500'>Menjangkau Yogyakarta dan wilayah sekitarnya</div>
          </div>
        </div>
      </section>
      <section className='-mx-2 md:-mx-32 bg-slate-100 py-12 flex md:flex-row flex-col-reverse justify-between px-4 md:px-32'>
        <Image src='/mission-image.jpg' width='550' height='550' className='rounded-md mt-6 md:mt-0 aspect-4/3 object-cover' alt='pembagian makanan' />
        <div className='w-full md:w-1/2'>
          <h1 className='text-navy font-bold text-4xl'>Misi Kami</h1>
          <p className='font-semibold text-slate-500 text-md md:text-lg mt-6'>Kami bertujuan mengurangi limbah makanan sekaligus membantu mengatasi kerawanan pangan di Yogyakarta melalui jaringan relawan dan mitra yang berdedikasi.</p>
          <div className='flex flex-col gap-y-8 mt-12'>
            <div data-aos='fade-left' className='bg-white shadow-md p-4 rounded-md flex gap-x-4'>
              <div className='bg-navy-light rounded-full p-3 w-max h-max'>
                <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.125 2.0625C3.125 1.19922 2.42578 0.5 1.5625 0.5C0.699219 0.5 0 1.19922 0 2.0625V4.25V6.75V10.7148C0 11.7109 0.394531 12.6641 1.09766 13.3672L5 17.2695C5.46875 17.7383 6.10547 18 6.76953 18H9.375C10.4102 18 11.25 17.1602 11.25 16.125V13.043C11.25 11.8828 10.7891 10.7695 9.96875 9.94922L8.98047 8.96094L8.38672 8.36719L7.13672 7.11719C6.64844 6.62891 5.85547 6.62891 5.36719 7.11719C4.87891 7.60547 4.87891 8.39844 5.36719 8.88672L6.61719 10.1367L7.21094 10.7305C7.64062 11.1602 7.57031 11.8711 7.06641 12.207C6.6875 12.4609 6.17969 12.4102 5.85547 12.0859L3.85547 10.0898C3.38672 9.62109 3.125 8.98438 3.125 8.32031V6.75V3.625V2.0625ZM21.875 2.0625V3.625V6.75V8.32031C21.875 8.98438 21.6133 9.62109 21.1445 10.0898L19.1484 12.0859C18.8242 12.4102 18.3164 12.4609 17.9375 12.207C17.4336 11.8711 17.3633 11.1562 17.793 10.7305L18.3867 10.1367L19.6367 8.88672C20.125 8.39844 20.125 7.60547 19.6367 7.11719C19.1484 6.62891 18.3555 6.62891 17.8672 7.11719L16.6172 8.36719L16.0234 8.96094L15.0352 9.94922C14.2148 10.7695 13.7539 11.8828 13.7539 13.043V16.125C13.7539 17.1602 14.5938 18 15.6289 18H18.2344C18.8984 18 19.5352 17.7383 20.0039 17.2695L23.9062 13.3672C24.6094 12.6641 25.0039 11.7109 25.0039 10.7148V6.75V4.25V2.0625C25.0039 1.19922 24.3047 0.5 23.4414 0.5C22.5781 0.5 21.8789 1.19922 21.8789 2.0625H21.875Z" fill="#009CA6" />
                </svg>


              </div>
              <div>
                <h1 className='font-bold text-slate-500 text-lg'>Redistribusi Pangan</h1>
                <p className='mt-4'>Mengumpulkan makanan berlebih dari restoran, katering, dan acara untuk dibagikan kepada yang membutuhkan.</p>
              </div>
            </div>
            <div data-aos='fade-left' className='bg-white shadow-md p-4 rounded-md flex gap-x-4'>
              <div className='bg-navy-light rounded-full p-3 w-max h-max'>
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 0.25C12.6836 0.25 12.3711 0.304687 12.0742 0.410156L1.11718 4.36719C0.746085 4.50391 0.499991 4.85547 0.499991 5.25C0.499991 5.64453 0.746085 5.99609 1.11718 6.13281L3.3789 6.94922C2.73827 7.95703 2.37499 9.14844 2.37499 10.4023V11.5C2.37499 12.6094 1.95312 13.7539 1.5039 14.6562C1.24999 15.1641 0.960928 15.6641 0.624991 16.125C0.499991 16.293 0.464835 16.5117 0.535147 16.7109C0.60546 16.9102 0.769522 17.0586 0.972647 17.1094L3.47265 17.7344C3.63671 17.7773 3.81249 17.7461 3.95702 17.6562C4.10155 17.5664 4.20312 17.418 4.23437 17.25C4.5703 15.5781 4.40233 14.0781 4.15233 13.0039C4.02733 12.4492 3.85937 11.8828 3.62499 11.3633V10.4023C3.62499 9.22266 4.02343 8.10937 4.71483 7.21875C5.21874 6.61328 5.87109 6.125 6.63671 5.82422L12.7695 3.41406C13.0898 3.28906 13.4531 3.44531 13.5781 3.76562C13.7031 4.08594 13.5469 4.44922 13.2266 4.57422L7.09374 6.98438C6.60937 7.17578 6.18359 7.46875 5.83593 7.82812L12.0703 10.0781C12.3672 10.1836 12.6797 10.2383 12.9961 10.2383C13.3125 10.2383 13.625 10.1836 13.9219 10.0781L24.8828 6.13281C25.2539 6 25.5 5.64453 25.5 5.25C25.5 4.85547 25.2539 4.50391 24.8828 4.36719L13.9258 0.410156C13.6289 0.304687 13.3164 0.25 13 0.25ZM5.49999 14.9375C5.49999 16.3164 8.85937 17.75 13 17.75C17.1406 17.75 20.5 16.3164 20.5 14.9375L19.9023 9.25781L14.3476 11.2656C13.9141 11.4219 13.457 11.5 13 11.5C12.543 11.5 12.082 11.4219 11.6523 11.2656L6.09765 9.25781L5.49999 14.9375Z" fill="#009CA6" />
                </svg>
              </div>
              <div>
                <h1 className='font-bold text-slate-500 text-lg'>Edukasi Keberlanjutan</h1>
                <p className='mt-4'>Meningkatkan kesadaran tentang limbah makanan dan dampaknya terhadap lingkungan melalui workshop dan kampanye.</p>
              </div>
            </div>
            <div data-aos='fade-left' className='bg-white shadow-md p-4 rounded-md flex gap-x-4'>
              <div className='bg-navy-light rounded-full p-3 w-max h-max'>
                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 20H0V0H25V20Z" stroke="#E5E7EB" />
                  <path d="M2.8125 3.4375C2.8125 2.85734 3.04297 2.30094 3.4532 1.8907C3.86344 1.48047 4.41984 1.25 5 1.25C5.58016 1.25 6.13656 1.48047 6.5468 1.8907C6.95703 2.30094 7.1875 2.85734 7.1875 3.4375C7.1875 4.01766 6.95703 4.57406 6.5468 4.9843C6.13656 5.39453 5.58016 5.625 5 5.625C4.41984 5.625 3.86344 5.39453 3.4532 4.9843C3.04297 4.57406 2.8125 4.01766 2.8125 3.4375ZM2.5 9.59766C2.10938 10.0352 1.875 10.6172 1.875 11.25C1.875 11.8828 2.10938 12.4648 2.5 12.9023V9.59766ZM8.14062 7.67188C6.98047 8.69922 6.25 10.2031 6.25 11.875C6.25 13.2148 6.71875 14.4453 7.5 15.4102V16.25C7.5 16.9414 6.94141 17.5 6.25 17.5H3.75C3.05859 17.5 2.5 16.9414 2.5 16.25V15.2031C1.02344 14.5 0 12.9961 0 11.25C0 8.83203 1.95703 6.875 4.375 6.875H5.625C6.5625 6.875 7.42969 7.16797 8.14062 7.66797V7.67188ZM17.5 16.25V15.4102C18.2812 14.4453 18.75 13.2148 18.75 11.875C18.75 10.2031 18.0195 8.69922 16.8594 7.66797C17.5703 7.16797 18.4375 6.875 19.375 6.875H20.625C23.043 6.875 25 8.83203 25 11.25C25 12.9961 23.9766 14.5 22.5 15.2031V16.25C22.5 16.9414 21.9414 17.5 21.25 17.5H18.75C18.0586 17.5 17.5 16.9414 17.5 16.25ZM17.8125 3.4375C17.8125 2.85734 18.043 2.30094 18.4532 1.8907C18.8634 1.48047 19.4198 1.25 20 1.25C20.5802 1.25 21.1366 1.48047 21.5468 1.8907C21.957 2.30094 22.1875 2.85734 22.1875 3.4375C22.1875 4.01766 21.957 4.57406 21.5468 4.9843C21.1366 5.39453 20.5802 5.625 20 5.625C19.4198 5.625 18.8634 5.39453 18.4532 4.9843C18.043 4.57406 17.8125 4.01766 17.8125 3.4375ZM22.5 9.59766V12.9062C22.8906 12.4648 23.125 11.8867 23.125 11.2539C23.125 10.6211 22.8906 10.0391 22.5 9.60156V9.59766ZM12.5 1.25C13.163 1.25 13.7989 1.51339 14.2678 1.98223C14.7366 2.45107 15 3.08696 15 3.75C15 4.41304 14.7366 5.04893 14.2678 5.51777C13.7989 5.98661 13.163 6.25 12.5 6.25C11.837 6.25 11.2011 5.98661 10.7322 5.51777C10.2634 5.04893 10 4.41304 10 3.75C10 3.08696 10.2634 2.45107 10.7322 1.98223C11.2011 1.51339 11.837 1.25 12.5 1.25ZM9.375 11.875C9.375 12.5078 9.60938 13.0859 10 13.5273V10.2227C9.60938 10.6641 9.375 11.2422 9.375 11.875ZM15 10.2227V13.5312C15.3906 13.0898 15.625 12.5117 15.625 11.8789C15.625 11.2461 15.3906 10.6641 15 10.2266V10.2227ZM17.5 11.875C17.5 13.6211 16.4766 15.125 15 15.8281V17.5C15 18.1914 14.4414 18.75 13.75 18.75H11.25C10.5586 18.75 10 18.1914 10 17.5V15.8281C8.52344 15.125 7.5 13.6211 7.5 11.875C7.5 9.45703 9.45703 7.5 11.875 7.5H13.125C15.543 7.5 17.5 9.45703 17.5 11.875Z" fill="#009CA6" />
                </svg>

              </div>
              <div>
                <h1 className='font-bold text-slate-500 text-lg'>Pemberdayaan Komunitas</h1>
                <p className='mt-4'>Membangun jaringan relawan dan mitra untuk menciptakan dampak sosial yang berkelanjutan di Yogyakarta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12'>
        <h3 id='program' className='bg-navy-light text-navy w-max text-center m-auto p-3 rounded-full text-md font-medium'>Program Unggulan</h3>
        <h2 className='text-navy font-bold text-4xl text-center my-6'>Program Kami</h2>
        <p className='font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg text-center'>Kami bekerja dengan penuh dedikasi melalui berbagai program inovatif yang dirancang untuk mengurangi limbah makanan sekaligus memberdayakan komunitas di Yogyakarta. Setiap inisiatif yang kami jalankan berakar pada semangat kolaborasi, keberlanjutan, dan keadilan sosial.</p>
        <div className='flex flex-col md:flex-row justify-between gap-x-12 gap-y-12 my-12 px-4 md:px-0'>
          {ourPrograms.map((e, i) => {
            return (
              <ProgramCard
                image={e.image}
                description={e.description}
                link={e.link}
                title={e.title}
                icon={e.icon}
                flag={e.flag}
                key={i}
                aos={e.aos}
              />
            )
          })}

        </div>
      </section>
      <section id='dampak' className='-mx-2 md:-mx-32 bg-navy-light py-12 md:px-32'>
        <h1 className='text-gray-400 font-bold text-4xl text-center my-6'>Dampak Kami</h1>
        <p className='font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg text-center'>Di Berbagi Bites Jogja, kami meyakini bahwa perubahan besar dimulai dari tindakan nyata yang konsisten. Melalui pendekatan kolaboratif dan program berbasis komunitas, kami telah membangun dampak yang berkelanjutan—mengurangi limbah makanan, memperkuat ketahanan pangan, dan mendorong adopsi praktik ramah lingkungan.</p>
        <div className='flex flex-col md:flex-row justify-between gap-x-6 gap-y-6 my-12 px-4 md:px-0'>
          <div data-aos='fade-right' className='bg-white shadow-xl rounded-xl p-4 md:p-6 flex flex-row gap-x-4 justify-between'>
            <div className='bg-navy-light rounded-full p-5 h-max hidden md:block'>
              <Image width={40} src={IconDaun} alt='logo-icon' />
            </div>
            <div>
              <h2 className='font-bold text-gray-500 text-2xl'>Dampak Lingkungan</h2>
              <p className='font-medium text-gray-400 my-6 text-lg'>Dengan menyelamatkan makanan dari tempat pembuangan sampah, kami telah mencapai dampak positif yang signifikan:</p>
              <div className='flex flex-col gap-y-6'>
                <div className='bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start'>
                  <Image width={40} src={IconPetir} alt='logo-icon' className='mt-3 hidden md:block' />
                  <div>
                    <h4 className='text-xl font-bold text-navy'>Pengurangan emisi gas rumah kaca</h4>
                    <p className='text-gray-400 text-lg'>yang dihasilkan dari pembusukan makanan, mendukung upaya mitigasi perubahan iklim di tingkat lokal.</p>
                  </div>
                </div>
                <div className='bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start'>
                  <Image width={40} src={IconAir} alt='logo-icon' className='mt-3 hidden md:block' />
                  <div>
                    <h4 className='text-xl font-bold text-navy'>Penghematan jutaan liter air</h4>
                    <p className='text-gray-400 text-lg'>yang secara normal dibutuhkan dalam proses produksi, distribusi, dan penyimpanan pangan baru.</p>
                  </div>
                </div>
                <div className='bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start'>
                  <Image width={40} src={IconRecycle} alt='logo-icon' className='mt-3 hidden md:block' />
                  <div>
                    <h4 className='text-xl font-bold text-navy'>Penyelamatan ribuan kilogram makanan</h4>
                    <p className='text-gray-400 text-lg'>dari berakhir di tempat pembuangan akhir, sehingga mengurangi tekanan terhadap kapasitas TPA di Yogyakarta.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos='fade-left' className='bg-white shadow-xl rounded-xl p-6 flex flex-row gap-x-4 justify-between'>
            <div className='bg-navy-light rounded-full p-5 h-max hidden md:block'>
              <Image width={40} src={IconPeople} alt='logo-icon' />
            </div>
            <div>
              <h2 className='font-bold text-gray-500 text-2xl'>Dampak Sosial</h2>
              <p className='font-medium text-gray-400 my-6 text-lg'>Program kami telah memberikan manfaat nyata bagi masyarakat melalui berbagai inisiatif yang berdampak baik pada lingkungan sosial:</p>
              <div className='flex flex-col gap-y-6'>
                <div className='bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start'>
                  <Image width={50} src={IconSendok} alt='logo-icon' className='mt-3 hidden md:block' />
                  <div>
                    <h4 className='text-xl font-bold text-navy'>Memenuhi kebutuhan gizi ribuan individu</h4>
                    <p className='text-gray-400 text-lg'>dari berbagai latar belakang, terutama anak-anak, lansia, dan komunitas rentan yang terdampak ketidakpastian pangan.</p>
                  </div>
                </div>
                <div className='bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start'>
                  <Image width={50} src={IconBuilding} alt='logo-icon' className='mt-3 hidden md:block' />
                  <div>
                    <h4 className='text-xl font-bold text-navy'>Mendukung 10 institusi sosial</h4>
                    <p className='text-gray-400 text-lg'>termasuk panti asuhan dan komunitas lansia, dengan distribusi pangan yang berkelanjutan dan tepat sasaran.</p>
                  </div>
                </div>
                <div className='bg-navy-light p-4 md:p-6 rounded-xl flex flex-row justify-between gap-x-6 items-start'>
                  <Image width={50} src={IconJabat} alt='logo-icon' className='mt-3 hidden md:block' />
                  <div>
                    <h4 className='text-xl font-bold text-navy'>Meningkatkan kesadaran masyarakat</h4>
                    <p className='text-gray-400 text-lg'>tentang pentingnya penyelamatan pangan dan keberlanjutan melalui berbagai program edukasi, workshop, dan kampanye publik.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='-mx-2 md:-mx-32 bg-navy-medium py-12 px-4 md:px-32'>
        <div className='bg-tosca-light rounded-4xl p-6 md:p-12 m-auto text-center text-white w-full md:w-1/2 my-12'>
          <h1 className='text-4xl font-bold'>Apa Kata Mereka</h1>
          <div className='bg-navy h-1 w-12 m-auto my-4'></div>
          <p>Dengarkan pengalaman dari berbagai pihak yang telah berkolaborasi dan merasakan dampak positif dari program Berbagi Bites Jogja.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-x-12 gap-y-6 justify-between px-4 md:px-0'>
          {[0, 1, 2].map((e, i) => {
            return (
              <div key={i} className='bg-white rounded-xl p-6 md:p-12'>
                <Image src={IconAir} alt='icon' />
                <p className='my-6 md:my-12 text-gray-500'>&quot;Sebagai pemilik restoran, BBJ membantu kami mengelola kelebihan makanan dengan cara yang bermakna. Proses pengambilan yang teratur dan profesional membuat kami yakin makanan tersebut sampai ke tangan yang tepat.&quot;</p>
                <div className='flex flex-row gap-x-3'>
                  <Image src={IconAir} alt='icon-air' />
                  <div>
                    <h4 className='font-bold text-xl'>Ibu Sari</h4>
                    <h5 className='text-navy text-lg'>Siapa</h5>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section> */}
      <section id='gabung' className='-mx-2 md:-mx-32 bg-navy py-12 px-6 md:px-32'>
        <div className='bg-tosca-light rounded-4xl p-6 md:p-12'>
          <h1 className='text-white font-bold text-4xl text-center'>Bergabung Bersama Kami</h1>
          <p className='text-white text-center text-lg w-full md:w-1/2 m-auto mt-6'>Pilih peran Anda dalam perjalanan ini - melalui donasi, aksi langsung sebagai relawan, atau kolaborasi sebagai mitra penyelamat pangan </p>
          <div className='flex flex-col md:flex-row justify-between gap-x-12 gap-y-12 my-6'>
            <div data-aos='fade-left' className='rounded-2xl bg-white w-full md:w-1/3 overflow-hidden'>
              <div className='bg-navy-light py-8'>
                <Image width={40} src={IconTangan} alt='icon-air' className='m-auto' />
                <h4 className='text-center text-navy font-bold text-2xl mt-4'>Donasi</h4>
              </div>
              <div className='px-6 mt-3'>
                <div className='flex flex-row justify-between'>
                  <span>Rp 50.000</span>
                  <span>5 Keluarga</span>
                </div>
                <div className='w-full bg-gray-400 mt-2' style={{ height: '0.5px' }}></div>
              </div>
              <div className='px-6 mt-3'>
                <div className='flex flex-row justify-between font-bold'>
                  <span>Rp 100.000</span>
                  <span>10 Keluarga</span>
                </div>
                <div className='w-full bg-gray-400 mt-2' style={{ height: '0.5px' }}></div>
              </div>
              <div className='px-6 mt-3'>
                <div className='flex flex-row justify-between'>
                  <span>Rp 200.000</span>
                  <span>20 Keluarga</span>
                </div>
                <div className='w-full bg-gray-400 mt-2' style={{ height: '0.5px' }}></div>
              </div>
              <div className='p-6'>
                <Link href={'https://wa.me/628986950700'} className='bg-navy rounded-md block py-2 text-center w-full text-white font-bold'>Donasi Sekarang</Link>
              </div>
            </div>
            <div data-aos='fade' className='rounded-2xl bg-white w-full md:w-1/3 overflow-hidden'>
              <div className='bg-navy-light py-8'>
                <Image src={IconGotong} alt='icon-air' className='m-auto' />
                <h4 className='text-center text-navy font-bold text-2xl mt-4'>Relawan</h4>
              </div>
              <div className='p-6'>
                <div className='flex flex-col gap-y-2 pb-3'>
                  <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                  </svg>
                    Pengambilan makanan</p>
                  <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                  </svg>Distribusi ke komunitas</p>
                  <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                  </svg>Kampanye edukasi</p>
                  <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                  </svg>Administrasi</p>

                </div>
                <Link href={'https://wa.me/628986950700'} className='bg-navy rounded-md block py-2 text-center w-full text-white font-bold'>Daftar Relawan</Link>
              </div>
            </div>
            <div data-aos='fade-right' className='rounded-2xl bg-white w-full md:w-1/3 overflow-hidden'>
              <div className='bg-navy-light py-8'>
                <Image width={40} src={IconJabat} alt='icon-air' className='m-auto' />
                <h4 className='text-center text-navy font-bold text-2xl mt-4'>Mitra</h4>
              </div>
              <div className='p-6'>
                <div className='flex flex-col gap-y-2 pb-3'>
                  <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                  </svg>
                    Restoran</p>
                  <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                  </svg>Hotel</p>
                  <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                  </svg>Toko Makanan</p>
                  <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                  </svg>Pasar Tradisional</p>

                </div>
                <Link href={'https://wa.me/628986950700'} className='bg-navy rounded-md block py-2 text-center w-full text-white font-bold'>Jadi Mitra</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-12'>
        <h1 className='font-bold text-4xl text-center'>Mitra Kami</h1>
        <p className='text-center my-6'>Kami berkolaborasi dengan berbagai mitra untuk mencapai misi kami</p>
        <MitraCarousel />
      </section>
      <section id='kontak' className='-mx-2 md:-mx-32 bg-gray-100 py-12 md:py-24 px-4 md:px-32'>
        <div className='flex flex-col md:flex-row gap-x-12 justify-between'>
          <div>
            <h1 className='font-bold text-4xl'>Hubungi Kami</h1>
            <p className='my-6'>Punya pertanyaan atau ingin terlibat? Hubungi kami melalui formulir ini atau melalui kontak di bawah.</p>
            <form action="" className='flex flex-col gap-y-3'>
              <div className='flex flex-col gap-y-1'>
                <label className='font-bold'>Nama</label>
                <input className='bg-white border border-gray-300 p-2' type="text" name="" id="" />
              </div>
              <div className='flex flex-col gap-y-1'>
                <label className='font-bold'>Email</label>
                <input className='bg-white border border-gray-300 p-2' type="text" name="" id="" />
              </div>
              <div className='flex flex-col gap-y-1'>
                <label className='font-bold'>Pesan</label>
                <textarea className='bg-white border border-gray-300 p-2' name="" id="" />
              </div>
              <button type="submit" className='bg-navy text-white rounded-md p-3 mt-6 w-max font-semibold'>Kirim Pesan</button>
            </form>
          </div>

          <div className='bg-white shadow-md rounded-md p-6 w-full md:w-1/2 mt-12 md:mt-0'>
            <h1 className='font-bold text-2xl'>Informasi Kontak</h1>
            <div className='flex flex-col gap-y-6 mt-6 md:mt-12'>
              <div className='flex flex-row gap-x-3 items-center'>
                <div className='bg-navy-light p-3 rounded-full'>
                  <MapPin color='#009CA6' />
                </div>
                <span>
                  <h5 className='font-bold'>Alamat</h5>
                  <Link href={'https://maps.app.goo.gl/SVBVQDueY8UdcXX79'}>Pusat Studi Pancasila UGM<br />Jl. Podocarpus II D-22, Kampus UGM, Bulaksumur, Yogyakarta 55281</Link>
                </span>
              </div>
              <div className='flex flex-row gap-x-3 items-center'>
                <div className='bg-navy-light p-3 rounded-full'>
                  <Phone color='#009CA6' />
                </div>
                <span>
                  <h5 className='font-bold'>Telepon</h5>
                  <Link href={'https://wa.me/628986950700'}>+62 898 695 0700</Link>
                </span>
              </div>
              <div className='flex flex-row gap-x-3 items-center'>
                <div className='bg-navy-light p-3 rounded-full'>
                  <Mail color='#009CA6' />
                </div>
                <span>
                  <h5 className='font-bold'>Email</h5>
                  <Link href={'mailto:berbagibitesjogja@gmail.com'}>berbagibitesjogja@gmail.com</Link>
                </span>
              </div>

            </div>
            <h2 className='font-bold text-xl mt-10 mb-2'>Ikuti Kami</h2>
            <div className='flex gap-x-2 text-navy text-xs font-thin'>
              <Link href="https://instagram.com/berbagibitesjogja" className='bg-navy-light rounded-full p-3'>
                <Instagram size='20' />
              </Link>
              <Link href="http://linkedin.com/company/berbagibitesjogja" className='bg-navy-light rounded-full p-3'>
                <Linkedin size='20' />
              </Link>
              <Link href="https://www.tiktok.com/@berbagibitesjogja" className='bg-navy-light rounded-full p-3'>
                <Music2 size='20' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='-mx-2 md:-mx-32 bg-navy-light py-12 px-6 md:px-32'>
        <h1 className='text-center text-3xl font-bold'>Berlangganan Newsletter Kami</h1>
        <p className='text-center text-gray-400 my-6'>Dapatkan update terbaru tentang program dan kegiatan kami langsung ke inbox anda</p>
        <form action="" className='m-auto w-full md:w-max'>
          <input className='bg-white rounded-md md:rounded-l-md p-3 w-full md:w-max' type="text" placeholder='Alamat email anda' />
          <button type='submit' className='bg-navy mt-6 md:mt-0 text-white p-3 rounded-md md:rounded-r-md w-full md:w-max'>Berlanggananan</button>
        </form>
      </section>
    </>
  );
}
