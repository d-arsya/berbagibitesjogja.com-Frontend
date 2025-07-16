import AppShell from "@/components/AppShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Berbagi Bites Jogja",
    template: "%s | Berbagi Bites Jogja",
  },
  description:
    "Berbagi Bites Jogja (BBJ) adalah Gerakan food rescue pertama di Jogja. Bergerak mengatasi Food Waste melalui Food Rescue dan Food Bank di wilayah Yogyakarta",
  metadataBase: new URL("https://berbagibitesjogja.com"),
  openGraph: {
    title: "Berbagi Bites Jogja",
    siteName: "Berbagi Bites Jogja",
    description:
      "Berbagi Bites Jogja (BBJ) adalah Gerakan food rescue pertama di Jogja. Bergerak mengatasi Food Waste melalui Food Rescue dan Food Bank di wilayah Yogyakarta",
    url: "https://berbagibitesjogja.com",
    type: "website",
    images: [
      {
        url: "/shareable-card-preview.jpg",
        alt: "Berbagi Bites Jogja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berbagi Bites Jogja",
    description:
      "Berbagi Bites Jogja (BBJ) adalah Gerakan food rescue pertama di Jogja. Bergerak mengatasi Food Waste melalui Food Rescue dan Food Bank di wilayah Yogyakarta",
    images: ["/shareable-card-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell>{children}</AppShell>;
}
