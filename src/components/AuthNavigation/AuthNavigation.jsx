import { StyledNav, Wrapper } from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <Wrapper>
      <StyledNav to="/login">Log In</StyledNav>
      <StyledNav to="/register">Register</StyledNav>
    </Wrapper>
  );
};

export default AuthNavigation;
