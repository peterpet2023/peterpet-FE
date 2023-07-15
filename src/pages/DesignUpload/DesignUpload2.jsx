/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import shirt from './shirt.svg';
import AttachImage from '../../components/AttachImage/AttachImage';
import Button from '../../components/Button/Button';
import HeadLine from '../../components/HeadLine/HeadLine';
import Header from '../../components/Header/Header';
import Horizon from '../../components/Hotrizon/Horizon';
import Input from '../../components/Input/Input';
import MoreButton from '../../components/MoreButton/MoreButton';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import RoundButton from '../../components/RoundButton/RoundButton';
import Margin from '../../components/Margin/Margin';
import Typo from '../../components/Typo/Typo';
import { useState } from 'react';
import FileInput from '../../components/FileInput';

const pets = [
  {
    icon: '🐕‍🦺',
    name: '소형견',
    id: 'smallDog',
  },
  {
    icon: '🐩',
    name: '중형견',
    id: 'mediumDog',
  },
  {
    icon: '🐕',
    name: '대형견',
    id: 'largeDog',
  },
  {
    icon: '🐈‍⬛',
    name: '고양이',
    id: 'cat',
  },
];

const Box = styled.div`
  width: 165px;
  height: 110px;
  background-color: ${(props) => (props.on === true ? props.theme.colors.darkGray : props.theme.colors.gray)};
  border-radius: 7px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.div`
  width: 370px;
  height: 250px;
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const DesignUpload1 = () => {
  const navigate = useNavigate();

  const [select, setSelect] = useState({
    smallDog: false,
    mediumDog: false,
    largeDog: false,
    cat: false,
  });

  return (
    <>
      <Header titleSize='medium' left='back' right='home' title='품목 선택하기' underLine />
      <Margin height='20' />
      <ProgressBar percent='50' />
      <HeadLine fontType='large' firstLine='디자인하신 제품의 ' secondLine='파일을 업로드해주세요.' />
      <Margin height='60' />

      <img src={shirt} />
      <Margin height='70' />

      <FileInput />

      <Margin height='30' />

      <Button color='black' onClick={() => navigate('/DesignUpload3')}>
        다음
      </Button>
    </>
  );
};

export default DesignUpload1;
