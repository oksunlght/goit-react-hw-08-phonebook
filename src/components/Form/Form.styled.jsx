import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 570px;
`;

export const Input = styled.input`
  margin-top: 10px;

  width: 350px;

  padding: 8px 15px;

  color: #001133;
  font-size: 18px;

  border: none;
  outline: none;
  border-bottom: 2px solid #000;
  border-bottom-left-radius: 20%;

  &:hover,
  &:focus {
    border-bottom: 2px solid orangered;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  font-size: 18px;
`;

export const SubmitBtn = styled.button`
  margin-bottom: 50px;
  width: 45px;
  height: 45px;

  color: #585858;

  &:hover,
  &:focus {
    color: orangered;
  }
`;
