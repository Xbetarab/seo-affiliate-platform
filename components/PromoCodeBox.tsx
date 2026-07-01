"use client";

import { useState } from "react";
import { PROMO_CODE } from "@/lib/affiliate";

export default function PromoCodeBox() {
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
    <div className="rounded-2xl border-2 border-dashed border-amber-500 bg-gradient-to-l from-amber-300 to-yellow-400 p-5 shadow-xl shadow-amber-400/20 md:p-7">
      <p className="text-sm font-bold text-amber-900 md:text-base">
        🎁 كود خصم 1xbet الحصري — أدخله أثناء التسجيل لمضاعفة مكافأتك
      </p>
      <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <span
          dir="ltr"
          className="flex-1 rounded-xl bg-white/90 px-6 py-3 text-center font-mono text-3xl font-black tracking-[0.3em] text-slate-900 md:text-4xl"
        >
          {PROMO_CODE}
        </span>
        <button
          type="button"
          onClick={copy}
          className="min-h-[44px] rounded-xl bg-slate-900 px-6 py-3 text-base font-bold text-white transition-colors hover:bg-slate-700"
        >
          {copied ? "✓ تم النسخ!" : "📋 انسخ الكود"}
        </button>
      </div>
    </div>
  );
}
