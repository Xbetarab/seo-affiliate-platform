import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const PATH = '/eg/1xbet/tahmil-apk';

export const metadata: Metadata = {
  title: 'تحميل تطبيق 1xBet مصر APK 2026 | خطوات التثبيت والبرومو كود X9GO',
  description: 'حمّل تطبيق 1xBet APK لأندرويد في مصر خطوة بخطوة، واعرف متطلبات التشغيل وطريقة تفعيل المصادر غير المعروفة، ومتنساش تكتب البرومو كود X9GO وقت التسجيل.',
  keywords: ['تحميل 1xbet', '1xbet apk', 'تطبيق 1xbet مصر', 'البرومو كود 1xbet', 'X9GO'],
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    locale: 'ar_EG',
    url: `${SITE_URL}${PATH}`,
    title: 'تحميل تطبيق 1xBet مصر APK 2026',
    description: 'خطوات تحميل وتثبيت تطبيق 1xBet APK في مصر مع البرومو كود X9GO.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'إزاي أحمّل تطبيق 1xBet APK على الأندرويد في مصر؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'فعّل خيار "مصادر غير معروفة" من إعدادات الأمان، دوس على زر التحميل واستنى ملف الـAPK ينزّل، افتحه واعمل تثبيت، وبعدها سجّل حساب جديد وحط البرومو كود X9GO.',
        },
      },
      {
        '@type': 'Question',
        name: 'التطبيق شغّال على أنهي إصدار أندرويد؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'التطبيق بيشتغل على أندرويد 5.0 فأعلى، وحجمه حوالي 56 ميجا، ومتاح باللغة العربية ومجاني بالكامل.',
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
      { '@type': 'ListItem', position: 3, name: 'تحميل التطبيق APK', item: `${SITE_URL}${PATH}` },
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
