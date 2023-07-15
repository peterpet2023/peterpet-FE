/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */

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
import MainPageHeader from './MainPageHeader';
import main from '../../assets/Icons/main.svg';
import first from '../../assets/Icons/guide.svg';
import CircleMenu from './CircleMenu';
import ReviewContainer from './ReviewContainer';
import Margin from '../../components/Margin/Margin';
import DualButton from '../../components/DualButton/DualButton';
import PopularDesign from './PopularDesign';
import LovingPeople from './LovingPeople';
import FileInput from '../../components/FileInput';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const userType = {
  consumer: {
    circleMenu: '반려견 옷제작 바로 검색하기',
  },
  designer: {
    circleMenu: '나만의 디자인 바로 뽐내기',
  },
  tailer: {
    circleMenu: '고객들의 옷 제작 의뢰 바로보기',
  },
};
const MainPage = () => {
  const navigate = useNavigate();

  // TODO: 유저의 타입 불러오기
  useEffect(() => {
    axios
      .get(`https://api.odcloud.kr/api/15087016/v1/uddi:9198b30d-4362-4791-818e-b5cbda2fdd5e`, {
        headers: {
          Authorization:
            'Infuser exyhdAyKQcM4ioF37fW8/tsEIYtgjB7fgKD6sT/CqfXHphoZ2Uw6iFOX7zWjwcO3gytOzROEbTSuvAGtQVynwg==',
        },
        params: {
          key: 'exyhdAyKQcM4ioF37fW8/tsEIYtgjB7fgKD6sT/CqfXHphoZ2Uw6iFOX7zWjwcO3gytOzROEbTSuvAGtQVynwg==', // 인증 키를 쿼리 파라미터로 추가
        },
      })
      .then((r) => console.log(r));
  }, []);

  return (
    <>
      <MainPageHeader />
      <img src={main} alt='main' style={{ width: '100%' }} />
      <CircleMenu title='반려견 옷제작 바로 검색하기' />
      <img onClick={() => navigate('/guide')} src={first} alt='first' style={{ width: '92%', marginBottom: '20px' }} />
      <Horizon />
      <ReviewContainer />
      <PopularDesign />
      <LovingPeople />
      <Margin height='100' />

      <NavigationBar userType='designer' />
    </>
  );
};

export default MainPage;
