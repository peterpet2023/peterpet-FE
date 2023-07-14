/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */

import AttachImage from '../components/AttachImage/AttachImage';
import Button from '../components/Button/Button';
import HeadLine from '../components/HeadLine/HeadLine';
import Header from '../components/Header/Header';
import Horizon from '../components/Hotrizon/Horizon';
import Input from '../components/Input/Input';
import MoreButton from '../components/MoreButton/MoreButton';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import RoundButton from '../components/RoundButton/RoundButton';

const MainPage = () => {
  return (
    <>
      <div>메인 페이지 입니다.</div>
      <Button color='brown'>버튼</Button>

      <Horizon />

      <Header underLine titleSize='large' title='요청사항 반영하기' left='back' right='home' />
      <HeadLine
        fontType='large'
        emoji='🔴🟡'
        firstLine='실시간으로 가장'
        secondLine='인기있는 디자인 랭킹'
        subTitle='냠냠냠'
      />
      <MoreButton>전체보기</MoreButton>

      <AttachImage count={2} />
      <AttachImage count={2} />
      <RoundButton>hi</RoundButton>
      <RoundButton size='small'>hi</RoundButton>
      <Input placeholder='hihi' />

      <NavigationBar />
    </>
  );
};

export default MainPage;
