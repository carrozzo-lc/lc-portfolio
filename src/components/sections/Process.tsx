import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 14, lg: 24 },
  }),
  eyebrow: css({
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 'lg',
    fontWeight: 'medium',
    color: 'gray.900',
    pb: 0.3,
    borderBottomWidth: '2px',
    borderBottomColor: 'primary.500',
    pr: 4,
    mb: 6,
  }),
  header: css({
    display: 'flex',
    flexDirection: { base: 'column', lg: 'row' },
    justifyContent: 'space-between',
    alignItems: { base: 'flex-start', lg: 'flex-start' },
    gap: { base: 8, lg: 12 },
    mb: { base: 7, lg: 8 },
  }),
  intro: css({
    maxWidth: { lg: '3xl' },
  }),
  title: css({
    fontSize: { base: '3xl', sm: '5xl' },
    lineHeight: { base: 1.12, lg: 1.08 },
    fontWeight: 'medium',
    color: 'gray.900',
    letterSpacing: '-0.03em',
    maxWidth: { lg: '2xl' },
    mb: 5,
  }),
  description: css({
    fontSize: { base: 'xl', lg: '2xl' },
    lineHeight: 1.5,
    color: 'gray.800',
    maxWidth: { lg: '2xl' },
    mb: 2,
  }),
  flow: css({
    fontSize: { base: 'xl', lg: '2xl' },
    lineHeight: 1.5,
    color: 'gray.600',
  }),
  ctaWrapper: css({
    width: { base: 'full', md: 'auto' },
  }),
  cta: css({
    mt: 2,
    width: { base: 'full', md: 'auto' },
  }),
  steps: css({
    display: 'grid',
    gridTemplateColumns: {
      base: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gap: { base: 8, md: 8, lg: 12 },
  }),
  step: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  }),
  stepNumber: css({
    fontSize: { base: '7xl', md: '8xl' },
    lineHeight: 1,
    fontWeight: 'medium',
    color: 'gray.600',
    letterSpacing: '-0.04em',
    mb: { base: 0, md: 1 },
  }),
  stepTitle: css({
    fontSize: { base: '2xl', lg: '3xl' },
    lineHeight: 1.22,
    fontWeight: 'medium',
    color: 'gray.900',
  }),
  stepDescription: css({
    fontSize: { base: 'xl', lg: 'xl' },
    color: 'gray.800',
    maxWidth: 'sm',
  }),
};

interface ProcessProps {
  namespace: string;
}

type ProcessItem = {
  title: string;
  description: string;
};

const Process = ({ namespace }: ProcessProps) => {
  const t = useTranslations(namespace);
  const items = t.raw('items') as ProcessItem[];

  return (
    <Container as="section" id="process" innerClassName={styles.root}>
      <div className={styles.eyebrow}>{t('eyebrow')}</div>

      <div className={styles.header}>
        <div className={styles.intro}>
          <h2 className={styles.title}>
            {t.rich('title', {
              br: () => <br />,
            })}
          </h2>

          <p className={styles.description}>{t('description')}</p>
          <p className={styles.flow}>{t('flow')}</p>
        </div>
        <div className={styles.ctaWrapper}>
          <Button
            as="a"
            href={t('button.link')}
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('button.text')}
          </Button>
        </div>
      </div>

      <div className={styles.steps}>
        {items.map((item, index) => (
          <article key={`process-step-${index}`} className={styles.step}>
            <span className={styles.stepNumber}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={styles.stepTitle}>{item.title}</h3>
            <p className={styles.stepDescription}>{item.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
};

export default Process;
