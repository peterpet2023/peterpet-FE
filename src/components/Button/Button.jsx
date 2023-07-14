import { styled } from 'styled-components';

const Button = styled.button`
  height: 46px;
  min-width: 349px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export default Button;
