import Container from '@/components/ui/Container';
import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 14, lg: 20 },
  }),
  eyebrow: css({
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 'lg',
    fontWeight: 'medium',
    color: 'gray.900',
    pb: 0.5,
    pr: 4,
    borderBottomWidth: '2px',
    borderBottomColor: 'primary.500',
    mb: 11,
  }),
  layout: css({
    display: 'grid',
    gridTemplateColumns: {
      base: '1fr',
      lg: 'minmax(0, 1.05fr) minmax(0, 1fr)',
    },
    gap: { base: 10, lg: 16 },
    alignItems: 'start',
  }),
  intro: css({
    maxWidth: { lg: '2xl' },
  }),
  title: css({
    fontSize: { base: '4xl', sm: '5xl' },
    lineHeight: { base: 1.15, lg: 1.08 },
    fontWeight: 'medium',
    color: 'gray.900',
    letterSpacing: '-0.03em',
    mb: { base: 4, lg: 6 },
    maxWidth: { lg: 'xl' },
  }),
  description: css({
    fontSize: { base: 'xl', lg: '2xl' },
    lineHeight: 1.6,
    color: 'gray.800',
    maxWidth: { lg: '2xl' },
  }),
  list: css({
    display: 'flex',
    flexDirection: 'column',
    gap: { base: 6, lg: 10 },
    maxWidth: { lg: '2xl' },
  }),
  item: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  }),
  itemTitle: css({
    fontSize: { base: '3xl', lg: '4xl' },
    lineHeight: 1.15,
    fontWeight: 'medium',
    color: 'gray.900',
  }),
  itemDescription: css({
    fontSize: { base: 'xl', lg: '2xl' },
    lineHeight: 1.55,
    color: 'gray.800',
  }),
};

interface QualityStandardsProps {
  namespace: string;
}

type QualityItem = {
  title: string;
  description: string;
};

const QualityStandards = ({ namespace }: QualityStandardsProps) => {
  const t = useTranslations(namespace);
  const items = t.raw('items') as QualityItem[];

  return (
    <Container as="section" id="quality-standards" innerClassName={styles.root}>
      <div className={styles.eyebrow}>{t('eyebrow')}</div>

      <div className={styles.layout}>
        <div className={styles.intro}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.description}>{t('description')}</p>
        </div>

        <div className={styles.list}>
          {items.map((item, index) => (
            <article key={`quality-standard-${index}`} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default QualityStandards;
