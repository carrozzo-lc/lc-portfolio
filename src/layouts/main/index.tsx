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

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
