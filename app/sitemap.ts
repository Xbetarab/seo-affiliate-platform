import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const LAST_MODIFIED = '2026-08-08';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Array<{ path: string; priority: number }> = [
    // الصفحة الرئيسية
    { path: '/', priority: 1.0 },

    // سايلو 1xBet العراق (موجود مسبقاً)
    { path: '/1xbet', priority: 0.9 },
    { path: '/1xbet/tasjil', priority: 0.8 },
    { path: '/1xbet/promo-code', priority: 0.8 },
    { path: '/1xbet/tahmil-apk', priority: 0.8 },
    { path: '/1xbet/rabit-jadid', priority: 0.8 },

    // سايلو 1xBet مصر (جديد)
    { path: '/eg/1xbet', priority: 0.9 },
    { path: '/eg/1xbet/tahmil-apk', priority: 0.8 },
    { path: '/eg/1xbet/promo-code', priority: 0.8 },
    { path: '/eg/1xbet/idaa', priority: 0.8 },
    { path: '/eg/1xbet/sahb', priority: 0.8 },
    { path: '/eg/1xbet/bonus', priority: 0.8 },
    { path: '/eg/1xbet/aviator', priority: 0.8 },
  ];

  return entries.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly',
    priority,
  }));
}
