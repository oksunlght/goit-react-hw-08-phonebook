import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { StyledNav, Wrapper } from './PageNavigation.styled';

const PageNavigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Wrapper>
      <StyledNav to="/login">Home</StyledNav>
      {isLoggedIn && <StyledNav to="/contacts">Contacts</StyledNav>}
    </Wrapper>
  );
};

export default PageNavigation;
