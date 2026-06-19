// app/layout.tsx

import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

import "./globals.css";

import ClientLayout from "./client-layout";

import RootLayoutComponent from "components/layout/RootLayout";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import WhatsAppFloat from "components/shared/WhatsAppFloat";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ua-engineering-pte.vercel.app/";

/* -------------------------------------------------------------------------- */
/*                                   METADATA                                 */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "UA Engineering PTE. LTD.",
    template: "%s | UA Engineering",
  },

  description:
    "UA Engineering PTE. LTD. provides renovation, waterproofing, steel works, roofing, electrical, plumbing, aircon, aluminium glazing and maintenance services across Singapore.",

  keywords: [
    "UA Engineering",
    "Singapore Renovation",
    "Waterproofing Singapore",
    "Roof Extension",
    "Steel Works",
    "Electrical Services",
    "Plumbing Services",
    "Aircon Repair",
    "Aluminium Works",
    "Engineering Company Singapore",
  ],

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "UA Engineering PTE. LTD.",
    description:
      "Professional Renovation & Engineering Services Across Singapore.",

    url: siteUrl,
    siteName: "UA Engineering PTE. LTD.",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UA Engineering PTE. LTD.",
    description:
      "Professional Renovation & Engineering Services Across Singapore.",
  },
};

/* -------------------------------------------------------------------------- */
/*                                ROOT LAYOUT                                 */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={josefinSans.variable}>
      <body className="bg-white text-black antialiased">
        <noscript>
          <style>
            {`
              *{
                opacity:1 !important;
                transform:none !important;
                animation:none !important;
              }
            `}
          </style>
        </noscript>

        <RootLayoutComponent>
          <Navbar />
          <main className="">
            <ClientLayout>{children}</ClientLayout>
          </main>
          <Footer />
          <WhatsAppFloat />
        </RootLayoutComponent>
      </body>
    </html>
  );
}
