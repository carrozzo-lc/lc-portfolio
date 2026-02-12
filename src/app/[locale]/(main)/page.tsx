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

// ----------------------------------------------------------------------

export default function Home() {
  const tCareer = useTranslations('CareerCTA');
  const tContact = useTranslations('ContactCTA');

  return (
    <>
      <Hero className={css({ paddingTop: '64px' })} />
      <HowIWork />
      <ImpactAreas />
      <Experiences />
      <CareerCTA
        title={tCareer('title')}
        textLink={tCareer('textLink')}
        link={tCareer('link')}
      />
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
