import { styled } from 'styled-components';
import HeadLine from '../../components/HeadLine/HeadLine';
import MoreButton from '../../components/MoreButton/MoreButton';
import Margin from '../../components/Margin/Margin';
import Typo from '../../components/Typo/Typo';
import DualButton from '../../components/DualButton/DualButton';
import Horizon from '../../components/Hotrizon/Horizon';
import before from './before.png';
import after from './after.png';
import { useState } from 'react';

const ReviewBoxContainer = styled.div`
  width: 88%;
  height: 340px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 14px;
`;

const ReviewTitleWrapper = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewPhoto = styled.img`
  width: 140px;
  height: 140px;
  background-color: gold;
  border-radius: 7px;
`;

const PhotoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ReviewPhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 86%;
`;

export default function ReviewContainer() {
  let [reviewCount, setReviewCount] = useState(1);

  const handleReviewCount = (e) => {
    const { id } = e.currentTarget;

    if (id === 'down' && reviewCount !== 0) {
      setReviewCount(reviewCount--);
    }
    if (id === 'up' && reviewCount !== 11) {
      setReviewCount(reviewCount++);
    }
  };

  return (
    <>
      <HeadLine moreButton fontType='medium' firstLine='실사용 고객 리뷰' />
      <Margin height='16' />

      <ReviewBoxContainer>
        <ReviewTitleWrapper>
          <HeadLine fontType='mediumSmall' firstLine='🧵 인하 수선' />
          <Typo fontType='small' color='darkGray'>
            230324(화)
          </Typo>
        </ReviewTitleWrapper>
        <Margin height='10' />
        <PhotoWrapper>
          <ReviewPhotoWrapper>
            <ReviewPhoto src={before} />
            <Margin height='12' />
            <Typo>Before</Typo>
          </ReviewPhotoWrapper>
          <ReviewPhotoWrapper>
            <ReviewPhoto src={after} />
            <Margin height='12' />
            <Typo>After</Typo>
          </ReviewPhotoWrapper>
        </PhotoWrapper>
        <ReviewContentWrapper>
          <Margin height='16' />
          <Typo fontType='medium'>제목</Typo>
          <Margin height='12' />
          <Typo>내용asdfasdfasdfasㅁㄴ아ㅗ럼노어ㅏㄹ너마로나머ㅏㄴ오라ㅓㅁ노아러ㅗ머나오람너</Typo>
        </ReviewContentWrapper>
      </ReviewBoxContainer>
      <DualButton count={reviewCount} onClick={handleReviewCount} />
      <Horizon />
    </>
  );
}
