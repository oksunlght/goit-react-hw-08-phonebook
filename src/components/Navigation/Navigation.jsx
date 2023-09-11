import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import PageNavigation from '../PageNavigation/PageNavigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Dashbord from '../UserDashboard/UserDashboard';
import { NavContainr } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavContainr>
      <PageNavigation />
      {isLoggedIn ? <Dashbord /> : <AuthNavigation />}
    </NavContainr>
  );
};

export default Navigation;
