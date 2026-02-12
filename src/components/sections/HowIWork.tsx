// styles
import { css } from '@/styled-system/css';
// ui
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
// intl
import { useTranslations } from 'next-intl';
// icons
import {
  MagnifyingGlassIcon,
  FileTextIcon,
  Component2Icon,
} from '@radix-ui/react-icons';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 16, lg: 28 },
    pb: { base: 16, lg: 28 },
    display: { base: 'block', xl: 'flex' },
    justifyContent: { sm: 'space-between' },
    gap: { base: 12, lg: 12 },
  }),

  principles: css({
    display: { base: 'block', lg: 'flex' },
    listStyle: 'none',
    margin: 0,
    padding: 0,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: '2xl',
    overflow: 'hidden',

    '& li': {
      flex: 1,
      py: { base: 6, sm: 8, lg: 6 },
      px: { base: 6, sm: 10, lg: 6 },
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      '&:last-child': {
        borderBottom: 'none',
      },
      lg: {
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        borderRightWidth: 1,
        borderRightColor: 'black',
        '&:last-child': {
          borderRight: 'none',
        },
      },
    },

    '& h3': {
      fontSize: '2xl',
      lineHeight: 'tight',
      fontWeight: 'medium',
      my: 4,
    },

    '& p': { fontSize: { base: 'lg', sm: 'xl' } },

    '& svg': {
      color: 'primary.900',
    },
  }),
};

const ICONS = {
  search: MagnifyingGlassIcon,
  structure: FileTextIcon,
  components: Component2Icon,
} as const;

type HowIWorkItem = {
  icon: keyof typeof ICONS;
  title: string;
  description: string;
};

const HowIWorks = () => {
  const t = useTranslations('HowIWork');
  const items = t.raw('items') as HowIWorkItem[];

  return (
    <Container as="section" id="how-i-work" innerClassName={styles.root}>
      <SectionHeader
        className={css({
          width: '100%',
          maxWidth: { base: 'xl', xl: 60 },
          mb: { base: 8, xl: 0 },
        })}
        title={t('title')}
        subtitle={t('intro')}
      />

      <ul className={styles.principles}>
        {items?.map((item, index) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={`principle-${index}`}>
              <div>
                {Icon ? <Icon style={{ width: 28, height: 28 }} /> : null}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default HowIWorks;
