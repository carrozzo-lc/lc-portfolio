// components
import NavPrimary from '@/layouts/main/nav/NavPrimary';
import NavSecondary from '@/layouts/main/nav/NavSecondary';

// ----------------------------------------------------------------------

interface HeaderProps {
  navConfig: { titleKey: string; path: string }[];
}

const Header = ({ navConfig }: HeaderProps) => {
  return (
    <>
      <NavPrimary navConfig={navConfig} />

      <NavSecondary navConfig={navConfig} />
    </>
  );
};

export default Header;
