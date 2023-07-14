import { styled } from 'styled-components';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';

const BackgroundBar = styled.div`
  width: 300px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorBar = styled.div`
  width: ${(props) => parseInt(props.percent) * (308 / 100)}px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
`;

export default function ProgressBar({ percent }) {
  return (
    <Wrapper>
      <Margin width='4' />
      <BackgroundBar>
        <ColorBar percent={percent} />
      </BackgroundBar>
      <Margin width='18' />
      <Typo width='36px' color='smog' fontType='small'>
        {percent} %
      </Typo>
    </Wrapper>
  );
}
