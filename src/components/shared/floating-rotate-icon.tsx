import Image from "next/image";
import React from "react";

export const FloatingRotateIcon: React.FC = () => (
  <div className="pointer-events-none absolute bottom-6 md:bottom-16 right-6 z-20 flex items-center justify-center">
    <div className="pointer-events-auto rounded-full">
      <Image
        src="/rotate.png"
        alt="Bolanle Afrika rotating emblem"
        width={100}
        height={100}
        className="rounded-full object-contain shadow-md spinning-rotate-icon"
        priority
      />
    </div>
  </div>
);
