import React from "react";
import Image from "next/image";

export const UnderConstruction: React.FC = () => (
  <div className="relative flex min-h-screen items-center justify-center px-4">
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div className="h-full w-full bg-linear-to-r from-[#E77811] via-[#f89b2a] to-[#ffd057]" />
    </div>

    <div className="relative z-10 flex max-w-xl flex-col items-center gap-6 rounded-2xl border border-white/15 bg-black/40 px-6 py-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur-md sm:px-10 sm:py-12">
      <div className="relative h-24 w-24 sm:h-28 sm:w-28">
        <Image
          src="/window.svg"
          alt="Under construction"
          fill
          className="object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.9)]"
        />
      </div>
      <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Under construction
      </h1>
      <p className="text-sm text-zinc-300 sm:text-base">
        We&apos;re crafting something special here for Bolanle Afrika. Please
        check back soon.
      </p>
      <a
        href="/"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-[#f15b2a] px-5 py-2 text-xs font-medium text-white shadow-md transition hover:bg-[#e04c1e]"
      >
        Back to homepage
      </a>
    </div>
  </div>
);
