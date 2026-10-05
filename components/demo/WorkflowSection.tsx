"use client";

import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Xabar",
    body: "Mijoz Instagram yoki Telegram’da yozadi.",
    example: "Assalomu alaykum, IELTS kurslari haqida ma’lumot bersangiz.",
  },
  {
    n: "02",
    title: "Tushunish",
    body: "AI aniqlaydi: maqsad, kurs, daraja, qulay filial, jadval.",
    example: "maqsad · IELTS · daraja? · filial? · vaqt?",
  },
  {
    n: "03",
    title: "Javob",
    body: "AI faqat markaz bilim bazasidan javob beradi.",
    example: "IELTS guruhlari, narxlar, filiallar — bilim bazasidan.",
  },
  {
    n: "04",
    title: "Saralash",
    body: "AI tegishli savollar beradi.",
    example:
      "IELTS bo‘yicha hozirgi darajangiz qanday? Qaysi filial qulay? Qaysi vaqtda kelishingiz mumkin?",
  },
  {
    n: "05",
    title: "Ball",
    body: "Misol lead UI — haqiqiy mijoz ma’lumoti emas.",
    example: "Lead balli 82 / 100 · ISSIQ",
  },
  {
    n: "06",
    title: "Harakat",
    body: "SINOV DARSI · ADMININGA TOPSHIRISH · FOLLOW-UP DAVOM ETTIRISH",
    example: "Keyingi qadam: Sinov darsi",
  },
];

export function WorkflowSection() {
  const [active, setActive] = useState(0);

  return (
    <LandingSection id="how" className="!bg-white">
      <LandingContainer>
        <p className="demo-eyebrow">03 · Qanday ishlaydi</p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          Bir lead qanday ishlanadi?
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[220px_1fr]">
          <ol className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {STEPS.map((s, i) => (
              <li key={s.n}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`w-full rounded-lg border px-3 py-2.5 text-left transition ${
                    active === i
                      ? "border-[var(--demo-ink)] bg-[var(--demo-ink)] text-white"
                      : "border-[var(--demo-line)] bg-white text-[var(--lp-text)] hover:border-[var(--demo-line-strong)]"
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-70">{s.n}</span>
                  <span className="ml-2 text-[13px] font-medium">{s.title}</span>
                </button>
              </li>
            ))}
          </ol>

          <div className="demo-panel min-h-[220px] p-6">
            <p className="font-mono text-[12px] text-[var(--demo-accent)]">
              BOSQICH {STEPS[active].n}
            </p>
            <h3 className="mt-2 text-[22px] font-medium tracking-[-0.03em] text-[var(--lp-text)]">
              {STEPS[active].title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--demo-muted)]">
              {STEPS[active].body}
            </p>
            <div className="mt-5 rounded-lg border border-[var(--demo-line)] bg-[var(--demo-paper)] p-4 font-mono text-[13px] leading-relaxed text-[var(--lp-text)]">
              {STEPS[active].example}
            </div>
            {active === 4 ? (
              <div className="mt-4 inline-flex items-center gap-3 rounded-lg border border-[var(--demo-line)] px-4 py-3">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-[var(--demo-muted)]">
                    Misol lead
                  </p>
                  <p className="text-[20px] font-semibold tabular-nums text-[var(--lp-text)]">
                    82 <span className="text-[14px] font-medium text-[var(--demo-muted)]">/ 100</span>
                  </p>
                </div>
                <span className="rounded-full bg-[#fff0d4] px-2.5 py-0.5 text-[11px] font-semibold text-[#c47a00]">
                  ISSIQ
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
