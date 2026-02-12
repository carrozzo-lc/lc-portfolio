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
    backgroundColor: 'black',
    borderYWidth: 3,
    borderColor: 'primary.500',
    color: 'white',
  }),

  sectionHeader: css({
    textAlign: 'center',
    maxWidth: 'xl',
    mx: 'auto',
    mb: 12,
    '& h2': {
      color: 'white',
    },
  }),

  areas: css({
    display: 'grid',
    gridTemplateColumns: {
      base: '1fr',
      md: 'repeat(2, 1fr)',
      xl: 'repeat(4, 1fr)',
    },
    borderWidth: 1,
    borderColor: 'gray.700',
    borderRadius: '2xl',
    overflow: 'hidden',
    backgroundColor: 'gray.950',
    // area item
    '& > li': {
      display: { base: 'flex' },
      flexDirection: { base: 'column' },
      py: { base: 6 },
      px: { base: 6 },
      borderColor: 'gray.700',
      borderBottomWidth: 1,
      '&:last-child': {
        borderBottomWidth: 0,
      },

      md: {
        '&:nth-child(1)': {
          borderRightWidth: 1,
        },
        '&:nth-child(3)': {
          borderRightWidth: 1,
          borderBottomWidth: 0,
        },
        '&:last-child': {
          borderBottomWidth: 0,
        },
      },

      xl: {
        borderRightWidth: 1,
        borderBottomWidth: 0,
        '&:last-child': {
          borderRight: 'none',
        },
      },
    },

    '& > li h3': {
      fontSizeRem: 22,
      lineHeight: 'tight',
      fontWeight: 'medium',
      color: 'white',
      mb: { base: 4 },
    },

    '& > li p': {
      letterSpacing: 'wide',
      fontSize: 'lg',
    },
    // points
    '& > li > ul': {
      listStyle: 'none',
      margin: 0,
      paddingLeft: 3,
      mt: 2,

      '& > li': {
        py: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        position: 'relative',
        _before: {
          content: '""',
          flexShrink: 0,
          color: 'primary.500',
          width: 1,
          height: 1,
          backgroundColor: 'currentColor',
          borderRadius: 'full',
        },
      },
    },
    // role
    '& > li > div': {
      letterSpacing: 'wide',
      marginTop: 'auto',
      fontSize: 'sm',
      fontStyle: 'italic',
      fontWeight: 'medium',
      pt: 5,
    },
  }),
};

type ImpactAreasItem = {
  title: string;
  description: string;
  points: string[];
  role: string;
};

const ImpactAreas = () => {
  const t = useTranslations('ImpactAreas');
  const items = t.raw('items') as ImpactAreasItem[];

  return (
    <Container as="section" id="impact-areas" className={styles.root}>
      <SectionHeader
        className={styles.sectionHeader}
        title={t('title')}
        subtitle={t('intro')}
      />

      <ul className={styles.areas}>
        {items?.map((item, index) => {
          return (
            <li key={`area-${index}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.points?.map((point, index) => {
                  return (
                    <li key={index}>
                      <p>{point}</p>
                    </li>
                  );
                })}
              </ul>
              <div>{item.role}</div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ImpactAreas;
