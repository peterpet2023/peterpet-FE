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
const Horizonbox = styled.div`
    display: flex;
    flex-direction:column;
    width: 90%;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 180px;
`

const Login_password = () => {
    return (
      <Wrapper>
        <Header titleSize='large' left='cancel' />

        <Textbox>
            <Typo size= "1.8em" weight="bold" >비밀번호 입력</Typo>
            <Typo size= "0.9em" weight="bold" color= 'gray'> <br/>반갑습니다 고객님 :) </Typo>
        </Textbox>

        <Horizonbox>
            <Typo color= 'gray'>input email_data</Typo> 
            <Horizon/>
            <Typo color= 'gray' size ='0.7rem'>비밀번호 보기</Typo> 
        </Horizonbox>

        <Buttonbox>
            <Button>
                <Typo weight = 'bold' color= "${({ theme }) => theme.colors.white">로그인</Typo>
            </Button>
        </Buttonbox>
             
    
     </Wrapper>
    );
  };
  
  export default Login_password ;
