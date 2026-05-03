// components
import NavPrimary from '@/layouts/main/nav/NavPrimary';
import NavSecondary from '@/layouts/main/nav/NavSecondary';

// ----------------------------------------------------------------------

interface HeaderProps {
  navConfig: { titleKey: string; path: string }[];
  logoLinkEnabled?: boolean;
}

const Header = ({ navConfig, logoLinkEnabled = true }: HeaderProps) => {
  return (
    <>
      <NavPrimary navConfig={navConfig} logoLinkEnabled={logoLinkEnabled} />

      <NavSecondary navConfig={navConfig} logoLinkEnabled={logoLinkEnabled} />
    </>
  );
};

export default Header;
