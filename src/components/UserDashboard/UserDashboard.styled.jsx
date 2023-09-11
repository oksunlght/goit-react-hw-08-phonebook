import styled from '@emotion/styled';

export const DashboardWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  margin-left: 15px;

  width: 100px;
  height: 30px;

  font-size: 16px;

  color: #fff;
  background-color: #585858;

  border-radius: 5px;

  box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);
  -webkit-box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);
  -moz-box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);

  &:hover,
  &:focus {
    color: #fff;
    background-color: orangered;
  }
`;

export const DashboardText = styled.p`
  font-size: 18px;
`;
