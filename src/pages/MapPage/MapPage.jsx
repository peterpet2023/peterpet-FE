import { styled } from 'styled-components';
import HeadLine from '../../components/HeadLine/HeadLine';
import Header from '../../components/Header/Header';
import Margin from '../../components/Margin/Margin';
import map from './map.png';
import RoundButton from '../../components/RoundButton/RoundButton';
import Typo from '../../components/Typo/Typo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Box = styled.div`
  width: 310px;
  height: 95px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 7px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 20px;
  cursor: pointer;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default function MapPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.odcloud.kr/api/15087016/v1/uddi:9198b30d-4362-4791-818e-b5cbda2fdd5e`, {
        headers: {
          Authorization:
            'Infuser exyhdAyKQcM4ioF37fW8/tsEIYtgjB7fgKD6sT/CqfXHphoZ2Uw6iFOX7zWjwcO3gytOzROEbTSuvAGtQVynwg==',
        },
        params: {
          key: 'exyhdAyKQcM4ioF37fW8/tsEIYtgjB7fgKD6sT/CqfXHphoZ2Uw6iFOX7zWjwcO3gytOzROEbTSuvAGtQVynwg==', // 인증 키를 쿼리 파라미터로 추가
        },
      })
      .then((r) => setData(r.data.data));
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Header title='업체 선택하기' titleSize='medium' left='back' right='home' underLine />
      <HeadLine firstLine='디자인하신 제품을' secondLine='의뢰할 업체를 선택해주세요.' emoji='🪡🧵' fontType='large' />
      <Margin height='50' />
      <img src={map} />
      {data.map(({ 상호명, 경도, 위도 }) => (
        <Box onClick={() => navigate('/finish')}>
          <TagWrapper>
            <RoundButton size='small'>리폼 3년 경력</RoundButton>
            <RoundButton size='small'>지퍼 수선 고수</RoundButton>
          </TagWrapper>
          <Typo fontType='medium'>🧵 {상호명}</Typo>
          <Margin height='10' />
          <Typo fontType='small' color='darkGray'>
            ( 완료 14건 - 리뷰 3건 - 만족도 96% )
          </Typo>
          <Typo fontType='medium'>150,000원 | {parseInt(위도)}일</Typo>
        </Box>
      ))}
      <Margin height='70' />
    </>
  );
}
