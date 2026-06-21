import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { activityCards } from "@/data/homepage";

export function HomeActivities() {
  return (
    <section id="events" className="relative overflow-hidden py-18 home-red-web sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeSectionHeading
          eyebrow="What we do"
          title="NEVER STOP HAVING FUN"
          accent="HAVING FUN"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activityCards.map((card, index) => (
            <article
              key={card.title}
              className={`relative border-[3px] border-[#fc0162] bg-white p-3 shadow-[8px_8px_0_0_rgba(252,1,98,0.2)] ${index % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"}`}
            >
              <span className="absolute left-1/2 top-0 h-4 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] bg-[#d8c59d] shadow-[0_3px_0_0_rgba(0,0,0,0.3)]" />
              <div className="border border-[#fd6b95] bg-[url('/images/red-stripes.png')] bg-cover bg-center px-5 py-6">
                <span className="inline-flex bg-black/20 px-2 py-1 font-[family-name:var(--font-inter)] text-[10px] font-black uppercase tracking-[0.22em] text-white">
                  {card.category}
                </span>
                <h3 className="mt-10 font-[family-name:var(--font-inter)] text-3xl font-black uppercase leading-[0.95] text-white">
                  {card.title}
                </h3>
              </div>

              <div className="space-y-3 px-2 pb-2 pt-4 text-black">
                <div className="space-y-1 font-[family-name:var(--font-manrope)] text-xs font-semibold uppercase tracking-[0.12em] text-[#5d5d5d]">
                  <p>{card.date}</p>
                  <p>{card.location}</p>
                </div>
                <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#242424]">
                  {card.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
