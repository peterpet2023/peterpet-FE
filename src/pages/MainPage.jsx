/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */

import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Horizon from '../components/Hotrizon/Horizon';

const MainPage = () => {
  return (
    <>
      <div>메인 페이지 입니다.</div>
      <Button>hi</Button>
      <div>hi</div>
      <Horizon />
      <div>hi</div>
      <Header underLine titleSize='large' title='요청사항 반영하기' left='back' right='home' />
    </>
  );
};

export default MainPage;
