import { AFFILIATE_LINK } from "@/lib/affiliate";

interface CtaButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function CtaButton({
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98] md:px-8 md:py-4 md:text-lg";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-l from-emerald-500 to-emerald-600 text-white shadow-emerald-500/30 hover:from-emerald-400 hover:to-emerald-500"
      : "bg-amber-400 text-slate-900 shadow-amber-400/30 hover:bg-amber-300";
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
