import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://sai-varshith.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Janagani Sai Varshith | Backend & AI Systems Engineer",
    template: "%s | Janagani Sai Varshith",
  },
  description:
    "Backend-focused software engineer building scalable Python systems, AI workflows, distributed analytics platforms, and cloud-native infrastructure.",
  keywords: [
    "Janagani Sai Varshith",
    "Python Backend Engineer",
    "AI Backend Engineer",
    "Data Engineer",
    "ML Platform Engineer",
    "FastAPI",
    "Apache Airflow",
    "Apache Spark",
    "Apache Iceberg",
    "Kubernetes",
  ],
  authors: [{ name: "Janagani Sai Varshith" }],
  creator: "Janagani Sai Varshith",
  openGraph: {
    title: "Janagani Sai Varshith | Backend & AI Systems Engineer",
    description:
      "Enterprise-grade portfolio for a backend-focused engineer specializing in AI systems, distributed analytics, and cloud-native infrastructure.",
    url: siteUrl,
    siteName: "Janagani Sai Varshith Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Janagani Sai Varshith portfolio preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janagani Sai Varshith | Backend & AI Systems Engineer",
    description:
      "Backend, AI infrastructure, distributed analytics, and cloud-native engineering portfolio.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#05070d",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Janagani Sai Varshith",
  jobTitle: "Backend Developer / Systems Engineer",
  email: "mailto:saivarshithjanagani@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "India",
  },
  sameAs: [
    "https://www.linkedin.com/in/janagani-sai-varshith/",
    "https://github.com/SaiVarshithh",
  ],
  knowsAbout: [
    "Python backend systems",
    "AI/ML infrastructure",
    "Distributed analytics",
    "Apache Iceberg",
    "Kubernetes",
    "FastAPI",
    "Apache Airflow",
    "Apache Spark",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
