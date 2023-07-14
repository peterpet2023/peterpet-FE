import { styled } from 'styled-components';
import HeadLine from '../../components/HeadLine/HeadLine';
import Margin from '../../components/Margin/Margin';
import dog1 from './dog1.png';
import dog2 from './dog2.png';

const TagContainer = styled.div`
  width: 1000px;
  height: 250px;
  display: flex;
  padding-left: 24px;
  flex-wrap: wrap;

  gap: 10px;
`;

const Container = styled.div`
  width: 100%;
  white-space: nowrap; // 가로 스크롤의 핵심
  overflow-x: scroll; // 가로 스크롤의 핵심
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Photo = styled.img`
  width: 233px;
  height: 233px;
  object-fit: cover;
`;

export default function PopularDesign() {
  return (
    <>
      <HeadLine firstLine='실시간 인기 디자인' fontType='medium' moreButton />
      <Margin height='16' />
      <Container>
        <TagContainer>
          <Photo src={dog1} />
          <Photo src={dog2} />
          <Photo src={dog1} />
          <Photo src={dog2} />
        </TagContainer>
      </Container>
    </>
  );
}
