import { LandingContainer } from "@/components/landing/primitives";
import { demoConfig } from "@/lib/landing/demo-config";

export function FinalCTA() {
  return (
    <section className="bg-[var(--demo-ink)] py-20 md:py-24">
      <LandingContainer>
        <h2 className="max-w-[16ch] text-[30px] font-semibold leading-[1.15] tracking-[-0.04em] text-white md:text-[42px]">
          Har bir leadga javob bering. Har bir imkoniyatni yo‘qotmang.
        </h2>
        <p className="mt-4 text-[16px] text-white/55">
          EDVΛNCE — AI Sales’dan AI Workforce’gacha.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {demoConfig.prototypeUrl ? (
            <a
              href={demoConfig.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[14px] font-medium text-[var(--demo-ink)]"
            >
              Prototipni sinash ↗
            </a>
          ) : null}
          <a
            href="#video"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-[14px] font-medium text-white/85 hover:border-white/40"
          >
            Demo videoni ko‘rish
          </a>
        </div>
        <p className="mt-10 font-mono text-[11px] tracking-wide text-white/35">
          EDVΛNCE · AI ishchi kuchi — ta’lim sotuvidan boshlanadi.
        </p>
      </LandingContainer>
    </section>
  );
}
