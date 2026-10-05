import { LandingContainer, LandingSection } from "@/components/landing/primitives";

const CAPS = [
  {
    n: "01",
    title: "24/7 javob",
    body: "Instagram va Telegram xabarlariga avtomatik javob.",
  },
  {
    n: "02",
    title: "Bilim bazasiga asoslangan javoblar",
    body: "AI faqat markaz bergan bilimlar bazasi asosida javob beradi.",
  },
  {
    n: "03",
    title: "Leadni saralash",
    body: "AI foydalanuvchining ehtiyojini aniqlaydi va leadni baholaydi.",
  },
  {
    n: "04",
    title: "Sinov darsiga yo‘naltirish",
    body: "Mos keladigan foydalanuvchini sinov darsiga yo‘naltiradi.",
  },
  {
    n: "05",
    title: "Odamga topshirish",
    body: "Murakkab yoki issiq leadlarni administratorga topshiradi.",
  },
];

const FLOW = ["XABAR", "TUSHUNISH", "SARALASH", "BALL", "SINOV", "ODAM / CRM"];

export function SolutionSection() {
  return (
    <LandingSection id="solution" className="bg-[var(--demo-paper)]">
      <LandingContainer>
        <p className="demo-eyebrow">02 · Yechim</p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          Yechim: AI Sales Manager
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.65] text-[var(--demo-muted)]">
          EDVΛNCE har bir murojaatni suhbatdan keyingi aniq harakatgacha boshqaradi.
        </p>

        <div className="demo-panel-dark mt-8 overflow-x-auto p-4">
          <div className="flex min-w-max items-center gap-2">
            {FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] tracking-wide text-white/90">
                  {step}
                </span>
                {i < FLOW.length - 1 ? (
                  <span className="text-[var(--demo-accent)]" aria-hidden>
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {CAPS.map((c) => (
            <article key={c.n} className="demo-panel p-5">
              <p className="font-mono text-[12px] text-[var(--demo-accent)]">{c.n}</p>
              <h3 className="mt-2 text-[16px] font-medium tracking-[-0.02em] text-[var(--lp-text)]">
                {c.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[var(--demo-muted)]">{c.body}</p>
            </article>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
