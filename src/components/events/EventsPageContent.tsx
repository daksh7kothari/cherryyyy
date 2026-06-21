import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { EventCard } from "@/components/events/EventCard";
import { PreviousEventFeature } from "@/components/events/PreviousEventFeature";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";
import { featuredEvents, previousEventGroups } from "@/data/events-page";

export function EventsPageContent() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <NavBar activeLabel="EVENTS" />

      <section className="home-red-web py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomeSectionHeading title="EVENTS" accent="EVENTS" />
          <p className="mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-manrope)] text-sm font-medium leading-relaxed text-[#c1c1c1] sm:text-base">
            Cherry+ Network events are designed to inspire creativity,
            collaboration, and real-world learning. From tech-driven challenges
            to skill-based experiences, each event creates opportunities to
            explore ideas, showcase talent, and connect with a driven community.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                tilt={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-red-web py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HomeSectionHeading
            eyebrow="Archive"
            title="PREVIOUS EVENTS"
            accent="EVENTS"
          />

          <div className="mt-14 space-y-16">
            {previousEventGroups.map((group) => (
              <section key={group.id} className="space-y-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-4">
                    <span className="hidden h-px w-20 bg-[#fc0162] sm:block" />
                    <p className="font-[family-name:var(--font-inter)] text-xl font-black uppercase tracking-[0.16em] text-[#fc0162]">
                      {group.title}
                    </p>
                    <span className="hidden h-px w-20 bg-[#fc0162] sm:block" />
                  </div>
                  <p className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#d6d6d6] lg:mx-0">
                    {group.intro}
                  </p>
                </div>

                <div className="space-y-12">
                  {group.events.map((event, index) => (
                    <PreviousEventFeature
                      key={event.id}
                      event={event}
                      reverse={index % 2 === 1}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-18">
            <HomeSectionHeading
              eyebrow="Pick your universe"
              title="PICK YOUR UNIVERSE"
              accent="UNIVERSE"
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Link
                href="/domains#techverse"
                className="block overflow-hidden border-[3px] border-black bg-white"
              >
                <Image
                  src="/images/techverse-card.png"
                  alt="Techverse poster"
                  width={860}
                  height={1080}
                  className="h-full w-full object-cover"
                />
              </Link>
              <Link
                href="/domains#endeavour"
                className="block overflow-hidden border-[3px] border-black bg-white"
              >
                <Image
                  src="/images/endeavour-card.png"
                  alt="Endeavour poster"
                  width={860}
                  height={1080}
                  className="h-full w-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}
