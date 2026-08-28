import type { Metadata, Viewport } from "next";
import { clinic } from "@/data/clinic";
import { fontSans, fontSerif } from "@/lib/fonts";
import { getSiteTitle } from "@/lib/seo";
import "./globals.css";

const siteTitle = getSiteTitle();

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  applicationName: clinic.name,
  authors: [{ name: clinic.name }],
  creator: clinic.name,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: clinic.name,
    title: siteTitle,
    description: clinic.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: clinic.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F4F0",
  viewportFit: "cover",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      className={`${fontSerif.variable} ${fontSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-dvh bg-ivory font-sans text-taupe antialiased">
        {children}
      </body>
    </html>
  );
}
