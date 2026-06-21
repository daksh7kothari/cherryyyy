import { HomeButton } from "@/components/home/HomeButton";
import { HomeSectionHeading } from "@/components/home/HomeSectionHeading";

export function HomeCommunityCta() {
  return (
    <section id="join" className="relative overflow-hidden py-18 home-red-web sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="border-[4px] border-[#fc0162] bg-[#13080d] p-4 shadow-[12px_12px_0_0_rgba(252,1,98,0.12)] sm:p-6">
          <div className="relative overflow-hidden border border-white/10 px-6 py-12 text-center sm:px-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(252,1,98,0.82),rgba(92,0,16,0.88))]" />
            <div
              className="absolute inset-0 opacity-35"
              style={{ backgroundImage: "url('/images/cta-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div className="relative">
              <HomeSectionHeading
                eyebrow="Join the movement"
                title="OUR COMMUNITY AWAITS"
                accent="AWAITS"
              />
              <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-manrope)] text-sm font-medium uppercase tracking-[0.16em] text-[#ffe9ef] sm:text-base">
                Join over 500 students making campus life more memorable and fun.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <HomeButton href="#join" label="Apply To Join" />
                <HomeButton href="/team" label="Meet The Team" variant="secondary" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <HomeButton href="#top" label="Travel Home" variant="secondary" className="px-6 py-2 text-[11px]" />
        </div>
      </div>
    </section>
  );
}
