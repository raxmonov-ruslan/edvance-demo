import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { demoConfig } from "@/lib/landing/demo-config";

export function PrototypeCTA() {
  const proto = demoConfig.prototypeUrl;
  const gh = demoConfig.githubUrl;

  return (
    <LandingSection id="prototype" className="!bg-white !py-16">
      <LandingContainer>
        <div className="demo-panel-dark px-6 py-10 md:px-10 md:py-12">
          <p className="demo-kicker !text-[var(--demo-accent)]">Ishlayotgan prototip</p>
          <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[34px]">
            Prototipni sinab ko‘ring
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-white/60">
            EDVΛNCE’ning ishlayotgan prototipini ko‘rib, AI Sales Manager workflow’ini amalda
            tekshiring.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {proto ? (
              <a
                href={proto}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[14px] font-medium text-[var(--demo-ink)]"
              >
                Prototipni ochish ↗
              </a>
            ) : (
              <span className="inline-flex h-11 items-center justify-center rounded-full border border-dashed border-white/30 px-6 text-[14px] text-white/40">
                Prototip tez orada
              </span>
            )}
            {gh ? (
              <a
                href={gh}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-[14px] font-medium text-white/80 transition hover:border-white/40 hover:text-white"
              >
                GitHub ↗
              </a>
            ) : (
              <span className="inline-flex h-11 items-center justify-center rounded-full border border-dashed border-white/20 px-6 text-[14px] text-white/35">
                [GITHUB URL]
              </span>
            )}
          </div>
          {proto ? (
            <p className="mt-4 font-mono text-[11px] text-white/35">{proto}</p>
          ) : null}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
