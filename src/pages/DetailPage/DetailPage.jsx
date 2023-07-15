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
  const [designData, setDesignData] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/design/select/designTitle/${designId}`).then((r) => {
      setDesignData(r.data.result.selectAllDesign[0]);
    });
  }, []);

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
