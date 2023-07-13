/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */
import { styled } from 'styled-components';
import Button from '../components/Button/Button';
import Horizon from '../components/Hotrizon/Horizon';
import Header from '../components/Header/Header';
import Typo from '../components/Typo/Typo';


const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

const main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`
const button = styled.div`
    
`

const S_account = () => {
    return (
      <>
        <Header underLine titleSize='large' left='cancel' />

        <main>
        
        <Typo>나는 어떤 사람인가요?</Typo>
        <Typo>어떤 계정으로 사용할지 선택해주세요 </Typo>
        </main>

        <Button>
            <Typo>저는 고객입니다.</Typo>
        </Button>
        
        <Button>
            <Typo>저는 디자이너입니다.</Typo>
        </Button>

        <Button>
            <Typo>저는 재단사입니다.</Typo>
        </Button>
     </>
    );
  };
  
  export default S_account ;
