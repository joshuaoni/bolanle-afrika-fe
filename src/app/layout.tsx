import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "./providers";
import { geistSans, geistMono } from "@/config/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://bolanleafrika.com"),
  title: {
    default: "Bolanle Afrika – Every Line Tells Your Story",
    template: "%s | Bolanle Afrika",
  },
  description:
    "Premium African-inspired art pieces where every line tells your story.",
  openGraph: {
    title: "Bolanle Afrika – Every Line Tells Your Story",
    description:
      "Premium African-inspired art pieces where every line tells your story.",
    url: "/",
    siteName: "Bolanle Afrika",
    images: [
      {
        url: "/rotate.png",
        width: 1920,
        height: 1080,
        alt: "Bolanle Afrika hero artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolanle Afrika – Every Line Tells Your Story",
    description:
      "Premium African-inspired art pieces where every line tells your story.",
    images: ["/rotate.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
