// panda css
import { css } from '@/styled-system/css';
// components
import Logo from '@/components/Logo';
import NavList from '@/layouts/main/nav/NavList';
import Button from '@/components/ui/Button/Button';
// config
import navConfig from './config-navigation';
import NavMobile from './NavMobile';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const HEADER_HEIGHT = 64;

const styles = {
  primary: css({
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width: '100%',
    height: `${HEADER_HEIGHT}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingX: '16px',
  }),

  nav: css({
    '& ul': {
      display: 'flex',
      gap: '24px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: '500',
    },
  }),
};

const NavPrimary = () => {
  const t = useTranslations();
  return (
    <header className={styles.primary}>
      <Logo />

      <NavList navData={navConfig} />

      <div
        className={css({
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        })}
      >
        <Button
          visual="solid"
          size="sm"
          radius="full"
          as="a"
          href="mailto:me@lucacarrozzo.com"
        >
          {t('Nav.contact')}
        </Button>

        <NavMobile navData={navConfig} />
      </div>
    </header>
  );
};

export default NavPrimary;
