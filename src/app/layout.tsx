import type { Metadata } from "next";
import {
  Barlow_Condensed,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import {
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_SUMMARY,
  WORKSHOP_PROFILE,
} from "@/data/workshop";
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

export const metadata: Metadata = {
  title:
    "Motuba Variation Workshop | Bengkel Spesialis Mobil Tua di Poncosari, Srandakan, Bantul",
  description:
    "Bengkel rumahan spesialis mobil tua (motuba) di Jopaten RT 5, Poncosari, Srandakan, Bantul. Melayani servis, pengecatan, variasi, dan jemput unit area sekitar dengan jadwal fleksibel lewat janjian WhatsApp.",
  keywords: [
    "bengkel motuba bantul",
    "bengkel mobil tua srandakan",
    "bengkel poncosari",
    "motuba variation workshop",
    "servis mobil tua pesisir selatan",
    "bengkel buka hari minggu bantul",
  ],
  openGraph: {
    title: "Motuba Variation Workshop | Garasi Motuba Jalur Pesisir Selatan",
    description:
      "Servis, cat, dan variasi mobil tua di Jopaten RT 5, Poncosari, Srandakan, Bantul. Jadwal fleksibel via WhatsApp, paling aktif di hari Minggu.",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const autoRepairJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: WORKSHOP_PROFILE.brandName,
  description:
    "Bengkel mobil rumahan spesialis mobil tua (motuba) untuk servis, pengecatan, variasi, dan layanan jemput unit area sekitar Poncosari, Srandakan, Bantul.",
  telephone: `+${WORKSHOP_PROFILE.whatsappE164}`,
  hasMap: WORKSHOP_PROFILE.mapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jopaten RT 5, Kepunten, Poncosari",
    addressLocality: "Kec. Srandakan, Kabupaten Bantul",
    addressRegion: "Daerah Istimewa Yogyakarta",
    postalCode: "55762",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: WORKSHOP_PROFILE.coordinates.lat,
    longitude: WORKSHOP_PROFILE.coordinates.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_REVIEWS_SUMMARY.rating,
    reviewCount: GOOGLE_REVIEWS_SUMMARY.reviewCount,
  },
  review: GOOGLE_REVIEWS.map((item) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: item.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: item.rating,
      bestRating: 5,
    },
    reviewBody: item.comment,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${barlowCondensed.variable} ${plusJakartaSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-ink">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD with escaped '<' per Next.js guide
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(autoRepairJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
