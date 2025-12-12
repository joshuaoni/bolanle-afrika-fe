import type { Metadata } from "next";
import { HeroLottie } from "@/components/shared/hero-lottie";
import { Story } from "@/components/shared/story";

export const metadata: Metadata = {
  title: "Home",
  description: "Bolanle Afrika – premium African-inspired art pieces.",
  alternates: {
    canonical: "/",
  },
};

const HomePage = () => (
  <>
    <HeroLottie />
    <Story />
  </>
);

export default HomePage;
