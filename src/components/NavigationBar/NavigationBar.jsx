import { styled } from 'styled-components';
import plus from '../../assets/Icons/NavigationBar/plus.svg';
import Margin from '../Margin/Margin';
import Typo from '../Typo/Typo';
import home from '../../assets/Icons/Header/home.svg';
import lens from '../../assets/Icons/NavigationBar/lens.svg';
import drawers from '../../assets/Icons/NavigationBar/drawers.svg';
import chat from '../../assets/Icons/NavigationBar/chat.svg';
import { useNavigate } from 'react-router-dom';

const MainWrapper = styled.div`
  height: 84px;
  background-color: ${({ theme }) => theme.colors.brown};

  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const PostArticleButton = styled.button`
  cursor: pointer;
  border: none;
  width: 52px;
  height: 52px;
  border-radius: 52px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  position: relative;
  top: -25px;
  left: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));

  // 중심점을 무게중심으로 합니다.
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -40px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 48px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Icon = ({ img, children, onClick }) => {
  return (
    <IconWrapper onClick={onClick}>
      {img === 'empty' ? <Margin width='14px' /> : <img src={img} style={{ width: '18px' }} />}
      <Typo color='black' fontType='small'>
        {children}
      </Typo>
    </IconWrapper>
  );
};

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <PostArticleButton>
        <img src={plus} alt='plus' />
      </PostArticleButton>
      <IconsContainer>
        <Icon onClick={() => navigate('/')} img={home}>
          홈
        </Icon>
        <Icon onClick={() => navigate('/')} img={lens}>
          제품 검색
        </Icon>
        <Icon img='empty'>견적 받기</Icon>
        <Icon img={chat} onClick={() => navigate('/')}>
          채팅
        </Icon>
        <Icon img={drawers} onClick={() => navigate('/')}>
          의뢰 내역
        </Icon>
      </IconsContainer>
    </MainWrapper>
  );
}
