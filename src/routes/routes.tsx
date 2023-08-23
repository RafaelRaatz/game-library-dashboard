import { createBrowserRouter } from 'react-router-dom';
import {
  AddGamePage,
  CreateUserPage,
  EditGamePage,
  GameDetailsPage,
  HomePage,
  LoginPage,
  UserPage,
} from '../pages';
import { PrivateRoutes } from './privateRoutes';

export const Router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <PrivateRoutes>
        <HomePage />
      </PrivateRoutes>
    ),
  },
  {
    path: '/gamepage/:id',

    element: (
      <PrivateRoutes>
        <GameDetailsPage />
      </PrivateRoutes>
    ),
  },

  {
    path: '/user',
    element: (
      <PrivateRoutes>
        <UserPage />
      </PrivateRoutes>
    ),
  },
  {
    path: '/newgame',
    element: (
      <PrivateRoutes>
        <AddGamePage />
      </PrivateRoutes>
    ),
  },
  {
    path: '/editgame/:id',
    element: (
      <PrivateRoutes>
        <EditGamePage />
      </PrivateRoutes>
    ),
  },
  {
    path: '/createuser',
    element: (
      <PrivateRoutes>
        <CreateUserPage />
      </PrivateRoutes>
    ),
  },
]);
