import { styled } from 'styled-components';
import Typo from '../Typo/Typo';

const RoundWrapper = styled.div`
  width: ${(props) => (props.size ? '57px' : '72px')};
  height: ${(props) => (props.size ? '12px' : '32px')};
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  /* &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};
  } */
`;

export default function RoundButton({ children, size = 'medium' }) {
  return (
    <>
      {size === 'medium' ? (
        <RoundWrapper>
          <Typo color='darkGray' fontType='small'>
            {children}
          </Typo>
        </RoundWrapper>
      ) : (
        <RoundWrapper size='small'>
          <Typo size='6px' color='darkGray'>
            {children}
          </Typo>
        </RoundWrapper>
      )}
    </>
  );
}
