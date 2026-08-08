import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const PATH = '/eg/1xbet/aviator';

export const metadata: Metadata = {
  title: 'لعبة الطيارة Aviator في 1xBet مصر 2026 | الشرح والمخاطر',
  description: 'شرح لعبة الطيارة Aviator في 1xBet مصر: إزاي بتشتغل بنظام RNG، وأهم حاجة المخاطر الحقيقية قبل أي رهان. لعبة حظ بحتة ومفيش استراتيجية مضمونة — العب بمسؤولية.',
  keywords: ['لعبة الطيارة', 'aviator', '1xbet aviator', 'الطيارة 1xbet', '1xbet مصر'],
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    locale: 'ar_EG',
    url: `${SITE_URL}${PATH}`,
    title: 'لعبة الطيارة Aviator في 1xBet مصر',
    description: 'شرح لعبة الطيارة Aviator والمخاطر الحقيقية قبل الرهان — لعبة حظ بحتة.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'لعبة الطيارة عادلة؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'اللعبة بتشتغل بنظام RNG (أرقام عشوائية) معتمد، ونتيجة كل جولة بتتحدّد عشوائياً ومستقلة عن اللي قبلها — مفيش نمط تقدر تتوقعه.',
        },
      },
      {
        '@type': 'Question',
        name: 'فيه استراتيجية مضمونة للربح؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'لأ خالص. دي لعبة حظ بحتة، وأي حد بيقولك "استراتيجية مضمونة" بيضحك عليك. المنصة دايماً ليها هامش ربح إحصائي، فالعب بحذر ومتحطّش فلوس مش قادر تخسرها.',
        },
      },
      {
        '@type': 'Question',
        name: 'أقدر أجرّبها ببلاش الأول؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'أغلب المنصات فيها وضع تجريبي (Demo) تقدر تجرّب بيه الآلية من غير فلوس حقيقية — دوّر عليه قبل ما تراهن بجد.',
        },
      },
    ],
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '1xBet مصر', item: `${SITE_URL}/eg/1xbet` },
      { '@type': 'ListItem', position: 3, name: 'لعبة الطيارة Aviator', item: `${SITE_URL}${PATH}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {children}
    </>
  );
}
