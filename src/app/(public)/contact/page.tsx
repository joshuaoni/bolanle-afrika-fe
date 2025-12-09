import React from "react";
import type { Metadata } from "next";
import { UnderConstruction } from "@/components/shared/under-construction";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bolanle Afrika for inquiries, collaborations, or support.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage: React.FC = () => <UnderConstruction />;

export default ContactPage;
