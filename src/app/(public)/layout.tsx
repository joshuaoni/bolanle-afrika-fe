import React from "react";
import { MainHeader } from "@/components/shared/main-header";
import { Footer } from "@/components/shared/footer";

interface PublicLayoutProps {
  readonly children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => (
  <main className="min-h-screen w-full overflow-x-hidden bg-transparent text-foreground">
    <section className="relative min-h-screen">
      <MainHeader />
      {children}
    </section>
    <Footer />
  </main>
);

export default PublicLayout;
