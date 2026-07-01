"use client";

import { useState } from "react";
import { AFFILIATE_LINK, PROMO_CODE } from "@/lib/affiliate";

export default function StickyCtaBar() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-slate-900/95 px-3 py-2.5 backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={copy}
          className="flex min-h-[44px] flex-col items-center justify-center rounded-lg bg-amber-400 px-3 py-1.5 leading-tight text-slate-900"
        >
          <span className="text-[10px] font-semibold">
            {copied ? "تم النسخ ✓" : "كود الخصم"}
          </span>
          <span dir="ltr" className="font-mono text-sm font-black tracking-widest">
            {PROMO_CODE}
          </span>
        </button>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-gradient-to-l from-emerald-500 to-emerald-600 px-4 text-base font-bold text-white"
        >
          سجّل الآن 🎁
        </a>
      </div>
    </div>
  );
}
