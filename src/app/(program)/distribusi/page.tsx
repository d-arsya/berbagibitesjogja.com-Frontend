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
        <div className='flex flex-row gap-x-2'>
        <p className='text-gray-500'>Beranda </p>
        <p className=''>{' > '}</p>
        <p className='text-gray-500'> Program</p>
        </div>
        <Link href={'./'} className='flex flex-row text-navy'><Image width={15} src={ArrowLeft} alt='icon-air' className='mt-2 mr-2' />Kembali ke Beranda</Link>
      </div>
                  
        <div className='py-12 text-center'>
        <h1 className='text-4xl font-bold'>Program Distribusi Makanan</h1>
        <p className=' mt-8 font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg max-w-3/5'>Menjembatani makanan berlebih dengan mereka yang membutuhkan melalui sistem distribusi yang efisien dan berkelanjutan</p>
        <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        </div>
      </section>
      <section className='-mx-2 md:-mx-32 py-12 text-center'>
      <div className='text-center'>

        <div className='flex justify-center gap-x-6 px-6 md:px-48 flex-col md:flex-row'> 
          <div className='text-left items-start relative bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
            <div className='bg-navy-light ml-2 w-max p-6 shadow-md rounded-full'>
            <Image
            width={30}
            src={IconTangan}
            alt="icon-air"
            className="mt-1 mr-1"
            />
            </div>
            <Image
            width={50}
            src={ArrowRight}
            alt="icon-air"
            className="absolute invisible md:visible right-[-12] md:right-[-20]"
            />
            <Image
              width={50}
              src={ArrowDown}
              alt="icon-air"
              className="left-1/2 transform -translate-x-1/2 absolute visible md:invisible bottom-[-12px] md:bottom-[-20px]"
            />
            <h2 className='ml-2 mt-2 font-semibold text-md'>1. Pengumpulan</h2>
            <div className='ml-2 mt-2 text-slate-500'>Tim kami mengumpulkan makanan berlebih dari mitra donor seperti restoran, hotel, dan katering yang masih layak konsumsi</div>
            <ul className='ml-2 list-disc list-inside text-slate-500 text-sm list-(✔)'>
                <li>Pemeriksaan kualitas makanan</li>
                <li>Verifikasi keamanan pangan</li>
                <li>Koordinasi dengan mitra donor</li>
            </ul>
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
            <Image
            width={50}
            src={ArrowRight}
            alt="icon-air"
            className="absolute invisible md:visible right-[-12] md:right-[-20]"
            />
            <Image
              width={50}
              src={ArrowDown}
              alt="icon-air"
              className="left-1/2 transform -translate-x-1/2 absolute visible md:invisible bottom-[-12px] md:bottom-[-20px]"
            />
            <h2 className='ml-2 mt-2 font-semibold text-md'>2. Pengemasan</h2>
            <div className='ml-2 mt-2 text-slate-500'>Makanan disortir, dikemas ulang dengan standar kebersihan tinggi, dan disiapkan untuk distribusi</div>
            <ul className='ml-2 list-disc list-inside text-slate-500 text-sm'>
                <li>Penyortiran makanan</li>
                <li>Pengemasan higienis</li>
                <li>Pelabelan informasi</li>
            </ul>
          </div>

          <div className='text-left relative bg-white shadow-xl rounded-md py-8 px-3 w-full md:w-1/4 flex flex-col gap-y-2'>
            <div className='ml-2 bg-navy-light m-auto w-max p-6 shadow-md rounded-full'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 24H0V0H24V24Z" stroke="#E5E7EB" />
                <path d="M2.23125 14.0813L10.7016 21.9891C11.0531 22.3172 11.5172 22.5 12 22.5C12.4828 22.5 12.9469 22.3172 13.2984 21.9891L21.7687 14.0813C23.1938 12.7547 24 10.8938 24 8.94844V8.67657C24 5.40001 21.6328 2.60626 18.4031 2.06719C16.2656 1.71094 14.0906 2.40938 12.5625 3.93751L12 4.50001L11.4375 3.93751C9.90938 2.40938 7.73438 1.71094 5.59688 2.06719C2.36719 2.60626 0 5.40001 0 8.67657V8.94844C0 10.8938 0.80625 12.7547 2.23125 14.0813Z" fill="#009CA6" />
              </svg>
            </div>
            
            <h2 className='ml-2 mt-2 font-semibold text-md'>3. Distribusi</h2>
            <div className='ml-2 mt-2 text-slate-500'>Tim relawan mendistribusikan makanan ke panti asuhan, lansia, dan komunitas yang membutuhkan.</div>
            <ul className='ml-2 list-disc list-inside text-slate-500 text-sm'>
                <li>Pengiriman tepat waktu</li>
                <li>Verifikasi keamanan pangan</li>
                <li>Koordinasi dengan mitra donor</li>
            </ul>
          </div>

        </div>
        
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <div className="flex justify-center bg-teal-100 text-teal-500 text-xs font-semibold px-6 py-2 gap-6 rounded-full">
            <div  className="flex items-center">
            <Image
            width={20}
            src={IconTangan}
            alt="icon-air"
            className="mt-1 mr-1"
            />
            <p>Proses 2-3 jam</p>
            </div>
            <div  className="flex items-center">
            <Image
            width={20}
            src={IconTangan}
            alt="icon-air"
            className="mt-1 mr-1"
            />
            <p>Suhu Terkontrol</p>
            </div>
            <div className="flex items-center">
            <Image
            width={20}
            src={IconTangan}
            alt="icon-air"
            className="mt-1 mr-1"
            />
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
    {/* Chart 1: Distribusi Makanan */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Distribusi Makanan 2025</h2>
      <div className="flex items-end content-end justify-between h-50">
        <div className="flex flex-col items-center h-50">
          <div className="w-16 h-[40%] rounded-t-md"></div>
          <div className="bg-teal-500 w-16 h-[60%] rounded-t-md"></div>
          <p className="mt-2 mb-2 text-sm font-semibold">Jan</p>
          <p className="text-sm text-teal-500">1.2K</p>
        </div>
        <div className="flex flex-col items-center h-50">
          <div className="w-16 h-[60%] rounded-t-md"></div>
          <div className="bg-teal-500 w-16 h-[40%] rounded-t-md"></div>
          <p className="mt-2 text-sm font-semibold">Feb</p>
          <p className="text-sm text-teal-500">950</p>
        </div>
        <div className="flex flex-col items-center h-50">
          <div className="w-16 h-[20%] rounded-t-md"></div>
          <div className="bg-teal-500 w-16 h-[80%] rounded-t-md"></div>
          <p className="mt-2 text-sm font-semibold">Mar</p>
          <p className="text-sm text-teal-500">1.4K</p>
        </div>
        <div className="flex flex-col items-center h-50">
          <div className="w-16 h-[40%] rounded-t-md"></div>
          <div className="bg-teal-500 w-16 h-[60%] rounded-t-md"></div>
          <p className="mt-2 text-sm font-semibold">Apr</p>
          <p className="text-sm text-teal-500">1.1K</p>
        </div>
      </div>
    </div>

    {/* Chart 2: Pertumbuhan Relawan */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold mb-4">Pertumbuhan Relawan</h2>
      <div className="h-40 flex flex-col items-end">
        <div className="w-full bg-teal-100 h-[25%]"></div>
        <div className="w-full bg-teal-300 h-[35%]"></div>
        <div className="w-full bg-teal-500 h-[40%]">
          <div className='flex justify-between text-sm'>
          <p>Q1</p>
          <p>Q2</p>
          <p>Q3</p>
          <p>Q4</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Statistics Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    {/* Card 1: Mitra Donor */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between">
        <div>
        <h2 className="text-lg font-bold">Mitra Donor</h2>
        <p className="text-sm text-slate-500 mt-2">48 Mitra Aktif</p>
        </div>
        <div className='bg-navy-light ml-2 w-max py-2 px-4 shadow-md rounded-full'>
            <Image
            width={30}
            src={IconTangan}
            alt="icon-air"
            className="mt-1 mr-1"
            />
            </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-500">
        <li>Restoran: <span className="text-teal-500 font-bold">42%</span></li>
        <li>Hotel: <span className="text-teal-500 font-bold">35%</span></li>
        <li>Katering: <span className="text-teal-500 font-bold">23%</span></li>
      </ul>
    </div>

    {/* Card 2: Komunitas Terlayani */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between">
        <div>
        <h2 className="text-lg font-bold">Komunitas Terlayani</h2>
        <p className="text-sm text-slate-500 mt-2">15 Komunitas</p>
        </div>
        <div className='bg-navy-light ml-2 w-max py-2 px-4 shadow-md rounded-full'>
            <Image
            width={30}
            src={IconTangan}
            alt="icon-air"
            className="mt-1 mr-1"
            />
            </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-500">
        <li>Panti Asuhan: <span className="text-teal-500 font-bold">40%</span></li>
        <li>Lansia: <span className="text-teal-500 font-bold">35%</span></li>
        <li>Komunitas Lain: <span className="text-teal-500 font-bold">25%</span></li>
      </ul>
    </div>

    {/* Card 3: Total Impact */}
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between">
        <div>
        <h2 className="text-lg font-bold">Total Impact</h2>
        <p className="text-sm text-slate-500 mt-2">12,600+ Porsi</p>
        </div>
        <div className='bg-navy-light ml-2 w-max py-2 px-4 shadow-md rounded-full'>
            <Image
            width={30}
            src={IconTangan}
            alt="icon-air"
            className="mt-1 mr-1"
            />
            </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-500">
        <li>Pengurangan: <span className="text-teal-500 font-bold">3.2 ton CO2</span></li>
        <li>Penghematan: <span className="text-teal-500 font-bold">580,000 L air</span></li>
        <li>Penerima Manfaat: <span className="text-teal-500 font-bold">4,200+</span></li>
      </ul>
    </div>
  </div>
  </div>
</section>

      <section>
        <div className='py-12 text-center'>
          <h1 className='text-4xl font-bold'>Cerita Dampak</h1>
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
                        key={i}
                      />
                    )
                  })}
        
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
}
