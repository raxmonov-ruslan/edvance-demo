import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { implementationPhases, type PhaseStatus } from "@/lib/landing/demo-config";

const LABEL: Record<PhaseStatus, string> = {
  done: "Bajarildi",
  in_progress: "Jarayonda",
  planned: "Rejalashtirilgan",
};

const STYLE: Record<PhaseStatus, string> = {
  done: "bg-[var(--lp-mint-wash)] text-[#1a7a38]",
  in_progress: "bg-[var(--demo-accent-soft)] text-[#4b45c8]",
  planned: "bg-[var(--demo-paper)] text-[var(--demo-muted)]",
};

export function ImplementationSection() {
  return (
    <LandingSection id="implementation" className="bg-[var(--demo-paper)]">
      <LandingContainer>
        <p className="demo-eyebrow">06 · Amalga oshirish</p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          Yechimni qanday amalga oshiramiz?
        </h2>
        <p className="mt-3 max-w-xl text-[14px] text-[var(--demo-muted)]">
          Holatlar repository asosida — “bajarildi” deb yolg‘on yozilmagan.
        </p>

        <div className="mt-10 space-y-4">
          {implementationPhases.map((phase) => (
            <article key={phase.n} className="demo-panel p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[13px] text-[var(--demo-accent)]">
                  BOSQICH {phase.n}
                </span>
                <h3 className="text-[17px] font-medium tracking-[-0.02em] text-[var(--lp-text)]">
                  {phase.title}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${STYLE[phase.status]}`}
                >
                  {LABEL[phase.status]}
                </span>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-[13px] leading-snug text-[var(--demo-muted)]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--demo-ink)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
