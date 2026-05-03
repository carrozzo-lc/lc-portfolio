import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { css } from '@/styled-system/css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import DrawerBase from '@/components/ui/drawer/DrawerBase';
import CaseStudyDrawerContent, {
  type CaseStudyDetails,
} from '@/components/CaseStudyDrawerContent';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 16, lg: 24 },
    pb: { base: 0, lg: 0 },
  }),
  shell: css({
    backgroundColor: 'primary.950',
    borderRadius: { base: '3xl', lg: '4xl' },
    px: { base: 5, md: 8, lg: 12 },
    pt: { base: 10, lg: 12 },
    pb: { base: 16, lg: 20 },
    color: 'white',
  }),
  eyebrowWrap: css({
    display: 'flex',
    justifyContent: 'center',
    mb: { base: 12, lg: 14 },
  }),
  eyebrow: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'lg',
    fontWeight: 'medium',
    color: 'white',
    pb: 0.5,
    px: 6,
    borderBottomWidth: '2px',
    borderBottomColor: 'primary.500',
  }),
  header: css({
    display: 'flex',
    flexDirection: { base: 'column', lg: 'row' },
    justifyContent: 'space-between',
    gap: { base: 6, lg: 12 },
    alignItems: 'start',
    maxWidth: '6xl',
    marginX: 'auto',
    mb: { base: 10, lg: 16 },
  }),
  title: css({
    fontSize: { base: '4xl', sm: '5xl' },
    lineHeight: { base: 1.15, lg: 1.08 },
    fontWeight: 'medium',
    letterSpacing: '-0.03em',
    color: 'white',
    maxWidth: 'lg',
    flex: { lg: '1.1' },
  }),
  subtitle: css({
    fontSize: { base: 'xl', lg: '2xl' },
    lineHeight: 1.4,
    color: 'rgba(255,255,255,0.9)',
    maxWidth: 'lg',
    flex: { lg: '0.9' },
  }),
  card: css({
    maxWidth: '6xl',
    marginX: 'auto',
    borderRadius: { base: '3xl', lg: '4xl' },
    overflow: 'hidden',
    borderWidth: '4px',
    borderColor: 'primary.300',
    backgroundColor: 'gray.900',
  }),
  cards: css({
    display: 'grid',
    gap: { base: 8, lg: 10 },
  }),
  mediaWrap: css({
    position: 'relative',
    aspectRatio: { base: '16 / 9', lg: '16 / 5' },
    _after: {
      content: '""',
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(180deg, rgba(8, 20, 18, 0.08) 0%, rgba(8, 20, 18, 0.22) 52%, rgba(8, 20, 18, 0.72) 100%)',
    },
  }),
  summaryPanel: css({
    position: 'relative',
    zIndex: 1,
    marginX: { base: 0, lg: 24, xl: 44 },
    backgroundColor: 'primary.200',
    borderTopLeftRadius: { base: 'none', lg: '3xl' },
    borderTopRightRadius: { base: 'none', lg: '3xl' },
    borderBottomLeftRadius: { base: 'none' },
    borderBottomRightRadius: { base: 'none' },
    px: { base: 4, md: 6 },
    py: { base: 5, md: 6 },

    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: { base: 'column', lg: 'row' },
      gap: { base: 1 },

      '& > *': {
        flex: 1,
      },
    },
  }),
  panelMeta: css({
    fontSize: 'md',
    color: 'gray.800',
    mb: 3,
  }),
  panelTitle: css({
    fontSizeRem: 21,
    lineHeight: 1.1,
    fontWeight: 'medium',
    color: 'gray.900',
    mb: 4,
  }),
  panelTags: css({
    fontSize: 'md',
    color: 'gray.800',
  }),
  panelDescription: css({
    fontSize: 'lg',
    lineHeight: 1.6,
    color: 'gray.800',
  }),
  panelCta: css({
    mt: 7,
    width: { base: 'full', lg: 'fit-content' },
  }),
  caseStudyDrawerPanel: css({
    roundedTop: '4xl',
    borderTopWidth: '4px',
    borderXWidth: '4px',
    borderColor: 'primary.300',
  }),
  caseStudyDrawerHeader: css({
    width: 'full',
    mx: 'auto',
    px: { base: 4, md: 8 },
    pt: { base: 6, md: 7 },
    pb: { base: 4, md: 6 },
    borderBottomWidth: '1px',
    borderColor: 'primary.100',
  }),
  caseStudyDrawerTitle: css({
    color: 'gray.900',
    fontSize: { base: '3xl', md: '4xl' },
    lineHeight: { base: 1.12, md: '54px' },
  }),
  caseStudyDrawerDescription: css({
    maxWidth: '3xl',
    color: 'gray.800',
    fontSize: { base: 'xl', md: '2xl' },
    lineHeight: 'normal',
  }),
  caseStudyDrawerBody: css({
    pt: { base: 8, md: 12 },
    px: { base: 4, md: 8, lg: 0 },
    pb: { base: 12, md: 16, lg: 24 },
  }),
};

type FeaturedWorkProps = {
  namespace: string;
};

type FeaturedWorkItem = {
  id: string;
  panel: {
    meta: string;
    title: string;
    tags: string;
    description: string;
    button: {
      text: string;
      link: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
  caseStudyDetails: CaseStudyDetails;
};

type FeaturedWorkCardProps = {
  item: FeaturedWorkItem;
};

type FeaturedWorkContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FeaturedWorkItem[];
};

const FeaturedWork = ({ namespace }: FeaturedWorkProps) => {
  const t = useTranslations(namespace);
  const content = t.raw('content') as FeaturedWorkContent;

  return (
    <Container as="section" id="featured-work" innerClassName={styles.root}>
      <div className={styles.shell}>
        <div className={styles.eyebrowWrap}>
          <div className={styles.eyebrow}>{content.eyebrow}</div>
        </div>

        <header className={styles.header}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </header>

        <div className={styles.cards}>
          {content.items.map((item) => (
            <FeaturedWorkCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const FeaturedWorkCard = ({ item }: FeaturedWorkCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.mediaWrap}>
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 1120px"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      <div className={styles.summaryPanel}>
        <div>
          <div>
            <p className={styles.panelMeta}>{item.panel.meta}</p>
            <h3 className={styles.panelTitle}>{item.panel.title}</h3>
            <p className={styles.panelTags}>{item.panel.tags}</p>
          </div>

          <p className={styles.panelDescription}>{item.panel.description}</p>
        </div>

        <DrawerBase
          direction="bottom"
          trigger={
            <Button size="sm" className={styles.panelCta}>
              {item.panel.button.text}
            </Button>
          }
          classNames={{
            panel: styles.caseStudyDrawerPanel,
            header: styles.caseStudyDrawerHeader,
            title: styles.caseStudyDrawerTitle,
            description: styles.caseStudyDrawerDescription,
            body: styles.caseStudyDrawerBody,
          }}
          title={item.caseStudyDetails.title}
          description={item.caseStudyDetails.subtitle}
        >
          <CaseStudyDrawerContent content={item.caseStudyDetails} />
        </DrawerBase>
      </div>
    </article>
  );
};

export default FeaturedWork;
