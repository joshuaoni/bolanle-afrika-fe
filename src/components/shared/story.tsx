"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bricolageGrotesque, beatWord } from "@/config/fonts";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { label: "Journey", color: "#E77811" },
  { label: "Legacy", color: "#E77811" },
  { label: "Heritage", color: "#E77811" },
  { label: "Story", color: "#ffb32a" },
] as const;

export const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const pendingIndexRef = useRef<number | null>(null);
  const pendingDirectionRef = useRef(1);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const totalSteps = steps.length;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 100px",
      end: `+=${totalSteps * 60}%`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const index = Math.min(
          totalSteps - 1,
          Math.floor(self.progress * totalSteps),
        );

        if (index === activeRef.current) return;

        if (isAnimatingRef.current) {
          pendingIndexRef.current = index;
          pendingDirectionRef.current = self.direction;
          return;
        }

        animateTo(index, self.direction);
      },
    });

    function animateTo(nextIndex: number, direction: number) {
      if (!textRef.current) return;

      isAnimatingRef.current = true;

      const exitingTo = direction > 0 ? -40 : 40;
      const enteringFrom = direction > 0 ? 40 : -40;

      gsap
        .timeline({
          onComplete: () => {
            isAnimatingRef.current = false;

            const pending = pendingIndexRef.current;
            if (pending !== null && pending !== activeRef.current) {
              pendingIndexRef.current = null;
              animateTo(pending, pendingDirectionRef.current);
              return;
            }
          },
        })
        .to(textRef.current, {
          y: exitingTo,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
        })
        .add(() => {
          activeRef.current = nextIndex;
          setActive(nextIndex);
          gsap.set(textRef.current, { y: enteringFrom, opacity: 0 });
        })
        .to(textRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
    }

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-[30vh] bg-linear-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-linear-to-t from-black to-transparent" />
      </div>

      <section
        ref={containerRef}
        className="relative flex h-screen w-full items-start justify-center overflow-hidden pt-[100px]"
      >
        <div className="relative flex w-full max-w-xl flex-col items-center justify-center gap-6 text-center">
          <p
            className={`${bricolageGrotesque.className} text-sm md:text-[24px] font-semibold tracking-[0.22em] text-zinc-100 sm:text-base`}
          >
            Every Line tells your
          </p>

          <div
            className={`${beatWord.className} relative mt-4 flex h-[80px] w-full items-center justify-center text-3xl font-semibold sm:text-4xl`}
          >
            <h1
              ref={textRef}
              className="absolute md:text-[150px] text-[100px]"
              style={{ color: steps[active].color }}
            >
              {steps[active].label}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
