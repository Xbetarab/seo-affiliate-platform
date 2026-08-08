import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const PATH = '/eg/1xbet';

export const metadata: Metadata = {
  title: '1xBet مصر 2026 | تحميل التطبيق والبرومو كود',
  description: 'دليل 1xBet مصر الشامل: تحميل التطبيق APK، الإيداع والسحب بالطرق المصرية (فودافون كاش، فوري، انستاباي)، والمكافآت. استخدم البرومو كود X9GO لمضاعفة مكافأتك.',
  keywords: ['1xbet مصر', '1xbet egypt', 'تحميل 1xbet', 'البرومو كود 1xbet', 'X9GO', 'إيداع 1xbet مصري'],
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: `${SITE_URL}${PATH}`,
    title: '1xBet مصر 2026 | تحميل التطبيق والبرومو كود',
    description: 'دليل 1xBet مصر الشامل: التحميل، الإيداع والسحب المصري، والمكافآت مع البرومو كود X9GO.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
