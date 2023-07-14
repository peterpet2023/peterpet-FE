import { styled } from 'styled-components';
import plus from '../../assets/Icons/NavigationBar/plus.svg';
import Margin from '../Margin/Margin';
import Typo from '../Typo/Typo';
import home from '../../assets/Icons/Header/home.svg';
import lens from '../../assets/Icons/NavigationBar/lens.svg';
import drawers from '../../assets/Icons/NavigationBar/drawers.svg';
import chat from '../../assets/Icons/NavigationBar/chat.svg';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/Toast';

const MainWrapper = styled.div`
  height: 84px;
  background-color: ${({ theme }) => theme.colors.brown};

  position: fixed;
  bottom: 0;
  width: 450px;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  width: 60px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// TODO: 제품 검색을 들은 페이지로 이동
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

export default function NavigationBar({ userType }) {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <PostArticleButton>
        <img src={plus} alt='plus' onClick={() => navigate('/full-view')} />
      </PostArticleButton>
      <IconsContainer>
        <Icon onClick={() => navigate('/main')} img={home}>
          홈
        </Icon>
        <Icon onClick={() => navigate('/guide')} img={lens}>
          가이드보기
        </Icon>
        <Icon img='empty'>업로드하기</Icon>
        <Icon img={chat} onClick={() => Toast('아직 준비중입니다.')}>
          채팅
        </Icon>
        <Icon img={drawers} onClick={() => Toast('아직 준비중입니다.')}>
          의뢰 내역
        </Icon>
      </IconsContainer>
    </MainWrapper>
  );
}
