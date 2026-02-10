// styles
import { css } from '@/styled-system/css';
// ui
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
// intl
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 16, lg: 20 },
    pb: { base: 16, lg: 28 },
  }),
};

type ExperiencesItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: {
    tech: string[];
    ux: string[];
  };
};

const Experiences = () => {
  const t = useTranslations('Experience');
  const items = t.raw('items') as ExperiencesItem[];

  return (
    <Container as="section" id="work-principles" innerClassName={styles.root}>
      <SectionHeader title={t('title')} />
    </Container>
  );
};

export default Experiences;
