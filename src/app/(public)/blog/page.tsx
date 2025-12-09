import React from "react";
import type { Metadata } from "next";
import { UnderConstruction } from "@/components/shared/under-construction";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories and inspiration from Bolanle Afrika.",
  alternates: {
    canonical: "/blog",
  },
};

const BlogPage: React.FC = () => <UnderConstruction />;

export default BlogPage;
