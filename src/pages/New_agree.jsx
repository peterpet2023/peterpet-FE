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
  width: 100%;
`;


const Buttonbox = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    border: none;
    margin:10px;

`

const Textbox = styled.div`
    display: flex;
    flex-direction:column;
    width: 90%;
    height: 100px;
    margin-top: 80px;
    margin-bottom: 30px;
`
const Main = styled.div`
    display: flex;
    flex-direction:column;
    width: 90%;
    height: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
`
const AgreeBox= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    //width: 90%;
`

//<Icon src={home} alt='home' onClick={() => navigate('/')} />

const New_agree = () => {
    return (
      <Wrapper>
        <Header titleSize='large' left='cancel' />

        <Textbox> 
            <Typo size= "1.8em" weight="bold"> 서비스 이용을 위해 이용약관<br/> 동의가 필요합니다.</Typo>
        </Textbox>

        <Main>
            <AgreeBox>
                <Typo size='1.2rem' weight= 'bold'>전체동의</Typo>
                <Typo>dkss</Typo>
            </AgreeBox>

            
            <Horizon/>
    

            <AgreeBox>
                <Typo size='0.8rem' weight= 'bold' color= 'gray'>이용약관 및 개인정보취급방침 (필수)</Typo>
                <Typo>dkss</Typo>
            </AgreeBox>
            <AgreeBox>
                <Typo size='0.8rem' weight= 'bold' color= 'gray'>위치기반서비스 이용약관 (필수)</Typo>
                <Typo>dkss</Typo>
            </AgreeBox>
            <AgreeBox>
                <Typo size='0.8rem' weight= 'bold' color= 'gray'>만 14세 이상 확인 (필수)</Typo>
                <Typo>dkss</Typo>
            </AgreeBox>
            <AgreeBox>
                <Typo size='0.8rem' weight= 'bold' color= 'gray'>마케팅 활용 동의 (선택)</Typo>
                <Typo>dkss</Typo>
            </AgreeBox>
        </Main>
        
        <Buttonbox>
            <Button>
                <Typo weight = 'bold' color= "${({ theme }) => theme.colors.white">계속하기</Typo>
            </Button>
        </Buttonbox>
             
    
     </Wrapper>
    );
  };
  
  export default New_agree ;
