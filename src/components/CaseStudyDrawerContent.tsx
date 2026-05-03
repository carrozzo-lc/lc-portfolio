import Image from 'next/image';
import Button from '@/components/ui/Button';
import { css } from '@/styled-system/css';

// ----------------------------------------------------------------------

type CaseStudySection = {
  title: string;
  body?: string;
  items?: string[];
};

export type CaseStudyDetails = {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
  sections: CaseStudySection[];
  button?: {
    text: string;
    link: string;
  };
};

type CaseStudyDrawerContentProps = {
  content: CaseStudyDetails;
};

const styles = {
  root: css({
    width: 'full',
    maxWidth: '4xl',
    mx: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { base: 10, lg: 12 },
  }),

  imageWrap: css({
    position: 'relative',
    width: 'full',
    aspectRatio: '1903 / 967',
    borderWidth: '1px',
    borderColor: 'primary.800',
    borderRadius: '2xl',
    overflow: 'hidden',
  }),

  section: css({
    width: 'full',
    maxWidth: '3xl',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 3,
  }),

  sectionTitle: css({
    color: 'gray.900',
    fontSize: { base: '2xl', md: '4xl' },
    fontWeight: 'medium',
    lineHeight: 'normal',
  }),

  sectionBody: css({
    color: 'gray.800',
    fontSize: { base: 'lg', md: '2xl' },
    lineHeight: 'normal',
  }),

  list: css({
    color: 'gray.800',
    fontSize: { base: 'lg', md: '2xl' },
    lineHeight: 'normal',
    listStyleType: 'disc',
    pl: { base: 5, md: 9 },
  }),

  listItem: css({
    pl: 1,
  }),

  ctaWrap: css({
    display: 'flex',
    justifyContent: 'center',
    width: 'full',
  }),
};

const CaseStudyDrawerContent = ({ content }: CaseStudyDrawerContentProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.imageWrap}>
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 871px"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      {content.sections.map((section) => (
        <section className={styles.section} key={section.title}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>

          {section.body ? (
            <p className={styles.sectionBody}>{section.body}</p>
          ) : null}

          {section.items ? (
            <ul className={styles.list}>
              {section.items.map((item) => (
                <li className={styles.listItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {content.button ? (
        <div className={styles.ctaWrap}>
          <Button
            as="a"
            href={content.button.link}
            visual="outlineBlack"
            size="sm"
            target="_blank"
          >
            {content.button.text}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CaseStudyDrawerContent;
