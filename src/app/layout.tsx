import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://eventgearpdx.vercel.app"),

  title: {
    default: "PresentPro — Presentation Equipment Rental | Portland & Vancouver",
    template: "%s — PresentPro",
  },
  description:
    "Turn-key projector and screen rental for meetings, pitches, and trainings in Portland, OR and Vancouver, WA. Delivery, setup, and on-site support.",
  authors: [{ name: "PresentPro" }],

  icons: {
    icon: "/favicon.svg",
  },

  openGraph: {
    title: "PresentPro — Presentation Equipment Rental",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
