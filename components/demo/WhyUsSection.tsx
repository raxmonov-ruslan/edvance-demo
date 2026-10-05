import { LandingContainer, LandingSection } from "@/components/landing/primitives";

const POINTS = [
  {
    n: "01",
    title: "Muammoni ichidan tushunamiz",
    body: "Generic chatbot emas — ta’lim sotuvidagi aniq oqim: DM → qualify → trial → handoff.",
  },
  {
    n: "02",
    title: "Product + Engineering",
    body: "Mahsulotni o‘zimiz quramiz, sinaymiz va iteratsiya qilamiz — agent + CRM bir stackda.",
  },
  {
    n: "03",
    title: "AI-first architecture",
    body: "Knowledge base, agent runtime, kanal integratsiyalari va CRM avtomatlashtirish atrofida loyihalangan.",
  },
];

export function WhyUsSection() {
  return (
    <LandingSection id="why" className="!bg-white">
      <LandingContainer>
        <p className="demo-eyebrow">09 · Why us</p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          Nima uchun aynan biz?
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {POINTS.map((p) => (
            <article key={p.n} className="border-t border-[var(--demo-ink)] pt-5">
              <p className="font-mono text-[12px] text-[var(--demo-accent)]">{p.n}</p>
              <h3 className="mt-2 text-[17px] font-medium tracking-[-0.02em] text-[var(--lp-text)]">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-[var(--demo-muted)]">{p.body}</p>
            </article>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
