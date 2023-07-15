import { styled } from 'styled-components';
import HeadLine from '../../components/HeadLine/HeadLine';
import Typo from '../../components/Typo/Typo';
import Margin from '../../components/Margin/Margin';
import dog1 from './dog1.png';
import dog2 from './dog2.png';
import Horizon from '../../components/Hotrizon/Horizon';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Photo = styled.img`
  width: 233px;
  height: 170px;
  object-fit: cover;
`;

export default function LovingPeople() {
  return (
    <>
      <Margin height='10' />
      <Horizon />
      <HeadLine fontType='medium' firstLine='리폼을 사랑하는 사람들의 이야기' />
      <Margin height='16' />
      <Container>
        <TagContainer>
          <PhotoWrapper>
            <Photo src={dog1} />
            <Margin height='10' />
            <Typo fontType='small'>인생 첫 리폼, 수선해서 더 아끼게 됐어요</Typo>
          </PhotoWrapper>
          <PhotoWrapper>
            <Photo src={dog2} />
            <Margin height='10' />
            <Typo fontType='small'>부모님의 추억이 ....</Typo>
          </PhotoWrapper>
          <PhotoWrapper>
            <Photo src={dog1} />
            <Margin height='10' />
            <Typo fontType='small'>인생 첫 리폼, 수선해서 더 아끼게 됐어요</Typo>
          </PhotoWrapper>
          <PhotoWrapper>
            <Photo src={dog2} />
            <Margin height='10' />
            <Typo fontType='small'>인생 첫 리폼, 수선해서 더 아끼게 됐어요</Typo>
          </PhotoWrapper>
        </TagContainer>
      </Container>
    </>
  );
}
