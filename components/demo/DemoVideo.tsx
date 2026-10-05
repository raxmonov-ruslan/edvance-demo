import { LandingContainer, LandingSection } from "@/components/landing/primitives";
import { demoConfig } from "@/lib/landing/demo-config";

export function DemoVideo() {
  const youtube = demoConfig.youtubeId;
  const mp4 = demoConfig.videoUrl;
  const hasVideo = Boolean(youtube || mp4);

  return (
    <LandingSection id="video" className="bg-[var(--demo-paper)]">
      <LandingContainer>
        <p className="demo-eyebrow">10 · Demo video</p>
        <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] text-[var(--lp-text)] md:text-[36px]">
          Demo video
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-[var(--demo-muted)]">
          EDVΛNCE AI Sales Manager qanday ishlashini 1–5 daqiqada ko‘ring.
        </p>

        <div className="demo-panel-dark mt-8 overflow-hidden">
          {youtube ? (
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${youtube}?rel=0`}
                title="EDVΛNCE demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : mp4 ? (
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="metadata"
              poster="/brand/edvance-mark.png"
            >
              <source src={mp4} type="video/mp4" />
              Brauzeringiz video formatini qo‘llab-quvvatlamaydi. Manba: {mp4}
            </video>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="font-mono text-[14px] tracking-wide text-white/50">[ DEMO VIDEO ]</p>
              <p className="text-[14px] text-white/70">Demo video tez orada joylanadi.</p>
            </div>
          )}
        </div>

        {!hasVideo ? null : (
          <p className="mt-3 text-[12px] text-[var(--demo-muted)]">
            Manba: {youtube ? `YouTube · ${youtube}` : mp4}
          </p>
        )}

        <div className="mt-8 max-w-3xl">
          <h3 className="text-[18px] font-medium tracking-[-0.02em] text-[var(--lp-text)]">
            Video tavsifi
          </h3>
          <p className="mt-3 text-[14px] leading-[1.7] text-[var(--demo-muted)]">
            Ushbu demo EDVΛNCE AI Sales Manager’ning Instagram/Telegram orqali kelgan murojaatni
            qanday qabul qilishi, knowledge base asosida javob berishi, leadni qualify qilishi,
            score berishi va keyingi harakatni belgilashini ko‘rsatadi.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="demo-chip">Davomiylik: 1–5 daqiqa</span>
            <span className="demo-chip">Format: Mahsulot walkthrough</span>
          </div>
        </div>
      </LandingContainer>
    </LandingSection>
  );
}
