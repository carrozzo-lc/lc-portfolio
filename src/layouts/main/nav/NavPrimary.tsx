// panda css
import { css } from '@/styled-system/css';
// components
import Logo from '@/components/Logo';
import NavList from '@/layouts/main/nav/NavList';
import CtaButton from '@/components/analytics/CtaButton';
import NavMobile from './NavMobile';
import { useTranslations } from 'next-intl';
import type { LandingName } from '@/lib/analytics';

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

interface NavPrimaryProps {
  navConfig: { titleKey: string; path: string }[];
  logoLinkEnabled?: boolean;
  landing: LandingName;
}

const NavPrimary = ({
  navConfig,
  logoLinkEnabled = true,
  landing,
}: NavPrimaryProps) => {
  const t = useTranslations();
  return (
    <header className={styles.primary}>
      <Logo hasLink={logoLinkEnabled} />

      <NavList navData={navConfig} />

      <div
        className={css({
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        })}
      >
        <CtaButton
          visual="solid"
          size="sm"
          radius="full"
          href="mailto:me@lucacarrozzo.com"
          tracking={{
            landing,
            ctaId: 'header_contact',
            ctaType: 'contact',
          }}
        >
          {t('Nav.contact')}
        </CtaButton>

        <NavMobile
          navData={navConfig}
          logoLinkEnabled={logoLinkEnabled}
          landing={landing}
        />
      </div>
    </header>
  );
};

export default NavPrimary;
