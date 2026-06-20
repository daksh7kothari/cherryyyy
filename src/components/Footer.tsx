import Image from "next/image";
import Link from "next/link";

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center text-white transition hover:text-[#dc143c]"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0e0e12]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-5">
            <div className="relative h-10 w-[180px]">
              <Image
                src="/images/logo-full.png"
                alt="Cherry+ Network"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="max-w-md font-[family-name:var(--font-poppins)] text-sm leading-relaxed text-[#c1c1c1]">
              Team up with Cherry+ Network, the coolest club on campus, where we
              discover the secret to success and pave the way for your dreams
              through networking events, workshops, industry partnerships and
              fantastic fests.
            </p>
          </div>

          <div className="space-y-4 font-[family-name:var(--font-poppins)] text-base text-white">
            <p className="flex items-center gap-3">
              <PhoneIcon />
              +91 97781 54742
            </p>
            <p className="flex items-center gap-3">
              <MailIcon />
              techverse@cherrynetwork.in
            </p>
            <p className="flex items-center gap-3">
              <GlobeIcon />
              www.cherrynetwork.in
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-6">
            <span className="hidden h-px w-16 bg-white/20 sm:block" />
            <div className="flex items-center gap-5">
              <SocialIcon label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon label="X">
                <XIcon />
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
            </div>
            <span className="hidden h-px w-16 bg-white/20 sm:block" />
          </div>

          <p className="text-center font-[family-name:var(--font-montserrat)] text-sm font-light text-[#c1c1c1]">
            Crafted with &lt;3 by your friends at Cherry+ Network
          </p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6zm0 0l8 7 8-7"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9M12 3C9.5 5.7 8 9 8 12s1.5 6.3 4 9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 9h3v12H6V9zm1.5-4.5A1.8 1.8 0 119.3 6 1.8 1.8 0 017.5 4.5zM11 9h3v1.7c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7V21h-3v-6.8c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V21h-3V9z" />
    </svg>
  );
}
