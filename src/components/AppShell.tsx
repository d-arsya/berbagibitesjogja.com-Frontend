"use client";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";
import { isProtectedRoute } from "@/lib/route";
import { Header } from "./Header";
import SidebarLayout from "./SidebarLayout";
import NextTopLoader from "nextjs-toploader";

const geistSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProtected = isProtectedRoute(pathname);
  const isNewsRoute = pathname?.startsWith("/news");

  if (isNewsRoute) {
    return (
      <html lang="id">
        <body className={`${geistSans.variable} antialiased`}>
          <NextTopLoader showSpinner={false} color="#009ca6" height={3} />
          <Header />
          <main
            className="px-2 md:px-32 md:py-6"
            style={{ backgroundColor: "#effbfc" }}
          >
            {children}
          </main>
          <Footer />
        </body>
      </html>
    );
  }

  return (
    <html lang="id">
      <body className={`${geistSans.variable} antialiased`}>
        <NextTopLoader showSpinner={false} color="#009ca6" height={3} />
        {isProtected ? (
          <>
            <SidebarLayout>{children}</SidebarLayout>
          </>
        ) : (
          <>
            <Header />
            <main className="px-2 md:px-32">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
