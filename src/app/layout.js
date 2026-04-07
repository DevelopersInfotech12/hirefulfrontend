import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";   // ✅ added

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Hireful - Connecting Talent with Opportunity",
  description: "Hireful is a modern hiring platform that connects talented professionals with top companies, streamlining recruitment with smart matching, seamless applications, and efficient hiring solutions.",
  icons: {
    icon: "/images/Kecicon.jpeg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />

        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KL47MGYKZX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KL47MGYKZX');
          `}
        </Script>
      </body>
    </html>
  );
}