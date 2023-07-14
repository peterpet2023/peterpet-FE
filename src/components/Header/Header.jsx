import cancel from '../../assets/Icons/Header/cancel.svg';
import home from '../../assets/Icons/Header/home.svg';
import back from '../../assets/Icons/Header/back.svg';
import { styled } from 'styled-components';
import Horizon from '../Hotrizon/Horizon';
import Typo from '../Typo/Typo';
import { useNavigate } from 'react-router-dom';

const Icon = styled.img`
  cursor: pointer;
`;

const iconType = (navigate, type) => {
  const icon = {
    back: <Icon src={back} alt='back' onClick={() => navigate(-1)} />,
    cancel: <Icon src={cancel} alt='cancel' onClick={() => navigate('/main')} />,
    home: <Icon src={home} alt='home' onClick={() => navigate('/main')} />,
  };

  return icon[type];
};

const HeaderWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmptyIcon = styled.div`
  width: 16px;
  height: 16px;
`;
/**
 * header 컴포넌트!
 * @left {'cancel' | 'home' | 'back'} 왼쪽에 들어갈 아이콘 이름. 없으면 쓰지마세요. (형태: left='back')
 * @right {'cancel' | 'home' | 'back'} 왼쪽에 들어갈 아이콘 이름. 없으면 쓰지마세요. (형태: right='back')
 * @title {string} 가운데에 들어갈 제목. (형태: title='견적 요청서')
 * @titleSize {'large' | 'medium' | 'small'} 가운데에 들어갈 제목의 폰트 크기 (형태: titleSize='large')
 * @underLine {boolean} header아래에 밑줄이 있으면 사용합니다. (형태: underLine)
 * @returns
 */
export default function Header({ left, title, right, titleSize, underLine }) {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <IconsContainer>
          {left ? iconType(navigate, left) : <EmptyIcon />}
          {title ? <Typo fontType={titleSize}>{title}</Typo> : <EmptyIcon />}
          {right ? iconType(navigate, right) : <EmptyIcon />}
        </IconsContainer>
      </HeaderWrapper>
      {underLine && <Horizon />}
    </>
  );
}
