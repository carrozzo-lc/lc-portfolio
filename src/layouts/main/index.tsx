// styles
import { css } from '@/styled-system/css';
// components
import Header from '@/layouts/main/Header';
import Footer from '@/layouts/main/Footer';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100dvh',
  }),
  main: css({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
  }),
};

// ----------------------------------------------------------------------

interface MainLayoutProps {
  navConfig: { titleKey: string; path: string }[];
  children: React.ReactNode;
  logoLinkEnabled?: boolean;
}

const MainLayout = ({
  navConfig,
  children,
  logoLinkEnabled = true,
}: MainLayoutProps) => {
  return (
    <div className={styles.root}>
      <Header navConfig={navConfig} logoLinkEnabled={logoLinkEnabled} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
