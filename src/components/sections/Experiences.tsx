// styles
import { css } from '@/styled-system/css';
// ui
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
// intl
import { useTranslations } from 'next-intl';
// next
import Image from 'next/image';
import CollapsibleText from '../ui/CollapsibleText';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 16, lg: 20 },
  }),

  sectionHeader: css({
    mb: 10,
  }),

  card: css({
    borderWidth: 1,
    borderColor: 'primary.500',
    borderRadius: '2xl',
    overflow: 'hidden',
    backgroundColor: 'primary.50',
    py: { base: 4, sm: 12, xl: 16 },
    px: { base: 4, sm: 12, xl: 32 },
    mb: 14,
    fontSize: 'lg',
    lg: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: { base: 8, sm: 14, xl: 20 },
    },
  }),

  cardHeader: css({
    minWidth: { base: '100%', sm: 420, lg: 350, xl: 380 },
    maxWidth: { base: '100%', sm: 420, lg: 350, xl: 380 },
    display: 'flex',
    flexDirection: 'column',
    gap: { base: 4 },
  }),

  cardMedia: css({
    width: '100%',
    aspectRatio: '380 / 110',
    borderRadius: 'xl',
    overflow: 'hidden',
    boxShadow: 'sm',
    mb: 3,
    position: 'relative',
  }),

  cardMeta: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  }),

  cardCompany: css({
    fontSize: '2xl',
    lineHeight: 'tight',
    fontWeight: 'medium',
  }),

  cardPeriod: css({
    fontSize: 'lg',
    color: 'gray.600',
  }),

  cardSector: css({}),

  cardCompanySummary: css({ mt: 1, mb: 1.5 }),

  cardTags: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    mt: 1,
  }),

  tagList: css({
    display: 'flex',
    flexWrap: 'wrap',
    width: 'fit-content',
    borderRadius: { base: 'none', xs: '2xl' },
    overflow: 'hidden',
  }),

  tagItem: css({
    px: 1.5,
    lineHeight: 'tight',
    fontSize: 'sm',
    backgroundColor: 'gray.700',
    color: 'white',
    borderRightWidth: 1,
    borderRightColor: 'gray.600',
    _first: {
      backgroundColor: 'gray.300',
      color: 'gray.900',
      xsDown: {
        flex: '1 1 100%',
        background: 'transparent',
        borderRightWidth: 0,
        pl: 0,
      },
    },
  }),

  collapseRoot: css({
    lgDown: {
      borderTopWidth: 1,
      borderColor: 'primary.500',
      pt: 8,
      mt: 9,
    },
  }),

  cardBody: css({
    display: 'flex',
    flexDirection: 'column',
    gap: { base: 3.5 },
    mt: -1.5,
    pt: { lgDown: 2 },
  }),

  roleTitle: css({
    fontSize: '2xl',
    lineHeight: 'tight',
    fontWeight: 'medium',
    mb: 2,
  }),

  roleSummary: css({
    fontStyle: 'italic',
    fontSize: 'xl',
    color: 'gray.700',
    lineHeight: 'tight',
  }),
};

type ExperiencesItem = {
  company: string;
  image: {
    src: string;
    alt: string;
  };
  role: string;
  period: string;
  sector: string;
  companySummary: string;
  summary: string;
  highlights: string[];
  tags: {
    tech: string[];
    ux: string[];
  };
};

const Experiences = () => {
  const t = useTranslations('Experiences');
  const items = t.raw('items') as ExperiencesItem[];

  return (
    <Container as="section" id="experiences" innerClassName={styles.root}>
      <SectionHeader className={styles.sectionHeader} title={t('title')} />

      {items?.map((item, index) => {
        return (
          <article
            key={`experience-${index}`}
            className={styles.card}
            aria-labelledby={`experience-${index}-title`}
          >
            <header className={styles.cardHeader}>
              <figure className={styles.cardMedia}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 380px"
                  style={{ objectFit: 'cover' }}
                />
              </figure>

              <div className={styles.cardMeta}>
                <h3
                  id={`experience-${index}-title`}
                  className={styles.cardCompany}
                >
                  {item.company}
                </h3>
                <span className={styles.cardPeriod}>{item.period}</span>
              </div>

              <p className={styles.cardSector}>{item.sector}</p>

              <p className={styles.cardCompanySummary}>{item.companySummary}</p>

              <div className={styles.cardTags}>
                <ul aria-label="Tech stack" className={styles.tagList}>
                  <li className={styles.tagItem}>Tech</li>
                  {item.tags.tech?.map((techTag, index) => {
                    return (
                      <li key={index} className={styles.tagItem}>
                        {techTag}
                      </li>
                    );
                  })}
                </ul>
                <ul aria-label="UX stack" className={styles.tagList}>
                  <li className={styles.tagItem}>UX</li>
                  {item.tags.ux?.map((uxTag, index) => {
                    return (
                      <li key={index} className={styles.tagItem}>
                        {uxTag}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </header>

            <CollapsibleText classNameRoot={styles.collapseRoot}>
              <div className={styles.cardBody}>
                <h3 className={styles.roleTitle}>{item.role}</h3>
                <p className={styles.roleSummary}>{item.summary}</p>
                {item.highlights?.map((highlight, index) => {
                  return <p key={index}>{highlight}</p>;
                })}
              </div>
            </CollapsibleText>
          </article>
        );
      })}
    </Container>
  );
};

export default Experiences;
