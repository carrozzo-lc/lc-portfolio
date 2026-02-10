// styles
import { css } from '@/styled-system/css';
// components
import Hero from '@/components/sections/Hero';
import WorkPrinciples from '@/components/sections/WorkPrinciples';
import FakeContent from '@/components/FakeContent';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Hero className={css({ paddingTop: '64px' })} />
      <WorkPrinciples />
      <FakeContent />
    </>
  );
}
