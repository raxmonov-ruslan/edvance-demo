"use client";

import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { useEffect, useState } from "react";

type Bubble = { who: "customer" | "ai"; text: string };

const SCRIPT: Bubble[] = [
  { who: "customer", text: "Salom, IELTS kurslaringiz bormi?" },
  {
    who: "ai",
    text: "Salom! Ha, IELTS kurslarimiz mavjud. Sizning hozirgi darajangiz taxminan qaysi darajada?",
  },
  { who: "customer", text: "Intermediate." },
  { who: "ai", text: "Zo‘r. IELTS maqsadingiz qanday ball?" },
  { who: "customer", text: "7.0" },
  {
    who: "ai",
    text: "7.0 maqsad uchun sizga mos guruhni aniqlashim mumkin. Qaysi filial sizga qulay va qaysi vaqtda darsga kelishingiz mumkin?",
  },
];

const PROFILE = [
  { k: "Kurs", v: "IELTS" },
  { k: "Hozirgi daraja", v: "Intermediate" },
  { k: "Maqsad", v: "7.0" },
  { k: "Qiziqish", v: "Yuqori" },
  { k: "Lead balli", v: "82" },
  { k: "Holat", v: "ISSIQ" },
  { k: "Keyingi qadam", v: "Sinov darsi" },
];

export function ConversationDemo() {
  const [visible, setVisible] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (visible >= SCRIPT.length) return;
    const t = window.setTimeout(() => setVisible((v) => v + 1), 900);
    return () => window.clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (visible < SCRIPT.length) return;
    let n = 0;
    const t = window.setInterval(() => {
      n += 4;
      if (n >= 82) {
        setScore(82);
        window.clearInterval(t);
      } else setScore(n);
    }, 24);
    return () => window.clearInterval(t);
  }, [visible]);

  return (
    <LandingSection id="conversation" className="bg-[var(--demo-paper)]">
      <LandingContainer>
        <p className="demo-eyebrow">04 · Jonli suhbat</p>
        <h2 className="mt-4 max-w-[22ch] text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          AI bilan real suhbat qanday ko‘rinadi?
        </h2>
        <p className="mt-3 text-[13px] text-[var(--demo-muted)]">
          Namuna suhbat · Misol lead — haqiqiy mijoz ma’lumoti emas.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="demo-panel flex min-h-[420px] flex-col overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[var(--demo-line)] px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-[#E1306C]" aria-hidden />
              <span className="text-[13px] font-medium text-[var(--lp-text)]">Instagram</span>
              <span className="demo-chip ml-auto">Demo stenogramma</span>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {SCRIPT.slice(0, visible).map((m, i) => (
                <div
                  key={`${m.who}-${i}`}
                  className={`flex ${m.who === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.5] ${
                      m.who === "customer"
                        ? "rounded-br-md bg-[var(--demo-ink)] text-white"
                        : "rounded-bl-md border border-[var(--demo-line)] bg-white text-[var(--lp-text)]"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {visible < SCRIPT.length ? (
                <div className="demo-typing flex gap-1 px-1 text-[var(--demo-muted)]" aria-hidden>
                  <span>·</span>
                  <span>·</span>
                  <span>·</span>
                </div>
              ) : null}
            </div>
          </div>

          <aside className="demo-panel p-5">
            <p className="demo-kicker">Lead profili</p>
            <p className="mt-1 text-[11px] text-[var(--demo-muted)]">Misol lead</p>
            <dl className="mt-4 space-y-3">
              {PROFILE.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-3 border-b border-[var(--demo-line)] pb-2"
                >
                  <dt className="text-[12px] text-[var(--demo-muted)]">{row.k}</dt>
                  <dd className="text-right text-[13px] font-medium text-[var(--lp-text)]">
                    {row.k === "Lead balli" ? (
                      <span className="tabular-nums">
                        {score}
                        <span className="text-[var(--demo-muted)]"> / 100</span>
                      </span>
                    ) : row.k === "Holat" ? (
                      <span className="rounded-full bg-[#fff0d4] px-2 py-0.5 text-[11px] font-semibold text-[#c47a00]">
                        {row.v}
                      </span>
                    ) : (
                      row.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-[var(--demo-accent)] text-[13px] font-medium text-white transition hover:opacity-90"
            >
              Sinov darsiga yozish
            </button>
          </aside>
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
