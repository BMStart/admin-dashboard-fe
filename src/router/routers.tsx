import { Navigate, Outlet } from 'react-router-dom';
import {
  ACCOUNT,
  ALL_PATH,
  DASHBOARD_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  ROOT_PATH,
} from '@/utils/paths';
import { userRoles } from '@/utils/constants';
import { RouteConfig } from './router';
import { AccountPage, DashboardPage } from '@/components/pages';
import { AuthenticationTemplates } from '@/components/templates';
import { AuthBox } from '@/components/authentication';

export const routesConfig: Record<any, RouteConfig[]> = {
  [userRoles.PUBLIC]: [
    {
      path: LOGIN_PATH,
      element: <AuthenticationTemplates infoBox={(<AuthBox.LoginLeft />)} />
    },
    {
      path: REGISTER_PATH,
      element: <AuthenticationTemplates infoBox={(<AuthBox.LoginLeft />)} />
    },
    {
      path: ACCOUNT,
      element: <AccountPage />
    },
    {
      path: ALL_PATH,
      element: <Navigate to={LOGIN_PATH} />,
    },
  ],

  [userRoles.MANAGER]: [
    {
      path: DASHBOARD_PATH,
      element: (
        <DashboardPage />
      ),
    },
    {
      path: ALL_PATH,
      element: <Navigate to={DASHBOARD_PATH} />,
    },
  ],

  [userRoles.ADMIN]: [
    {
      path: ROOT_PATH,
      element: (
        // <SiderLayout>
        <>
          <Outlet />
          <Navigate to={DASHBOARD_PATH} />
        </>
        // </SiderLayout>
      ),
      children: [
        {
          path: DASHBOARD_PATH,
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: ALL_PATH,
      element: <Navigate to={DASHBOARD_PATH} />,
    },
  ],
};
