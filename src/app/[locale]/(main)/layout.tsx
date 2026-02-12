import MainLayout from '@/layouts/main/index';

// ----------------------------------------------------------------------

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default MainPageLayout;
