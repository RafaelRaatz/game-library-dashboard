import { Navigate } from 'react-router';

const token = () => {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
};

export function PrivateRoutes({ children }: any) {
  return token() ? children : <Navigate to="/" />;
}
