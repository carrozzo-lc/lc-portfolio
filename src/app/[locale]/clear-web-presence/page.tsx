// styles
import { css } from '@/styled-system/css';
// components
import Hero from '@/components/sections/Hero';
import ContactCTA from '@/components/sections/ContactCTA';
// intl
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ProblemStatement from '@/components/sections/ProblemStatement';

// ----------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'Pages.ClearWebPresence.Meta',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ClearWebPresencePage() {
  const tContact = useTranslations('Pages.ClearWebPresence.ContactCTA');

  return (
    <>
      <Hero
        namespace="Pages.ClearWebPresence.Hero"
        className={css({ paddingTop: '64px' })}
      />

      <ProblemStatement namespace="Pages.ClearWebPresence.ProblemStatement" />

      <ContactCTA
        title={tContact('title')}
        subtitle={tContact('subtitle')}
        button={{
          text: tContact('button.text'),
          link: tContact('button.link'),
        }}
      />
    </>
  );
}
