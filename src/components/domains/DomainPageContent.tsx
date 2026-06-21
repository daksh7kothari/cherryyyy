import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import { HomeButton } from "@/components/home/HomeButton";
import { HomeCommunityCta } from "@/components/home/HomeCommunityCta";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { endeavourDomains, techverseDomains } from "@/data/domains";

const domainGroups = [
  {
    id: "techverse",
    title: "TECHVERSE",
    description:
      "Ignite your technical prowess! Showcase skills, explore tech fields, and join a community of techies. Build, innovate, and learn alongside like-minded enthusiasts.",
    posterSrc: "/images/techverse-card.png",
    posterAlt: "Techverse comic poster",
    items: techverseDomains,
  },
  {
    id: "endeavour",
    title: "ENDEAVOUR",
    description:
      "Endeavour is the heart of Cherry+ Network, helping members lead, create, execute, and grow through real experiences that move ideas into action.",
    posterSrc: "/images/endeavour-card.png",
    posterAlt: "Endeavour comic poster",
    items: endeavourDomains,
  },
];

export function DomainPageContent() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <NavBar activeLabel="DOMAINS" />

      <section className="home-red-web py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomeSectionHeading title="DOMAINS" accent="DOMAINS" />
          <p className="mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-manrope)] text-sm font-semibold leading-relaxed text-[#c1c1c1] sm:text-base">
            Cherry+ Network is built around two key domains: Techverse and
            Endeavour. Together, they create a space where ideas turn into
            action and talent grows with purpose.
          </p>
        </div>
      </section>

      <section className="home-red-web py-18 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {domainGroups.map((group) => (
            <section key={group.id} id={group.id} className="space-y-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-4">
                  <span className="hidden h-px w-20 bg-[#fc0162] sm:block" />
                  <p className="font-[family-name:var(--font-inter)] text-sm font-black uppercase tracking-[0.24em] text-[#fc0162]">
                    {group.title}
                  </p>
                  <span className="hidden h-px w-20 bg-[#fc0162] sm:block" />
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
                <div className="relative mx-auto w-full max-w-[260px] lg:max-w-none">
                  <div className="-rotate-[11deg] overflow-hidden border-[4px] border-black bg-white shadow-[10px_10px_0_0_rgba(0,0,0,0.35)]">
                    <Image
                      src={group.posterSrc}
                      alt={group.posterAlt}
                      width={860}
                      height={1080}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-inter)] text-[clamp(2rem,5vw,3.6rem)] font-black uppercase text-white">
                    {group.title}
                  </h2>
                  <p className="mt-4 max-w-3xl font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#dedede] sm:text-base">
                    {group.description}
                  </p>
                  <div className="mt-6">
                    <HomeButton href="/#join" label={`Join ${group.title}`} />
                  </div>

                  <div className="mt-8 space-y-5">
                    {group.items.map((item) => (
                      <article
                        key={item.title}
                        className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start"
                      >
                        <span className="font-[family-name:var(--font-rubik-mono)] text-[clamp(3rem,9vw,5rem)] leading-none text-[#fc0162]">
                          {item.number}
                        </span>
                        <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,#232323_0%,#40081a_100%)] p-4 sm:p-5">
                          <div className="mb-4 overflow-hidden border-[3px] border-black bg-[url('/images/red-stripes.png')] bg-cover bg-center px-4 py-3">
                            <h3 className="font-[family-name:var(--font-inter)] text-lg font-black uppercase text-white sm:text-xl">
                              {item.title}
                            </h3>
                          </div>
                          <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-white">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <HomeCommunityCta />
      <HomeFooter />
    </main>
  );
}
