import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export function LandingContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function LandingSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-[96px] ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`lp-display whitespace-pre-line text-balance text-[30px] font-medium leading-[1.2] tracking-[-0.61px] text-[var(--lp-text)] md:text-[36px] md:leading-[1.22] ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Small gray pill above a section heading ("Features", "Pricing", …). */
export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <span className="lp-eyebrow">{children}</span>;
}

export function SectionSubtitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-4 max-w-2xl text-base leading-[1.65] tracking-[-0.01em] text-[#666] ${className}`}
    >
      {children}
    </p>
  );
}

export function LandingBadge({
  children,
  icon: Icon,
  variant = "default",
}: {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "default" | "new";
}) {
  return (
    <span className={variant === "new" ? "lp-badge lp-badge-new" : "lp-badge"}>
      {Icon ? <Icon size={14} strokeWidth={1.75} aria-hidden /> : null}
      {children}
    </span>
  );
}

export function LandingButton({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "iris";
  className?: string;
  showArrow?: boolean;
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lp-primary)]/35";
  const variants = {
    primary: "lp-btn-primary",
    iris: "lp-btn-iris",
    secondary: "lp-btn-secondary",
    ghost: "h-11 px-3 text-[16px] font-medium text-[var(--lp-text-secondary)] hover:text-[var(--lp-text)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight size={15} strokeWidth={2} aria-hidden /> : null}
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function FeatureCard({
  children,
  className = "",
  plain = false,
}: {
  children: ReactNode;
  className?: string;
  plain?: boolean;
}) {
  return (
    <div className={`${plain ? "lp-feature-plain" : "lp-card p-6"} ${className}`}>
      {children}
    </div>
  );
}

export function ProductCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`lp-card overflow-hidden ${className}`}>{children}</div>;
}

export function AvatarStack({ initials }: { initials: string[] }) {
  return (
    <div className="lp-avatar-stack" aria-hidden>
      {initials.map((t) => (
        <span
          key={t}
          className="inline-flex h-6 w-6 items-center justify-center bg-[var(--lp-mist)] text-[10px] font-medium text-[var(--lp-text)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function StarRow({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-[var(--lp-text-secondary)]">
      <span className="tracking-tight text-[var(--lp-text)]" aria-hidden>
        ★★★★★
      </span>
      <span>{label}</span>
    </div>
  );
}
