// styles
import { css } from '@/styled-system/css';
// components
import Hero from '@/components/sections/Hero';
import ContactCTA from '@/components/sections/ContactCTA';
// intl
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

export default function ClearWebPresencePage() {
  const tContact = useTranslations('ContactCTA');

  return (
    <>
      <Hero className={css({ paddingTop: '64px' })} />

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
