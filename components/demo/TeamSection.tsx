import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { teamMembers } from "@/lib/landing/demo-config";

export function TeamSection() {
  return (
    <LandingSection id="team" className="bg-[var(--demo-paper)]">
      <LandingContainer>
        <p className="demo-eyebrow">08 · Jamoa</p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          Jamoa
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((m) => (
            <article key={m.name} className="demo-panel p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--demo-muted)]">
                {m.name === "Ruslan Raxmonov" ? `👑 ${m.name}` : m.name}
              </p>
              <h3 className="mt-2 text-[18px] font-medium tracking-[-0.03em] text-[var(--lp-text)]">
                {m.role}
              </h3>

              {m.skills.length ? (
                <>
                  <p className="mt-5 text-[12px] font-medium uppercase tracking-wide text-[var(--demo-muted)]">
                    Ko‘nikmalar
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.skills.map((s) => (
                      <span key={s} className="demo-chip !rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}

              {m.technologies.length ? (
                <>
                  <p className="mt-5 text-[12px] font-medium uppercase tracking-wide text-[var(--demo-muted)]">
                    Texnologiyalar
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--demo-line)] bg-white px-2 py-1 font-mono text-[11px] text-[var(--lp-text)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}

              {m.links.length ? (
                <div className="mt-5 flex flex-wrap gap-4">
                  {m.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-medium text-[var(--lp-text)] underline-offset-4 hover:underline"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
