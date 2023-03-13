import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from '../../redux/auth/auth-selectors';

const PublicRoute = () => {
  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }

  return <Outlet />;
};

export default PublicRoute;
