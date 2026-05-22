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
import ProjectScenarios from '@/components/sections/ProjectScenarios';
import QualityStandards from '@/components/sections/QualityStandards';
import FeaturedWork from '@/components/sections/FeaturedWork';
import { PATHS } from '@/config/paths';

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
        primaryCtaHref="mailto:me@lucacarrozzo.com"
        secondaryCtaHref={PATHS.process}
        primaryCtaTracking={{
          landing: 'clear_web_presence',
          ctaId: 'hero_contact',
          ctaType: 'contact',
        }}
        secondaryCtaTracking={{
          landing: 'clear_web_presence',
          ctaId: 'hero_process',
          ctaType: 'anchor',
        }}
      />

      <ProblemStatement namespace="Pages.ClearWebPresence.ProblemStatement" />

      <Process
        namespace="Pages.ClearWebPresence.Process"
        ctaTracking={{
          landing: 'clear_web_presence',
          ctaId: 'process_contact',
          ctaType: 'contact',
        }}
      />

      <ProjectScenarios
        namespace="Pages.ClearWebPresence.ProjectScenarios"
        ctaTracking={{
          landing: 'clear_web_presence',
          ctaId: 'scenarios_contact',
          ctaType: 'contact',
        }}
      />

      <QualityStandards namespace="Pages.ClearWebPresence.QualityStandards" />

      <FeaturedWork namespace="Pages.ClearWebPresence.FeaturedWork" />

      <ContactCTA
        title={tContact('title')}
        subtitle={tContact('subtitle')}
        button={{
          text: tContact('button.text'),
          link: tContact('button.link'),
        }}
        tracking={{
          landing: 'clear_web_presence',
          ctaId: 'final_contact',
          ctaType: 'contact',
        }}
      />
    </>
  );
}
