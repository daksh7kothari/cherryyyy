import type { TeamMember } from "@/data/team";

type NameCardProps = {
  member: TeamMember;
};

export function NameCard({ member }: NameCardProps) {
  return (
    <div className="flip-card mx-auto h-[264px] w-full max-w-[342px]" tabIndex={0}>
      <div className="flip-card-inner">
        <div className="flip-card-front overflow-hidden rounded-[30px] bg-[#dc143c] p-0 shadow-lg">
          <div className="relative h-full w-full">
            <div className="mx-3 mt-3 h-[125px] rounded-2xl bg-[#d9d9d9]" />
            <div className="absolute left-1/2 top-[78px] h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-[#dc143c] bg-[#d9d9d9]" />
            <div className="absolute inset-x-0 bottom-0 rounded-b-[30px] bg-[#d9d9d9] px-4 pb-5 pt-14 text-center">
              <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold text-black sm:text-2xl">
                {member.name}
              </h3>
              <p className="mt-1 font-[family-name:var(--font-inter)] text-base font-medium text-black">
                {member.role}
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card-back flex flex-col justify-between overflow-hidden rounded-[30px] bg-[#dc143c] p-5 shadow-lg">
          <div className="flex items-center gap-3">
            <SocialIcon label="LinkedIn">
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon label="GitHub">
              <GitHubIcon />
            </SocialIcon>
          </div>

          <p className="font-[family-name:var(--font-inter)] text-sm leading-relaxed text-black sm:text-base">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 9h3v12H6V9zm1.5-4.5A1.8 1.8 0 119.3 6 1.8 1.8 0 017.5 4.5zM11 9h3v1.7c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7V21h-3v-6.8c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V21h-3V9z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.35-1.34-3.35-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  );
}
