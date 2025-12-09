import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const beatWord = localFont({
  src: [
    {
      path: "../../public/Beat-Word.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Beat-Word.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-beat-word",
  display: "swap",
});
