import { CheckCircle, CloudUpload, Handshake, Truck } from 'lucide-react';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-3 py-12">
      <div className="rounded-md bg-white shadow-xl p-6">
        <h1 className="font-bold text-2xl">Relawan Sekarang</h1>
        <p className="mt-3 font-light">Bergabunglah dengan kami untuk membantu mengurangi limbah makanan dan mendistribusikannya kepada yang membutuhkan di Yogyakarta.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="w-full">
            <h3 className="font-medium">Nama Lengkap*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Email*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Nomor HP*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Tanggal Lahir*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Pekerjaan*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Domisili di Yogyakarta*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Ketersediaan Waktu</h3>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map((e) =>
                <div key={e} className="flex flex-row gap-x-1 items-center">
                  <input type="radio" name="hari" id={"hari" + e} value={e} />
                  <label htmlFor={"hari" + e}>{e}</label>
                </div>

              )}

            </div>
          </div>
          <div className="w-full">
            <h3 className="font-medium">Minat Area Volunteer*</h3>
            <select name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full">
              <option value="">Yogyakarta</option>
            </select>
          </div>
          <div className="w-full">
            <h3 className="font-medium">Upload CV (PDF)*</h3>
            <input type="file" name="" id="cvpdf" className="hidden" accept=".pdf" />
            <label htmlFor="cvpdf">
              <div className='rounded-md border outline-dashed outline-2 p-8 mt-3 flex flex-col items-center'>

                <CloudUpload />
                <p>Klik untuk upload</p>
                <p>PDF max (5MB)</p>
              </div>
            </label>
          </div>
          <div className="w-full">
            <h3 className="font-medium">Upload Motivation Letter (PDF)*</h3>
            <input type="file" name="" id="cvpdf" className="hidden" accept=".pdf" />
            <label htmlFor="cvpdf">
              <div className='rounded-md border outline-dashed outline-2 p-8 mt-3 flex flex-col items-center'>

                <CloudUpload />
                <p>Klik untuk upload</p>
                <p>PDF max (5MB)</p>
              </div>
            </label>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 items-start mt-3">
          <input type="checkbox" name="acc" id="acc" className="mt-2 w-6 aspect-square" />
          <label htmlFor="acc" className="text-sm">* Saya menyatakan bahwa informasi yang saya berikan adalah benar dan saya bersedia mengikuti ketentuan yang berlaku sebagai relawan Berbagi Bites Jogja.</label>
        </div>
        <Link href={'https://wa.me/628986950700'} className="rounded-md text-center bg-navy hover:bg-tosca p-2 text-white font-bold float-end mt-6">Kirim Pendaftaran</Link>
        {/* <button type="submit" className="rounded-md text-center bg-navy hover:bg-tosca p-2 text-white font-bold float-end mt-6">Kirim Pendaftaran</button> */}
      </div>
      <div className="bg-tosca rounded-md p-6">

        <h1 className="font-bold text-2xl text-white">Dampak Relawan</h1>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <Handshake className='text-white' />

          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Food Rescue</h1>
            <p>Membantu mengambil dan menyelamatkan makanan berlebih dari restoran, toko, dan hotel</p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <Truck className='text-white' />


          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Distribusi</h1>
            <p>Mendistribusikan makanan ke panti asuhan, panti jompo, dan komunitas membutuhkan</p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 3C7.5 1.34531 8.84531 0 10.5 0H27C28.6547 0 30 1.34531 30 3V16.5C30 18.1547 28.6547 19.5 27 19.5H15.7875C15.2344 18.3047 14.3859 17.2734 13.3312 16.5H18V15C18 14.1703 18.6703 13.5 19.5 13.5H22.5C23.3297 13.5 24 14.1703 24 15V16.5H27V3H10.5V5.30156C9.61875 4.79063 8.59219 4.5 7.5 4.5V3ZM7.5 6C8.09095 6 8.67611 6.1164 9.22208 6.34254C9.76804 6.56869 10.2641 6.90016 10.682 7.31802C11.0998 7.73588 11.4313 8.23196 11.6575 8.77792C11.8836 9.32389 12 9.90905 12 10.5C12 11.0909 11.8836 11.6761 11.6575 12.2221C11.4313 12.768 11.0998 13.2641 10.682 13.682C10.2641 14.0998 9.76804 14.4313 9.22208 14.6575C8.67611 14.8836 8.09095 15 7.5 15C6.90905 15 6.32389 14.8836 5.77792 14.6575C5.23196 14.4313 4.73588 14.0998 4.31802 13.682C3.90016 13.2641 3.56869 12.768 3.34254 12.2221C3.1164 11.6761 3 11.0909 3 10.5C3 9.90905 3.1164 9.32389 3.34254 8.77792C3.56869 8.23196 3.90016 7.73588 4.31802 7.31802C4.73588 6.90016 5.23196 6.56869 5.77792 6.34254C6.32389 6.1164 6.90905 6 7.5 6ZM6.24844 16.5H8.74688C12.2016 16.5 15 19.2984 15 22.7484C15 23.4375 14.4422 24 13.7484 24H1.25156C0.557813 24 0 23.4422 0 22.7484C0 19.2984 2.79844 16.5 6.24844 16.5Z" fill="white" />
            </svg>


          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Staff</h1>
            <p>Secara langsung ikut andil keorganisasian Berbagi Bites Jogja, dan menggerakkan perubahan</p>
          </div>
        </div>
        <h2 className='text-white mt-24 font-medium'>Persyaratan Relawan:</h2>
        <div className='flex flex-col gap-y-2 mt-4'>
          {["Minimal 18 Tahun", "Berdomisili di Yogyakarta", "Komitmen minimal 3 bulan untuk volunteering", "Komitmen minimal 6 bulan untuk menjadi staff"].map(e =>

            <p key={e} className='text-white font-light'><CheckCircle className='w-4 inline mr-2' />{e}</p>
          )}
        </div>
      </div>
    </div>
  );
}
