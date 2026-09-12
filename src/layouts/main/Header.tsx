// components
import NavPrimary from '@/layouts/main/nav/NavPrimary';
import NavSecondary from '@/layouts/main/nav/NavSecondary';
import type { LandingName } from '@/lib/analytics';

// ----------------------------------------------------------------------

interface HeaderProps {
  navConfig: { titleKey: string; path: string }[];
  logoLinkEnabled?: boolean;
  landing: LandingName;
  contactHref: string;
}

const Header = ({
  navConfig,
  logoLinkEnabled = true,
  landing,
  contactHref,
}: HeaderProps) => {
  return (
    <>
      <NavPrimary
        navConfig={navConfig}
        logoLinkEnabled={logoLinkEnabled}
        landing={landing}
        contactHref={contactHref}
      />

      <NavSecondary
        navConfig={navConfig}
        logoLinkEnabled={logoLinkEnabled}
        landing={landing}
        contactHref={contactHref}
      />
    </>
  );
};

export default Header;
