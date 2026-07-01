import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import PromoCodeBox from "@/components/PromoCodeBox";
import StickyCtaBar from "@/components/StickyCtaBar";

export const metadata: Metadata = {
  title: "مراجعة 1xBet العراق 2026 | التسجيل، السحب بزين كاش، والمكافأة الترحيبية",
  description:
    "مراجعة شاملة لموقع 1xbet العراق 2026: شرح تسجيل 1xbet خطوة بخطوة، طرق الإيداع والسحب بزين كاش وآسيا سيل وFIB، كود خصم 1xbet، ورابط 1xbet الشغال دائماً.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "شكد يطول السحب من 1xbet بزين كاش؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "في أغلب الحالات من 15 دقيقة إلى ساعة. إذا كان سحبك الأول أو المبلغ كبيراً، قد يستغرق حتى 24 ساعة بسبب المراجعة الأمنية — وهذا يحدث مرة واحدة عادة.",
      },
    },
    {
      "@type": "Question",
      name: "هل الحساب يطلب توثيق؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ليس عند التسجيل ولا عند الإيداع. التوثيق (إرسال صورة الهوية) يُطلب أحياناً عند سحب مبالغ كبيرة أو عند اختلاف بيانات الدفع عن بيانات الحساب. سجّل ببياناتك الحقيقية وأودع واسحب بنفس الطريقة، وغالباً لن تمر بالتوثيق أبداً.",
      },
    },
    {
      "@type": "Question",
      name: "هل يوجد حد أدنى للإيداع؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، وهو منخفض جداً: يبدأ من حوالي 1,400 دينار لبعض الطرق، و14,000 دينار لتفعيل المكافأة الترحيبية الكاملة.",
      },
    },
    {
      "@type": "Question",
      name: "التطبيق ما موجود بكوكل بلي، شلون أنزّله؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "طبيعي — متجر Google Play لا يقبل تطبيقات المراهنات في المنطقة. الحل: تنزيل تطبيق 1xbet بصيغة APK من الرابط في موقعنا، ثم تفعيل السماح بالتثبيت من مصادر غير معروفة من إعدادات الهاتف، والتثبيت يكتمل خلال دقيقة.",
      },
    },
  ],
};

const paymentMethods = [
  ["زين كاش (ZainCash)", "14,000 IQD تقريباً", "فوري", "من دقائق حتى ساعة", "الأكثر استخداماً في العراق"],
  ["آسيا سيل (آسيا حوالة)", "14,000 IQD تقريباً", "فوري", "من دقائق حتى ساعة", "مثالي لمستخدمي آسيا سيل"],
  ["FIB (مصرف العراق الأول)", "يختلف حسب الحساب", "فوري", "سريع", "مناسب للمبالغ الأكبر"],
  ["الفاست بي / الشحن السريع", "منخفض", "فوري", "سريع", "متوفر عبر الوكلاء المحليين"],
  ["العملات الرقمية (USDT)", "مرن", "5–15 دقيقة", "من الأسرع للمبالغ الكبيرة", "بدون حدود مصرفية"],
];

const faqs = [
  {
    q: "شكد يطول السحب من 1xbet بزين كاش؟",
    a: "في أغلب الحالات من 15 دقيقة إلى ساعة. إذا كان سحبك الأول أو المبلغ كبيراً، قد يستغرق حتى 24 ساعة بسبب المراجعة الأمنية — وهذا يحدث مرة واحدة عادة.",
  },
  {
    q: "هل الحساب يطلب توثيق؟",
    a: "ليس عند التسجيل ولا عند الإيداع. التوثيق (إرسال صورة الهوية) يُطلب أحياناً عند سحب مبالغ كبيرة أو عند اختلاف بيانات الدفع عن بيانات الحساب. سجّل ببياناتك الحقيقية وأودع واسحب بنفس الطريقة، وغالباً لن تمر بالتوثيق أبداً.",
  },
  {
    q: "هل يوجد حد أدنى للإيداع؟",
    a: "نعم، وهو منخفض جداً: يبدأ من حوالي 1,400 دينار لبعض الطرق، و14,000 دينار لتفعيل المكافأة الترحيبية الكاملة.",
  },
  {
    q: "التطبيق ما موجود بكوكل بلي، شلون أنزّله؟",
    a: "طبيعي — متجر Google Play لا يقبل تطبيقات المراهنات في المنطقة. الحل: تنزيل تطبيق 1xbet بصيغة APK من الرابط في موقعنا، ثم تفعيل \"السماح بالتثبيت من مصادر غير معروفة\" من إعدادات الهاتف، والتثبيت يكتمل خلال دقيقة.",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 border-r-4 border-emerald-500 pr-4 text-2xl font-extrabold text-slate-900 md:mt-16 md:text-3xl">
      {children}
    </h2>
  );
}

export default function OneXBetPage() {
  return (
    <div dir="rtl" className="bg-slate-50 pb-24 text-right md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <header className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 px-4 pb-14 pt-6 text-white md:pb-20">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "الرئيسية", href: "/" },
              { name: "1xbet العراق", href: "/1xbet" },
            ]}
          />
          <p className="mt-8 inline-block rounded-full bg-emerald-500/15 px-4 py-1.5 text-sm font-semibold text-emerald-400 ring-1 ring-emerald-500/40">
            ⚡ مراجعة محدّثة لعام 2026 — رابط شغال دائماً
          </p>
          <h1 className="mt-5 text-3xl font-black leading-snug md:text-5xl md:leading-tight">
            مراجعة 1xBet العراق 2026: دليلك الكامل للتسجيل، الإيداع، والسحب
            بالدينار العراقي
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            هل تبحث عن منصة مراهنات تدعم <strong className="text-white">الدينار العراقي</strong> فعلياً،
            وتسحب أرباحك خلال دقائق عبر <strong className="text-white">زين كاش</strong> أو{" "}
            <strong className="text-white">آسيا سيل</strong> بدون تعقيد؟ هذا بالضبط ما جعل{" "}
            <strong className="text-white">1xbet العراق</strong> الخيار الأول لآلاف اللاعبين العراقيين —
            مع مكافأة ترحيبية تصل إلى{" "}
            <strong className="text-amber-400">2,100,000 دينار عراقي</strong>.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton>سجّل الآن واحصل على مكافأتك الترحيبية ←</CtaButton>
            <span className="text-sm text-slate-400">
              🎁 استخدم الكود <span dir="ltr" className="font-mono font-bold text-amber-400">X9GO</span> عند التسجيل
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4">
        {/* Promo box */}
        <div className="-mt-8 md:-mt-12">
          <PromoCodeBox />
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 leading-relaxed text-slate-700 shadow-sm md:p-6">
          ⚡ <strong>باختصار:</strong> منصة عاملة منذ 2007، مرخّصة من Curaçao Gaming، تدعم طرق الدفع
          المحلية العراقية، وتغطي الدوري العراقي الممتاز ومباريات المنتخب — مع تطبيق أندرويد خفيف
          يمكنك تنزيله مباشرة من هنا.
        </div>

        {/* Registration */}
        <SectionTitle>كيفية التسجيل في 1xBet خطوة بخطوة</SectionTitle>
        <p className="mt-4 leading-relaxed text-slate-700">
          عملية <strong>تسجيل 1xbet</strong> أسهل مما تتوقع، ولن تحتاج أكثر من دقيقتين. أمامك
          طريقتان رئيسيتان:
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">1. التسجيل بنقرة واحدة (الأسرع)</h3>
            <ul className="mt-4 space-y-2.5 text-slate-700">
              <li>• ادخل عبر <strong>رابط 1xbet الشغال</strong> الموجود في موقعنا (محدّث دائماً).</li>
              <li>• اضغط زر <strong>&quot;التسجيل&quot;</strong> أعلى الصفحة.</li>
              <li>• اختر الدولة: <strong>العراق</strong> — والعملة: <strong>الدينار العراقي (IQD)</strong>.</li>
              <li>• أدخل <strong>كود خصم 1xbet</strong> <span dir="ltr" className="font-mono font-bold text-emerald-600">X9GO</span> لتفعيل المكافأة المضاعفة.</li>
              <li>• اضغط &quot;تسجيل&quot; — وسيولّد الموقع رقم حساب وكلمة مرور تلقائياً. <strong>احفظهما فوراً</strong> بلقطة شاشة.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">2. التسجيل برقم الهاتف (الأكثر أماناً)</h3>
            <ul className="mt-4 space-y-2.5 text-slate-700">
              <li>• أدخل رقم هاتفك العراقي (آسيا سيل، زين، أو كورك).</li>
              <li>• ستصلك رسالة SMS برمز التفعيل.</li>
              <li>• أكّد الرمز، اختر العملة IQD، وأدخل الكود الترويجي — وحسابك جاهز.</li>
            </ul>
            <p className="mt-4 rounded-xl bg-sky-50 p-3 text-sm leading-relaxed text-sky-900">
              💡 <strong>نصيحة مهمة:</strong> سجّل ببياناتك الحقيقية من البداية. إذا طُلب منك التوثيق
              لاحقاً عند سحب مبلغ كبير، تطابق البيانات يعني سحباً بلا تأخير.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <CtaButton>افتح حسابك الآن خلال دقيقتين ←</CtaButton>
        </div>

        {/* Payments */}
        <SectionTitle>طرق الإيداع والسحب في العراق (أهم قسم في المراجعة)</SectionTitle>
        <p className="mt-4 leading-relaxed text-slate-700">
          هنا يتفوق <strong>1xbet العراق</strong> على أي منصة منافسة: الدعم الحقيقي لطرق الدفع
          المحلية. لا حاجة لبطاقة فيزا أو حساب بنكي أجنبي — كل شيء يتم بالطرق التي تستخدمها يومياً.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[640px] bg-white text-sm md:text-base">
            <thead>
              <tr className="bg-slate-900 text-white">
                {["طريقة الدفع", "الحد الأدنى للإيداع", "سرعة الإيداع", "سرعة السحب", "ملاحظات"].map((h) => (
                  <th key={h} className="px-4 py-3.5 text-right font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paymentMethods.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3.5 ${j === 0 ? "font-bold text-slate-900" : "text-slate-700"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 text-xl font-bold text-slate-900">كيف تسحب أرباحك بزين كاش؟</h3>
        <ol className="mt-4 space-y-3">
          {[
            <>ادخل حسابك ← <strong>&quot;سحب الأموال&quot;</strong>.</>,
            <>اختر <strong>ZainCash</strong> وأدخل رقم محفظتك (نفس رقم هاتفك المسجّل بالمحفظة).</>,
            <>حدد المبلغ واضغط تأكيد.</>,
            <>في أغلب الحالات تصل <strong>الحوالة</strong> خلال دقائق إلى ساعة.</>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
                {i + 1}
              </span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>

        <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 leading-relaxed text-amber-900">
          ⚠️ <strong>قاعدة ذهبية:</strong> اسحب بنفس الطريقة التي أودعت بها. أودعت بزين كاش؟ اسحب
          بزين كاش. هذا يجنّبك أي طلب توثيق إضافي ويجعل السحب أسرع بكثير.
        </p>

        {/* Bonus */}
        <SectionTitle>الرمز الترويجي والمكافأة الترحيبية: حتى 2,100,000 دينار عراقي</SectionTitle>
        <p className="mt-4 leading-relaxed text-slate-700">
          المكافأة الترحيبية لقسم الكازينو تُمنح على <strong>أول 4 إيداعات</strong> وتصل بمجموعها
          إلى <strong>2,100,000 IQD + 150 لفة مجانية</strong>، بينما يحصل عشاق المراهنات الرياضية
          على مكافأة <strong>100% على الإيداع الأول</strong>. إليك التفاصيل:
        </p>
        <ul className="mt-4 space-y-2.5 text-slate-700">
          <li>• <strong>الإيداع الأول:</strong> مكافأة 100% (بحد أدنى إيداع 14,000 دينار تقريباً).</li>
          <li>• <strong>الإيداعات 2–4:</strong> نسب إضافية 50% ثم 25% ثم 25% مع لفات مجانية متزايدة.</li>
          <li>
            • <strong>شرط أساسي:</strong> أدخل <strong>كود خصم 1xbet</strong>{" "}
            <span dir="ltr" className="font-mono font-bold text-emerald-600">X9GO</span> في خانة
            &quot;الرمز الترويجي&quot; <strong>أثناء التسجيل</strong> — لا يمكن إضافته بعد إنشاء الحساب.
          </li>
        </ul>

        <h3 className="mt-8 text-xl font-bold text-slate-900">كيف تحرر المكافأة الرياضية (شرط الرهان)؟</h3>
        <p className="mt-3 leading-relaxed text-slate-700">
          المكافأة ليست قابلة للسحب فوراً — يجب &quot;تدويرها&quot; <strong>5 مرات</strong> برهانات
          تراكمية تتضمن <strong>3 أحداث على الأقل باحتمالات 1.40 فأعلى</strong>. اقرأ هذا الشرط
          جيداً قبل الإيداع حتى لا تتفاجأ.
        </p>

        <div className="mt-8">
          <PromoCodeBox />
        </div>
        <div className="mt-6 text-center">
          <CtaButton variant="secondary">انسخ الكود الترويجي وسجّل الآن ←</CtaButton>
        </div>

        {/* Alternative link */}
        <SectionTitle>رابط 1xBet البديل: حل مشكلة الحجب في العراق</SectionTitle>
        <p className="mt-4 leading-relaxed text-slate-700">
          إذا حاولت فتح الموقع الرسمي ولم يعمل، فالمشكلة ليست في حسابك — بعض مزودي الإنترنت في
          العراق يحجبون الرابط الرئيسي من فترة لأخرى. الحلول بالترتيب:
        </p>
        <ol className="mt-4 list-inside space-y-3 text-slate-700">
          <li className="leading-relaxed">
            1. <strong>الرابط البديل المحدّث:</strong> نحن نحدّث <strong>رابط 1xbet الشغال</strong> في
            هذه الصفحة <strong>بشكل مستمر</strong>. احفظ موقعنا في المفضلة وارجع له متى ما توقف
            الرابط القديم — ستجد الرابط الجديد جاهزاً دائماً.
          </li>
          <li className="leading-relaxed">
            2. <strong>تنزيل تطبيق 1xbet:</strong> الحل الجذري. التطبيق يتجاوز حجب المتصفح ويعمل
            مباشرة. <strong>تنزيل تطبيق 1xbet</strong> للأندرويد متاح بصيغة APK (لن تجده في Google
            Play بسبب سياسات المتجر — وهذا طبيعي لكل تطبيقات المراهنات).
          </li>
          <li className="leading-relaxed">
            3. <strong>الوصول عبر التطبيق + بيانات حسابك نفسها:</strong> حسابك واحد، سواء دخلت من
            المتصفح أو التطبيق أو أي رابط مرآة رسمي.
          </li>
        </ol>
        <div className="mt-6 text-center">
          <CtaButton>حمّل تطبيق 1xbet APK آخر إصدار 2026 ←</CtaButton>
        </div>

        {/* FAQ */}
        <SectionTitle>الأسئلة الشائعة (FAQ)</SectionTitle>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-emerald-300"
            >
              <summary className="cursor-pointer list-none text-lg font-bold text-slate-900">
                {f.q}
              </summary>
              <p className="mt-3 leading-relaxed text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>

        {/* Conclusion */}
        <SectionTitle>الخلاصة: هل يستحق 1xBet العراق التجربة في 2026؟</SectionTitle>
        <p className="mt-4 leading-relaxed text-slate-700">
          بعد تجربة المنصة وتحليل بدائلها، الجواب المختصر: <strong>نعم — خصوصاً للاعب العراقي
          تحديداً</strong>. الأسباب الثلاثة الحاسمة: دعم حقيقي للدينار وطرق الدفع المحلية (زين كاش،
          آسيا سيل، FIB)، سحوبات من الأسرع في السوق، ومكافأة ترحيبية تصل إلى 2,100,000 دينار لا
          يقدّم مثلها أي منافس حالياً. أضف إليها تغطية الدوري العراقي الممتاز ومباريات أسود
          الرافدين، وتطبيقاً خفيفاً يحل مشكلة الحجب نهائياً.
        </p>

        <div className="mt-10 rounded-3xl bg-gradient-to-l from-slate-900 to-slate-800 p-8 text-center text-white shadow-xl md:p-12">
          <h3 className="text-2xl font-black md:text-3xl">جاهز تبدأ؟ 🚀</h3>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-300">
            سجّل، فعّل الكود <span dir="ltr" className="font-mono font-bold text-amber-400">X9GO</span>،
            واستلم مكافأتك الترحيبية حتى 2,100,000 دينار عراقي.
          </p>
          <div className="mt-6">
            <CtaButton>ابدأ الآن: سجّل، فعّل الكود، واستلم مكافأتك ←</CtaButton>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-200 pb-12 pt-6 text-sm leading-relaxed text-slate-500">
          ⚠️ إخلاء مسؤولية: هذا موقع معلوماتي مستقل لأغراض المراجعة، ولا يمثل العلامة التجارية
          1xBet رسمياً. المراهنات مخصصة لمن هم بعمر 18 عاماً فأكثر. المراهنة تنطوي على مخاطر مالية —
          لا تراهن بأموال لا تتحمل خسارتها، وتأكد من توافق استخدامك مع القوانين المحلية. للعب
          المسؤول: حدد ميزانيتك مسبقاً والتزم بها.
        </p>
      </main>

      <StickyCtaBar />
    </div>
  );
}
