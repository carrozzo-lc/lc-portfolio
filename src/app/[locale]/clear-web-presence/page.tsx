// styles
import { css } from '@/styled-system/css';
// intl
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
// next
import type { Metadata } from 'next';
// components
import Hero from '@/components/sections/Hero';
import ContactCTA from '@/components/sections/ContactCTA';
import ProblemStatement from '@/components/sections/ProblemStatement';
import Process from '@/components/sections/Process';

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

      <Process namespace="Pages.ClearWebPresence.Process" />

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
