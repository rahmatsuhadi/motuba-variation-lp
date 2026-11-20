import type { MetadataRoute } from "next";
import { WORKSHOP_PROFILE } from "@/data/workshop";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: WORKSHOP_PROFILE.brandName,
    short_name: WORKSHOP_PROFILE.wordmarkTitle,
    description:
      "Bengkel mobil rumahan spesialis mobil tua (motuba) untuk servis, pengecatan, variasi, dan jemput unit di Poncosari, Srandakan, Bantul.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e6",
    theme_color: "#f4f0e6",
    lang: "id",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
