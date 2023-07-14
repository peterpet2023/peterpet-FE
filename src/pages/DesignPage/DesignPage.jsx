import { useParams } from 'react-router-dom';
import HeadLine from '../../components/HeadLine/HeadLine';
import Header from '../../components/Header/Header';
import PhotoWrapper from './PhotoWrapper';
import { styled } from 'styled-components';
import DualButton from '../../components/DualButton/DualButton';

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
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
        <PhotoWrapper text='마뮤' />
      </PopularPhotoContainer>
      <DualButton count='1' color='brown' />
    </>
  );
}
