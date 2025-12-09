import React from "react";
import type { Metadata } from "next";
import { UnderConstruction } from "@/components/shared/under-construction";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Bolanle Afrika's upcoming African-inspired art pieces.",
  alternates: {
    canonical: "/products",
  },
};

const ProductsPage: React.FC = () => <UnderConstruction />;

export default ProductsPage;
