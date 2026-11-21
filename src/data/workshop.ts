export interface WorkshopProfile {
  brandName: string;
  wordmarkTitle: string;
  wordmarkSubtitle: string;
  taglineLocation: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappE164: string;
  mapsUrl: string;
  address: string;
  plusCodeShort: string;
  plusCodeFull: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  routeLandmark: string;
  scheduleSummary: string;
  pickupPolicy: string;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface QuickInfoItem {
  code: string;
  label: string;
  value: string;
  detail: string;
}

export type ServiceSlug = "servis" | "cat" | "variasi" | "jemput";

export interface ServiceItem {
  code: string;
  slug: ServiceSlug;
  title: string;
  summary: string;
  symptomsOrNotes: string[];
  conditionNote: string;
}

export interface HeroPhotoConfig {
  slotCode: string;
  imageSrc: string | null;
  placeholderSrc: string;
  alt: string;
  caption: string;
  aspectLabel: string;
  width: number;
  height: number;
}

export type PhotoAspectRatio = "4/3" | "16/10" | "1/1" | "3/4";

export interface GallerySlot {
  slotCode: string;
  imageSrc: string | null;
  placeholderSrc: string;
  alt: string;
  carModel: string;
  workSummary: string;
  placeholderHint: string;
  aspectRatio: PhotoAspectRatio;
  aspectLabel: string;
  width: number;
  height: number;
  featured?: boolean;
}

export interface GoogleReview {
  author: string;
  rating: number;
  comment: string;
  sourceLabel: string;
}

export const WORKSHOP_PROFILE: WorkshopProfile = {
  brandName: "Motuba Variation Workshop",
  wordmarkTitle: "Motuba Variation",
  wordmarkSubtitle: "Workshop, Srandakan",
  taglineLocation: "Poncosari, Srandakan, Bantul",
  phoneDisplay: "0838-7881-8557",
  phoneHref: "tel:+6283878818557",
  whatsappE164: "6283878818557",
  mapsUrl: "https://maps.app.goo.gl/x7qM7bokkogZkpKh8",
  address:
    "Jopaten RT 5, Kepunten, Poncosari, Kec. Srandakan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55762",
  plusCodeShort: "269Q+RV Poncosari",
  plusCodeFull:
    "269Q+RV Poncosari, Kabupaten Bantul, Daerah Istimewa Yogyakarta",
  coordinates: {
    lat: -7.9804125,
    lng: 110.2397199,
  },
  routeLandmark:
    "Dekat jalur Jl. Kuwaru, pojok ujung desa ambil ke utara masuk kedalam",
  scheduleSummary:
    "Fleksibel sesuai kesediaan waktu lewat janjian WhatsApp, paling aktif buka di hari Minggu.",
  pickupPolicy:
    "Bisa bantu jemput unit selama masih satu daerah dan terjangkau, menyesuaikan kondisi mobil serta jadwal mekanik lewat konfirmasi WhatsApp.",
};

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri Garapan", href: "#garapan" },
  { label: "Cek Keluhan", href: "#keluhan" },
  { label: "Lokasi", href: "#lokasi" },
];

export const QUICK_INFO_ITEMS: readonly QuickInfoItem[] = [
  {
    code: "01",
    label: "Lokasi bengkel",
    value: "Jopaten RT 5, Poncosari, Srandakan",
    detail: "Dekat jalur Jl. Kuwaru, pesisir selatan Bantul.",
  },
  {
    code: "02",
    label: "Jadwal operasional",
    value: "Fleksibel sesuai janjian WA",
    detail: "Paling ramai dan aktif buka tiap hari Minggu.",
  },
  {
    code: "03",
    label: "Jemput unit",
    value: "Tersedia untuk area sekitar",
    detail: "Konfirmasi jarak, kondisi mobil, dan jadwal via WA.",
  },
];

export const SERVICES: readonly ServiceItem[] = [
  {
    code: "01",
    slug: "servis",
    title: "Servis & Perawatan",
    summary:
      "Pengecekan mesin, sistem bahan bakar lawas, pengereman, kaki-kaki, dan kelistrikan ringan agar mobil tua tetap nyaman dipakai harian maupun menyusuri jalur pesisir.",
    symptomsOrNotes: [
      "Tune up berkala, setel karburator, dan pengecekan pengapian",
      "Pemeriksaan rem, kopling, serta kaki-kaki sebelum dipakai perjalanan jauh",
      "Penelusuran kelistrikan dasar seperti lampu, aki, dan pengisian",
    ],
    conditionNote:
      "Estimasi pengerjaan dan kebutuhan komponen dibahas transparan setelah cek langsung atau melihat foto serta video keluhan.",
  },
  {
    code: "02",
    slug: "cat",
    title: "Pengecatan & Perapian",
    summary:
      "Pengecatan panel, perapian bagian bodi yang keropos atau kusam, dan penyegaran tampilan luar agar mobil tua kembali sedap dipandang.",
    symptomsOrNotes: [
      "Perapian panel bodi penyok ringan, baret, atau karat awal",
      "Pengecatan ulang per panel maupun penyegaran warna",
      "Penyelarasan nat pintu, kap, serta dudukan list bodi",
    ],
    conditionNote:
      "Kirim foto bagian bodi dari beberapa sisi lewat WhatsApp agar mekanik bisa memberi gambaran awal sebelum unit dibawa.",
  },
  {
    code: "03",
    slug: "variasi",
    title: "Variasi & Penyesuaian",
    summary:
      "Pemasangan aksesori, peremajaan detail eksterior maupun interior ringan, dan penyesuaian tampilan mobil tua mengikuti selera pemilik.",
    symptomsOrNotes: [
      "Pemasangan aksesori eksterior, spion, lampu tambahan, dan bumper",
      "Perapian trim interior ringan serta kelengkapan kabin",
      "Penyesuaian dudukan atau bracket aksesori lawas",
    ],
    conditionNote:
      "Sebutkan tipe mobil dan barang variasi yang sudah ada atau masih dicari saat mengirim pesan konsultasi.",
  },
  {
    code: "04",
    slug: "jemput",
    title: "Jemput Unit Area Sekitar",
    summary:
      "Opsi penjemputan unit untuk area yang masih satu daerah dan terjangkau dari Poncosari, Srandakan apabila pemilik belum sempat mengantar atau mobil berisiko disetir langsung.",
    symptomsOrNotes: [
      "Melayani area sekitar Poncosari, Srandakan, dan jangkauan terdekat di Bantul",
      "Cocok untuk mobil yang mogok di rumah atau bermasalah di rem dan mesin",
      "Titik lokasi patokan dusun dikirim dulu via WhatsApp",
    ],
    conditionNote:
      "Ketersediaan waktu, jarak tempuh, kondisi mobil (masih bisa jalan atau perlu penanganan khusus), dan penyesuaian biaya disepakati via WhatsApp sebelum mekanik berangkat.",
  },
];

// Panduan pemilik: untuk mengganti foto hero, simpan gambar ke public/images/
// lalu ubah imageSrc menjadi "/images/nama-file.jpg".
export const HERO_PHOTO: HeroPhotoConfig = {
  slotCode: "SLOT HERO",
  imageSrc: "/images/hero-garasi-motuba.jpg",
  placeholderSrc: "/images/placeholder-hero.svg",
  alt: "Suasana garasi Motuba Variation Workshop di Jopaten RT 5, Poncosari, Srandakan dengan unit Suzuki Baleno dan kendaraan lain yang sedang ditangani",
  caption:
    "Suasana garasi dan pengerjaan mobil tua di Jopaten RT 5, Poncosari, Srandakan.",
  aspectLabel: "4:3",
  width: 1200,
  height: 900,
};

// Panduan pemilik: isi slot galeri satu per satu dengan menaruh foto di public/images/
// lalu mengganti imageSrc dari null ke "/images/garapan-01.jpg", dst.
export const GALLERY_SLOTS: readonly GallerySlot[] = [
  {
    slotCode: "SLOT 01",
    imageSrc: "/images/garapan-civic-wonder.jpg",
    placeholderSrc: "/images/placeholder-slot.svg",
    alt: "Honda Civic Wonder hijau dengan kap mesin terbuka saat pengecekan ruang mesin di garasi Motuba Variation Workshop",
    carModel: "Honda Civic Wonder",
    workSummary:
      "Pengecekan ruang mesin dan perawatan rutin mobil tua di garasi Jopaten.",
    placeholderHint: "Foto garapan utama di garasi Jopaten (1:1).",
    aspectRatio: "1/1",
    aspectLabel: "1:1",
    width: 1200,
    height: 1200,
    featured: true,
  },
  {
    slotCode: "SLOT 02",
    imageSrc: "/images/garapan-ganti-kopling.jpg",
    placeholderSrc: "/images/placeholder-slot.svg",
    alt: "Tangan mekanik memegang matahari kopling lama yang aus dengan unit kopling baru di meja bengkel",
    carModel: "Penggantian Matahari Kopling",
    workSummary:
      "Perbandingan komponen matahari kopling lama yang sudah aus dan berkarat dengan unit baru sebelum pemasangan.",
    placeholderHint: "Foto penggantian komponen mekanis (3:4).",
    aspectRatio: "3/4",
    aspectLabel: "3:4",
    width: 900,
    height: 1200,
  },
  {
    slotCode: "SLOT 03",
    imageSrc: "/images/garapan-mesin-karburator.jpg",
    placeholderSrc: "/images/placeholder-slot.svg",
    alt: "Detail ruang mesin mobil tua karburator dengan tutup klep terbuka saat proses servis",
    carModel: "Servis Mesin Karburator",
    workSummary:
      "Pembongkaran tutup klep dan pengecekan karburator serta jalur pengapian mesin mobil tua.",
    placeholderHint: "Foto pengerjaan ruang mesin atau karburator (4:3).",
    aspectRatio: "4/3",
    aspectLabel: "4:3",
    width: 1120,
    height: 840,
  },
  {
    slotCode: "SLOT 04",
    imageSrc: null,
    placeholderSrc: "/images/placeholder-slot.svg",
    alt: "Slot placeholder dokumentasi pengecatan dan perapian bodi Motuba Variation Workshop",
    carModel: "[Menunggu foto pengecatan & perapian bodi]",
    workSummary:
      "Slot khusus dokumentasi pengerjaan dempul, perapian bodi, dan pengecatan panel unit asli di garasi Jopaten.",
    placeholderHint: "Foto proses atau hasil pengecatan panel bodi (4:3).",
    aspectRatio: "4/3",
    aspectLabel: "4:3",
    width: 800,
    height: 600,
  },
];

export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 4.5,
  ratingDisplay: "4,5",
  reviewCount: 2,
  mapsUrl: WORKSHOP_PROFILE.mapsUrl,
};

export const GOOGLE_REVIEWS: readonly GoogleReview[] = [
  {
    author: "Marlen Sutopo",
    rating: 5,
    comment: "Free kopi sepusnya",
    sourceLabel: "Ulasan Google Maps",
  },
  {
    author: "Martalia Kanaka",
    rating: 4,
    comment: "handal mekaniknya..",
    sourceLabel: "Ulasan Google Maps",
  },
];

export const CONSULTATION_NEED_OPTIONS = [
  "Servis & Perawatan",
  "Pengecatan & Perapian",
  "Variasi & Penyesuaian",
  "Belum yakin, mau konsultasi dulu",
] as const;

export type ConsultationNeed = (typeof CONSULTATION_NEED_OPTIONS)[number];

export const CONSULTATION_ARRIVAL_OPTIONS = [
  "Antar sendiri ke bengkel",
  "Tanya jemput unit (area sekitar)",
] as const;

export type ConsultationArrival = (typeof CONSULTATION_ARRIVAL_OPTIONS)[number];

export const CONSULTATION_DAY_OPTIONS = [
  "Hari Minggu (jadwal paling aktif)",
  "Hari lain, janjian dulu via WA",
] as const;

export type ConsultationDay = (typeof CONSULTATION_DAY_OPTIONS)[number];

export const SERVICE_SLUG_TO_CONSULTATION: Record<
  ServiceSlug,
  { need: ConsultationNeed; arrival?: ConsultationArrival }
> = {
  servis: { need: "Servis & Perawatan" },
  cat: { need: "Pengecatan & Perapian" },
  variasi: { need: "Variasi & Penyesuaian" },
  jemput: {
    need: "Belum yakin, mau konsultasi dulu",
    arrival: "Tanya jemput unit (area sekitar)",
  },
};
