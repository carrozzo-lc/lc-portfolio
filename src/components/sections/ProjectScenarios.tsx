import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 16, lg: 24 },
    pb: { base: 16, lg: 24 },
  }),
  shell: css({
    backgroundColor: 'primary.50',
    borderRadius: { base: '3xl', lg: '4xl' },
    px: { base: 5, md: 8, lg: 14 },
    py: { base: 10, md: 12, lg: 14 },
  }),
  header: css({
    maxWidth: '3xl',
    marginX: 'auto',
    textAlign: 'center',
    mb: { base: 12, lg: 14 },
  }),
  eyebrow: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'lg',
    fontWeight: 'medium',
    color: 'gray.900',
    pb: 0.5,
    borderBottomWidth: '2px',
    borderBottomColor: 'primary.500',
    mb: 8,
  }),
  title: css({
    fontSize: { base: '3xl', sm: '5xl' },
    lineHeight: { base: 1.15, lg: 1.08 },
    fontWeight: 'medium',
    color: 'gray.900',
    letterSpacing: '-0.03em',
    mb: { base: 3, lg: 5 },
  }),
  subtitle: css({
    fontSize: { base: 'xl', lg: '2xl' },
    color: 'gray.800',
    lineHeight: 1.5,
  }),
  grid: css({
    display: 'grid',
    gridTemplateColumns: {
      base: '1fr',
      md: 'repeat(2, 1fr)',
      xl: 'repeat(3, 1fr)',
    },
    gap: { base: 5, lg: 6 },
    mb: { base: 10, lg: 14 },
  }),
  card: css({
    backgroundColor: 'white',
    borderWidth: '1px',
    borderColor: 'primary.100',
    borderRadius: '2xl',
    minHeight: { base: 'auto', xl: 'auto' },
    padding: { base: 4, sm: 6 },
  }),
  label: css({
    display: 'block',
    fontSize: 'md',
    fontWeight: 'medium',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    color: 'primary.500',
    mb: { base: 5, sm: 7 },
  }),
  cardTitle: css({
    fontSizeRem: { base: 24, sm: 26 },
    lineHeight: 1.25,
    fontWeight: 'medium',
    color: 'gray.900',
    mb: { base: 4, lg: 5 },
  }),
  cardDescription: css({
    fontSizeRem: { base: 18, sm: 21 },
    lineHeight: 1.6,
    color: 'gray.800',
    pb: 1,
  }),
  ctaWrap: css({
    display: 'flex',
    justifyContent: 'center',
  }),
};

interface ProjectScenariosProps {
  namespace: string;
}

type ScenarioItem = {
  label: string;
  title: string;
  description: string;
};

const ProjectScenarios = ({ namespace }: ProjectScenariosProps) => {
  const t = useTranslations(namespace);
  const items = t.raw('items') as ScenarioItem[];

  return (
    <Container as="section" id="project-scenarios" innerClassName={styles.root}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>{t('eyebrow')}</div>

          <h2 className={styles.title}>
            {t.rich('title', {
              br: () => <br />,
            })}
          </h2>

          <p className={styles.subtitle}>{t('subtitle')}</p>
        </header>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <article key={`scenario-${index}`} className={styles.card}>
              <span className={styles.label}>{item.label}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Button
            as="a"
            href={t('button.link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('button.text')}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ProjectScenarios;
