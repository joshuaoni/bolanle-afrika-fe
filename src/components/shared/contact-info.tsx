import React from "react";
import { siteContact } from "@/config/site";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0 text-zinc-400"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0 text-zinc-400"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ContactInfo: React.FC = () => (
  <div className="relative flex min-h-screen items-center justify-center px-4 pt-24">
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <div className="h-full w-full bg-linear-to-r from-[#E77811] via-[#f89b2a] to-[#ffd057]" />
    </div>

    <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6 rounded-2xl border border-white/15 bg-black/40 px-6 py-10 text-center shadow-[0_24px_60px_rgba(0,0,0,0.65)] backdrop-blur-md sm:px-10 sm:py-12">
      <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Contact Us
      </h1>
      <p className="text-sm text-zinc-300 sm:text-base">
        Reach out for inquiries, collaborations, or support.
      </p>

      <div className="flex w-full flex-col gap-4">
        <a
          href={siteContact.phone.href}
          className="flex items-center gap-4 rounded-xl border border-white/20 px-5 py-4 text-left text-white transition hover:bg-white/10"
        >
          <PhoneIcon />
          <div>
            <span className="block text-xs uppercase tracking-widest text-zinc-400">
              Phone
            </span>
            <span className="mt-1 block text-lg font-medium">
              {siteContact.phone.display}
            </span>
          </div>
        </a>

        <a
          href={siteContact.instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-xl border border-white/20 px-5 py-4 text-left text-white transition hover:bg-white/10"
        >
          <InstagramIcon />
          <div>
            <span className="block text-xs uppercase tracking-widest text-zinc-400">
              Instagram
            </span>
            <span className="mt-1 block text-lg font-medium">
              @{siteContact.instagram.handle}
            </span>
          </div>
        </a>
      </div>

      <a
        href="/"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-[#f15b2a] px-5 py-2 text-xs font-medium text-white shadow-md transition hover:bg-[#e04c1e]"
      >
        Back to homepage
      </a>
    </div>
  </div>
);
