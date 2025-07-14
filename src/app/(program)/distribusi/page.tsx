'use client';
import Link from 'next/link'
import Image from 'next/image'
import ArrowLeft from 'public/svg/arrow-left.svg'
import ArrowRight from 'public/svg/arrow-right.svg'
import HandShake from 'public/svg/hand-shake.svg'
import PeopleIcon from 'public/svg/people.svg'
import StoryCard from '@/components/StoryCard';

import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { ChartNoAxesCombined } from 'lucide-react';
import Ajakan from '@/components/Ajakan';

const foodChart = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const beneficiaryChart = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--navy)",
  },
} satisfies ChartConfig

const ceritaDampak = [
  {
    image: '/makan.png',
    title: "Berbagi berkah di bulan Ramadan: 1000+ Paket Makanan Didistribusikan",
    date: "15 April 2025",
    description: "Program distribusi makanan BBJ berhasil menyalurkan lebih dari 1000 paket makanan berbuka puasa ke berbagai komunitas di Yogyakarta",
    link: "/dampak",
  },
  {
    image: '/makan.png',
    title: "Kolaborasi dengan 5 Hotel Baru untuk Mengurangi Limbah Makanan",
    date: "10 April 2025",
    description: "BBJ Menjalin kerjasama dengan 5 hotel bintang lima di Yogyakarta untuk program penyelamatan makanan berlebih",
    link: "/dampak",
  },
  {
    image: '/makan.png',
    title: "Berbagi berkah di bulan Ramadan: 1000+ Paket Makanan Didistribusikan",
    date: "15 April 2025",
    description: "Program distribusi makanan BBJ berhasil menyalurkan lebih dari 1000 paket makanan berbuka puasa ke berbagai komunitas di Yogyakarta",
    link: "/dampak",
  }

]

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

        <div className='py-12 text-center'>
          <h1 className='text-3xl md:text-4xl font-bold'>Program Distribusi Makanan</h1>
          <p className='mt-8 font-medium text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Menjembatani makanan berlebih dengan mereka yang membutuhkan melalui sistem distribusi yang efisien dan berkelanjutan</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
      </section>
      <section className='-mx-2 md:-mx-32 py-12 text-center'>
        <div className='text-center'>

          <div className='flex justify-center gap-x-6 items-start px-6 md:px-48 flex-col md:flex-row'>
            <div className='text-left items-start relative bg-white shadow-xl h-96 rounded-md py-8 px-4 w-full md:w-1/4 flex flex-col gap-y-2'>
              <div className='bg-navy ml-2 w-max p-3 shadow-md rounded-full'>
                <svg width="28" height="28" viewBox="0 0 28 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.7359 3.38438C27.5703 2.77031 27.7484 1.59844 27.1344 0.764062C26.5203 -0.070313 25.3484 -0.248438 24.5141 0.365624L18.9031 4.5H13.25C12.8375 4.5 12.5 4.1625 12.5 3.75C12.5 3.3375 12.8375 3 13.25 3H14H17C17.8297 3 18.5 2.32969 18.5 1.5C18.5 0.670312 17.8297 0 17 0H14H13.25H9.57969C8.21563 0 6.89375 0.464062 5.82969 1.3125L3.725 3H2C1.17031 3 0.5 3.67031 0.5 4.5V7.5C0.5 8.32969 1.17031 9 2 9H9.5H17.0234C18.3828 9 19.7094 8.56406 20.8063 7.75781L26.7406 3.38438H26.7359ZM9.575 2.99531C9.57706 2.99868 9.57823 3.00251 9.57842 3.00645C9.5786 3.01039 9.57779 3.01431 9.57605 3.01785C9.57432 3.02139 9.57171 3.02444 9.56849 3.02671C9.56526 3.02898 9.56151 3.0304 9.55759 3.03083C9.55367 3.03127 9.54971 3.03071 9.54606 3.0292C9.54241 3.0277 9.53921 3.0253 9.53674 3.02222C9.53427 3.01915 9.53261 3.0155 9.53193 3.01161C9.53124 3.00773 9.53154 3.00373 9.53281 3C9.53076 2.99663 9.52958 2.99281 9.5294 2.98886C9.52921 2.98492 9.53003 2.981 9.53176 2.97746C9.5335 2.97392 9.5361 2.97087 9.53933 2.9686C9.54255 2.96633 9.5463 2.96491 9.55022 2.96448C9.55414 2.96404 9.55811 2.9646 9.56175 2.96611C9.5654 2.96762 9.56861 2.97002 9.57108 2.97309C9.57355 2.97617 9.5752 2.97981 9.57589 2.9837C9.57658 2.98758 9.57627 2.99158 9.575 2.99531Z" fill="#E5E7EB" />
                </svg>

              </div>
              <h2 className='ml-2 mt-2 font-bold text-lg text-slate-800'>1. Pengumpulan</h2>
              <div className='ml-2 mt-2 text-slate-500'>Tim kami mengumpulkan makanan berlebih dari mitra donor seperti restoran, hotel, dan katering yang masih layak konsumsi</div>
              <ul className='ml-2 list-disc list-inside text-slate-500 text-md'>
                <li>Pemeriksaan kualitas makanan</li>
                <li>Verifikasi keamanan pangan</li>
                <li>Koordinasi dengan mitra donor</li>
              </ul>
            </div>
            <Image
              width={50}
              src={ArrowRight}
              alt="arrow-right"
              className='md:mt-12 mt-2 rotate-90 md:rotate-0 m-auto'
            />
            <div className='text-left items-start relative bg-white shadow-xl h-96 rounded-md py-8 px-4 w-full md:w-1/4 flex flex-col gap-y-2'>
              <div className='bg-navy ml-2 w-max p-3 shadow-md rounded-full'>
                <svg width="28" height="28" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0.5H22.5C23.3297 0.5 24 1.17031 24 2V3.5C24 4.32969 23.3297 5 22.5 5H1.5C0.670312 5 0 4.32969 0 3.5V2C0 1.17031 0.670312 0.5 1.5 0.5ZM1.5 6.5H22.5V18.5C22.5 20.1547 21.1547 21.5 19.5 21.5H4.5C2.84531 21.5 1.5 20.1547 1.5 18.5V6.5ZM7.5 10.25C7.5 10.6625 7.8375 11 8.25 11H15.75C16.1625 11 16.5 10.6625 16.5 10.25C16.5 9.8375 16.1625 9.5 15.75 9.5H8.25C7.8375 9.5 7.5 9.8375 7.5 10.25Z" fill="#E5E7EB" />
                </svg>


              </div>
              <h2 className='ml-2 mt-2 font-bold text-lg text-slate-800'>2. Pengemasan</h2>
              <div className='ml-2 mt-2 text-slate-500'>Makanan disortir, dikemas ulang dengan standar kebersihan tinggi, dan disiapkan untuk distribusi</div>
              <ul className='ml-2 list-disc list-inside text-slate-500 text-md'>
                <li>Penyortiran makanan</li>
                <li>Pengemasan higienis</li>
                <li>Pelabelan informasi</li>
              </ul>
            </div>
            <Image
              width={50}
              src={ArrowRight}
              alt="arrow-right"
              className='md:mt-12 mt-2 rotate-90 md:rotate-0 m-auto'
            />
            <div className='text-left items-start relative bg-white shadow-xl h-96 rounded-md py-8 px-4 w-full md:w-1/4 flex flex-col gap-y-2'>
              <div className='bg-navy ml-2 w-max p-3 shadow-md rounded-full'>
                <svg width="28" height="28" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.25 0C1.00781 0 0 1.00781 0 2.25V17.25C0 18.4922 1.00781 19.5 2.25 19.5H3C3 21.9844 5.01562 24 7.5 24C9.98438 24 12 21.9844 12 19.5H18C18 21.9844 20.0156 24 22.5 24C24.9844 24 27 21.9844 27 19.5H28.5C29.3297 19.5 30 18.8297 30 18C30 17.1703 29.3297 16.5 28.5 16.5V13.5V12V11.1234C28.5 10.3266 28.1859 9.5625 27.6234 9L24 5.37656C23.4375 4.81406 22.6734 4.5 21.8766 4.5H19.5V2.25C19.5 1.00781 18.4922 0 17.25 0H2.25ZM19.5 7.5H21.8766L25.5 11.1234V12H19.5V7.5ZM5.25 19.5C5.25 18.9033 5.48705 18.331 5.90901 17.909C6.33097 17.4871 6.90326 17.25 7.5 17.25C8.09674 17.25 8.66903 17.4871 9.09099 17.909C9.51295 18.331 9.75 18.9033 9.75 19.5C9.75 20.0967 9.51295 20.669 9.09099 21.091C8.66903 21.5129 8.09674 21.75 7.5 21.75C6.90326 21.75 6.33097 21.5129 5.90901 21.091C5.48705 20.669 5.25 20.0967 5.25 19.5ZM22.5 17.25C23.0967 17.25 23.669 17.4871 24.091 17.909C24.5129 18.331 24.75 18.9033 24.75 19.5C24.75 20.0967 24.5129 20.669 24.091 21.091C23.669 21.5129 23.0967 21.75 22.5 21.75C21.9033 21.75 21.331 21.5129 20.909 21.091C20.4871 20.669 20.25 20.0967 20.25 19.5C20.25 18.9033 20.4871 18.331 20.909 17.909C21.331 17.4871 21.9033 17.25 22.5 17.25Z" fill="#E5E7EB" />
                </svg>



              </div>
              <h2 className='ml-2 mt-2 font-bold text-lg text-slate-800'>3. Distribusi</h2>
              <div className='ml-2 mt-2 text-slate-500'>Tim relawan mendistribusikan makanan ke panti asuhan, lansia, dan komunitas yang membutuhkan.</div>
              <ul className='ml-2 list-disc list-inside text-slate-500 text-md'>
                <li>Pengiriman tepat waktu</li>
                <li>Verifikasi keamanan pangan</li>
                <li>Koordinasi dengan mitra donor</li>
              </ul>
            </div>


          </div>

        </div>
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex justify-center bg-teal-100 text-teal-500 text-xs font-semibold px-6 py-2 gap-6 rounded-full">
            <div className="flex items-center">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_4_3627)">
                  <path d="M10.7031 0C13.3553 0 15.8988 1.05357 17.7742 2.92893C19.6496 4.8043 20.7031 7.34784 20.7031 10C20.7031 12.6522 19.6496 15.1957 17.7742 17.0711C15.8988 18.9464 13.3553 20 10.7031 20C8.05096 20 5.50742 18.9464 3.63206 17.0711C1.75669 15.1957 0.703125 12.6522 0.703125 10C0.703125 7.34784 1.75669 4.8043 3.63206 2.92893C5.50742 1.05357 8.05096 0 10.7031 0ZM9.76562 4.6875V10C9.76562 10.3125 9.92188 10.6055 10.1836 10.7812L13.9336 13.2812C14.3633 13.5703 14.9453 13.4531 15.2344 13.0195C15.5234 12.5859 15.4062 12.0078 14.9727 11.7188L11.6406 9.5V4.6875C11.6406 4.16797 11.2227 3.75 10.7031 3.75C10.1836 3.75 9.76562 4.16797 9.76562 4.6875Z" fill="#009CA6" />
                </g>
                <defs>
                  <clipPath id="clip0_4_3627">
                    <path d="M0.703125 0H20.7031V20H0.703125V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>Proses 2-3 jam</p>
            </div>
            <div className="flex items-center">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_4_3632)">
                  <path d="M17.6562 3.75C17.6562 3.41848 17.5246 3.10054 17.2901 2.86612C17.0557 2.6317 16.7378 2.5 16.4062 2.5C16.0747 2.5 15.7568 2.6317 15.5224 2.86612C15.2879 3.10054 15.1562 3.41848 15.1562 3.75C15.1562 4.08152 15.2879 4.39946 15.5224 4.63388C15.7568 4.8683 16.0747 5 16.4062 5C16.7378 5 17.0557 4.8683 17.2901 4.63388C17.5246 4.39946 17.6562 4.08152 17.6562 3.75ZM12.6562 3.75C12.6562 2.75544 13.0513 1.80161 13.7546 1.09835C14.4579 0.395088 15.4117 0 16.4062 0C17.4008 0 18.3546 0.395088 19.0579 1.09835C19.7612 1.80161 20.1562 2.75544 20.1562 3.75C20.1562 4.74456 19.7612 5.69839 19.0579 6.40165C18.3546 7.10491 17.4008 7.5 16.4062 7.5C15.4117 7.5 14.4579 7.10491 13.7546 6.40165C13.0513 5.69839 12.6562 4.74456 12.6562 3.75ZM5.78125 2.5C4.74609 2.5 3.90625 3.33984 3.90625 4.375V10.8008C3.90625 11.4766 3.62891 12.0469 3.30859 12.4609C2.89844 12.9922 2.65625 13.6523 2.65625 14.375C2.65625 16.1016 4.05469 17.5 5.78125 17.5C7.50781 17.5 8.90625 16.1016 8.90625 14.375C8.90625 13.6523 8.66406 12.9922 8.25391 12.4648C7.93359 12.0508 7.65625 11.4805 7.65625 10.8047V4.375C7.65625 3.33984 6.81641 2.5 5.78125 2.5ZM1.40625 4.375C1.40625 1.96094 3.36328 0 5.78125 0C8.19922 0 10.1562 1.95703 10.1562 4.375V10.8008C10.1562 10.8047 10.1602 10.8125 10.1641 10.8242C10.1719 10.8477 10.1953 10.8867 10.2305 10.9336C10.9688 11.8867 11.4062 13.082 11.4062 14.375C11.4062 17.4805 8.88672 20 5.78125 20C2.67578 20 0.15625 17.4805 0.15625 14.375C0.15625 13.0781 0.59375 11.8828 1.33203 10.9336C1.36719 10.8867 1.39062 10.8477 1.39844 10.8242C1.40234 10.8125 1.40625 10.8047 1.40625 10.8008V4.375ZM7.65625 14.375C7.65625 15.4102 6.81641 16.25 5.78125 16.25C4.74609 16.25 3.90625 15.4102 3.90625 14.375C3.90625 13.5586 4.42969 12.8633 5.15625 12.6055V10.625C5.15625 10.2812 5.4375 10 5.78125 10C6.125 10 6.40625 10.2812 6.40625 10.625V12.6055C7.13281 12.8633 7.65625 13.5586 7.65625 14.375Z" fill="#009CA6" />
                </g>
                <defs>
                  <clipPath id="clip0_4_3632">
                    <path d="M0.15625 0H20.1562V20H0.15625V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>Suhu Terkontrol</p>
            </div>
            <div className="flex items-center">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5625 0.25C8.63414 0.25 6.74907 0.821828 5.14569 1.89317C3.54232 2.96451 2.29263 4.48726 1.55468 6.26884C0.816725 8.05042 0.623642 10.0108 0.999848 11.9021C1.37605 13.7934 2.30465 15.5307 3.66821 16.8943C5.03178 18.2579 6.76906 19.1865 8.66037 19.5627C10.5517 19.9389 12.5121 19.7458 14.2937 19.0078C16.0752 18.2699 17.598 17.0202 18.6693 15.4168C19.7407 13.8134 20.3125 11.9284 20.3125 10C20.3098 7.41498 19.2817 4.93661 17.4538 3.10872C15.6259 1.28084 13.1475 0.25273 10.5625 0.25ZM7.1875 7C7.41001 7 7.62752 7.06598 7.81252 7.1896C7.99753 7.31321 8.14172 7.48891 8.22687 7.69448C8.31202 7.90005 8.3343 8.12625 8.29089 8.34448C8.24748 8.56271 8.14033 8.76316 7.983 8.9205C7.82567 9.07783 7.62521 9.18498 7.40698 9.22838C7.18875 9.27179 6.96255 9.24951 6.75699 9.16436C6.55142 9.07922 6.37572 8.93502 6.2521 8.75002C6.12848 8.56501 6.0625 8.3475 6.0625 8.125C6.0625 7.82663 6.18103 7.54048 6.39201 7.3295C6.60299 7.11853 6.88914 7 7.1875 7ZM14.9613 12.625C13.9966 14.2928 12.3934 15.25 10.5625 15.25C8.73157 15.25 7.12844 14.2937 6.16375 12.625C6.10949 12.5396 6.07305 12.4442 6.05663 12.3444C6.04022 12.2446 6.04416 12.1425 6.06823 12.0442C6.09229 11.946 6.13598 11.8536 6.19667 11.7727C6.25735 11.6917 6.33378 11.6239 6.42136 11.5733C6.50893 11.5227 6.60584 11.4903 6.70625 11.4781C6.80667 11.4659 6.90851 11.4742 7.00566 11.5023C7.1028 11.5305 7.19324 11.5781 7.27154 11.6421C7.34984 11.7062 7.41437 11.7854 7.46125 11.875C8.16157 13.0853 9.26219 13.75 10.5625 13.75C11.8628 13.75 12.9634 13.0844 13.6638 11.875C13.7106 11.7854 13.7752 11.7062 13.8535 11.6421C13.9318 11.5781 14.0222 11.5305 14.1194 11.5023C14.2165 11.4742 14.3183 11.4659 14.4188 11.4781C14.5192 11.4903 14.6161 11.5227 14.7037 11.5733C14.7912 11.6239 14.8677 11.6917 14.9283 11.7727C14.989 11.8536 15.0327 11.946 15.0568 12.0442C15.0808 12.1425 15.0848 12.2446 15.0684 12.3444C15.052 12.4442 15.0155 12.5396 14.9613 12.625ZM13.9375 9.25C13.715 9.25 13.4975 9.18402 13.3125 9.0604C13.1275 8.93679 12.9833 8.76109 12.8981 8.55552C12.813 8.34995 12.7907 8.12375 12.8341 7.90552C12.8775 7.68729 12.9847 7.48684 13.142 7.3295C13.2993 7.17217 13.4998 7.06502 13.718 7.02162C13.9363 6.97821 14.1625 7.00049 14.368 7.08564C14.5736 7.17078 14.7493 7.31498 14.8729 7.49998C14.9965 7.68499 15.0625 7.9025 15.0625 8.125C15.0625 8.42337 14.944 8.70952 14.733 8.9205C14.522 9.13147 14.2359 9.25 13.9375 9.25Z" fill="#009CA6" />
              </svg>

              <p>100% aman</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 px-6 -mx-2 md:-mx-32 md:px-32 bg-teal-50">
        <div className='py-12 text-center'>
          <h1 className='text-4xl font-bold'>Dampak Program</h1>
          <p className=' mt-8 font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Setiap kontribusi menciptakan perubahan nyata dalam komunitas kita</p>
          <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='bg-white rounded-md px-6 py-2 shadow-md'>
              <h1 className='my-3 font-bold text-lg'>Distribusi Makanan 2025</h1>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={foodChart}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                    <LabelList
                      position="top"
                      offset={2}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h1 className='my-3 font-bold text-lg'>Penerima Makanan 2025</h1>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={beneficiaryChart}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  >
                    <LabelList
                      position="center"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Line>
                </LineChart>
              </ChartContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-bold">Mitra Donor</h2>
                  <p className="text-sm text-slate-500 mt-2">48 Mitra Aktif</p>
                </div>
                <div className='bg-navy-light ml-2 w-max p-4 shadow-md rounded-full'>
                  <Image
                    width={25}
                    src={HandShake}
                    alt="icon-air"
                  />
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li className='flex justify-between my-4'>Restoran: <span className="text-teal-500 font-bold">42%</span></li>
                <li className='flex justify-between my-4'>Hotel: <span className="text-teal-500 font-bold">35%</span></li>
                <li className='flex justify-between my-4'>Katering: <span className="text-teal-500 font-bold">23%</span></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-bold">Komunitas Terlayani</h2>
                  <p className="text-sm text-slate-500 mt-2">15 Komunitas</p>
                </div>
                <div className='bg-navy-light ml-2 w-max p-4 shadow-md rounded-full'>
                  <Image
                    width={25}
                    src={PeopleIcon}
                    alt="icon-air"
                  />
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li className='flex justify-between my-4'>Panti Asuhan: <span className="text-teal-500 font-bold">40%</span></li>
                <li className='flex justify-between my-4'>Lansia: <span className="text-teal-500 font-bold">35%</span></li>
                <li className='flex justify-between my-4'>Komunitas Lain: <span className="text-teal-500 font-bold">25%</span></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-bold">Total Impact</h2>
                  <p className="text-sm text-slate-500 mt-2">12,600+ Porsi</p>
                </div>
                <div className='bg-navy-light p-4 ml-2 w-max shadow-md rounded-full'>
                  <ChartNoAxesCombined className='text-navy' />
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li className='flex justify-between my-4'>Pengurangan: <span className="text-teal-500 font-bold">3.2 ton CO2</span></li>
                <li className='flex justify-between my-4'>Penghematan: <span className="text-teal-500 font-bold">580,000 L air</span></li>
                <li className='flex justify-between my-4'>Penerima Manfaat: <span className="text-teal-500 font-bold">4,200+</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12'>
        <div className='text-center'>
          <h1 className='text-3xl md:text-4xl font-bold'>Cerita Dampak</h1>
          <div className='bg-navy my-4 md:my-8 h-1 w-30 m-auto'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:flex-row justify-between gap-x-6 gap-y-12 my-6 md:my-12 px-4 md:px-0'>
          {ceritaDampak.map((e, i) => {
            return (
              <StoryCard
                image={e.image}
                description={e.description}
                link={e.link}
                title={e.title}
                date={e.date}
                key={i}
              />
            )
          })}

        </div>
      </section>

      <Ajakan />
    </>
  );
}
