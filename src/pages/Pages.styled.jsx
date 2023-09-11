import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;

  width: 350px;
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const Input = styled.input`
  margin-top: 5px;

  width: 350px;

  padding: 8px 15px;

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
  margin-bottom: 20px;

  font-size: 16px;
`;

export const Button = styled.button`
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;

  width: 125px;
  height: 35px;

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
