"use client";
import {
  Apple,
  Users,
  BarChart3,
  Wallet,
  UserPlus,
  Truck,
  Store,
  FilePlus,
  Building2,
  HandCoins,
  FileText,
} from "lucide-react";
import {
  ReviewCard,
  QuickActionCard,
  HeroCard,
  PartnerCard,
  ActivityItem,
  CampaignCard,
  ChartBarDefault,
  ChartPieDonutText,
  DistributionStats,
} from "./components";

import Link from "next/link";
export default function Page() {
  const reviewDatas = [
    {
      title: "Total Makanan Diselamatkan",
      icon: Apple,
      amount: "1,250 kg",
      stats: "↑ 12% bulan ini",
    },
    {
      title: "Penerima Manfaat",
      icon: Users,
      amount: "3,456",
      stats: "↑ 8% bulan ini",
    },
    {
      title: "Tingkat Aktivitas",
      icon: BarChart3,
      amount: "85%",
      stats: "↑ 5% dari minggu lalu",
    },
    {
      title: "Total Dana Terkumpul",
      icon: Wallet,
      amount: "Rp 45,6jt",
      stats: "↑ 15% bulan ini",
    },
  ];

  const quickActions = [
    {
      icon: UserPlus,
      title: "Tambah Relawan",
      link: "/relawan/tambah",
    },
    {
      icon: Truck,
      title: "Distribusi Baru",
      link: "/distribusi/baru",
    },
    {
      icon: Store,
      title: "Tambah Mitra",
      link: "/mitra/tambah",
    },
    {
      icon: FilePlus,
      title: "Buat Laporan",
      link: "/laporan/buat",
    },
  ];

  const heroesToday = [
    {
      name: "Ahmad Rizki",
      photo: "https://randomuser.me/api/portraits/men/32.jpg", // contoh placeholder
      title: "Relawan Terbaik",
      desc: "20 jam relawan",
    },
    {
      name: "Maya Sari",
      photo: "https://randomuser.me/api/portraits/women/44.jpg", // contoh placeholder
      title: "Kontributor Terbaik",
      desc: "45 kg makanan",
    },
    {
      name: "Warung Tegal",
      photo: Store, // pakai icon karena bukan foto orang
      title: "Mitra Terbaik",
      desc: "120 kg disumbangkan",
    },
    {
      name: "Dimas Prayogo",
      photo: "https://randomuser.me/api/portraits/men/85.jpg", // contoh placeholder
      title: "Koordinator Terbaik",
      desc: "10 distribusi sukses",
    },
  ];

  const latestPartners = [
    {
      name: "Restoran Sumber Rasa",
      icon: Store,
      join: "Bergabung 2 hari lalu",
      desc: "15 kg makanan",
    },
    {
      name: "Hotel Grand Aston",
      icon: Building2,
      join: "Bergabung 3 hari lalu",
      desc: "Rp 5jt & 25 kg makanan",
    },
    {
      name: "Toko Roti Makmur",
      icon: Store,
      join: "Bergabung 5 hari lalu",
      desc: "30 kg roti",
    },
  ];

  const newActivities = [
    {
      icon: HandCoins,
      title: "Donasi Diterima",
      desc: "Rp 2,5jt dari PT. Maju Bersama",
      time: "30 menit yang lalu",
    },
    {
      icon: Truck,
      title: "Distribusi selesai",
      desc: "35 kg makanan telah didistribusikan ke Panti Asuhan Harapan",
      time: "4 jam yang lalu",
    },
    {
      icon: Store,
      title: "Mitra baru",
      desc: "Restoran Padang Sederhana telah bergabung sebagai mitra",
      time: "Kemarin, 15:30",
    },
    {
      icon: Apple,
      title: "Penyelamatan makanan",
      desc: "28 kg makanan diselamatkan dari Pasar Beringharjo",
      time: "Kemarin, 10:15",
    },
    {
      icon: FileText,
      title: "Laporan Keuangan",
      desc: "Laporan bulan Juli telah selesai",
      time: "5 jam yang lalu",
    },
  ];

  const activeCampaigns = [
    {
      title: "Pasar Beringharjo",
      desc: "25 kg diselamatkan hari ini",
      progress: 25,
      status: "Aktif",
    },
    {
      title: "Restoran Padang",
      desc: "12 kg diselamatkan hari ini",
      progress: 15,
      status: "Aktif",
    },
    {
      title: "Supermarket XYZ",
      desc: "18 kg diselamatkan hari ini",
      progress: 10,
      status: "Aktif",
    },
  ];
  const donationReview = [
    { day: "Sunday", amount: 1 },
    { day: "Monday", amount: 25 },
    { day: "Tuesday", amount: 32 },
    { day: "Wednesday", amount: 18 },
    { day: "Thursday", amount: 45 },
    { day: "Friday", amount: 37 },
    { day: "Saturday", amount: 52 },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        {reviewDatas.map((item, i) => (
          <ReviewCard
            key={i}
            title={item.title}
            amount={item.amount}
            stats={item.stats}
            icon={item.icon}
          />
        ))}
      </div>
      <h1 className="font-semibold text-xl my-4 text-gray-900">Quick Action</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
        {quickActions.map((action, i) => (
          <QuickActionCard
            key={i}
            title={action.title}
            link={action.link}
            icon={action.icon}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md my-6">
          <h1 className="font-semibold text-xl mb-6 text-gray-900">
            Statistik Makanan Diselamatkan
          </h1>
          <ChartBarDefault chartData={donationReview} />
        </div>
        <div className="bg-white p-4 rounded-md my-6">
          <h1 className="font-semibold text-xl mb-6 text-gray-900">
            Kampanye Aktif
          </h1>
          {activeCampaigns.map((campaign, i) => (
            <CampaignCard
              key={i}
              title={campaign.title}
              desc={campaign.desc}
              progress={campaign.progress}
              status={campaign.status}
            />
          ))}
          <Link href={""}>
            <h1 className="text-center text-navy text-sm">
              Lihat Semua Kampanye
            </h1>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md my-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl mb-4 text-gray-900">
              Aktivitas Terbaru
            </h1>
            <Link className="text-navy text-sm" href="/">
              Lihat semua
            </Link>
          </div>
          {newActivities.map((act, i) => (
            <ActivityItem
              key={i}
              title={act.title}
              desc={act.desc}
              time={act.time}
              icon={act.icon}
            />
          ))}
        </div>
        <div className="bg-white p-4 rounded-md my-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl mb-4 text-gray-900">
              Distribusi Makanan
            </h1>

            <Link className="text-navy text-sm" href="/">
              Lihat semua
            </Link>
          </div>
          <div className="grid grid-cols-2">
            <ChartPieDonutText />
            <DistributionStats />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 my-6 rounded-md">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl mb-4 text-gray-900">
            Mitra Baru
          </h1>
          <Link className="text-navy text-sm" href="/">
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPartners.map((partner, i) => (
            <PartnerCard
              key={i}
              name={partner.name}
              join={partner.join}
              desc={partner.desc}
              icon={partner.icon}
            />
          ))}
        </div>
      </div>
      <div className="bg-white p-6 my-6 rounded-md">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl mb-4 text-gray-900">
            Food Heroes Bulan Ini
          </h1>
          <Link className="text-navy text-sm" href="/">
            Lihat semua
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6">
          {heroesToday.map((hero, i) => (
            <HeroCard
              key={i}
              name={hero.name}
              title={hero.title}
              desc={hero.desc}
              Photo={hero.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
