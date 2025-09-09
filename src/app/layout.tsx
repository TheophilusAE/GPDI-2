import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import SplashProvider from "../components/SplashProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GPDI Persadamas Banjarmasin • Faith, Community, Impact",
  description: "Portofolio modern GPDI Persadamas Banjarmasin: iman, komunitas, dan dampak bagi kota.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "GPDI Persadamas Banjarmasin • Faith, Community, Impact",
    description:
      "Portofolio modern GPDI Persadamas Banjarmasin: iman, komunitas, dan dampak bagi kota.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPDI Persadamas Banjarmasin • Faith, Community, Impact",
    description:
      "Portofolio modern GPDI Persadamas Banjarmasin: iman, komunitas, dan dampak bagi kota.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white text-black px-4 py-2 rounded-md">Lewati ke konten utama</a>
        <SplashProvider>
          <Navbar />
          <main id="main" role="main">{children}</main>
          <Footer />
        </SplashProvider>
      </body>
    </html>
  );
}
