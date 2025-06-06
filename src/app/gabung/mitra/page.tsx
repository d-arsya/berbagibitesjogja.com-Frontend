export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 px-6">
      <div className="rounded-md bg-white shadow-xl p-6">
        <h1 className="font-bold text-2xl">Daftar Mitra</h1>
        <p className="mt-3 font-light">Bergabunglah sebagai mitra Berbagi Bites Jogja untuk berkontribusi dalam mengurangi limbah makanan di Yogyakarta.</p>
        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="w-full col-span-2">
            <h3 className="font-medium">Nama Bisnis/Organisasi*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full col-span-2">
            <h3 className="font-medium">Jenis Bisnis*</h3>
            <select name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full">
              <option value="">Restoran</option>
            </select>
          </div>
          <div className="w-full">
            <h3 className="font-medium">Nama PIC*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Jabatan PIC*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Email Bisnis*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full">
            <h3 className="font-medium">Nomor Telepon Bisnis*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full col-span-2">
            <h3 className="font-medium">Alamat Lengkap*</h3>
            <textarea rows={3} name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full"></textarea>
          </div>
          <div className="w-full col-span-2">
            <h3 className="font-medium">Estimasi Makanan Berlebih per Hari*</h3>
            <select name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full">
              <option value="">1 Kg</option>
            </select>
          </div>
          <div className="w-full col-span-2">
            <h3 className="font-medium">Jenis Makanan yang Biasa Tersisa *</h3>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {["Nasi/Mie", "Lauk Pauk", "Sayuran", "Roti/Kue", "Buah-buahan", "Lainnya"].map((e) =>
                <div key={e} className="flex flex-row gap-x-1 items-center">
                  <input type="radio" name="hari" id={"hari" + e} value={e} />
                  <label htmlFor={"hari" + e}>{e}</label>
                </div>

              )}

            </div>
          </div>

        </div>
        <div className="flex flex-row gap-x-2 items-start mt-3">
          <input type="checkbox" name="acc" id="acc" className="mt-2 w-6 aspect-square" />
          <label htmlFor="acc" className="text-sm">Saya menyetujui untuk menjadi mitra Berbagi Bites Jogja dan akan mengikuti protokol penanganan makanan yang aman. *</label>
        </div>
        <button type="submit" className="rounded-md text-center bg-navy hover:bg-tosca p-2 text-white font-bold float-end mt-6">Kirim Pendaftaran</button>
      </div>
      <div className="bg-tosca rounded-md p-6">
        <h1 className="font-bold text-2xl text-white">Manfaat Menjadi Mitra</h1>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.75 3.50011C9.06563 3.50011 5.94844 5.91417 4.88906 9.2423C6.46406 8.44542 8.24063 8.00011 10.125 8.00011H14.25C14.6625 8.00011 15 8.33761 15 8.75011C15 9.16261 14.6625 9.50011 14.25 9.50011H13.5H10.125C9.34688 9.50011 8.59219 9.58917 7.86563 9.75323C6.65156 10.0298 5.52187 10.522 4.51875 11.1923C1.79531 13.0064 0 16.1048 0 19.6251V20.3751C0 20.9985 0.501562 21.5001 1.125 21.5001C1.74844 21.5001 2.25 20.9985 2.25 20.3751V19.6251C2.25 17.3423 3.22031 15.2892 4.77188 13.8501C5.7 17.3892 8.92031 20.0001 12.75 20.0001H12.7969C18.9891 19.9673 24 13.8642 24 6.34074C24 4.34386 23.6484 2.44542 23.0109 0.734486C22.8891 0.411048 22.4156 0.425111 22.2516 0.729798C21.3703 2.3798 19.6266 3.50011 17.625 3.50011H12.75Z" fill="white" />
            </svg>


          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Mengurangi Limbah</h1>
            <p>Berkontribusi dalam mengurangi limbah makanan dan dampak lingkungan</p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 24H0V0H24V24Z" stroke="#E5E7EB" />
              <path d="M2.23125 14.0813L10.7016 21.9891C11.0531 22.3172 11.5172 22.5 12 22.5C12.4828 22.5 12.9469 22.3172 13.2984 21.9891L21.7687 14.0813C23.1937 12.7547 24 10.8938 24 8.94844V8.67657C24 5.40001 21.6328 2.60626 18.4031 2.06719C16.2656 1.71094 14.0906 2.40938 12.5625 3.93751L12 4.50001L11.4375 3.93751C9.90938 2.40938 7.73438 1.71094 5.59688 2.06719C2.36719 2.60626 0 5.40001 0 8.67657V8.94844C0 10.8938 0.80625 12.7547 2.23125 14.0813Z" fill="white" />
            </svg>



          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Dampak Sosial</h1>
            <p>Membantu menyediakan makanan untuk yang membutuhkan di Yogyakarta</p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.89059 0.34215C9.60934 0.046837 9.18746 -0.065663 8.79371 0.037462C8.39996 0.140587 8.09527 0.45465 7.99215 0.8484L7.25152 3.77809L4.34527 2.95777C3.95152 2.84527 3.52965 2.95777 3.24371 3.24371C2.95777 3.52965 2.84527 3.95152 2.95777 4.34527L3.77809 7.25152L0.8484 7.99684C0.45465 8.09527 0.145275 8.40465 0.037462 8.7984C-0.0703505 9.19215 0.046837 9.60934 0.34215 9.89059L2.50777 12L0.34215 14.1093C0.046837 14.3906 -0.065663 14.8125 0.037462 15.2062C0.140587 15.6 0.45465 15.9046 0.8484 16.0078L3.77809 16.7484L2.95777 19.6546C2.84527 20.0484 2.95777 20.4703 3.24371 20.7562C3.52965 21.0421 3.95152 21.1546 4.34527 21.0421L7.25152 20.2218L7.99215 23.1515C8.09059 23.5453 8.39996 23.8547 8.79371 23.9625C9.18746 24.0703 9.60465 23.9531 9.89059 23.6625L12 21.4968L14.1093 23.6625C14.3953 23.9531 14.8125 24.0703 15.2062 23.9625C15.6 23.8547 15.9046 23.5453 16.0078 23.1515L16.7484 20.2218L19.6546 21.0421C20.0484 21.1546 20.4703 21.0421 20.7562 20.7562C21.0421 20.4703 21.1546 20.0484 21.0421 19.6546L20.2218 16.7484L23.1515 16.0078C23.5453 15.9093 23.8547 15.6 23.9625 15.2062C24.0703 14.8125 23.9531 14.3953 23.6625 14.1093L21.4968 12L23.6625 9.89059C23.9531 9.60465 24.0703 9.18746 23.9625 8.79371C23.8547 8.39996 23.5453 8.09527 23.1515 7.99215L20.2218 7.25152L21.0421 4.34527C21.1546 3.95152 21.0421 3.52965 20.7562 3.24371C20.4703 2.95777 20.0484 2.84527 19.6546 2.95777L16.7484 3.77809L16.0031 0.8484C15.9046 0.45465 15.5953 0.145275 15.2015 0.037462C14.8078 -0.0703505 14.3906 0.046837 14.1093 0.34215L12 2.50777L9.89059 0.34215Z" fill="white" />
            </svg>



          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Sertifikasi</h1>
            <p>Mendapatkan sertifikat sebagai mitra food rescue dan CSR recognition</p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_7_248)">
                <path d="M22.5 1.49992C22.5 0.895236 22.1344 0.346799 21.5719 0.112424C21.0094 -0.121951 20.3672 0.00929898 19.9359 0.435861L17.8922 2.4843C15.6422 4.7343 12.5906 5.99992 9.40781 5.99992H9H7.5H3C1.34531 5.99992 0 7.34524 0 8.99992V13.4999C0 15.1546 1.34531 16.4999 3 16.4999V22.4999C3 23.3296 3.67031 23.9999 4.5 23.9999H7.5C8.32969 23.9999 9 23.3296 9 22.4999V16.4999H9.40781C12.5906 16.4999 15.6422 17.7655 17.8922 20.0155L19.9359 22.0593C20.3672 22.4905 21.0094 22.6171 21.5719 22.3827C22.1344 22.1484 22.5 21.6046 22.5 20.9952V14.0812C23.3719 13.6687 24 12.5577 24 11.2499C24 9.94211 23.3719 8.83117 22.5 8.41867V1.49992ZM19.5 5.09524V11.2499V17.4046C16.7438 14.8968 13.1484 13.4999 9.40781 13.4999H9V8.99992H9.40781C13.1484 8.99992 16.7438 7.60305 19.5 5.09524Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_7_248">
                  <path d="M0 0H24V24H0V0Z" fill="white" />
                </clipPath>
              </defs>
            </svg>




          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Branding</h1>
            <p>Peningkatan citra bisnis sebagai organisasi yang peduli lingkungan dan sosial</p>
          </div>
        </div>
        <h2 className='text-white mt-24 font-medium'>Persyaratan Relawan:</h2>
        <div className='flex flex-col gap-y-2 mt-4'>
          {["Memiliki izin usaha yang sah", "Berlokasi di Yogyakarta", "Memiliki SOP penanganan makanan", "Bersedia menandatangani MoU kerjasama"].map(e =>

            <p key={e} className='text-white font-light'><svg className='inline mr-2' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3625 0.293945C14.7531 0.68457 14.7531 1.31895 14.3625 1.70957L6.36252 9.70957C5.9719 10.1002 5.33752 10.1002 4.9469 9.70957L0.946899 5.70957C0.556274 5.31895 0.556274 4.68457 0.946899 4.29395C1.33752 3.90332 1.9719 3.90332 2.36252 4.29395L5.65627 7.58457L12.95 0.293945C13.3406 -0.0966797 13.975 -0.0966797 14.3657 0.293945H14.3625Z" fill="white" />
            </svg>{e}</p>
          )}

        </div>
      </div>
    </div>
  );
}
