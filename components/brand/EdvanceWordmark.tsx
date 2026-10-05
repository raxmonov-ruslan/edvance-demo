import Image from "next/image";
import Link from "next/link";

/** Transparent lavender mark — landing + chrome brand usages. */
export const EDVANCE_MARK_SRC = "/brand/edvance-mark.png";

type Size = "sm" | "md" | "lg" | "xl";

const markClass: Record<Size, string> = {
  sm: "h-6 w-6",
  md: "h-7 w-7",
  lg: "h-8 w-8",
  xl: "h-9 w-9",
};

const wordClass: Record<Size, string> = {
  sm: "text-[15px]",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

type Props = {
  href?: string | null;
  className?: string;
  size?: Size;
  /** Dark nav pill — white wordmark text */
  inverted?: boolean;
};

/**
 * Geometric lavender E mark from `/brand/edvance-mark.png`.
 * `inverted` kept for API compat (PNG reads on dark and light surfaces).
 */
export function EdvanceMark({
  inverted = false,
  className = "",
}: {
  inverted?: boolean;
  className?: string;
}) {
  void inverted;
  return (
    <Image
      src={EDVANCE_MARK_SRC}
      alt=""
      width={48}
      height={44}
      className={`object-contain ${className}`.trim()}
      aria-hidden
      unoptimized
    />
  );
}

/**
 * EDVΛNCE mark + OpenRunde wordmark. Lambda replaces A.
 */
export function EdvanceWordmark({
  href = "/",
  className = "",
  size = "md",
  inverted = false,
}: Props) {
  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <EdvanceMark inverted={inverted} className={`${markClass[size]} shrink-0`} />
      <span
        className={`lp-wordmark ${wordClass[size]} ${inverted ? "!text-white" : ""}`.trim()}
        style={{ fontFamily: '"OpenRunde", "Open Runde", Inter, sans-serif' }}
      >
        EDVΛNCE
      </span>
    </span>
  );

  if (href === null) return mark;

  return (
    <Link href={href} className="inline-flex shrink-0 items-center" aria-label="EDVANCE">
      {mark}
    </Link>
  );
}
