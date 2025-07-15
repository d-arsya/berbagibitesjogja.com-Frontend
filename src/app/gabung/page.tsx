import { CheckCircle, CircleHelp, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import IconJabat from 'public/svg/hand-shake.svg'
import IconGotong from 'public/svg/work-together.svg'

export default function Page() {
  return (
    <>
      <section className='-mx-2 md:-mx-32 py-12 text-center bg-navy-light'>
        <section className="md:px-32">
          <h1 className="font-bold text-3xl md:text-5xl w-full md:w-1/2 m-auto leading-8 md:leading-16">Bergabung dengan <span className="text-navy">Berbagi Bites</span> <span className="text-tosca">Jogja</span></h1>
          <p className='mt-8 font-medium text-slate-500 w-full md:w-3/4 m-auto leading-6 md:leading-8 text-sm md:text-lg'>Pilih peran Anda dalam membantu mengurangi limbah makanan dan membantu komunitas di Yogyakarta</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 px-6 md:px-32 mt-12">
            <div className="bg-white shadow-md p-12 rounded-xl">
              <div className='bg-navy-light rounded-full p-3 w-max h-max aspect-square m-auto'>
                <Image width={30} src={IconGotong} alt='logo-icon' />
              </div>
              <h1 className='text-navy font-bold text-xl my-3'>Relawan</h1>
              <p>Jadilah bagian dari tim relawan kami yang berdedikasi dalam menyelamatkan dan mendistribusikan makanan.</p>
              <div className='flex flex-col gap-y-2 pb-3 items-start my-6 text-start'>
                <p><CheckCircle className='inline w-4 mr-2' />
                  Terlibat langsung dalam penyelamatan makanan</p>
                <p><CheckCircle className='inline w-4 mr-2' />Berinteraksi dengan komunitas penerima manfaat</p>
                <p><CheckCircle className='inline w-4 mr-2' />Mengikuti pelatihan dan pengembangan kapasitas</p>
                <p><CheckCircle className='inline w-4 mr-2' />Bergabung dengan komunitas yang berdedikasi</p>

              </div>
              <Link className='rounded-full bg-navy w-full py-2 md:py-3 px-6 md:px-12 text-white text-sm md:text-xl hover:bg-tosca' href={'/gabung/relawan'}>Daftar sebagai Relawan</Link>
            </div>
            <div className="bg-white shadow-md p-12 rounded-xl">
              <div className='bg-navy-light rounded-full p-3 w-max h-max aspect-square m-auto'>
                <Image width={30} src={IconJabat} alt='logo-icon' />
              </div>
              <h1 className='text-navy font-bold text-xl my-3'>Mitra</h1>
              <p>Jadilah mitra kami dalam mengurangi limbah makanan dan menciptakan dampak sosial positif.</p>
              <div className='flex flex-col gap-y-2 pb-3 items-start my-6 text-start'>
                <p><CheckCircle className='inline w-4 mr-2' />
                  Donasi makanan berlebih secara teratur</p>
                <p><CheckCircle className='inline w-4 mr-2' />Mendapatkan laporan dampak donasi</p>
                <p><CheckCircle className='inline w-4 mr-2' />Sertifikat dan pengakuan sebagai mitra</p>
                <p><CheckCircle className='inline w-4 mr-2' />Dukungan operasional pengambilan makanan</p>

              </div>
              <Link className='rounded-full bg-navy w-full py-2 md:py-3 px-6 md:px-12 text-white text-sm md:text-xl hover:bg-tosca' href={'/gabung/mitra'}>Daftar sebagai Mitra</Link>
            </div>
          </div>

        </section>
        <p className='my-12'>Punya pertanyaan tentang bergabung dengan kami?</p>
        <div className='flex flex-row justify-center gap-x-6 md:gap-x-12 text-navy'>
          <Link className='text-sm md:text-md flex rounded-full px-3 md:px-6 py-2 gap-x-2 border border-navy bg-white' href={'https://wa.me/628986950700'}><Mail />Hubungi Kami</Link>
          <Link className='text-sm md:text-md flex rounded-full px-6 py-2 gap-x-2 border border-navy bg-white' href={'https://wa.me/628986950700'}><CircleHelp /> Lihat FAQ</Link>
        </div>
      </section>
    </>
  );
}
