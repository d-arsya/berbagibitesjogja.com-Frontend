'use client';
import React, { useState } from 'react';
import FotoMakan from 'public/makan.png';
import VisaLogo from 'public/svg/visa.svg';
import MasterCardLogo from 'public/svg/mastercard.svg';
import GopayLogo from 'public/svg/gopay.svg';
import Image from 'next/image';

// Define the type for form data
interface DonationFormData {
  jenisMakanan?: string;
  deskripsiMakanan?: string;
  jumlahPorsi?: number | '';
  tanggalPengambilan?: string;
  waktuPengambilan?: string;
  alamatPengambilan?: string;
  namaLengkap: string;
  nomorTelepon: string;
  email?: string;
  jumlahDonasi?: number | '';
  catatanTambahan?: string;
  pesanTambahan?: string;
}

const DonationForm: React.FC = () => {
  const [donationType, setDonationType] = useState<'dana' | 'makanan'>('makanan');
  const [formData, setFormData] = useState<DonationFormData>({
    jenisMakanan: '',
    deskripsiMakanan: '',
    jumlahPorsi: '',
    tanggalPengambilan: '',
    waktuPengambilan: '',
    alamatPengambilan: '',
    namaLengkap: '',
    nomorTelepon: '',
    email: '',
    jumlahDonasi: '',
    catatanTambahan: '',
    pesanTambahan: '',
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className='flex flex-col md:flex-row gap-8 justify-center min-h-screen pb-12'>
      {/* Left Section: Form */}
      <div className='flex-1 bg-white p-6 rounded-lg shadow-md max-w-lg w-full'>
        <h1 className='text-2xl font-bold mb-4'>Jenis Donasi</h1>
        <div className='flex space-x-4 mb-6'>
          <button
            className={`flex-1 py-2 rounded ${donationType === 'dana' ? 'bg-teal-500 text-white' : 'bg-gray-200'
              }`}
            onClick={() => setDonationType('dana')}
          >
            Dana
          </button>
          <button
            className={`flex-1 py-2 rounded ${donationType === 'makanan' ? 'bg-teal-500 text-white' : 'bg-gray-200'
              }`}
            onClick={() => setDonationType('makanan')}
          >
            Makanan
          </button>
        </div>

        {donationType === 'makanan' && (
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div className='bg-teal-50 p-4 rounded border border-teal-200'>
              <p className='text-teal-700 font-medium'>Pastikan makanan yang didonasikan:</p>
              <ul className='list-disc list-inside text-teal-700 text-sm'>
                <li>Masih layak konsumsi</li>
                <li>Belum melewati tanggal kedaluwarsa</li>
                <li>Dalam kemasan yang baik</li>
              </ul>
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Jenis Makanan</label>
              <select
                name='jenisMakanan'
                value={formData.jenisMakanan}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
              >
                <option value=''>Pilih jenis makanan</option>
                <option value='Makanan Siap Saji'>Makanan Siap Saji</option>
                <option value='Bahan Makanan'>Bahan Makanan</option>
                <option value='Lainnya'>Lainnya</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Deskripsi Makanan</label>
              <textarea
                name='deskripsiMakanan'
                value={formData.deskripsiMakanan}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
                placeholder='Jelaskan detail makanan yang akan didonasikan'
              ></textarea>
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Perkiraan Jumlah Porsi</label>
              <input
                type='number'
                name='jumlahPorsi'
                value={formData.jumlahPorsi}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
                placeholder='Masukkan jumlah porsi'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Tanggal Pengambilan</label>
              <input
                type='date'
                name='tanggalPengambilan'
                value={formData.tanggalPengambilan}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Waktu Pengambilan</label>
              <select
                name='waktuPengambilan'
                value={formData.waktuPengambilan}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
              >
                <option value=''>Pilih waktu pengambilan</option>
                <option value='09:00 - 11:00'>09:00 - 11:00</option>
                <option value='11:00 - 13:00'>11:00 - 13:00</option>
                <option value='13:00 - 15:00'>13:00 - 15:00</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Alamat Pengambilan</label>
              <textarea
                name='alamatPengambilan'
                value={formData.alamatPengambilan}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
                placeholder='Masukkan alamat lengkap'
              ></textarea>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-1'>Nama Lengkap</label>
                <input
                  type='text'
                  name='namaLengkap'
                  value={formData.namaLengkap}
                  onChange={handleChange}
                  className='w-full border rounded px-3 py-2'
                  placeholder='Masukkan nama lengkap'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1'>Nomor Telepon</label>
                <input
                  type='tel'
                  name='nomorTelepon'
                  value={formData.nomorTelepon}
                  onChange={handleChange}
                  className='w-full border rounded px-3 py-2'
                  placeholder='Masukkan nomor telepon'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Catatan Tambahan (Opsional)</label>
              <textarea
                name='catatanTambahan'
                value={formData.catatanTambahan}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
                placeholder='Informasi tambahan yang perlu kami ketahui'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-teal-500 text-white py-2 rounded font-medium'
            >
              Ajukan Donasi Makanan
            </button>
          </form>
        )}

        {donationType === 'dana' && (
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium mb-1'>Jumlah Donasi</label>
              <div className='flex space-x-4'>
                <button
                  type='button'
                  className='bg-teal-100 text-teal-700 px-4 py-2 rounded flex-1'
                  onClick={() => setFormData((prev) => ({ ...prev, jumlahDonasi: 50000 }))}
                >
                  Rp 50.000
                </button>
                <button
                  type='button'
                  className='bg-teal-100 text-teal-700 px-4 py-2 rounded flex-1'
                  onClick={() => setFormData((prev) => ({ ...prev, jumlahDonasi: 100000 }))}
                >
                  Rp 100.000
                </button>
                <button
                  type='button'
                  className='bg-teal-100 text-teal-700 px-4 py-2 rounded flex-1'
                  onClick={() => setFormData((prev) => ({ ...prev, jumlahDonasi: 200000 }))}
                >
                  Rp 200.000
                </button>
              </div>
              <input
                type='number'
                name='jumlahDonasi'
                value={formData.jumlahDonasi || ''}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2 mt-2'
                placeholder='Jumlah Lainnya'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Nama Lengkap</label>
              <input
                type='text'
                name='namaLengkap'
                value={formData.namaLengkap}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
                placeholder='Masukkan nama lengkap'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email || ''}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
                placeholder='Masukkan email'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Nomor Telepon</label>
              <input
                type='tel'
                name='nomorTelepon'
                value={formData.nomorTelepon}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
                placeholder='Masukkan nomor telepon'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>Pesan (Opsional)</label>
              <textarea
                name='pesanTambahan'
                value={formData.pesanTambahan || ''}
                onChange={handleChange}
                className='w-full border rounded px-3 py-2'
                placeholder='Tulis pesan Anda'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-teal-500 text-white py-2 rounded font-medium'
            >
              Donasi Sekarang
            </button>
          </form>
        )}
      </div>

        
      {/* Right Section: Impact */}


      {donationType === 'makanan' && (
        <div className='flex-1 bg-teal-900 text-white p-6 rounded-lg shadow-md max-w-lg w-full'>
          <h2 className='text-xl font-bold mb-4'>Dampak Donasi Anda</h2>
          <ul className='space-y-4'>
            <li>
              <div className='bg-teal-800 p-4 rounded-lg'>
                <p className='font-bold text-lg'>1.2 Juta+ Porsi</p>
                <p className='text-sm'>Makanan telah diselamatkan</p>
              </div>
            </li>
            <li>
              <div className='bg-teal-800 p-4 rounded-lg'>
                <p className='font-bold text-lg'>50.000+ Penerima</p>
                <p className='text-sm'>Manfaat bantuan makanan</p>
              </div>
            </li>
            <li>
              <div className='bg-teal-800 p-4 rounded-lg'>
                <p className='font-bold text-lg'>200+ Mitra</p>
                <p className='text-sm'>Donatur makanan aktif</p>
              </div>
            </li>
          </ul>
          <div className='mt-6 bg-teal-800 p-6 rounded-lg'>
            <p className='italic text-sm text-white'>
              &quot;Setiap donasi makanan yang Anda berikan tidak hanya menyelamatkan makanan dari pemborosan, tetapi juga memberikan harapan dan bantuan nyata bagi mereka yang membutuhkan.&quot;
            </p>
            <div className='flex items-center mt-4'>
              <Image
                src={FotoMakan}
                alt='Bu Ika'
                className='w-12 h-12 rounded-full'
              />
              <div className='ml-4'>
                <p className='font-bold text-white'>Bu Ika</p>
                <p className='text-sm text-teal-200'>Koordinator Program BBJ</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {donationType === 'dana' && (
        <div className='flex-1 bg-teal-900 text-white p-6 rounded-lg shadow-md max-w-lg w-full'>
          <h2 className='text-xl font-bold mb-4'>Donasi Anda Berdampak</h2>
          <ul className='space-y-4'>
            <li>
              <div className='bg-teal-800 p-4 rounded-lg'>
                <p className='font-bold text-lg'>Rp 50.000</p>
                <p className='text-sm'>Membantu menyelamatkan dan mendistribusikan 10 porsi makanan</p>
              </div>
            </li>
            <li>
              <div className='bg-teal-800 p-4 rounded-lg'>
                <p className='font-bold text-lg'>Rp 100.000</p>
                <p className='text-sm'>Mendukung biaya transportasi untuk satu rute pengambilan makanan</p>
              </div>
            </li>
            <li>
              <div className='bg-teal-800 p-4 rounded-lg'>
                <p className='font-bold text-lg'>Rp 200.000</p>
                <p className='text-sm'>
                  Membiayai peralatan penyimpanan makanan yang aman dan bebas kontaminan
                </p>
              </div>
            </li>
          </ul>
          <div className='grid grid-cols-2 gap-4 mt-6'>
            <div className='bg-teal-800 p-4 rounded-lg'>
              <p className='font-bold text-lg'>Total Makanan Terselamatkan</p>
              <p className='text-2xl'>12,450 kg</p>
            </div>
            <div className='bg-teal-800 p-4 rounded-lg'>
              <p className='font-bold text-lg'>Penerima Manfaat</p>
              <p className='text-2xl'>5,230 orang</p>
            </div>
          </div>
          <div className='mt-6'>
            <p className='font-medium'>Metode Pembayaran:</p>
            <div className='flex space-x-4 mt-2'>
              <Image src={VisaLogo} alt='Visa' className='h-8' />
              <Image src={MasterCardLogo} alt='MasterCard' className='h-8' />
              <Image src={GopayLogo} alt='Google Pay' className='h-8' />
            </div>
          </div>
        </div>)}

    </div>
  );
};

export default DonationForm;