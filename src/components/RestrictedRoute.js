import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  //   const shouldRedirect = isLoggedIn && restricted;
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
