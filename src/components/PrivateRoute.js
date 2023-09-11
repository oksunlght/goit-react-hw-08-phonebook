import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
