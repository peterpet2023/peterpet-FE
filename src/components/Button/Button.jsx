import { styled } from 'styled-components';

const Button = styled.button`
  height: 46px;
  min-width: 349px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export default Button;
