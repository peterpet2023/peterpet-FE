import { styled } from 'styled-components';

const Button = styled.button`
  height: 46px;
  min-width: 349px;
  border-radius: 7px;
  background-color: ${(props) => props.color && props.theme.colors[props.color]};
  border: none;
  color: ${(props) => props.color && props.theme.colors.white};
  cursor: pointer;
`;

export default Button;
