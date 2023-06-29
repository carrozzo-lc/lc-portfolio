import { Suspense, lazy } from 'react';
// components
//import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={'<LoadingScreen />'}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// MAIN
export const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
export const GeneralPage = Loadable(lazy(() => import('../pages/mentorship/GeneralPage')));

