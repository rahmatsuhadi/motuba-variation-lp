import type { Metadata, Viewport } from "next";
import {
  Barlow_Condensed,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { WORKSHOP_PROFILE } from "@/data/workshop";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo";
import { GOOGLE_SITE_VERIFICATION, SITE_URL } from "@/lib/site";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161513",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Motuba Variation Workshop",
  },
  description: HOME_DESCRIPTION,
  applicationName: WORKSHOP_PROFILE.brandName,
  authors: [{ name: WORKSHOP_PROFILE.brandName, url: SITE_URL }],
  creator: WORKSHOP_PROFILE.brandName,
  publisher: WORKSHOP_PROFILE.brandName,
  category: "Automotive Repair",
  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "ID-YO",
    "geo.placename": "Srandakan, Bantul, Yogyakarta",
    "geo.position": `${WORKSHOP_PROFILE.coordinates.lat};${WORKSHOP_PROFILE.coordinates.lng}`,
    ICBM: `${WORKSHOP_PROFILE.coordinates.lat}, ${WORKSHOP_PROFILE.coordinates.lng}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${barlowCondensed.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink">{children}</body>
    </html>
  );
}
