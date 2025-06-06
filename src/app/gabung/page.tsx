import { CircleHelp, Mail } from 'lucide-react';
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
          <p className='my-8 w-full md:w-1/3 m-auto font-medium text-gray-400'>Pilih peran Anda dalam membantu mengurangi limbah makanan dan membantu komunitas di Yogyakarta</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 px-6 md:px-32">
            <div className="bg-white shadow-md p-12 rounded-xl">
              <div className='bg-navy-light rounded-full p-3 w-max h-max aspect-square m-auto'>
                <Image width={30} src={IconGotong} alt='logo-icon' />
              </div>
              <h1 className='text-navy font-bold text-xl my-3'>Relawan</h1>
              <p>Jadilah bagian dari tim relawan kami yang berdedikasi dalam menyelamatkan dan mendistribusikan makanan.</p>
              <div className='flex flex-col gap-y-2 pb-3 items-start my-6 text-start'>
                <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                </svg>
                  Terlibat langsung dalam penyelamatan makanan</p>
                <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                </svg>Berinteraksi dengan komunitas penerima manfaat</p>
                <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                </svg>Mengikuti pelatihan dan pengembangan kapasitas</p>
                <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                </svg>Bergabung dengan komunitas yang berdedikasi</p>

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
                <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                </svg>
                  Donasi makanan berlebih secara teratur</p>
                <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                </svg>Mendapatkan laporan dampak donasi</p>
                <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                </svg>Sertifikat dan pengakuan sebagai mitra</p>
                <p><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="black" />
                </svg>Dukungan operasional pengambilan makanan</p>

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
