import {
  GALLERY_SLOTS,
  HERO_PHOTO,
  SERVICES,
  WORKSHOP_PROFILE,
} from "@/data/workshop";
import { SITE_LAST_MODIFIED, SITE_URL, toAbsoluteUrl } from "@/lib/site";

export const HOME_TITLE =
  "Bengkel Mobil Tua Srandakan, Bantul | Motuba Variation";

export const HOME_DESCRIPTION =
  "Bengkel mobil tua (motuba) di Srandakan, Bantul, Yogyakarta. Servis mesin, karburator, cat, variasi, dan jemput unit. Aktif hari Minggu, chat WA dulu.";

export const OG_IMAGE_PATH = "/images/og-motuba-workshop.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  "Motuba Variation Workshop, bengkel mobil tua di Srandakan, Bantul, Yogyakarta untuk servis, pengecatan, variasi, dan jemput unit.";

export function getWorkshopImageUrls(): string[] {
  return [
    HERO_PHOTO.imageSrc,
    ...GALLERY_SLOTS.map((slot) => slot.imageSrc),
  ].map((src) => toAbsoluteUrl(src));
}

export function buildHomeStructuredData() {
  const workshopId = `${SITE_URL}/#workshop`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const workshopImages = getWorkshopImageUrls();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": workshopId,
        name: WORKSHOP_PROFILE.brandName,
        alternateName: "Bengkel Motuba Srandakan",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: toAbsoluteUrl("/images/logo-motuba-mark.png"),
          width: 288,
          height: 160,
        },
        image: workshopImages,
        description:
          "Bengkel mobil rumahan spesialis mobil tua (motuba) di Srandakan, Bantul, Yogyakarta (Jogja) untuk servis, pengecatan, variasi, dan jemput unit area sekitar.",
        telephone: `+${WORKSHOP_PROFILE.whatsappE164}`,
        hasMap: WORKSHOP_PROFILE.mapsUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jopaten RT 5, Kepunten, Poncosari, Kec. Srandakan",
          addressLocality: "Bantul",
          addressRegion: "Daerah Istimewa Yogyakarta",
          postalCode: "55762",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: WORKSHOP_PROFILE.coordinates.lat,
          longitude: WORKSHOP_PROFILE.coordinates.lng,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: `+${WORKSHOP_PROFILE.whatsappE164}`,
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: ["id"],
          },
        ],
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Kecamatan Srandakan, Bantul",
          },
          {
            "@type": "AdministrativeArea",
            name: "Kabupaten Bantul, Daerah Istimewa Yogyakarta",
          },
          {
            "@type": "Place",
            name: "Jalur Lintas Selatan (JJLS) Bantul",
          },
          {
            "@type": "AdministrativeArea",
            name: "Daerah Istimewa Yogyakarta",
          },
        ],
        knowsAbout: [
          "Servis mobil tua",
          "Perawatan karburator",
          "Pengecatan bodi mobil",
          "Variasi mobil tua",
          "Perapian bodi mobil tua",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Bengkel Motuba Variation Workshop",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              serviceType: service.title,
              description: service.summary,
              provider: { "@id": workshopId },
              areaServed: "Srandakan, Bantul, Daerah Istimewa Yogyakarta",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: WORKSHOP_PROFILE.brandName,
        description: HOME_DESCRIPTION,
        inLanguage: "id-ID",
        publisher: { "@id": workshopId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: SITE_URL,
        name: HOME_TITLE,
        description: HOME_DESCRIPTION,
        inLanguage: "id-ID",
        dateModified: SITE_LAST_MODIFIED,
        isPartOf: { "@id": websiteId },
        about: { "@id": workshopId },
        mainEntity: { "@id": workshopId },
        ...(HERO_PHOTO.imageSrc
          ? {
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: toAbsoluteUrl(HERO_PHOTO.imageSrc),
                width: HERO_PHOTO.width,
                height: HERO_PHOTO.height,
                caption: HERO_PHOTO.alt,
              },
            }
          : {}),
      },
    ],
  };
}
