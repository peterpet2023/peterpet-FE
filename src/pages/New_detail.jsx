/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */
import { styled } from 'styled-components';
import Button from '../components/Button/Button';
import Horizon from '../components/Hotrizon/Horizon';
import Header from '../components/Header/Header';
import Typo from '../components/Typo/Typo';
import Margin from '../components/Margin/Margin';


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
`
const HboxWrapper= styled.div`
    display: flex;
    flex-direction:column;
    width:90%;
    margin-bottom: 60px;
`

const New_detail = () => {
    return (
      <Wrapper>
        <Header titleSize='small' title='회원가입' left='back' />

        <Textbox>
            <Typo size= "1.8em" weight="bold" > 세부사항 입력</Typo>
            <Typo size= "0.9em" weight="bold" color= 'gray'> <br/>이름과 8자리 생년월일을 작성해주세요. </Typo>
        </Textbox>

        <HboxWrapper>
            <Horizonbox>
                <Typo>홍길동</Typo> 
                <Horizon/>
                <Margin height= '10'/>
                <Typo color= 'gray' size ='0.7rem'>sdf</Typo>
            </Horizonbox>
            <Horizonbox>
                <Typo>0000.00.00</Typo> 
                <Horizon/>
                <Margin height= '10'/>
                <Typo color= 'gray' size ='0.7rem'>sdf</Typo>
            </Horizonbox>
        </HboxWrapper>

        <Buttonbox>
            <Button>
                <Typo weight = 'bold' color= "${({ theme }) => theme.colors.white">회원가입</Typo>
            </Button>
        </Buttonbox>
             
    
     </Wrapper>
    );
  };
  
  export default New_detail ;
