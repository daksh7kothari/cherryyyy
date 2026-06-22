import Image from "next/image";
import Link from "next/link";
import { SmokeLayer } from "@/components/SmokeLayer";
import { heroMarqueeItems } from "@/data/homepage";

const HERO_TITLE_SRC = "/images/4023c2c80f4953492c11f5958ddf2c5957f437d9.svg";
const HERO_HALFTONE_SRC =
  "/images/339e21d1ed659d4f344407b5800905de62c659b2.png";

export function HomeHero() {
  const repeatedItems = [...heroMarqueeItems, ...heroMarqueeItems];

  return (
    <section
      id="top"
      className="relative overflow-hidden border border-[#fc0162]/35 bg-[#120406] min-h-[100vh]"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={HERO_HALFTONE_SRC}
          alt=""
          fill
          className="object-cover opacity-30"
          
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/10 via-transparent to-[#0b0b0b]/75" />
      </div>

      {/* <SmokeLayer variant="hero" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-18 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-10">
        <div className="mx-auto flex h-10 max-w-[451px] items-center gap-3 border border-[#dc143c]/50 bg-[#0b0b0b] px-3">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fc0162] text-[11px] font-extrabold text-white">
            i
          </span>
          <div className="relative overflow-hidden">
            <div className="home-marquee-track flex min-w-max items-center gap-6 pr-6">
              {repeatedItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-6 font-[family-name:var(--font-inter)] text-sm font-normal lowercase tracking-wide text-white"
                >
                  <span>{item}</span>
                  <span className="h-2 w-2 rounded-full bg-[#fc0162] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl text-center sm:mt-12">
          <div className="relative mx-auto w-full max-w-[1185px]">
            <img
              src={HERO_TITLE_SRC}
              alt="Cherry+ Network"
              className="mx-auto w-full"
            />
          </div>

          <p className="mx-auto mt-6 max-w-[605px] font-[family-name:var(--font-manrope)] text-sm font-medium leading-relaxed text-[#c1c1c1] sm:text-base">
            &quot;The Coolest Club on Campus&quot; — that is the tagline we are
            associated with. We put in the effort to live up to that tagline by
            offering adventures, learning experiences, and skill enhancement to
            aid the future.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#join"
              className="inline-flex h-[41px] w-[214px] items-center justify-center border-4 border-[#fc0162] bg-[linear-gradient(180deg,#fc0162_0%,#fc0139_100%)] font-[family-name:var(--font-inter)] text-base font-black text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Join Cherry+ Network
            </Link>
            <Link
              href="/domains"
              className="inline-flex h-[41px] w-[214px] items-center justify-center border-4 border-white bg-transparent font-[family-name:var(--font-inter)] text-base font-black text-white shadow-[6px_6px_0_0_rgba(252,1,98,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore Universes
            </Link>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-[#fc0162]/60 p-1.5">
            <span className="h-3 w-2 animate-bounce rounded-full bg-[#fc0162]" />
          </div>
        </div>
      </div>
    </section>
  );
}
