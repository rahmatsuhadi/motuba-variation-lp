import type { Metadata, Viewport } from "next";
import {
  Barlow_Condensed,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import {
  GALLERY_SLOTS,
  GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_SUMMARY,
  HERO_PHOTO,
  SERVICES,
  WORKSHOP_PROFILE,
} from "@/data/workshop";
import { GOOGLE_SITE_VERIFICATION, SITE_URL, toAbsoluteUrl } from "@/lib/site";
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
  themeColor: "#f4f0e6",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Motuba Variation | Bengkel Mobil Tua Srandakan, Bantul",
    template: "%s | Motuba Variation Workshop",
  },
  description:
    "Bengkel rumahan spesialis mobil tua (motuba) di Poncosari, Srandakan, Bantul. Servis, cat, variasi, dan jemput unit via janjian WhatsApp. Aktif hari Minggu.",
  applicationName: WORKSHOP_PROFILE.brandName,
  authors: [{ name: WORKSHOP_PROFILE.brandName, url: SITE_URL }],
  creator: WORKSHOP_PROFILE.brandName,
  publisher: WORKSHOP_PROFILE.brandName,
  category: "Automotive Repair",
  keywords: [
    "bengkel motuba bantul",
    "bengkel mobil tua srandakan",
    "bengkel mobil poncosari",
    "motuba variation workshop",
    "servis mobil tua jalur lintas selatan",
    "servis karburator mobil tua bantul",
    "cat bodi mobil tua srandakan",
    "variasi motuba bantul",
    "bengkel buka hari minggu bantul",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Motuba Variation Workshop | Bengkel Mobil Tua Srandakan, Bantul",
    description:
      "Servis mesin, karburator, pengecatan, variasi, dan jemput unit mobil tua di Poncosari, Srandakan, Bantul. Jadwal fleksibel via WhatsApp, paling aktif hari Minggu.",
    url: "/",
    siteName: WORKSHOP_PROFILE.brandName,
    locale: "id_ID",
    type: "website",
    images: HERO_PHOTO.imageSrc
      ? [
          {
            url: HERO_PHOTO.imageSrc,
            width: HERO_PHOTO.width,
            height: HERO_PHOTO.height,
            alt: HERO_PHOTO.alt,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Motuba Variation | Bengkel Mobil Tua Srandakan, Bantul",
    description:
      "Bengkel rumahan spesialis mobil tua di Poncosari, Srandakan, Bantul. Servis, cat, variasi, dan jemput unit via janjian WhatsApp.",
    images: HERO_PHOTO.imageSrc ? [HERO_PHOTO.imageSrc] : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "ID-YO",
    "geo.placename": "Poncosari, Srandakan, Bantul",
    "geo.position": `${WORKSHOP_PROFILE.coordinates.lat};${WORKSHOP_PROFILE.coordinates.lng}`,
    ICBM: `${WORKSHOP_PROFILE.coordinates.lat}, ${WORKSHOP_PROFILE.coordinates.lng}`,
  },
};

const workshopImages = [
  HERO_PHOTO.imageSrc,
  ...GALLERY_SLOTS.map((slot) => slot.imageSrc),
]
  .filter((src): src is string => Boolean(src))
  .map((src) => toAbsoluteUrl(src));

const workshopId = `${SITE_URL}/#workshop`;

const structuredDataJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": workshopId,
      name: WORKSHOP_PROFILE.brandName,
      alternateName: "Bengkel Motuba Srandakan",
      url: SITE_URL,
      logo: toAbsoluteUrl("/images/logo-motuba-mark.png"),
      image: workshopImages,
      description:
        "Bengkel mobil rumahan spesialis mobil tua (motuba) di Jopaten RT 5, Poncosari, Srandakan, Bantul untuk servis, pengecatan, variasi, dan jemput unit area sekitar.",
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
      areaServed: [
        { "@type": "AdministrativeArea", name: "Poncosari, Srandakan, Bantul" },
        { "@type": "AdministrativeArea", name: "Kecamatan Srandakan, Bantul" },
        {
          "@type": "AdministrativeArea",
          name: "Kabupaten Bantul, Daerah Istimewa Yogyakarta",
        },
        { "@type": "Place", name: "Jalur Lintas Selatan (JJLS) Bantul" },
      ],
      knowsAbout: [
        "Servis mobil tua",
        "Perawatan karburator",
        "Pengecatan bodi mobil",
        "Variasi mobil tua",
        "Restorasi motuba",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Bengkel Motuba Variation Workshop",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
          },
        })),
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: GOOGLE_REVIEWS_SUMMARY.rating,
        reviewCount: GOOGLE_REVIEWS_SUMMARY.reviewCount,
        bestRating: 5,
        worstRating: 1,
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
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: WORKSHOP_PROFILE.brandName,
      inLanguage: "id-ID",
      publisher: { "@id": workshopId },
    },
  ],
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
            __html: JSON.stringify(structuredDataJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}
