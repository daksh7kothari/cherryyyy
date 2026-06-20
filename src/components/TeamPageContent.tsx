"use client";

import { useMemo, useState } from "react";
import { DomainFilterBar } from "@/components/DomainFilter";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { TeamHero } from "@/components/TeamHero";
import { TeamSection } from "@/components/TeamSection";
import {
  filterMembers,
  teamSections,
  type DomainFilter,
  type SubDomainFilter,
  type TeamMember,
} from "@/data/team";

function filterRows(
  rows: TeamMember[][],
  domain: DomainFilter,
  subDomain: SubDomainFilter,
): TeamMember[][] {
  return rows
    .map((row) => filterMembers(row, domain, subDomain))
    .filter((row) => row.length > 0);
}

export function TeamPageContent() {
  const [domain, setDomain] = useState<DomainFilter>("techverse");
  const [subDomain, setSubDomain] = useState<SubDomainFilter>("app-dev");

  const staticSections = useMemo(
    () => teamSections.filter((section) => !section.filterable),
    [],
  );

  const filteredSections = useMemo(
    () => teamSections.filter((section) => section.filterable),
    [],
  );

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <NavBar activeLabel="TEAM" />
      <TeamHero />

      {staticSections.map((section) => (
        <TeamSection
          key={section.id}
          title={section.title}
          columns={section.columns}
          rows={section.rows}
        />
      ))}

      <DomainFilterBar
        domain={domain}
        subDomain={subDomain}
        onDomainChange={setDomain}
        onSubDomainChange={setSubDomain}
      />

      {filteredSections.map((section) => (
        <TeamSection
          key={section.id}
          title={section.title}
          columns={section.columns}
          rows={filterRows(section.rows, domain, subDomain)}
        />
      ))}

      <Footer />
    </main>
  );
}
