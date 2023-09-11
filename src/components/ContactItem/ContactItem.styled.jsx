import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;

  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const DeleteBtn = styled.button`
  margin-left: 25px;

  font-size: 16px;

  color: #585858;

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const ContactInfo = styled.span`
  margin-left: 5px;
`;

export const Number = styled.span`
  color: rgb(255, 69, 0, 0.8);
`;
