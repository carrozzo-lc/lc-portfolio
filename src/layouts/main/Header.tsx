// components
import NavPrimary from '@/layouts/main/nav/NavPrimary';
import NavSecondary from '@/layouts/main/nav/NavSecondary';
import type { LandingName } from '@/lib/analytics';

// ----------------------------------------------------------------------

interface HeaderProps {
  navConfig: { titleKey: string; path: string }[];
  logoLinkEnabled?: boolean;
  landing: LandingName;
}

const Header = ({
  navConfig,
  logoLinkEnabled = true,
  landing,
}: HeaderProps) => {
  return (
    <>
      <NavPrimary
        navConfig={navConfig}
        logoLinkEnabled={logoLinkEnabled}
        landing={landing}
      />

      <NavSecondary
        navConfig={navConfig}
        logoLinkEnabled={logoLinkEnabled}
        landing={landing}
      />
    </>
  );
};

export default Header;
