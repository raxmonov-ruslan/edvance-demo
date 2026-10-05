import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { publicApiDocs } from "@/lib/landing/demo-config";
import Link from "next/link";

export function ApiAccess() {
  return (
    <LandingSection id="api" className="!bg-white !py-16">
      <LandingContainer>
        <p className="demo-eyebrow">API kirish</p>
        <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-[var(--lp-text)]">
          Ochiq endpointlar
        </h2>
        <p className="mt-2 max-w-xl text-[14px] text-[var(--demo-muted)]">
          Faqat ochiq, maxfiy kalitsiz endpointlar. Ichki / autentifikatsiya talab qiladigan
          API’lar ko‘rsatilmagan.
        </p>
        <div className="mt-6 space-y-3">
          {publicApiDocs.map((ep) => (
            <div
              key={ep.path}
              className="demo-panel flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-mono text-[13px] text-[var(--lp-text)]">
                  <span className="mr-2 text-[#1a7a38]">{ep.method}</span>
                  {ep.path}
                </p>
                <p className="mt-1 text-[13px] text-[var(--demo-muted)]">{ep.desc}</p>
              </div>
              <Link
                href={ep.path}
                className="shrink-0 text-[13px] font-medium text-[var(--demo-accent)] hover:underline"
              >
                Ochish →
              </Link>
            </div>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
