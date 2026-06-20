export type DomainFilter = "techverse" | "endeavour";
export type SubDomainFilter = "app-dev" | "web-dev" | "ui-ux";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  domain: DomainFilter;
  subDomain?: SubDomainFilter;
};

export type TeamSection = {
  id: string;
  title: string;
  columns: 2 | 3;
  rows: TeamMember[][];
  filterable?: boolean;
};

const placeholderBio =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";

function member(
  id: string,
  domain: DomainFilter,
  subDomain?: SubDomainFilter,
): TeamMember {
  return {
    id,
    name: "Aditya Krishnan",
    role: "Co-Founder",
    bio: placeholderBio,
    domain,
    subDomain,
  };
}

export const teamSections: TeamSection[] = [
  {
    id: "founders",
    title: "FOUNDERS",
    columns: 2,
    rows: [[member("f1", "techverse"), member("f2", "endeavour")]],
  },
  {
    id: "mentors",
    title: "Mentors",
    columns: 3,
    rows: [
      [
        member("m1", "techverse", "app-dev"),
        member("m2", "techverse", "web-dev"),
        member("m3", "endeavour"),
      ],
      [member("m4", "techverse", "ui-ux"), member("m5", "endeavour")],
    ],
  },
  {
    id: "directors",
    title: "Directors",
    columns: 2,
    rows: [[member("d1", "techverse", "app-dev"), member("d2", "endeavour")]],
  },
  {
    id: "executives",
    title: "Executives",
    columns: 2,
    filterable: true,
    rows: [[member("e1", "techverse", "app-dev"), member("e2", "endeavour")]],
  },
  {
    id: "managers",
    title: "Managers",
    columns: 3,
    filterable: true,
    rows: [
      [
        member("mg1", "techverse", "app-dev"),
        member("mg2", "techverse", "web-dev"),
        member("mg3", "endeavour"),
      ],
    ],
  },
  {
    id: "associates",
    title: "Associates",
    columns: 3,
    filterable: true,
    rows: [
      [
        member("a1", "techverse", "app-dev"),
        member("a2", "techverse", "web-dev"),
        member("a3", "endeavour"),
      ],
      [member("a4", "techverse", "ui-ux"), member("a5", "endeavour")],
    ],
  },
];

export function filterMembers(
  members: TeamMember[],
  domain: DomainFilter,
  subDomain: SubDomainFilter,
): TeamMember[] {
  return members.filter((member) => {
    if (member.domain !== domain) return false;
    if (member.domain === "techverse" && member.subDomain) {
      return member.subDomain === subDomain;
    }
    return true;
  });
}
