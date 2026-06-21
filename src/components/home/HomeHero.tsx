import { HomeButton } from "@/components/home/HomeButton";
import { heroMarqueeItems } from "@/data/homepage";

export function HomeHero() {
  const repeatedItems = [...heroMarqueeItems, ...heroMarqueeItems];

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 home-hero-burst">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(252,1,98,0.25),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0b0b0b]" />
      <div className="mx-auto max-w-7xl px-4 pb-18 pt-6 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-10">
        <div className="mx-auto flex max-w-3xl items-center gap-3 border border-[#fc0162]/40 bg-[#0b0b0b]/80 px-3 py-2 backdrop-blur sm:px-4">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#fc0162] text-[11px] font-black text-white">
            i
          </span>
          <div className="relative overflow-hidden">
            <div className="home-marquee-track flex min-w-max items-center gap-6 pr-6">
              {repeatedItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-6 font-[family-name:var(--font-inter)] text-[11px] font-medium uppercase tracking-[0.24em] text-white sm:text-xs"
                >
                  <span>{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fc0162]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl text-center sm:mt-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] bg-[linear-gradient(90deg,rgba(252,1,98,0.12),rgba(252,1,57,0.55),rgba(252,1,98,0.08))] blur-[2px]" />
          <h1 className="relative font-[family-name:var(--font-inter)] text-[clamp(4rem,13vw,9.25rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-[#fc0162] drop-shadow-[0_4px_0_rgba(0,0,0,0.55)]">
            <span className="block">Cherry+</span>
            <span
              className="home-text-stroke block text-transparent"
              style={{ WebkitTextStrokeWidth: "2px" }}
            >
              Network
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-manrope)] text-sm font-medium leading-relaxed text-[#cfcfcf] sm:text-base">
            &quot;The Coolest Club on Campus&quot; is more than a tagline for us.
            We build adventures, learning experiences, and creative opportunities
            that help students grow while making campus life impossible to forget.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <HomeButton href="#join" label="Join Cherry+ Network" />
            <HomeButton href="/domains" label="Explore Universes" variant="secondary" />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex flex-col items-center text-white/75">
            <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-[#fc0162]/60 p-1.5">
              <span className="h-3 w-2 rounded-full bg-[#fc0162]" />
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
