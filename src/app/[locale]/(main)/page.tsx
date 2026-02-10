// styles
import { css } from '@/styled-system/css';
// components
import Hero from '@/components/sections/Hero';
import WorkPrinciples from '@/components/sections/WorkPrinciples';
import ImpactAreas from '@/components/sections/ImpactAreas';
import FakeContent from '@/components/FakeContent';
import Experiences from '@/components/sections/Experiences';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Hero className={css({ paddingTop: '64px' })} />
      <WorkPrinciples />
      <ImpactAreas />
      <Experiences />
      <FakeContent />
    </>
  );
}
