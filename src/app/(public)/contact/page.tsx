import React from "react";
import type { Metadata } from "next";
import { ContactInfo } from "@/components/shared/contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bolanle Afrika for inquiries, collaborations, or support.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage: React.FC = () => <ContactInfo />;

export default ContactPage;
