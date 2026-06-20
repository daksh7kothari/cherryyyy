import { CommunityCTA } from "@/components/CommunityCTA";
import { DomainSection } from "@/components/DomainSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { UniverseCards } from "@/components/UniverseCards";
import {
  endeavourDomains,
  techverseDomains,
} from "@/data/domains";

export default function DomainsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <NavBar activeLabel="DOMAINS" />

      <div id="domains">
        <HeroSection />
        <UniverseCards />
      </div>

      <DomainSection
        id="techverse"
        title="TECHVERSE"
        description="Ignite your technical prowess! Showcase skills, explore tech fields, and join a community of techies. Embark on a tech journey. Showcase skills, explore, innovate, and connect with fellow tech enthusiasts. Unleash your tech potential. Build, innovate, and learn alongside like-minded tech enthusiasts."
        domains={techverseDomains}
      />

      <DomainSection
        id="endeavour"
        title="ENDEAVOUR"
        description="Endeavour, the heart of Cherry+ Network, is the stage to break your limits, explore the infinite possibilities provided by our elite domains and embark on the journey of skill development to be the difference between a cherry in the bush and a cherry at the top."
        domains={endeavourDomains}
      />

      <CommunityCTA />
      <Footer />
    </main>
  );
}
