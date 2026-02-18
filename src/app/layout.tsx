import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnalyticsGate, CookieBanner } from "./analytics";

import { Providers } from "./providers";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventgearpdx.com"),

  title: {
    default:
      "Event Gear PDX — Presentation Equipment Rental | Portland & Vancouver",
    template: "%s — Event Gear PDX",
  },
  description:
    "Turn-key projector and screen rental for meetings, pitches, and trainings in Portland, OR and Vancouver, WA. Delivery, setup, and on-site support.",
  authors: [{ name: "Event Gear PDX" }],

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    title: "Event Gear PDX — Presentation Equipment Rental",
    description:
      "Turn-key projector and screen rental with delivery, setup, and on-site support in the Pacific Northwest.",
    type: "website",
    images: ["/opengraph-image-p98pqg.png"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";
  const isProdDeployment = process.env.VERCEL_ENV === "production";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="9m21iS8l66LT5GGhFN_-H8hHEkP-f4ekCkIpCaqUs9I"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
          <CookieBanner />
        </Providers>
        <AnalyticsGate gaId={gaId} isProdDeployment={isProdDeployment} />
      </body>
    </html>
  );
}
