import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/Header/TopBar";
import FooterTop from "@/components/layout/Footer/FooterTop";
import FooterMain from "@/components/layout/Footer/FooterMain";
import FooterBottom from "@/components/layout/Footer/FooterBottom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HYBERWAY - Premium eCommerce Store",
  description:
    "Dotcom store is one of the largest online shopping networks in the world, offering competitive prices and quality products.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        {/* Header */}
        <TopBar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer>
          <FooterTop />
          <FooterMain />
          <FooterBottom />
        </footer>
      </body>
    </html>
  );
}