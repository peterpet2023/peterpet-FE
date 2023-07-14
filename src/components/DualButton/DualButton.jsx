import { styled } from 'styled-components';
import back from '../../assets/Icons/Header/back.svg';
import Typo from '../Typo/Typo';

const SquareButton = styled.div`
  width: 67px;
  height: 34px;
  background-color: ${(props) => (props.color ? props.theme.colors[props.color] : props.theme.colors.gray)};
  border-radius: 7px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const DualButtonWrapper = styled.div`
  padding: 20px 0;
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function DualButton({ color, count }) {
  return (
    <DualButtonWrapper>
      <SquareButton color={color}>
        <img src={back} alt='back' />
      </SquareButton>
      <Typo fontType='medium'>{count} / 10</Typo>
      <SquareButton color={color}>
        <img src={back} alt='back' style={{ transform: 'rotate(180deg)' }} />
      </SquareButton>
    </DualButtonWrapper>
  );
}
