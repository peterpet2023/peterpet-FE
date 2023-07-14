import { styled } from 'styled-components';
import HeadLine from '../../components/HeadLine/HeadLine';
import Header from '../../components/Header/Header';
import CircleMenu from '../MainPage/CircleMenu';
import Typo from '../../components/Typo/Typo';
import Margin from '../../components/Margin/Margin';
import clo from './clo.png';
import clo2 from './clo2.png';
import DualButton from '../../components/DualButton/DualButton';

const Photo = styled.img`
  width: 170px;
  height: 170px;
`;

const PopularPhotoContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

const PhotoWrapper = styled.div`
  padding: 6px;
`;

export default function FullView() {
  return (
    <>
      <Header title='전체 보기' titleSize='medium' left='back' right='home' underLine />
      <HeadLine firstLine='실시간으로' secondLine='인기있는 디자인 랭킹' emoji='👚👕' fontType='large' />
      <PopularPhotoContainer>
        <PhotoWrapper>
          <Photo src={clo} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
        <PhotoWrapper>
          <Photo src={clo2} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
      </PopularPhotoContainer>
      <CircleMenu />
      <PopularPhotoContainer>
        <PhotoWrapper>
          <Photo src={clo} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
        <PhotoWrapper>
          <Photo src={clo2} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
        <PhotoWrapper>
          <Photo src={clo2} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
        <PhotoWrapper>
          <Photo src={clo2} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
        <PhotoWrapper>
          <Photo src={clo2} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
        <PhotoWrapper>
          <Photo src={clo2} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
        <PhotoWrapper>
          <Photo src={clo2} />
          <Margin height='10' />
          <Typo fontType='medium'>프릴 원피스</Typo>
        </PhotoWrapper>
      </PopularPhotoContainer>
      <DualButton count='1' color='brown' />
    </>
  );
}
