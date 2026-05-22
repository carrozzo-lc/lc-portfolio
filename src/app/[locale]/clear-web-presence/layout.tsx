import MainLayout from '@/layouts/main/index';
import { cvpNavConfig } from '@/config/config-navigation';

// ----------------------------------------------------------------------

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout
      navConfig={cvpNavConfig}
      logoLinkEnabled={false}
      landing="clear_web_presence"
    >
      {children}
    </MainLayout>
  );
};

export default LandingPageLayout;
