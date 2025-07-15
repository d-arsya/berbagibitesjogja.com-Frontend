import { CheckCircle, Heart, Leaf, Speech } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 px-3">
      <div className="rounded-md bg-white shadow-xl p-6">
        <h1 className="font-bold text-2xl">Daftar Mitra</h1>
        <p className="mt-3 font-light">Bergabunglah sebagai mitra Berbagi Bites Jogja untuk berkontribusi dalam mengurangi limbah makanan di Yogyakarta.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="w-full md:col-span-2">
            <h3 className="font-medium">Nama Bisnis/Organisasi*</h3>
            <input type="text" name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full" />
          </div>
          <div className="w-full md:col-span-2">
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
          <div className="w-full md:col-span-2">
            <h3 className="font-medium">Alamat Lengkap*</h3>
            <textarea rows={3} name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full"></textarea>
          </div>
          <div className="w-full md:col-span-2">
            <h3 className="font-medium">Estimasi Makanan Berlebih per Hari*</h3>
            <select name="" id="" className="rounded-md border border-1 p-2 mt-2 w-full">
              <option value="">1 Kg</option>
            </select>
          </div>
          <div className="w-full md:col-span-2">
            <h3 className="font-medium">Jenis Makanan yang Biasa Tersisa *</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
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
        <Link href={'https://wa.me/628986950700'} className="rounded-md text-center bg-navy hover:bg-tosca p-2 text-white font-bold float-end mt-6">Kirim Pendaftaran</Link>
        {/* <button type="submit" className="rounded-md text-center bg-navy hover:bg-tosca p-2 text-white font-bold float-end mt-6">Kirim Pendaftaran</button> */}
      </div>
      <div className="bg-tosca rounded-md p-6">
        <h1 className="font-bold text-2xl text-white">Manfaat Menjadi Mitra</h1>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <Leaf className="text-white" />


          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Mengurangi Limbah</h1>
            <p>Berkontribusi dalam mengurangi limbah makanan dan dampak lingkungan</p>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-x-4 mt-12'>
          <div className='bg-navy p-2 rounded-full w-max h-max aspect-square mt-2'>
            <Heart className="text-white" />



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
            <Speech className="text-white" />




          </div>
          <div className='text-white'>
            <h1 className='font-bold'>Branding</h1>
            <p>Peningkatan citra bisnis sebagai organisasi yang peduli lingkungan dan sosial</p>
          </div>
        </div>
        <h2 className='text-white mt-24 font-medium'>Persyaratan Relawan:</h2>
        <div className='flex flex-col gap-y-2 mt-4'>
          {["Memiliki izin usaha yang sah", "Berlokasi di Yogyakarta", "Memiliki SOP penanganan makanan", "Bersedia menandatangani MoU kerjasama"].map(e =>

            <p key={e} className='text-white font-light'><CheckCircle className="w-4 mr-2 inline" />{e}</p>
          )}

        </div>
      </div>
    </div>
  );
}
