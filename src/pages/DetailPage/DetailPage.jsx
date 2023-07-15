import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Margin from '../../components/Margin/Margin';
import HeadLine from '../../components/HeadLine/HeadLine';
import Button from '../../components/Button/Button';
import Horizon from '../../components/Hotrizon/Horizon';
import hoodDog from './hoodDog.png';
import { styled } from 'styled-components';
import RoundButton from '../../components/RoundButton/RoundButton';
import Typo from '../../components/Typo/Typo';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Box = styled.div`
  width: 310px;
  height: 95px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 7px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default function DetailPage() {
  const { designId } = useParams();
  const navigate = useNavigate();

  const [designData, setDesignData] = useState({
    designCode: 1,
    designTitle: '테스트 입니다',
    designerName: '테스터',
    uploadDate: '2023-07-14T09:00:00.000+00:00',
    designImage1:
      'https://images.mypetlife.co.kr/content/uploads/2022/05/23103009/d3281c8c-eed4-44e8-b7c9-f4a161e21b97.jpg',
    designImage2: 'ㅋㅋ',
    designImage3: 'ㅌ',
    designCount: 0,
    designCategory: '소형견',
    designPrice: 4000,
    designPriceLower: 1000,
    designPriceUpper: 5000,
  });

  return (
    <>
      <Header title='제품 제작하기' left='back' right='cancel' underLine titleSize='medium' />
      <Margin height='26' />
      <ProgressBar percent='0' />
      <HeadLine firstLine='맡기실 옷의 디자인을' secondLine='확인해주세요.' fontType='large' />
      <Margin height='60' />
      <Button fontType='medium'> 제작 의뢰서</Button>
      <Margin height='20' />
      <Typo fontType='large'>{designData.designTitle}</Typo>
      <Margin height='16' />

      <Horizon />
      <img height='280' width='280' src={hoodDog} />
      <Margin height='20' />

      <Box>
        <TagWrapper>
          <RoundButton size='small'>대형견 스타일</RoundButton>
          <RoundButton size='small'>가장 인기 있는</RoundButton>
        </TagWrapper>
        <Typo fontType='medium'>🧚 {designData.designerName} 디자이너</Typo>
        <Margin height='10' />
        <Typo fontType='small' color='darkGray'>
          제작 예상 금액
        </Typo>
        <Typo fontType='medium'>
          {designData.designPriceLower}원 ~ {designData.designPriceUpper}원
        </Typo>
      </Box>
      <Margin height='20' />
      <Button color='black' onClick={() => navigate('/Reception2')}>
        다음
      </Button>
      <Margin height='40' />
    </>
  );
}
