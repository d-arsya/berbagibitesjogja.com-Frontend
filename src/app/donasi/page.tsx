import Link from 'next/link'
import Image from 'next/image'
import ArrowLeft from 'public/svg/arrow-left.svg'
import DonationForm from "@/components/DonationForm";

export default function Page() {
  return (
    <>
      <div className='flex flex-row gap-x-2'>
      <p className='text-gray-500'>Beranda </p>
      <p className=''>{' > '}</p>
      <p className='text-gray-500'> Donasi</p>
      </div>
      <Link href={'/gabung/mitra'} className='flex flex-row text-navy'><Image width={15} src={ArrowLeft} alt='icon-air' className='mt-2 mr-2' />Kembali ke Beranda</Link>
                
      <section className='py-12 text-center'>
        <h1 className='text-navy text-4xl font-bold'>Dampak Usaha Kami</h1>
        <div className='bg-navy my-8 h-1 w-30 m-auto'></div>
        <p className='font-semibold text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-md md:text-lg'>Setiap angka yang tercatat bukan sekadar statistik, melainkan cerminan nyata dari perubahan yang kita upayakan bersama. Di balik setiap angka, terdapat langkah konkret, kerja keras, dan komitmen kolektif untuk membangun sebuah kota yang lebih inklusif, berdaya, dan berkelanjutan untuk semua warganya.</p>
        
      </section>
      <DonationForm />
    </>
  );
}
