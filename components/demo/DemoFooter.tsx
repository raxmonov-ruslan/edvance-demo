import { EdvanceWordmark } from "@/components/brand/EdvanceWordmark";
import { LandingContainer } from "@/components/landing/primitives";
import { demoConfig } from "@/lib/landing/demo-config";
import Link from "next/link";

const LINKS = [
  { label: "Demo", href: "/demo" },
  { label: "Prototip", href: demoConfig.prototypeUrl },
  ...(demoConfig.githubUrl
    ? [{ label: "GitHub", href: demoConfig.githubUrl }]
    : []),
  ...(demoConfig.telegramUrl
    ? [{ label: "Telegram", href: demoConfig.telegramUrl }]
    : []),
];

export function DemoFooter() {
  return (
    <footer className="border-t border-[var(--demo-line)] bg-white py-12">
      <LandingContainer className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <EdvanceWordmark size="md" href="/demo" />
          <p className="mt-3 max-w-[36ch] text-[13px] leading-relaxed text-[var(--demo-muted)]">
            AI ishchi kuchi — ta’lim sotuvidan boshlanadi.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Pastki menyu">
          {LINKS.map((l) =>
            l.href.startsWith("http") ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[var(--demo-muted)] hover:text-[var(--lp-text)]"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="text-[13px] text-[var(--demo-muted)] hover:text-[var(--lp-text)]"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
      </LandingContainer>
    </footer>
  );
}
