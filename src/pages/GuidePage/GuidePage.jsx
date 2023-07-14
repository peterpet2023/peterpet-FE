import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Margin from '../../components/Margin/Margin';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import consumerGuide from './consumerGuide.svg';

export default function GuidePage() {
  const navigate = useNavigate();

  return (
    <>
      <Header left='back' right='home' underLine title='이용 가이드' titleSize='medium' />
      <img src={consumerGuide} style={{ width: '100%' }} />
      <Button color='black' onClick={() => navigate('/main')}>
        확인 완료
      </Button>
      <Margin height='120' />
      <NavigationBar />
    </>
  );
}
