import styled from '@emotion/styled';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  font-size: 18px;
`;

export const Input = styled.input`
  margin-top: 10px;

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

export const FilterForm = styled.form`
  width: 570px;
`;
