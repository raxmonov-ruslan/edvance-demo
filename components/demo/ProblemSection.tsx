import { LandingContainer, LandingSection } from "@/components/landing/primitives";

const CARDS = [
  {
    title: "Javobsiz murojaatlar",
    body: "Administrator bir vaqtning o‘zida barcha Instagram va Telegram xabarlariga tez javob bera olmaydi.",
  },
  {
    title: "Leadlarni qo‘lda saralash",
    body: "Kim haqiqiy potensial o‘quvchi, kim shunchaki ma’lumot so‘rayapti — buni aniqlash vaqt talab qiladi.",
  },
  {
    title: "Follow-up yo‘qoladi",
    body: "Birinchi suhbatdan keyin qayta bog‘lanish jarayoni muntazam bajarilmasligi mumkin.",
  },
  {
    title: "Ma’lumotlar tarqoq",
    body: "Kurslar, narxlar, filiallar va jadvallar haqidagi ma’lumotlar administratorlar orasida bir xil bo‘lmasligi mumkin.",
  },
];

const FUNNEL = [
  "Kiruvchi xabarlar",
  "Saralangan leadlar",
  "Sinov darslari",
  "Ro‘yxatdan o‘tgan o‘quvchilar",
];

export function ProblemSection() {
  return (
    <LandingSection id="problem" className="!bg-white">
      <LandingContainer>
        <p className="demo-eyebrow">01 · Muammo</p>
        <h2 className="mt-4 max-w-[20ch] text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          Muammo: har bir lead javob kutmaydi.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CARDS.map((c) => (
            <article key={c.title} className="demo-panel p-5">
              <h3 className="text-[16px] font-medium tracking-[-0.02em] text-[var(--lp-text)]">
                {c.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[var(--demo-muted)]">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="demo-panel mt-10 p-5 md:p-6">
          <p className="demo-kicker">Soddalashtirilgan voronka · faqat yorliqlar</p>
          <p className="mt-1 text-[12px] text-[var(--demo-muted)]">
            Soxta konversiya foizlari yo‘q — faqat oqim.
          </p>
          <div className="mt-5 flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {FUNNEL.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="rounded-md border border-dashed border-[var(--demo-line-strong)] bg-[var(--demo-paper)] px-3 py-2 font-mono text-[12px] text-[var(--lp-text)]">
                  {label}
                </div>
                {i < FUNNEL.length - 1 ? (
                  <span className="demo-flow-arrow hidden sm:inline" aria-hidden>
                    ↓
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
