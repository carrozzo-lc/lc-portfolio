// ui
import Container from '@/components/ui/Container';
// styles
import { css } from '@/styled-system/css';
// intl
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 12, lg: 18 },
    pb: { base: 12, lg: 18 },
    maxWidth: 600,
    marginX: 'auto',
  }),
  title: css({
    fontSize: { base: '3xl', lg: '4xl' },
    fontWeight: 'medium',
    color: 'gray.900',
    mb: { base: 4, lg: 5 },
  }),
  intro: css({
    fontSize: { base: 'xl', lg: '2xl' },
    color: 'gray.800',
    mb: { base: 4, lg: 5 },
  }),
  points: css({
    fontSize: { base: 'xl', lg: '2xl' },
    color: 'gray.800',
    listStyleType: 'disc',
    pl: 6,
    mb: { base: 4, lg: 5 },
    '& li::marker': {
      color: 'primary.500',
    },
    '& li': {
      py: 1,
    },
  }),
  closing: css({
    fontSize: { base: '2xl', lg: '3xl' },
    color: 'gray.900',
    mt: { base: 6, lg: 8 },
    mb: 0,
  }),
};

interface ProblemStatementProps {
  namespace: string;
}

const ProblemStatement = ({ namespace }: ProblemStatementProps) => {
  const t = useTranslations(namespace);
  const points = t.raw('points') as string[];

  return (
    <Container as="section">
      <div className={styles.root}>
        <header>
          <h2 className={styles.title}>
            {t.rich('title', {
              br: () => <br />,
            })}
          </h2>
        </header>

        <div>
          <p className={styles.intro}>{t('intro')}</p>

          <ul className={styles.points}>
            {points.map((point, index) => (
              <li key={`problem-point-${index}`}>{point}</li>
            ))}
          </ul>

          <p className={styles.closing}>{t('closing')}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProblemStatement;
