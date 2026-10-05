import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { techLabels } from "@/lib/landing/demo-config";

const NODES = [
  "Instagram",
  "Telegram",
  "Kanal integratsiyasi",
  "EDVΛNCE AI Sales Manager",
  "Bilim bazasi",
  "LLM / AI mulohaza",
  "Leadni saralash",
  "CRM",
  "Sinov darsi / odamga topshirish",
];

function LabelGroup({
  title,
  items,
  planned = false,
}: {
  title: string;
  items: string[];
  planned?: boolean;
}) {
  return (
    <div>
      <p className="text-[12px] font-medium uppercase tracking-wide text-[var(--demo-muted)]">
        {title}
        {planned ? " · Rejalashtirilgan" : ""}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((t) => (
          <span
            key={t}
            className={`rounded-md border px-2 py-1 font-mono text-[11px] ${
              planned
                ? "border-dashed border-[var(--demo-line-strong)] text-[var(--demo-muted)]"
                : "border-[var(--demo-line)] bg-white text-[var(--lp-text)]"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <LandingSection id="architecture" className="!bg-white">
      <LandingContainer>
        <p className="demo-eyebrow">05 · Arxitektura</p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          Bu qanday ishlaydi?
        </h2>

        <div className="demo-panel mt-8 p-5 md:p-8">
          <div className="flex flex-col items-stretch gap-2 md:items-center">
            {NODES.map((node, i) => (
              <div key={node} className="flex flex-col items-center">
                <div
                  className={`w-full max-w-md rounded-lg border px-4 py-2.5 text-center text-[13px] font-medium md:w-auto md:min-w-[280px] ${
                    node.includes("AI Sales")
                      ? "border-[var(--demo-accent)] bg-[var(--demo-accent-soft)] text-[var(--lp-text)]"
                      : "border-[var(--demo-line)] bg-[var(--demo-paper)] text-[var(--lp-text)]"
                  }`}
                >
                  {node}
                </div>
                {i < NODES.length - 1 ? (
                  <span className="py-1 text-[var(--demo-accent)]" aria-hidden>
                    ↓
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <LabelGroup title="Frontend" items={techLabels.frontend} />
          <LabelGroup title="Backend" items={techLabels.backend} />
          <LabelGroup title="AI" items={techLabels.ai} />
          <LabelGroup title="Integratsiyalar" items={techLabels.integrations} />
          <LabelGroup title="Yo‘l xaritasi" items={techLabels.planned} planned />
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
