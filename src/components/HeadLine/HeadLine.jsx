/**
 * firstLine, secondLine, emoji, subTitle, fontType
 *
 * fontType: 'extraLarge' | 'large' | 'medium' | 'small'
 */

import { styled } from 'styled-components';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';

const HeadLineWrapper = styled.div`
  margin-top: 32px;
  width: 86%;
`;

const Emoji = styled.p`
  font-size: 22px;
  width: 82px;
  height: 33px;
`;

const HeadTypo = styled(Typo)`
  color: ${({ theme }) => theme.colors.black};
`;

const SubTitleTypo = styled(Typo)`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
`;

export default function HeadLine({ firstLine, secondLine, emoji, subTitle, fontType }) {
  return (
    <HeadLineWrapper>
      {emoji && <Emoji>{emoji}</Emoji>}
      {firstLine && <HeadTypo fontType={fontType}>{firstLine}</HeadTypo>}
      {secondLine && <Margin height='4' />}
      {secondLine && <HeadTypo fontType={fontType}>{secondLine}</HeadTypo>}
      {subTitle && <SubTitleTypo>{subTitle}</SubTitleTypo>}
    </HeadLineWrapper>
  );
}
