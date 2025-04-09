import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google"; // Correct imports
import "./globals.css";

// Initialize Inter as the primary sans-serif font
const inter = Inter({
  variable: "--font-sans", // Maps to your CSS variable
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Initialize Fira_Mono as the monospace font
const firaMono = Fira_Mono({
  weight: ["400", "700"], // Specify weights since Fira Mono requires it
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Comprehensive Metadata for SEO and Sharing
export const metadata: Metadata = {
  title: {
    default: "AutoFixPro | Vehicle Management Made Simple",
    template: "%s | AutoFixPro",
  },
  description:
    "AutoFixPro: Your all-in-one app for vehicle maintenance. Book services, track repairs, and manage your car effortlessly from anywhere in the world. Experience stress-free automotive care with a savannah-inspired twist.",
  keywords: [
    "vehicle management",
    "car repair",
    "auto service",
    "garage app",
    "automotive care",
    "book mechanic",
    "track repairs",
    "savannah theme",
    "AutoFixPro",
  ],
  authors: [{ name: "AutoFixPro Team", url: "https://autofixpro.com" }],
  creator: "AutoFixPro",
  publisher: "AutoFixPro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AutoFixPro | Vehicle Management Made Simple",
    description:
      "Manage your vehicle with ease—book services, track repairs, and stay updated with AutoFixPro. Discover a seamless automotive experience.",
    url: "https://autofixpro.com",
    siteName: "AutoFixPro",
    images: [
      {
        url: "https://autofixpro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoFixPro Savannah-themed vehicle management app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoFixPro | Vehicle Management Made Simple",
    description:
      "Simplify car care with AutoFixPro—book services, track repairs, and more.",
    creator: "@AutoFixPro",
    images: ["https://autofixpro.com/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://autofixpro.com",
    languages: {
      "en-US": "https://autofixpro.com/en",
      "es-ES": "https://autofixpro.com/es",
      "fr-FR": "https://autofixpro.com/fr",
    },
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
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#F5E8C7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${inter.variable} ${firaMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}