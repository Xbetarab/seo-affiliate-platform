import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const PATH = '/eg/1xbet/idaa';

export const metadata: Metadata = {
  title: 'طرق الإيداع في 1xBet مصر 2026 | فودافون كاش، فوري، انستاباي',
  description: 'اعرف كل طرق الإيداع المصرية في 1xBet — فودافون كاش، فوري، انستاباي، اتصالات كاش، أورنج كاش والعملات الرقمية. اختار الطريقة اللي تناسبك وابدأ اللعب.',
  keywords: ['إيداع 1xbet', 'فودافون كاش 1xbet', 'فوري 1xbet', 'انستاباي', '1xbet مصر'],
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    locale: 'ar_EG',
    url: `${SITE_URL}${PATH}`,
    title: 'طرق الإيداع في 1xBet مصر',
    description: 'طرق الإيداع المصرية المدعومة في 1xBet: فودافون كاش، فوري، انستاباي وأكتر.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'إيه أشهر طرق الإيداع في 1xBet مصر؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'أشهر طرق الإيداع المصرية هي فودافون كاش، وكمان فوري، انستاباي، اتصالات كاش، أورنج كاش، بالإضافة للعملات الرقمية زي USDT.',
        },
      },
      {
        '@type': 'Question',
        name: 'الإيداع بفودافون كاش بيوصل بسرعة؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'أيوة، الإيداع من محفظة فودافون كاش بيكون فوري في العادة، فتقدر تبدأ اللعب على طول بعد تأكيد العملية.',
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
      { '@type': 'ListItem', position: 3, name: 'طرق الإيداع', item: `${SITE_URL}${PATH}` },
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
