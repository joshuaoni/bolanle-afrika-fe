"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import lottieWeb from "lottie-web";
import heroAnimation from "../../../public/lottie.json";
import { FloatingRotateIcon } from "@/components/shared/floating-rotate-icon";
import { bricolageGrotesque } from "@/config/fonts";

export const HeroLottie: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const instance = lottieWeb.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: heroAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    const handleLoaded = () => {
      isLoadedRef.current = true;
    };

    instance.addEventListener("DOMLoaded", handleLoaded);

    const id = window.setInterval(() => {
      setProgress((prev) => {
        if (!isLoadedRef.current) {
          const next = Math.min(prev + 4, 70);
          return next;
        }

        const next = Math.min(prev + 10, 100);

        if (next === 100) {
          window.clearInterval(id);
          window.setTimeout(() => {
            setIsReady(true);
          }, 250);
        }

        return next;
      });
    }, 120);

    return () => {
      instance.removeEventListener("DOMLoaded", handleLoaded);
      instance.destroy();
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden md:h-auto md:aspect-video md:max-w-[1920px] md:mx-auto">
      {/* Lottie canvas */}
      <div ref={containerRef} className="h-full w-full" />

      {/* Branded loading state while Lottie initializes */}
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center">
          <div className="flex flex-col items-center gap-6 text-center text-white">
            <Image
              src="/logo-white.png"
              alt="Bolanle Afrika"
              width={140}
              height={40}
              priority
            />
            {/* <p className={`${bricolageGrotesque.className} text-xs uppercase tracking-[0.35em] text-zinc-300`}>
              Loading your experience
            </p> */}
            <div className="mt-2 h-1 w-40 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <FloatingRotateIcon />
    </div>
  );
};
