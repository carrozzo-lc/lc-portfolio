import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DefaultLayout from '../layouts/default';
//
import {
  Page404,
  HomePage,
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
      element: <DefaultLayout />,
      children: [
        { path: '404', element: <Page404 /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
