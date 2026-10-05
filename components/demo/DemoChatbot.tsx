"use client";

import { demoFaq } from "@/lib/landing/demo-config";
import { MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

type Msg = { role: "user" | "bot"; text: string };

function answer(input: string): string {
  const q = input.toLowerCase();
  const hit = demoFaq.find((item) => {
    const words = item.q
      .toLowerCase()
      .split(/[^a-zA-Zа-яА-ЯёЁʻʼ'‘’oʻgʻ]+/)
      .filter((w) => w.length > 3);
    return words.some((w) => q.includes(w)) || q.includes(item.q.toLowerCase().slice(0, 10));
  });
  if (hit) return hit.a;
  if (q.includes("prototip") || q.includes("prototype")) {
    return "Ishlayotgan prototip: sahifadagi “Prototipni ochish” tugmasi yoki /#prototype bo‘limi.";
  }
  return "Demo chatbot faqat loyiha haqida. Pastdagi namuna savollardan birini tanlang.";
}

export function DemoChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Demo chatbot — loyiha haqida ma’lumot berish uchun. Umumiy AI assistant emas.",
    },
  ]);

  function push(text: string) {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }, { role: "bot", text: answer(t) }]);
    setInput("");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    push(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div
          className="flex h-[440px] w-[min(100vw-2rem,360px)] flex-col overflow-hidden rounded-xl border border-[var(--demo-line)] bg-white shadow-[var(--lp-shadow-xl)]"
          role="dialog"
          aria-label="EDVΛNCE demo chatbot"
        >
          <div className="flex items-center justify-between bg-[var(--demo-ink)] px-4 py-3 text-white">
            <div>
              <p className="text-[13px] font-medium">EDVΛNCE bilan suhbat</p>
              <p className="text-[11px] text-white/45">FAQ · oldindan belgilangan javoblar</p>
            </div>
            <button
              type="button"
              aria-label="Yopish"
              className="rounded-md p-1 text-white/70 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto px-3 py-3">
            {msgs.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`max-w-[92%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-[var(--demo-ink)] text-white"
                    : "bg-[var(--demo-paper)] text-[var(--lp-text)]"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {demoFaq.slice(0, 5).map((f) => (
                <button
                  key={f.q}
                  type="button"
                  onClick={() => push(f.q)}
                  className="rounded-full border border-[var(--demo-line)] px-2.5 py-1 text-[11px] text-[var(--demo-muted)] hover:border-[var(--demo-ink)] hover:text-[var(--lp-text)]"
                >
                  {f.q}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={onSubmit} className="flex gap-2 border-t border-[var(--demo-line)] p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Savol…"
              aria-label="Savol"
              className="min-w-0 flex-1 rounded-lg border border-[var(--demo-line)] bg-[var(--demo-paper)] px-3 py-2 text-[13px] outline-none focus-visible:border-[var(--demo-accent)]"
            />
            <button
              type="submit"
              aria-label="Yuborish"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--demo-ink)] text-white"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--demo-ink)] px-4 text-[13px] font-medium text-white shadow-[var(--lp-shadow-md)]"
      >
        <MessageCircle size={17} aria-hidden />
        AI savol-javob
      </button>
    </div>
  );
}
