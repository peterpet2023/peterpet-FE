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
import { Map, Marker } from 'react-kakao-maps';
const { kakao } = window;

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
      .then((r) => {
        console.log(r.data.data[0]);
        setData(r.data.data);
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(r.data.data[0].위도, r.data.data[0].경도),
          level: 7,
        };

        var map = new kakao.maps.Map(container, options);

        var positions = [
          {
            title: r.data.data[0].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[0].위도, r.data.data[0].경도),
          },
          {
            title: r.data.data[1].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[1].위도, r.data.data[1].경도),
          },
          {
            title: r.data.data[2].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[2].위도, r.data.data[2].경도),
          },
          {
            title: r.data.data[3].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[3].위도, r.data.data[3].경도),
          },
          {
            title: r.data.data[4].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[4].위도, r.data.data[4].경도),
          },
          {
            title: r.data.data[5].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[5].위도, r.data.data[5].경도),
          },
          {
            title: r.data.data[6].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[6].위도, r.data.data[6].경도),
          },
          {
            title: r.data.data[7].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[7].위도, r.data.data[7].경도),
          },
          {
            title: r.data.data[8].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[8].위도, r.data.data[8].경도),
          },
          {
            title: r.data.data[9].상호명,
            latlng: new kakao.maps.LatLng(r.data.data[9].위도, r.data.data[9].경도),
          },
        ];

        var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }
      });
  }, []);

  useEffect(() => {}, []);
  const navigate = useNavigate();

  return (
    <>
      <Header title='업체 선택하기' titleSize='medium' left='back' right='home' underLine />
      <HeadLine firstLine='디자인하신 제품을' secondLine='의뢰할 업체를 선택해주세요.' emoji='🪡🧵' fontType='large' />
      <Margin height='50' />
      <div style={{ overflow: 'hidden', borderRadius: '7px', border: '1px solid gray' }}>
        <div id='map' style={{ width: '400px', height: '250px' }}></div>
      </div>
      {data.map(({ 상호명, 경도, 위도 }) => (
        <Box onClick={() => navigate('/reception4')}>
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
