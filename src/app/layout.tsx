import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://vbarathportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Barath V — AI & Machine Learning Engineer",
    template: "%s · Barath V",
  },
  description:
    "Barath Velu — AI & Machine Learning Engineer. Production-minded NLP pipelines, supervised ML, and clean Python systems. Open to SDE and ML roles.",
  keywords: [
    "Barath Velu",
    "AI Engineer",
    "Machine Learning",
    "NLP",
    "Python",
    "SDE",
    "portfolio",
  ],
  authors: [{ name: "Barath Velu" }],
  creator: "Barath Velu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Barath Velu",
    title: "Barath V — AI & Machine Learning Engineer",
    description:
      "Production-oriented AI & ML engineer. Python, NLP, supervised ML, MongoDB.",
    images: [{ url: "/assets/barath.png", width: 1200, height: 630, alt: "Barath V" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barath V — AI & Machine Learning Engineer",
    description: "Production-oriented AI & ML engineer. Python, NLP, ML.",
    images: ["/assets/barath.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Barath Velu",
    alternateName: "Barath V",
    jobTitle: "AI & Machine Learning Engineer",
    email: "mailto:barathvelu777@gmail.com",
    url: siteUrl,
    sameAs: ["https://github.com/barathvelu1"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable}`}>
      <body className="min-h-dvh bg-[var(--bg)] text-[var(--fg)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
