import MainLayout from '@/layouts/main/index';
import { cvpNavConfig } from '@/config/config-navigation';
import { getWhatsAppContactHref } from '@/config/paths';
import { useTranslations } from 'next-intl';

// ----------------------------------------------------------------------

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  const tContact = useTranslations('Pages.ClearWebPresence.ContactCTA');

  return (
    <MainLayout
      navConfig={cvpNavConfig}
      logoLinkEnabled={false}
      landing="clear_web_presence"
      contactHref={getWhatsAppContactHref(tContact('whatsAppMessage'))}
    >
      {children}
    </MainLayout>
  );
};

export default LandingPageLayout;
