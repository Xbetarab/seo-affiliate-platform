import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const PATH = '/eg/1xbet/promo-code';

export const metadata: Metadata = {
  title: 'البرومو كود 1xBet مصر X9GO 2026 | ضاعف مكافأتك الترحيبية',
  description: 'البرومو كود بتاع 1xBet في مصر هو X9GO — اكتبه وقت التسجيل عشان تضاعف مكافأتك الترحيبية على أول إيداع. اعرف الفرق بالكود ومن غيره وإزاي تستخدمه صح.',
  keywords: ['البرومو كود 1xbet', 'X9GO', '1xbet مصر', 'مكافأة 1xbet', 'كود 1xbet'],
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    locale: 'ar_EG',
    url: `${SITE_URL}${PATH}`,
    title: 'البرومو كود 1xBet مصر X9GO',
    description: 'استخدم البرومو كود X9GO وقت التسجيل في 1xBet مصر لمضاعفة مكافأتك الترحيبية.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'إيه هو البرومو كود بتاع 1xBet في مصر؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'البرومو كود بتاع 1xBet في مصر هو X9GO. اكتبه في خانة البرومو كود وانت بتعمل حساب جديد عشان تضاعف مكافأتك الترحيبية على أول إيداع.',
        },
      },
      {
        '@type': 'Question',
        name: 'أكتب البرومو كود امتى بالظبط؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'خانة البرومو كود بتظهر مرة واحدة بس أثناء إنشاء الحساب. اكتب الكود X9GO قبل ما تأكّد التسجيل، لأنك مش هتقدر تضيفه بعد كده.',
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
      { '@type': 'ListItem', position: 3, name: 'البرومو كود X9GO', item: `${SITE_URL}${PATH}` },
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
