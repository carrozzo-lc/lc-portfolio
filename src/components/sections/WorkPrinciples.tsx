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
    pt: { base: 20, sm: 28 },
    pb: { base: 20, sm: 28 },
    display: { base: 'block', lg: 'flex' },
    justifyContent: { sm: 'space-between' },
  }),

  principles: css({
    display: { base: 'block', sm: 'flex' },
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: 6,
  }),

  itemTitle: css({}),
  itemDescription: css({}),
};

const WorkPrinciples = () => {
  const t = useTranslations('WorkPrinciples');
  const items = t.raw('items') as Array<{ title: string; description: string }>;

  return (
    <Container as="section" id="work-principles" innerClassName={styles.root}>
      <SectionHeader title={t('title')} subtitle={t('intro')} />

      <ul className={styles.principles}>
        {items?.map((item, index) => (
          <li key={index}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default WorkPrinciples;
