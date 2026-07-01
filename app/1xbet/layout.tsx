import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1xBet العراق 2026 | الدليل الشامل للتسجيل، الإيداع، ومكافأة 2,100,000 IQD',
  description: 'دليلك الشامل لموقع 1xBet في العراق. تعلم كيفية التسجيل بنقرة واحدة، طرق الإيداع والسحب عبر زين كاش وآسيا سيل حوالة، واحصل على الرابط الشغال وكود الخصم (X9GO).',
  keywords: ['1xbet', '1xBet العراق', 'تسجيل 1xbet', 'تنزيل تطبيق 1xbet', 'رابط 1xbet الشغال', 'شلون اسحب من 1xbet', 'زين كاش', 'آسيا سيل'],
  openGraph: {
    title: '1xBet العراق 2026 | الدليل الشامل والمكافأة',
    description: 'دليلك الشامل لموقع 1xBet في العراق. تعلم كيفية التسجيل بنقرة واحدة، طرق الإيداع والسحب عبر زين كاش، واحصل على كود الخصم.',
    locale: 'ar_IQ',
    type: 'website',
  },
};

export default function XbetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "شكد يطول السحب من 1xBet عبر زين كاش أو آسيا سيل؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "عمليات السحب عبر المحافظ الإلكترونية العراقية مثل زين كاش (ZainCash) وآسيا سيل تتميز بالسرعة الفائقة، وتستغرق عادةً من 15 دقيقة إلى ساعتين كحد أقصى للوصول إلى حسابك."
        }
      },
      {
        "@type": "Question",
        "name": "هل يدعم موقع 1xBet الدينار العراقي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم بالتأكيد. يدعم 1xBet الدينار العراقي (IQD) بشكل كامل، مما يتيح لك الإيداع والسحب والمراهنة بعملتك المحلية دون أي رسوم إضافية لتحويل العملات."
        }
      },
      {
        "@type": "Question",
        "name": "كيف أحصل على المكافأة الترحيبية في العراق؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "للحصول على مكافأة تصل إلى 2,100,000 دينار عراقي، قم بإنشاء حساب جديد، واستخدم الرمز الترويجي X9GO أثناء التسجيل، ثم قم بإجراء إيداعك الأول."
        }
      },
      {
        "@type": "Question",
        "name": "ما هو الرابط البديل الشغال لموقع 1xBet في العراق؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بسبب حظر مزودي الخدمة أحياناً، نقوم في موقعنا بتحديث الرابط البديل (المرآة) بشكل مستمر لضمان وصولك الآمن والسريع لحسابك دون الحاجة لاستخدام برامج الـ VPN."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
