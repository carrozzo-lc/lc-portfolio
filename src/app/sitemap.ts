import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

// ----------------------------------------------------------------------

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lucacarrozzo.com'
).replace(/\/$/, '');

const routes = [
  {
    path: '',
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    path: '/clear-web-presence',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
] as const;

const getLocalizedPath = (locale: string, path: string) => {
  if (locale === routing.defaultLocale) {
    return path || '/';
  }

  return `/${locale}${path}`;
};

const getAbsoluteUrl = (locale: string, path: string) => {
  return `${siteUrl}${getLocalizedPath(locale, path)}`;
};

const getLanguageAlternates = (path: string) => {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, getAbsoluteUrl(locale, path)])
  );
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: getAbsoluteUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: getLanguageAlternates(route.path),
      },
    }))
  );
}
