import { useParams } from 'react-router-dom';
import HeadLine from '../../components/HeadLine/HeadLine';
import Header from '../../components/Header/Header';
import PhotoWrapper from './PhotoWrapper';
import { styled } from 'styled-components';
import DualButton from '../../components/DualButton/DualButton';
import { useEffect, useState } from 'react';
import axios from 'axios';

const petTypeList = {
  smallDog: {
    type: 'small',
    name: '소형견',
    icon: '🐕',
  },
  mediumDog: {
    type: 'medium',
    name: '중형견',
    icon: '🐩',
  },
  largeDog: {
    type: 'large',
    name: '대형견',
    icon: '🐕‍🦺',
  },
  cat: {
    type: 'cat',
    name: '고양이',
    icon: '🐈‍⬛',
  },
};

const PopularPhotoContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

export default function DesignPage() {
  const { petType } = useParams();

  const [designList, setDesignList] = useState([
    {
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
    },
    {
      designCode: 2,
      designTitle: '땡땡이 원피스',
      designerName: '땡입니당',
      uploadDate: '2023-07-14T09:00:00.000+00:00',
      designImage1: 'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/1491208759/B.jpg?314000000',
      designImage2: 'qwer.qwer',
      designImage3: 'zxcv.zxcv',
      designCount: 0,
      designCategory: '소형견',
      designPrice: 9000,
      designPriceLower: 0,
      designPriceUpper: 0,
    },
    {
      designCode: 3,
      designTitle: '아이언맨슈트',
      designerName: '로다주',
      uploadDate: '2023-07-13T09:00:00.000+00:00',
      designImage1: 'https://m.lovecoco.co.kr/web/product/medium/201911/ea41b6d5ffb29b3b4425c4aec2d9a805.jpg',
      designImage2: 'qwer.qwer',
      designImage3: 'zxcv.zxcv',
      designCount: 0,
      designCategory: '대형견',
      designPrice: 30000,
      designPriceLower: 0,
      designPriceUpper: 0,
    },
    {
      designCode: 4,
      designTitle: '산타클로즈',
      designerName: '루돌프',
      uploadDate: '2023-07-12T09:00:00.000+00:00',
      designImage1: 'https://m.needsthepet.com/web/product/extra/big/202112/a0fbaaa4833de1bbdc345e0cefede6d7.jpg',
      designImage2: 'qwer.qwer',
      designImage3: 'zxcv.zxcv',
      designCount: 0,
      designCategory: '중형견',
      designPrice: 23000,
      designPriceLower: 0,
      designPriceUpper: 0,
    },
    {
      designCode: 6,
      designTitle: '꽃은 영어로 플라워',
      designerName: 'flutter',
      uploadDate: '2023-07-14T09:00:00.000+00:00',
      designImage1:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGHjoTUI1zJrOkJL-XxBJorkJ5EBT_kkjkg&usqp=CAU',
      designImage2: 'ㅋㅋ',
      designImage3: 'ㅌㅌ',
      designCount: 0,
      designCategory: '중형견',
      designPrice: 11000,
      designPriceLower: 0,
      designPriceUpper: 0,
    },
    {
      designCode: 7,
      designTitle: '시크블랙',
      designerName: 'blacker',
      uploadDate: '2023-07-14T09:00:00.000+00:00',
      designImage1:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6_MokUQmpXiKQN6rdCr3c3jiRsaOl0JPbQ&usqp=CAU',
      designImage2: 'ㅋㅋ',
      designImage3: 'ㅌㅌ',
      designCount: 0,
      designCategory: '중형견',
      designPrice: 15000,
      designPriceLower: 0,
      designPriceUpper: 0,
    },
    {
      designCode: 8,
      designTitle: '무지개상의',
      designerName: 'rainbow',
      uploadDate: '2023-07-14T09:00:00.000+00:00',
      designImage1: 'https://m.jeramyworld.com/web/product/big/202302/f511767cecfc193bf06efd4114388459.png',
      designImage2: 'ㅋㅋ',
      designImage3: 'ㅌㅌ',
      designCount: 0,
      designCategory: '소형견',
      designPrice: 8000,
      designPriceLower: 0,
      designPriceUpper: 0,
    },
  ]);

  return (
    <>
      <Header title='전체 보기' titleSize='medium' left='back' right='home' underLine />
      <HeadLine
        firstLine={`나의 ${petTypeList[petType].name}을 위한`}
        secondLine='특별한 디자인'
        emoji={`${petTypeList[petType].icon}`}
        fontType='large'
      />
      <PopularPhotoContainer>
        {designList.map(({ designImage1, designTitle }) => (
          <PhotoWrapper text={designTitle} img={designImage1} id={designTitle} />
        ))}
      </PopularPhotoContainer>
      <DualButton count='1' color='brown' />
    </>
  );
}
