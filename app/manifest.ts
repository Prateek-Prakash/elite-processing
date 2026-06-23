import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.legalName,
    short_name: "Elite Processing",
    description:
      "Third-party loan processing for mortgage brokers. NMLS #" + company.nmls,
    start_url: "/",
    display: "standalone",
    background_color: "#fff5fa",
    theme_color: "#e91e8c",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
