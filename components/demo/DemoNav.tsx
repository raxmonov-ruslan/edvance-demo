"use client";

import { EdvanceMark, EdvanceWordmark } from "@/components/brand/EdvanceWordmark";
import { demoConfig, demoNav } from "@/lib/landing/demo-config";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function DemoNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("overview");
  const hasPrototype = Boolean(demoConfig.prototypeUrl);

  useEffect(() => {
    const ids = demoNav.map((n) => n.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-4 px-5 md:h-16 md:px-8">
        <Link href="/demo" className="inline-flex shrink-0 items-center gap-2" aria-label="EDVΛNCE Demo">
          <EdvanceMark inverted className="h-7 w-7" />
          <span className="hidden text-[15px] font-semibold tracking-[-0.03em] text-white sm:inline">
            EDVΛNCE
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-0.5 lg:flex" aria-label="Demo bo‘limlari">
          {demoNav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              data-active={active === item.id}
              className="demo-nav-link rounded-md px-2.5 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--demo-accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {hasPrototype ? (
            <a
              href={demoConfig.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center rounded-full bg-white px-4 text-[13px] font-medium text-[var(--demo-ink)] transition hover:bg-white/90 sm:inline-flex"
            >
            Prototipni ochish ↗
          </a>
          ) : (
            <span className="hidden h-9 items-center rounded-full border border-white/20 px-4 text-[13px] text-white/40 sm:inline-flex">
              Prototip tez orada
            </span>
          )}

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0a0a0b] px-5 py-4 lg:hidden">
          <EdvanceWordmark size="sm" inverted href={null} className="mb-3" />
          <div className="flex flex-col">
            {demoNav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] font-medium text-white/75"
              >
                {item.label}
              </a>
            ))}
            {hasPrototype ? (
              <a
                href={demoConfig.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-white text-[14px] font-medium text-[var(--demo-ink)]"
              >
                Prototipni ochish ↗
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
