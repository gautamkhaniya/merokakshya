import type { Metadata } from "next";
import "./globals.css";
import Umami from "@/components/auth/Umami";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { DeviceFingerprint } from "@/components/auth/DeviceFingerprint";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/core/Footer";
import { Poppins, Lexend, Montserrat, Roboto, Inter } from "next/font/google";
import { ReactLenis } from "@/utils/lenis";
import { Toaster } from "@/components/ui/sonner";
import MainNav from "@/components/core/MainNav";
import CrossableBanner from "@/components/core/CrossableBanner";
import Head from "next/head";
import { ThemeInitScript } from "@/components/ui/ThemeInitScript";
import { GoogleAnalytics } from "@next/third-parties/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lexend",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_WEBSITE_URL || "http://stag.merokakshya.in",
  ),
  title: {
    default: "Mero Kakshya - Study Smarter with AI-Powered Learning",
    template: "%s | Mero Kakshya",
  },
  description:
    "Transform your learning experience with Mero Kakshya - Access comprehensive study notes, interactive flashcards, AI-powered quizzes, and personalized study assistance. Join thousands of students achieving academic excellence.",
  keywords: [
    "study notes",
    "flashcards",
    "AI learning",
    "education",
    "student resources",
    "academic notes",
    "quiz platform",
    "study tools",
    "Mero Kakshya",
    "Study smarter",
    "Engineering notes",
    "B.Tech notes",
    "College resources",
    "Semester notes",
    "PYQs",
    "Flashcards",
    "Quick learning",
    "Exam preparation",
    "AI-powered study",
    "Learning resources",
    "Simplified concepts",
    "Organized notes",
    "Efficient study tools",
    "IAAS",
    "notesera",
    "merokakshya notes",
    "b.tech notes",
    "b.tech first year notes",
    "b.tech second year notes",
    "b.tech third year notes",
    "b.tech fourth year notes",
    "b.tech semester notes",
    "b.tech semester 1 notes",
    "b.tech semester 2 notes",
    "b.tech semester 3 notes",
    "b.tech semester 4 notes",
    "b.tech semester 5 notes",
    "b.tech semester 6 notes",
    "b.tech semester 7 notes",
    "b.tech semester 8 notes",
  ],
  authors: [{ name: "@ramxcodes" }],
  creator: "Mero Kakshya",
  publisher: "Mero Kakshya",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "education",
  openGraph: {
    title: "Mero Kakshya - Study Smarter with AI-Powered Learning",
    description:
      "Transform your learning experience with Mero Kakshya - Access comprehensive study notes, interactive flashcards, AI-powered quizzes, and personalized study assistance. Join thousands of students achieving academic excellence.",
    url: "/",
    siteName: "Mero Kakshya",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Mero Kakshya - Study Smarter with AI-Powered Learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mero Kakshya - Study Smarter with AI-Powered Learning",
    description:
      "Transform your learning experience with Mero Kakshya - Access comprehensive study notes, interactive flashcards, AI-powered quizzes, and personalized study assistance.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        {process.env.NEXT_PUBLIC_ENABLE_UMAMI === "true" && <Umami />}
        <ReactLenis root>
          <Head>
            <ThemeInitScript />
          </Head>
          <body
            className={`${poppins.variable} ${lexend.variable} ${montserrat.variable} ${roboto.variable} ${inter.variable}`}
          >
            <DeviceFingerprint />
            <ThemeProvider defaultTheme="light" storageKey="notes-buddy-theme">
              <MainNav />
              {children}
              <CrossableBanner />
              <Toaster />
              <Footer />
            </ThemeProvider>
          </body>
          <GoogleAnalytics gaId="G-4NRR52WMZ2" />
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
