import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled(NavLink)`
  color: #585858;
  font-size: 18px;
  text-decoration: none;

  & active {
    color: orangered;
    font-weight: 900;
  }

  &:hover,
  &:focus {
    color: orangered;
  }

  &:last-child {
    margin-left: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  &:last-child {
    margin-left: 15px;
  }
`;
