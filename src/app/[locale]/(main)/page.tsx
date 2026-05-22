// styles
import { css } from '@/styled-system/css';
// components
import Hero from '@/components/sections/Hero';
import HowIWork from '@/components/sections/HowIWork';
import ImpactAreas from '@/components/sections/ImpactAreas';
import Experiences from '@/components/sections/Experiences';
import CareerCTA from '@/components/CareerCTA';
import ContactCTA from '@/components/sections/ContactCTA';
// intl
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

// ----------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages.Home.Meta' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Home() {
  const tCareer = useTranslations('Pages.Home.CareerCTA');
  const tContact = useTranslations('Pages.Home.ContactCTA');

  return (
    <>
      <Hero
        namespace="Pages.Home.Hero"
        className={css({ paddingTop: '64px' })}
        primaryCtaTracking={{
          landing: 'home',
          ctaId: 'hero_how_i_work',
          ctaType: 'anchor',
        }}
        secondaryCtaTracking={{
          landing: 'home',
          ctaId: 'hero_download_cv',
          ctaType: 'external',
        }}
      />
      <HowIWork namespace="Pages.Home.HowIWork" />
      <ImpactAreas namespace="Pages.Home.ImpactAreas" />
      <Experiences namespace="Pages.Home.Experiences" />
      <CareerCTA
        title={tCareer('title')}
        textLink={tCareer('textLink')}
        link={tCareer('link')}
        tracking={{
          landing: 'home',
          ctaId: 'career_linkedin',
          ctaType: 'external',
        }}
      />
      <ContactCTA
        title={tContact('title')}
        subtitle={tContact('subtitle')}
        button={{
          text: tContact('button.text'),
          link: tContact('button.link'),
        }}
        tracking={{
          landing: 'home',
          ctaId: 'final_contact',
          ctaType: 'contact',
        }}
      />
    </>
  );
}
