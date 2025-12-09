import React from "react";
import type { Metadata } from "next";
import { UnderConstruction } from "@/components/shared/under-construction";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bolanle Afrika and our African-inspired art pieces.",
  alternates: {
    canonical: "/about",
  },
};

const AboutPage: React.FC = () => <UnderConstruction />;

export default AboutPage;
