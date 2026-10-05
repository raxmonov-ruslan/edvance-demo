import { demoConfig } from "@/lib/landing/demo-config";
import { LandingContainer } from "@/components/landing/primitives";

const PIPE = [
  { label: "Instagram xabari", tone: "msg" },
  { label: "AI Sales Manager", tone: "ai" },
  { label: "Leadni saralash", tone: "q" },
  { label: "Sinov darsi", tone: "trial" },
  { label: "CRM", tone: "crm" },
] as const;

export function DemoHero() {
  const hasPrototype = Boolean(demoConfig.prototypeUrl);

  return (
    <section id="overview" className="demo-grid-bg relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-20">
      <LandingContainer>
        <p className="demo-eyebrow">
          <span className="text-[var(--demo-accent)]">PITCH DAY 3.0</span>
          <span aria-hidden>·</span>
          MAHSULOT DEMO
        </p>

        <h1 className="mt-6 max-w-[16ch] text-balance text-[34px] font-semibold leading-[1.12] tracking-[-0.04em] text-[var(--lp-text)] md:text-[52px] md:leading-[1.08]">
          Ta’lim markazining savdo jarayonini AI’ga topshiring.
        </h1>

        <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.65] text-[var(--demo-muted)] md:text-[18px]">
          EDVΛNCE Instagram va Telegram’dagi murojaatlarni qabul qiladi, leadlarni saralaydi,
          savollarga javob beradi va ularni sinov darsigacha olib boradi.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#video"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--demo-ink)] px-6 text-[14px] font-medium text-white transition hover:bg-black"
          >
            Demo videoni ko‘rish
          </a>
          {hasPrototype ? (
            <a
              href={demoConfig.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--demo-line-strong)] bg-white px-6 text-[14px] font-medium text-[var(--lp-text)] transition hover:border-[var(--demo-ink)]"
            >
              Prototipni ochish ↗
            </a>
          ) : (
            <span className="inline-flex h-11 items-center justify-center rounded-full border border-dashed border-[var(--demo-line-strong)] px-6 text-[14px] text-[var(--demo-muted)]">
              [PROTOTIP HAVOLASI]
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="demo-chip">
            <span className="demo-status-dot" aria-hidden />
            Prototip ishlanmoqda
          </span>
          <span className="demo-chip">AI SALES MANAGER</span>
          <span className="demo-chip">Instagram + Telegram</span>
          <span className="demo-chip">Leadni saralash</span>
          <span className="demo-chip">CRM</span>
          <span className="demo-chip">Odamga topshirish</span>
        </div>

        <div className="demo-panel mt-12 overflow-hidden p-4 md:p-6">
          <p className="demo-kicker">Mahsulot oqimi</p>
          <div className="mt-4 flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-0">
            {PIPE.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 md:gap-0">
                <div
                  className={`rounded-lg border px-3 py-2.5 text-[13px] font-medium tracking-[-0.02em] ${
                    step.tone === "ai"
                      ? "border-[var(--demo-accent)] bg-[var(--demo-accent-soft)] text-[var(--lp-text)]"
                      : "border-[var(--demo-line)] bg-[var(--demo-paper)] text-[var(--lp-text)]"
                  }`}
                >
                  {step.label}
                </div>
                {i < PIPE.length - 1 ? (
                  <span className="demo-flow-arrow px-2 md:px-3" aria-hidden>
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </LandingContainer>
    </section>
  );
}
