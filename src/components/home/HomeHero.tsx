import Image from "next/image";
import { HomeButton } from "@/components/home/HomeButton";
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
      className="relative overflow-hidden border border-[#fc0162]/35 bg-[#120406] min-h-[min(100vh,820px)]"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={HERO_HALFTONE_SRC}
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/10 via-transparent to-[#0b0b0b]/75" />
      </div>

      <SmokeLayer variant="hero" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-18 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-10">
        <div className="mx-auto flex max-w-[451px] items-center gap-3 border border-[#dc143c]/50 bg-[#0b0b0b] px-3 py-2 sm:px-4">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#fc0162] text-[11px] font-black text-white">
            i
          </span>
          <div className="relative overflow-hidden">
            <div className="home-marquee-track flex min-w-max items-center gap-6 pr-6">
              {repeatedItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-6 font-[family-name:var(--font-inter)] text-[11px] font-normal uppercase tracking-[0.24em] text-white sm:text-xs"
                >
                  <span>{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fc0162]" />
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
            <HomeButton href="#join" label="Join Cherry+ Network" />
            <HomeButton href="/domains" label="Explore Universes" variant="secondary" />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex flex-col items-center text-white/75">
            <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-[#fc0162]/60 p-1.5">
              <span className="h-3 w-2 animate-bounce rounded-full bg-[#fc0162]" />
            </div>
            <span className="mt-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
