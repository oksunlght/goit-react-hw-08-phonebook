import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import {
  DashboardWrapper,
  LogoutButton,
  DashboardText,
} from './UserDashboard.styled';

const Dashbord = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);

  return (
    <DashboardWrapper>
      <DashboardText>Welcome, {email}!</DashboardText>
      <LogoutButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </LogoutButton>
    </DashboardWrapper>
  );
};

export default Dashbord;
