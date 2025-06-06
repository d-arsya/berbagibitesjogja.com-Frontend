import Image from 'next/image';
import UploadLogo from 'public/svg/upload.svg'
export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-12">
      <div className="rounded-md bg-white shadow-xl p-6">
        <h1 className="font-bold text-2xl">Relawan Sekarang</h1>
        <p className="mt-3 font-light">Bergabunglah dengan kami untuk membantu mengurangi limbah makanan dan mendistribusikannya kepada yang membutuhkan di Yogyakarta.</p>
        <div className="grid grid-cols-2 gap-6 mt-12">
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

                <Image src={UploadLogo} alt='upload-icon' />
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

                <Image src={UploadLogo} alt='upload-icon' />
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
        <button type="submit" className="rounded-md text-center bg-navy hover:bg-tosca p-2 text-white font-bold float-end mt-6">Kirim Pendaftaran</button>
      </div>
      <div className="bg-tosca rounded-md p-6">

        <h1 className="font-bold text-2xl text-white">Dampak Relawan</h1>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5 11.625V11.7796L28.7672 8.51245C29.7938 7.48589 29.7938 5.82651 28.7672 4.79995L25.1062 1.1437C24.0797 0.117139 22.4203 0.117139 21.3937 1.1437L19.5141 3.02339C19.3875 3.00933 19.2563 2.99995 19.125 2.99995H13.875C12.1359 2.99995 10.7062 4.31245 10.5187 5.99995H10.5V11.625C10.5 12.6609 11.3391 13.5 12.375 13.5C13.4109 13.5 14.25 12.6609 14.25 11.625V8.24995V8.24526V7.49995H15H21.375C21.375 7.49995 21.375 7.49995 21.3797 7.49995H21.75C23.8219 7.49995 25.5 9.17808 25.5 11.25V11.625ZM15.75 8.99995V11.625C15.75 13.4906 14.2406 15 12.375 15C10.5094 15 9 13.4906 9 11.625V6.06558C7.31719 6.3562 5.91563 7.57964 5.4375 9.26245L4.66406 11.9625L1.23281 15.3937C0.20625 16.4203 0.20625 18.0796 1.23281 19.1062L4.89375 22.7671C5.92031 23.7937 7.57969 23.7937 8.60625 22.7671L10.3734 21C10.4156 21 10.4578 21.0046 10.5 21.0046H18C19.2422 21.0046 20.25 19.9968 20.25 18.7546C20.25 18.4921 20.2031 18.239 20.1234 18.0046H20.25C21.4922 18.0046 22.5 16.9968 22.5 15.7546C22.5 15.1546 22.2656 14.6109 21.8812 14.2078C23.0859 13.9734 23.9953 12.914 24 11.639V11.6203C23.9953 10.1765 22.8234 9.00464 21.375 9.00464H15.75V8.99995Z" fill="white" />
            </svg>

          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Food Rescue</h1>
            <p>Membantu mengambil dan menyelamatkan makanan berlebih dari restoran, toko, dan hotel</p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4_5667)">
                <path d="M2.25 0C1.00781 0 0 1.00781 0 2.25V17.25C0 18.4922 1.00781 19.5 2.25 19.5H3C3 21.9844 5.01562 24 7.5 24C9.98438 24 12 21.9844 12 19.5H18C18 21.9844 20.0156 24 22.5 24C24.9844 24 27 21.9844 27 19.5H28.5C29.3297 19.5 30 18.8297 30 18C30 17.1703 29.3297 16.5 28.5 16.5V13.5V12V11.1234C28.5 10.3266 28.1859 9.5625 27.6234 9L24 5.37656C23.4375 4.81406 22.6734 4.5 21.8766 4.5H19.5V2.25C19.5 1.00781 18.4922 0 17.25 0H2.25ZM19.5 7.5H21.8766L25.5 11.1234V12H19.5V7.5ZM5.25 19.5C5.25 18.9033 5.48705 18.331 5.90901 17.909C6.33097 17.4871 6.90326 17.25 7.5 17.25C8.09674 17.25 8.66903 17.4871 9.09099 17.909C9.51295 18.331 9.75 18.9033 9.75 19.5C9.75 20.0967 9.51295 20.669 9.09099 21.091C8.66903 21.5129 8.09674 21.75 7.5 21.75C6.90326 21.75 6.33097 21.5129 5.90901 21.091C5.48705 20.669 5.25 20.0967 5.25 19.5ZM22.5 17.25C23.0967 17.25 23.669 17.4871 24.091 17.909C24.5129 18.331 24.75 18.9033 24.75 19.5C24.75 20.0967 24.5129 20.669 24.091 21.091C23.669 21.5129 23.0967 21.75 22.5 21.75C21.9033 21.75 21.331 21.5129 20.909 21.091C20.4871 20.669 20.25 20.0967 20.25 19.5C20.25 18.9033 20.4871 18.331 20.909 17.909C21.331 17.4871 21.9033 17.25 22.5 17.25Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_4_5667">
                  <path d="M0 0H30V24H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>


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

            <p key={e} className='text-white font-light'><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="white" />
            </svg>{e}</p>
          )}
        </div>
      </div>
    </div>
  );
}
