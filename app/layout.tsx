import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { company } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: "Elite Processing Team | Third-Party Loan Processing",
  description:
    "Elite Processing Team LLC is a third-party loan processing company helping mortgage brokers expand their business with quick, easy transactions. NMLS #2186494.",
  alternates: { canonical: "/" },
  keywords: [
    "third-party loan processing",
    "contract loan processor",
    "mortgage processing",
    "loan officer support",
    "Elite Processing Team",
  ],
  openGraph: {
    title: "Elite Processing Team",
    description:
      "An easy solution for all mortgage brokers to expand their business.",
    type: "website",
    url: company.siteUrl,
    siteName: company.legalName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Processing Team",
    description:
      "An easy solution for all mortgage brokers to expand their business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.legalName,
    description:
      "Third-party loan processing company helping mortgage brokers expand their business.",
    url: company.siteUrl,
    telephone: company.phone,
    email: company.email,
    image: `${company.siteUrl}/logo.png`,
    areaServed: "United States",
    sameAs: [company.social.facebook, company.social.instagram],
    identifier: { "@type": "PropertyValue", name: "NMLS", value: company.nmls },
  };

  // Set the theme class before first paint to avoid a flash of the wrong theme.
  const noFlash = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
