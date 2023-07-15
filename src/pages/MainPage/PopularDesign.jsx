import { styled } from 'styled-components';
import HeadLine from '../../components/HeadLine/HeadLine';
import Margin from '../../components/Margin/Margin';
import dog1 from './dog1.png';
import dog2 from './dog2.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TagContainer = styled.div`
  width: 1900px;
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
  const [designList, setDesignList] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/design/select`).then((r) => setDesignList(r.data.result.selectAllDesign));
  }, []);

  return (
    <>
      <HeadLine firstLine='실시간 인기 디자인' fontType='medium' moreButton />
      <Margin height='16' />
      <Container>
        <TagContainer>
          {designList.map(({ designImage1 }) => (
            <Photo src={designImage1} />
          ))}
        </TagContainer>
      </Container>
    </>
  );
}
