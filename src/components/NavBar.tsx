"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/navigation";

type NavBarProps = {
  activeLabel?: string;
};

export function NavBar({ activeLabel }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const resolvedActive =
    activeLabel ??
    navLinks.find((link) => link.href === pathname)?.label ??
    (pathname === "/" ? "DOMAINS" : undefined);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0b]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-9 w-[140px] shrink-0 sm:h-10 sm:w-[160px]">
          <Image
            src="/images/logo-full.png"
            alt="Cherry+ Network"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive = link.label === resolvedActive;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative font-[family-name:var(--font-inter)] text-[13px] font-black tracking-wide transition-colors ${
                  isActive
                    ? "text-[#dc143c] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-[#dc143c]"
                    : "text-white hover:text-[#dc143c]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#join"
            className="hidden rounded-md bg-[#dc143c] px-4 py-2 font-[family-name:var(--font-inter)] text-sm font-black tracking-wide text-white transition hover:bg-[#b81032] sm:inline-flex"
          >
            JOIN NOW
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#0b0b0b] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = link.label === resolvedActive;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-[family-name:var(--font-inter)] text-sm font-black ${
                    isActive ? "text-[#dc143c]" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-md bg-[#dc143c] px-4 py-2 font-[family-name:var(--font-inter)] text-sm font-black text-white"
            >
              JOIN NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
