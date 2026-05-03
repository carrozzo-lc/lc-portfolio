import MainLayout from '@/layouts/main/index';
import { navConfig } from '@/config/config-navigation';

// ----------------------------------------------------------------------

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout navConfig={navConfig} logoLinkEnabled={false}>
      {children}
    </MainLayout>
  );
};

export default MainPageLayout;
