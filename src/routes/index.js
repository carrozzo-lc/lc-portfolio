import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DefaultLayout from '../layouts/default';
import MentorshipLayout from '../layouts/mentorship';
//
import {
  Page404,
  HomePage,
  GeneralPage,
  CareerPage,
  EntrepeneurPage
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        { element: <HomePage />, index: true },
      ],
    }, 
    {
      path: 'mentorship',
      element: <MentorshipLayout />,
      children: [
        { element: <Navigate to={'/mentorship'} replace /> },      
        { element: <GeneralPage />, index: true },
        { path: 'career', element: <CareerPage /> },
        { path: 'entrepeneur', element: <EntrepeneurPage /> },
      ],
    },    
    {
      element: <DefaultLayout />,
      children: [
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
