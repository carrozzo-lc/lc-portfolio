import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
// fonts
import { alegreyaSans } from '@/app/fonts';
import { routing } from '@/i18n/routing';
import ConsentManager from '@/components/ConsentManager';
import ThirdPartyScripts from '@/components/ThirdPartyScripts';
import type { Metadata } from 'next';
// global styles
import '../globals.css';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  verification: {
    google: 'MDCzJvRU5Mi5mbUmRWAwX3WXq5goSbpHHqum8GxPWYc',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={alegreyaSans.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ConsentManager />
          <ThirdPartyScripts />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
