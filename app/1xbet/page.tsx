'use client';

/**
 * 1xBet العراق — Pillar Page
 * Next.js 15 (App Router) + Tailwind + Framer Motion
 * التثبيت: npm i framer-motion
 * الخطوط: Changa (عناوين) + IBM Plex Sans Arabic (نصوص) عبر next/font
 */

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Changa, IBM_Plex_Sans_Arabic } from 'next/font/google';

const display = Changa({ subsets: ['arabic'], weight: ['600', '700', '800'], variable: '--font-display' });
const body = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '700'], variable: '--font-body' });

const AFF_LINK = 'https://dub.sh/fP9V2WH';
const PROMO_CODE = 'X9GO';

/* ---------------------------------- حركات ---------------------------------- */

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.65, 0.35, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------- شعار ----------------------------------- */
/* شعار مكتوب (Wordmark) بأسلوب العلامة — للنشر الرسمي استخدم أصول البراند
   من لوحة شريك 1xBet لضمان الالتزام بشروط برنامج الأفلييت. */

function BrandLogo() {
  return (
    <svg viewBox="0 0 240 64" className="h-12 w-auto" role="img" aria-label="1xBet العراق">
      <defs>
        <linearGradient id="oneX" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7fd45a" />
          <stop offset="100%" stopColor="#5eb532" />
        </linearGradient>
      </defs>
      {/* أيقونة 1x داخل معيّن مائل */}
      <g transform="translate(4,8) skewX(-8)">
        <rect x="0" y="0" width="52" height="48" rx="10" fill="url(#oneX)" />
        <text
          x="26"
          y="34"
          textAnchor="middle"
          fontFamily="Changa, sans-serif"
          fontWeight="800"
          fontSize="27"
          fill="#152a3f"
        >
          1x
        </text>
      </g>
      {/* الاسم */}
      <text
        x="70"
        y="42"
        fontFamily="Changa, sans-serif"
        fontWeight="800"
        fontSize="34"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        Bet
      </text>
      <text
        x="132"
        y="42"
        fontFamily="Changa, sans-serif"
        fontWeight="600"
        fontSize="20"
        fill="#7fd45a"
      >
        العراق
      </text>
    </svg>
  );
}

/* ------------------------------------ CTA ------------------------------------ */

function CTAButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.a
      href={AFF_LINK}
      target="_blank"
      rel="sponsored noopener"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#5eb532] px-8 py-4
        font-bold text-white text-lg transition-shadow duration-300
        shadow-[0_4px_20px_rgba(94,181,50,0.35)]
        hover:shadow-[0_0_36px_rgba(94,181,50,0.75)] ${className}`}
    >
      {children}
    </motion.a>
  );
}

/* --------------------------------- البيانات --------------------------------- */

const registrationMethods = [
  {
    title: 'التسجيل بنقرة واحدة',
    badge: 'الأسرع ⚡',
    steps: [
      'ادخل عبر رابط 1xbet الشغال في موقعنا',
      'اختر الدولة: العراق — والعملة: الدينار (IQD)',
      `أدخل كود الخصم ${PROMO_CODE} لتفعيل المكافأة المضاعفة`,
      'احفظ رقم الحساب وكلمة المرور بلقطة شاشة فوراً',
    ],
  },
  {
    title: 'التسجيل برقم الهاتف',
    badge: 'الأكثر أماناً 🛡',
    steps: [
      'أدخل رقمك العراقي (آسيا سيل، زين، كورك)',
      'ستصلك رسالة SMS برمز التفعيل',
      'أكّد الرمز واختر العملة IQD',
      'أدخل الكود الترويجي — وحسابك جاهز خلال دقيقتين',
    ],
  },
];

const paymentMethods = [
  { name: 'زين كاش', icon: '📱', min: '14,000 IQD', deposit: 'فوري', withdraw: 'دقائق – ساعة', note: 'الأكثر استخداماً في العراق' },
  { name: 'آسيا سيل (آسيا حوالة)', icon: '💳', min: '14,000 IQD', deposit: 'فوري', withdraw: 'دقائق – ساعة', note: 'مثالي لمستخدمي آسيا سيل' },
  { name: 'FIB — مصرف العراق الأول', icon: '🏦', min: 'حسب الحساب', deposit: 'فوري', withdraw: 'سريع', note: 'مناسب للمبالغ الأكبر' },
  { name: 'الفاست بي / الشحن السريع', icon: '⚡', min: 'منخفض', deposit: 'فوري', withdraw: 'سريع', note: 'متوفر عبر الوكلاء المحليين' },
  { name: 'USDT عبر OKX أو Binance', icon: '🪙', min: 'مرن', deposit: '5–15 دقيقة', withdraw: 'الأسرع للمبالغ الكبيرة', note: 'بدون حدود مصرفية' },
];

const faqs = [
  {
    q: 'شكد يطول السحب من 1xbet بزين كاش؟',
    a: 'في أغلب الحالات من 15 دقيقة إلى ساعة. إذا كان سحبك الأول أو المبلغ كبيراً، قد يستغرق حتى 24 ساعة بسبب المراجعة الأمنية — وهذا يحدث مرة واحدة عادة.',
  },
  {
    q: 'هل الحساب يطلب توثيق؟',
    a: 'ليس عند التسجيل ولا عند الإيداع. التوثيق يُطلب أحياناً عند سحب مبالغ كبيرة أو عند اختلاف بيانات الدفع عن بيانات الحساب. سجّل ببياناتك الحقيقية وأودع واسحب بنفس الطريقة، وغالباً لن تمر بالتوثيق أبداً.',
  },
  {
    q: 'هل يوجد حد أدنى للإيداع؟',
    a: 'نعم، وهو منخفض جداً: يبدأ من حوالي 1,400 دينار لبعض الطرق، و14,000 دينار لتفعيل المكافأة الترحيبية الكاملة.',
  },
  {
    q: 'التطبيق ما موجود بكوكل بلي، شلون أنزّله؟',
    a: 'طبيعي — متجر Google Play لا يقبل تطبيقات المراهنات في المنطقة. الحل: تنزيل تطبيق 1xbet بصيغة APK من الرابط في موقعنا، ثم تفعيل "السماح بالتثبيت من مصادر غير معروفة" من إعدادات الهاتف.',
  },
];

/* ------------------------------- بطاقة الكود ------------------------------- */

function PromoCard() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard غير متاح — لا شيء */
    }
  };

  return (
    <FadeIn>
      <div className="relative mx-auto max-w-lg">
        {/* توهج خلفي */}
        <div className="absolute -inset-3 rounded-3xl bg-[#5eb532]/25 blur-2xl" aria-hidden />
        {/* قسيمة الرهان — Glassmorphism */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl">
          <div className="p-8 text-center">
            <p className="text-sm font-medium tracking-widest text-[#7fd45a]">الرمز الترويجي الحصري</p>
            <p
              className="mt-3 select-all font-[var(--font-display)] text-6xl font-extrabold tracking-[0.25em] text-white"
              style={{ textShadow: '0 0 30px rgba(94,181,50,0.6)' }}
            >
              {PROMO_CODE}
            </p>
            <p className="mt-3 text-sm text-white/70">
              أدخله أثناء التسجيل — لا يمكن إضافته بعد إنشاء الحساب
            </p>
          </div>

          {/* خط القسيمة المثقّب */}
          <div className="relative flex items-center" aria-hidden>
            <span className="absolute -right-3 h-6 w-6 rounded-full bg-[#152a3f]" />
            <span className="mx-4 h-px w-full border-t-2 border-dashed border-white/25" />
            <span className="absolute -left-3 h-6 w-6 rounded-full bg-[#152a3f]" />
          </div>

          <div className="flex gap-3 p-6">
            <motion.button
              onClick={copy}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 rounded-xl border py-3.5 font-bold transition-colors duration-300 ${
                copied
                  ? 'border-[#5eb532] bg-[#5eb532]/20 text-[#7fd45a]'
                  : 'border-white/25 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {copied ? 'تم النسخ ✅' : 'نسخ الكود 📋'}
            </motion.button>
            <CTAButton className="flex-1 !px-4 !py-3.5 !text-base">فعّل المكافأة ←</CTAButton>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#255280]">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-right"
              >
                <span className="font-bold text-white text-lg">{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#5eb532] text-xl font-bold text-white"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.21, 0.65, 0.35, 1] }}
                  >
                    <p className="px-5 pb-5 leading-relaxed text-white/80">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

/* --------------------------------- الصفحة --------------------------------- */

export default function Page() {
  const reduce = useReducedMotion();

  return (
    <main
      dir="rtl"
      lang="ar"
      className={`${display.variable} ${body.variable} min-h-screen bg-[#152a3f] font-[var(--font-body)] text-white antialiased`}
    >
      {/* ============================== HERO ============================== */}
      <section className="relative overflow-hidden">
        {/* هالة خلفية هادئة */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#5eb532]/15 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-10">
          <motion.header
            initial={reduce ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <BrandLogo />
            <CTAButton className="!px-6 !py-2.5 !text-base">سجّل الآن</CTAButton>
          </motion.header>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <FadeIn>
              <span className="rounded-full border border-[#5eb532]/40 bg-[#5eb532]/10 px-4 py-1.5 text-sm font-medium text-[#7fd45a]">
                مراجعة محدّثة — 2026
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-[var(--font-display)] text-4xl font-extrabold leading-tight md:text-6xl">
                1xBet العراق 2026
                <span className="mt-2 block text-[#7fd45a]">
                  التسجيل، السحب بزين كاش، ومكافأة حتى 2,100,000 دينار
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                هل تبحث عن منصة تدعم <strong className="text-white">الدينار العراقي</strong> فعلياً، وتسحب أرباحك
                خلال دقائق عبر <strong className="text-white">زين كاش</strong> أو{' '}
                <strong className="text-white">آسيا سيل</strong> بدون تعقيد؟ في هذه المراجعة نشرح كل شيء عملياً:
                من تسجيل 1xbet بنقرة واحدة، إلى رابط 1xbet الشغال حتى لو كان الموقع محجوباً عندك.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CTAButton>سجّل واستلم مكافأتك ←</CTAButton>
              <a
                href="#promo"
                className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white/90 transition hover:bg-white/5"
              >
                انسخ كود الخصم
              </a>
            </FadeIn>
          </div>

          {/* شريط ثقة */}
          <FadeIn delay={0.4}>
            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ['منذ 2007', 'خبرة عالمية'],
                ['ترخيص Curaçao', 'منصة مرخّصة'],
                ['+200 طريقة دفع', 'تدعم الدينار'],
                ['الدوري العراقي', 'تغطية محلية'],
              ].map(([big, small]) => (
                <div key={big} className="rounded-2xl border border-white/10 bg-[#255280]/60 p-4 text-center">
                  <p className="font-[var(--font-display)] text-lg font-bold text-[#7fd45a]">{big}</p>
                  <p className="mt-1 text-sm text-white/60">{small}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================ التسجيل ============================ */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <h2 className="text-center font-[var(--font-display)] text-3xl font-extrabold md:text-4xl">
            كيفية التسجيل في 1xBet خطوة بخطوة
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-white/65">
            دقيقتان فقط — اختر الطريقة التي تناسبك
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {registrationMethods.map((m, i) => (
            <FadeIn key={m.title} delay={i * 0.12}>
              <div className="h-full rounded-3xl border border-white/10 bg-[#255280] p-8 transition-colors hover:border-[#5eb532]/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-[var(--font-display)] text-xl font-bold">{m.title}</h3>
                  <span className="rounded-full bg-[#5eb532]/15 px-3 py-1 text-sm font-medium text-[#7fd45a]">
                    {m.badge}
                  </span>
                </div>
                <ol className="mt-6 space-y-4">
                  {m.steps.map((s, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#5eb532] text-sm font-bold">
                        {j + 1}
                      </span>
                      <span className="leading-relaxed text-white/85">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#5eb532]/30 bg-[#5eb532]/10 p-5 text-center text-white/85">
            💡 <strong>نصيحة:</strong> سجّل ببياناتك الحقيقية من البداية — تطابق البيانات عند التوثيق يعني سحباً
            بلا تأخير.
          </p>
        </FadeIn>
      </section>

      {/* ======================= الإيداع والسحب ======================= */}
      <section className="border-y border-white/5 bg-[#12243a] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="text-center font-[var(--font-display)] text-3xl font-extrabold md:text-4xl">
              طرق الإيداع والسحب في العراق
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-white/65">
              لا حاجة لفيزا أو حساب أجنبي — كل شيء بالطرق التي تستخدمها يومياً
            </p>
          </FadeIn>

          <div className="mt-10 space-y-3">
            {/* رأس الجدول — شاشات كبيرة */}
            <div className="hidden grid-cols-12 gap-4 px-6 text-sm font-medium text-white/50 md:grid">
              <span className="col-span-4">الطريقة</span>
              <span className="col-span-2">أقل إيداع</span>
              <span className="col-span-2">سرعة الإيداع</span>
              <span className="col-span-2">سرعة السحب</span>
              <span className="col-span-2">ملاحظة</span>
            </div>
            {paymentMethods.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.07}>
                <div className="grid grid-cols-2 items-center gap-4 rounded-2xl border border-white/10 bg-[#255280] p-6 transition-colors hover:border-[#5eb532]/50 md:grid-cols-12">
                  <div className="col-span-2 flex items-center gap-3 md:col-span-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#152a3f] text-xl">
                      {p.icon}
                    </span>
                    <span className="font-bold">{p.name}</span>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-white/50 md:hidden">أقل إيداع</p>
                    <p className="font-medium text-white/85">{p.min}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-white/50 md:hidden">الإيداع</p>
                    <span className="rounded-full bg-[#5eb532]/15 px-2.5 py-0.5 text-sm font-medium text-[#7fd45a]">
                      {p.deposit}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-white/50 md:hidden">السحب</p>
                    <p className="text-sm text-white/85">{p.withdraw}</p>
                  </div>
                  <p className="col-span-2 text-sm text-white/55 md:col-span-2">{p.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-center text-white/85">
              ⚠️ <strong>قاعدة ذهبية:</strong> اسحب بنفس الطريقة التي أودعت بها — أودعت بزين كاش؟ اسحب بزين كاش.
              هذا يجنّبك التوثيق الإضافي ويجعل <strong>الحوالة</strong> أسرع بكثير.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===================== الكود الترويجي والمكافأة ===================== */}
      <section id="promo" className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <h2 className="text-center font-[var(--font-display)] text-3xl font-extrabold md:text-4xl">
            الرمز الترويجي والمكافأة الترحيبية
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/65">
            مكافأة الكازينو تُمنح على أول 4 إيداعات وتصل بمجموعها إلى{' '}
            <strong className="text-[#7fd45a]">2,100,000 دينار عراقي + 150 لفة مجانية</strong> — ومكافأة رياضية
            100% على الإيداع الأول
          </p>
        </FadeIn>

        <div className="mt-12">
          <PromoCard />
        </div>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-[#255280] p-8">
            <h3 className="font-[var(--font-display)] text-xl font-bold">كيف تحرر المكافأة الرياضية؟</h3>
            <p className="mt-3 leading-relaxed text-white/80">
              المكافأة ليست قابلة للسحب فوراً — يجب &quot;تدويرها&quot; <strong>5 مرات</strong> برهانات تراكمية تتضمن{' '}
              <strong>3 أحداث على الأقل باحتمالات 1.40 فأعلى</strong>. اقرأ هذا الشرط جيداً قبل الإيداع حتى لا
              تتفاجأ. الحد الأدنى لتفعيل المكافأة: 14,000 دينار تقريباً.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ======================== الرابط البديل ======================== */}
      <section className="border-y border-white/5 bg-[#12243a] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-[var(--font-display)] text-3xl font-extrabold md:text-4xl">
              رابط 1xBet البديل — حل مشكلة الحجب
            </h2>
            <p className="mt-4 leading-relaxed text-white/75">
              إذا لم يفتح الموقع عندك، فالمشكلة ليست في حسابك — بعض مزودي الإنترنت في العراق يحجبون الرابط
              الرئيسي من فترة لأخرى. نحن نحدّث <strong className="text-white">رابط 1xbet الشغال</strong> في هذه
              الصفحة باستمرار، والحل الجذري هو <strong className="text-white">تنزيل تطبيق 1xbet</strong> بصيغة
              APK — يتجاوز الحجب ويعمل مباشرة، وحسابك واحد في كل مكان.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton>الرابط الشغال الآن ←</CTAButton>
            <a
              href={AFF_LINK}
              target="_blank"
              rel="sponsored noopener"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white/90 transition hover:bg-white/5"
            >
              تحميل التطبيق APK 2026
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ============================== FAQ ============================== */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <h2 className="text-center font-[var(--font-display)] text-3xl font-extrabold md:text-4xl">
            الأسئلة الشائعة
          </h2>
        </FadeIn>
        <div className="mt-10">
          <FAQ />
        </div>
      </section>

      {/* ============================ الخاتمة ============================ */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-[#5eb532]/30 bg-[#255280] p-10 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[#5eb532]/20 blur-[90px]"
            />
            <h2 className="relative font-[var(--font-display)] text-3xl font-extrabold">
              هل يستحق 1xBet العراق التجربة في 2026؟
            </h2>
            <p className="relative mt-4 leading-relaxed text-white/80">
              الجواب المختصر: <strong className="text-[#7fd45a]">نعم — خصوصاً للاعب العراقي</strong>. دعم حقيقي
              للدينار وطرق الدفع المحلية، سحوبات من الأسرع في السوق، ومكافأة ترحيبية لا يقدّم مثلها أي منافس
              حالياً — مع تغطية الدوري العراقي الممتاز ومباريات أسود الرافدين.
            </p>
            <div className="relative mt-8">
              <CTAButton>ابدأ الآن: سجّل وفعّل الكود ←</CTAButton>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================= الفوتر ============================= */}
      <footer className="border-t border-white/10 bg-[#0f1f31] px-6 py-10 text-center">
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/50">
          ⚠️ إخلاء مسؤولية: هذا موقع معلوماتي مستقل لأغراض المراجعة، ولا يمثل العلامة التجارية 1xBet رسمياً.
          المراهنات مخصصة لمن هم بعمر 18 عاماً فأكثر. المراهنة تنطوي على مخاطر مالية — لا تراهن بأموال لا تتحمل
          خسارتها، وتأكد من توافق استخدامك مع القوانين المحلية. للعب المسؤول: حدد ميزانيتك مسبقاً والتزم بها.
        </p>
      </footer>
    </main>
  );
}
