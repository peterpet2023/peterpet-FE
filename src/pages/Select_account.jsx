/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button/Button';
import Horizon from '../components/Hotrizon/Horizon';
import Header from '../components/Header/Header';
import Typo from '../components/Typo/Typo';
import Toast from '../components/Toast/Toast';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Buttonbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: none;
  margin: 10px;
`;

const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;
  margin-top: 80px;
  margin-bottom: 120px;
`;

const Select_account = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header titleSize='large' left='back' />

      <Textbox>
        <Typo size='1.8em' weight='bold'>
          {' '}
          나는 어떤 사람인가요?
        </Typo>
        <Typo size='0.9em' weight='bold' color='gray'>
          {' '}
          <br />
          어떤 계정으로 사용할지 선택해주세요{' '}
        </Typo>
      </Textbox>

      <Buttonbox>
        <Button
          onClick={() => {
            Toast('고객님 환영합니다!');
            navigate('/main');
          }}
          color='brown'
        >
          <Typo weight='bold' color='white'>
            저는 고객입니다.
          </Typo>
        </Button>
      </Buttonbox>

      <Buttonbox>
        <Button
          onClick={() => {
            Toast('디자이너님 환영합니다!');
            navigate('/main');
          }}
          color='brown'
        >
          <Typo weight='bold' color='white'>
            저는 디자이너입니다.
          </Typo>
        </Button>
      </Buttonbox>

      <Buttonbox>
        <Button
          onClick={() => {
            Toast('재단사님 환영합니다!');
            navigate('/main');
          }}
          color='brown'
        >
          <Typo weight='bold' color='white'>
            저는 재단사입니다.
          </Typo>
        </Button>
      </Buttonbox>
    </Wrapper>
  );
};

export default Select_account;
