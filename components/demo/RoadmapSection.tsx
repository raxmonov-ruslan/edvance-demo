import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { roadmapStages } from "@/lib/landing/demo-config";

export function RoadmapSection() {
  return (
    <LandingSection id="roadmap" className="!bg-white">
      <LandingContainer>
        <p className="demo-eyebrow">07 · Yo‘l xaritasi</p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          EDVΛNCE qayerga yetib keladi?
        </h2>

        <div className="mt-10 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch">
          {roadmapStages.map((stage, i) => {
            const current = stage.status === "current";
            const done = stage.status === "done";
            return (
              <div key={stage.id} className="flex items-stretch gap-3 md:flex-1 md:min-w-[140px]">
                <article
                  className={`demo-panel flex flex-1 flex-col p-4 ${
                    current ? "ring-2 ring-[var(--demo-accent)]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-[11px] tracking-wide text-[var(--demo-muted)]">
                      {stage.label}
                    </p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        done
                          ? "bg-[var(--lp-mint-wash)] text-[#1a7a38]"
                          : current
                            ? "bg-[var(--demo-accent-soft)] text-[#4b45c8]"
                            : "bg-[var(--demo-paper)] text-[var(--demo-muted)]"
                      }`}
                    >
                      {done ? "Tayyor" : current ? "Hozir" : "Keyin"}
                    </span>
                  </div>
                  <p className="mt-3 text-[13px] leading-snug text-[var(--lp-text)]">
                    {stage.summary}
                  </p>
                </article>
                {i < roadmapStages.length - 1 ? (
                  <span
                    className="hidden self-center text-[var(--demo-accent)] md:inline"
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
