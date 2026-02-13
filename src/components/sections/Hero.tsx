// styles
import { css, cx } from '@/styled-system/css';
import { token } from '@/styled-system/tokens';
// components
import Button from '@/components/ui/Button/Button';
// next
import Image from 'next/image';
// assets
import lucaImage from '@/images/luca-image.png';
// intl
import { useTranslations } from 'next-intl';
// config
import { OTHER_PATHS, PATHS } from '@/config/paths';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    height: { base: 'auto', sm: '100%', md: '76vh', lg: '90vh' },
    maxHeight: { base: 'none', sm: 'none', md: '630px', lg: 'none' },
    minHeight: { base: 'none', md: '640px', lg: '730px' },
    borderBottom: `10px solid ${token('colors.gray.900')}`,
    backgroundColor: 'primary.500',
    backgroundImage: `
    radial-gradient(at 90% 10%, var(--colors-primary-900) 0%, transparent 45%),
    radial-gradient(at 15% 25%, var(--colors-primary-300) 0%, transparent 50%),
    radial-gradient(at 60% 0%,  var(--colors-primary-400) 0%, transparent 45%),
    radial-gradient(at 10% 80%, var(--colors-primary-800) 0%, transparent 50%),
    radial-gradient(at 85% 90%, var(--colors-primary-500) 0%, transparent 55%)
  `,
    backgroundSize: '200% 200%',
    animation: 'heroFloat',
  }),

  hero: {
    root: css({
      height: '100%',
      px: { base: 4, sm: 6, lg: 8 },
      sm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    }),

    inner: css({
      maxWidth: '7xl',
      width: '100%',
      margin: 'auto',
      color: 'white',
      pt: { base: 12, sm: 12 },
      pb: { base: 14, sm: 14 },
      sm: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
      },
      md: {
        gap: 16,
      },
      '& > div': {
        maxWidth: { base: '', sm: '25rem', md: '35rem', lg: '40rem' },
      },
    }),

    eyebrow: css({
      fontSize: { base: 'xl', sm: '2xl' },
      lineHeight: 'tight',
      mb: { base: 5, lg: 7 },
    }),

    title: css({
      fontSize: { base: '2.063rem', sm: '4xl', md: '2.625rem', lg: '3.125rem' },
      color: 'white',
      lineHeight: 'tight',
      fontWeight: 'medium',
      mb: { base: 6, lg: 5 },
      '& > br': {
        display: { base: 'none', sm: 'inline' },
      },
    }),

    description: css({
      fontSize: { base: '2xl', sm: '1.375rem', md: '1.75rem', lg: '2rem' },
      lineHeight: 'tight',
      mb: 10,
    }),

    actions: css({
      mt: 6,
      '& a': {
        minW: { base: '100%', sm: '10.15rem' },
        mb: { base: 3, sm: 0 },
      },
      sm: { display: 'flex', gap: 5 },
    }),

    image: css({
      display: { base: 'none', sm: 'block' },
      borderWidth: 3,
      borderColor: 'gray.900',
      borderRadius: 'xl',
      overflow: 'hidden',
      sm: {
        alignSelf: 'start',
      },
    }),
  },
};

// ----------------------------------------------------------------------

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const t = useTranslations('Hero');
  const rootClassName = cx('group', styles.root, className);

  return (
    <section className={rootClassName}>
      <header className={styles.hero.root}>
        <div className={styles.hero.inner}>
          <div className={css({ mt: -1 })}>
            <p className={styles.hero.eyebrow}>{t('eyebrow')}</p>
            <h1 className={styles.hero.title}>
              {t.rich('title', {
                br: () => <br />,
              })}
            </h1>
            <p className={styles.hero.description}>{t('subtitle')}</p>
            <div className={styles.hero.actions}>
              <Button as="a" href={PATHS.workPrinciples}>
                {t('primaryCta')}
              </Button>
              <Button
                as="a"
                href={OTHER_PATHS.cv}
                target="_blank"
                visual="outline"
              >
                {t('secondaryCta')}
              </Button>
            </div>
          </div>

          <div className={styles.hero.image}>
            <Image
              src={lucaImage}
              width={470}
              height={470}
              alt="Picture of the author"
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Hero;
