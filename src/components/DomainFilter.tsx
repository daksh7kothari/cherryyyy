"use client";

import type { DomainFilter, SubDomainFilter } from "@/data/team";

type DomainFilterBarProps = {
  domain: DomainFilter;
  subDomain: SubDomainFilter;
  onDomainChange: (domain: DomainFilter) => void;
  onSubDomainChange: (subDomain: SubDomainFilter) => void;
};

const topFilters: { id: DomainFilter; label: string }[] = [
  { id: "techverse", label: "TECHVERSE" },
  { id: "endeavour", label: "ENDEAVOUR" },
];

const bottomFilters: { id: SubDomainFilter; label: string }[] = [
  { id: "app-dev", label: "APP DEV" },
  { id: "web-dev", label: "WEB DEV" },
  { id: "ui-ux", label: "UI/UX" },
];

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-2 py-1 font-[family-name:var(--font-inter)] text-lg font-black tracking-wide transition sm:text-2xl ${
        active
          ? "cherry-gradient-text after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#fc0162]"
          : "text-[#dedede] hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

export function DomainFilterBar({
  domain,
  subDomain,
  onDomainChange,
  onSubDomainChange,
}: DomainFilterBarProps) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {topFilters.map((filter) => (
          <FilterButton
            key={filter.id}
            label={filter.label}
            active={domain === filter.id}
            onClick={() => onDomainChange(filter.id)}
          />
        ))}
      </div>

      <div className="relative flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        <span className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-[#dc143c]/40 sm:block" />
        {bottomFilters.map((filter) => (
          <FilterButton
            key={filter.id}
            label={filter.label}
            active={subDomain === filter.id}
            onClick={() => onSubDomainChange(filter.id)}
          />
        ))}
      </div>
    </div>
  );
}
