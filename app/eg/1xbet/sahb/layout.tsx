import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const PATH = '/eg/1xbet/sahb';

export const metadata: Metadata = {
  title: 'طرق السحب من 1xBet مصر 2026 | الحدود بالجنيه المصري',
  description: 'جدول كامل بطرق السحب من 1xBet في مصر بالجنيه المصري — الحد الأدنى والأقصى لكل طريقة (فودافون كاش، اتصالات كاش، انستاباي، فوري) والبيانات المطلوبة.',
  keywords: ['سحب 1xbet', 'سحب فلوس 1xbet مصر', 'حدود السحب', 'فودافون كاش', '1xbet مصر'],
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    locale: 'ar_EG',
    url: `${SITE_URL}${PATH}`,
    title: 'طرق السحب من 1xBet مصر',
    description: 'الحدود الدنيا والقصوى للسحب من 1xBet بالجنيه المصري والبيانات المطلوبة.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'إيه الحد الأدنى للسحب من 1xBet في مصر؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'الحد الأدنى بيختلف حسب الطريقة — يبدأ من حوالي 50 جنيه لفودافون كاش واتصالات كاش وفوري، و100 جنيه لانستاباي. راجع الحد المعروض جوه التطبيق قبل السحب للتأكيد.',
        },
      },
      {
        '@type': 'Question',
        name: 'أنهي بيانات محتاجها عشان أسحب؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'حسب الطريقة: رقم المحفظة لفودافون كاش واتصالات كاش، حساب InstaPay لانستاباي، كود الدفع لفوري، وعنوان المحفظة للعملات الرقمية.',
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
      { '@type': 'ListItem', position: 3, name: 'طرق السحب', item: `${SITE_URL}${PATH}` },
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
