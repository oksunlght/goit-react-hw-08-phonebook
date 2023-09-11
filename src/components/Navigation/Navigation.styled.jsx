import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainr = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;

  margin-bottom: 70px;

  border-bottom: 2px solid #585858;
`;

export const StyledNav = styled(NavLink)`
  text-decoration: none;

  & active {
    color: #585858;
    font-weight: 900;
  }

  &:hover,
  &:focus {
    color: #585858;
  }

  &:last-child {
    margin-left: 15px;
  }
`;
