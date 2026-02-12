// styles
import { css } from '@/styled-system/css';
// components
import Hero from '@/components/sections/Hero';
import HowIWork from '@/components/sections/HowIWork';
import ImpactAreas from '@/components/sections/ImpactAreas';
import Experiences from '@/components/sections/Experiences';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Hero className={css({ paddingTop: '64px' })} />
      <HowIWork />
      <ImpactAreas />
      <Experiences />
    </>
  );
}
