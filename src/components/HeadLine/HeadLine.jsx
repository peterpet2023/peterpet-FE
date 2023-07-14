/**
 * firstLine, secondLine, emoji, subTitle, fontType
 *
 * fontType: 'extraLarge' | 'large' | 'medium' | 'small'
 */

import { styled } from 'styled-components';
import Typo from '../Typo/Typo';
import Margin from '../Margin/Margin';
import MoreButton from '../MoreButton/MoreButton';

const HeadLineWrapper = styled.div`
  width: 88%;
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
/**
 *
 * @firstLine {string} 첫번째 줄에 쓸 문자열입니다
 * @secondLine {string} 두번째 줄에 쓸 문자열입니다.
 * @emoji {string} 이모티콘이 있는 경우 사용합니다.
 * @subTitle {string} 부제목이 있는 경우 사용합니다.`
 * @fontType {'large' | 'medium' | 'small'} 주제목에 쓸 폰트 크기를 설정합니다.
 * @returns
 */
export default function HeadLine({ firstLine, secondLine, emoji, subTitle, fontType, moreButton }) {
  return (
    <>
      <Margin height='26' />
      <HeadLineWrapper>
        {emoji && <Emoji>{emoji}</Emoji>}
        {firstLine && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <HeadTypo fontType={fontType}>{firstLine}</HeadTypo>
            {moreButton && <MoreButton>전체보기</MoreButton>}
          </div>
        )}
        {secondLine && <Margin height='4' />}
        {secondLine && <HeadTypo fontType={fontType}>{secondLine}</HeadTypo>}
        {subTitle && <SubTitleTypo>{subTitle}</SubTitleTypo>}
      </HeadLineWrapper>
    </>
  );
}
