import { styled } from 'styled-components';

const StyledInput = styled.input`
  width: 320px;
  color: ${({ theme }) => theme.colors.smog};
  padding: 16px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;
  // 이게 적용이 안되는 것 같습니다.
  ::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export default function Input({ placeholder, value, onChange }) {
  return <StyledInput value={value} onChange={onChange} placeholder={placeholder} />;
}
