import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SmokeLayer } from "@/components/SmokeLayer";
import { communityStats } from "@/data/homepage";

export function HomeStats() {
  return (
    <ScrollReveal as="section" className="relative overflow-hidden py-18 home-red-web sm:py-24">
      <SmokeLayer variant="ambient" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <HomeSectionHeading
          eyebrow="Built together"
          title="BUILT BY STUDENTS, FOR STUDENTS"
          accent="FOR STUDENTS"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {communityStats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delay={index * 100}
              className="border border-[#fc0162] bg-[#121212]/95 px-6 py-7 text-center shadow-[8px_8px_0_0_rgba(252,1,98,0.16)]"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center text-white">
                <StatIcon kind={stat.icon} />
              </div>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-4xl font-black uppercase text-[#fc0162]">
                {stat.value}
              </p>
              <p className="mt-2 font-[family-name:var(--font-manrope)] text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function StatIcon({ kind }: { kind: "spark" | "star" | "heart" }) {
  if (kind === "spark") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path
          d="m14 3 2.4 7.6L24 13.1l-7.6 2.4L14 23l-2.4-7.5L4 13.1l7.6-2.5L14 3Z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (kind === "star") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path
          d="m14 4 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L14 4Z"
          fill="#fff"
        />
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path
        d="M14 23.5 4.6 14.4a5.8 5.8 0 0 1 8.2-8.2l1.2 1.1 1.1-1.1a5.8 5.8 0 0 1 8.2 8.2L14 23.5Z"
        fill="#fff"
      />
    </svg>
  );
}
