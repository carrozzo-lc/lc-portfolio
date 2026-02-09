'use client';
// panda css
import { css, cx } from '@/styled-system/css';
// components
import Logo from '@/components/Logo';
// hooks
import { useScrollRange } from '@/hooks/useScrollRange';
// assets
import logoImage from '@/images/logo2.svg';
import Button from '@/components/ui/Button/Button';
import navConfig from './config-navigation';
import Link from 'next/link';
import NavMobile from './NavMobile';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const styles = {
  secondary: css({
    position: 'fixed',
    top: 0,
    zIndex: 10,
    width: '100%',
    px: '16px',
    py: 2,
    transform: 'translateY(-100%)',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'transform 200ms ease, opacity 200ms ease',
    willChange: 'transform',
  }),

  secondaryVisible: css({
    transform: 'translateY(0)',
    opacity: 1,
    pointerEvents: 'auto',
  }),

  root: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxW: '490px',
    minHeight: '40px',
    margin: 'auto',
    backgroundColor: 'white',
    borderRadius: 'full',
    borderColor: 'black',
    borderWidth: 1,
    py: { base: '4px', sm: '1px' },
    px: '2px',
  }),

  logo: css({
    flexGrow: 0,
    w: 5.5,
    ml: 2,
    '& img': { width: '34px' },
  }),

  nav: css({
    display: { base: 'none', sm: 'block' },
    flexGrow: 1,
    '& ul': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '19px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      mr: 4,
      pt: 0.5,
    },
    '& li': {
      lineHeight: 'none',
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: '500',
      transitionProperty: 'color',
      transitionDuration: '200ms',
      _hover: {
        color: 'primary.500',
      },
    },
  }),

  action: css({
    flexGrow: 0,
  }),
};

const NavSecondary = () => {
  const t = useTranslations();
  const showSecondary = useScrollRange({
    showAfter: 80,
    hideBefore: 64,
  });

  return (
    <div
      className={cx(styles.secondary, showSecondary && styles.secondaryVisible)}
      aria-hidden={!showSecondary}
    >
      <div className={styles.root}>
        <Logo imageSrc={logoImage} css={styles.logo} />

        <nav className={styles.nav} aria-label="Navigazione rapida sticky">
          <ul>
            {navConfig?.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{t(item.titleKey)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={css({
            smDown: {
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pr: 3,
            },
          })}
        >
          <Button
            visual="solid"
            size="sm"
            radius="full"
            as="a"
            href="mailto:me@lucacarrozzo.com"
            hover="off"
            className={styles.action}
          >
            {t('Nav.contact')}
          </Button>

          <NavMobile
            navData={navConfig}
            triggerClassName={css({
              color: 'black',
              pl: 2.5,
              display: { base: 'inline-flex', sm: 'none' },
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default NavSecondary;
