/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */
import { styled } from 'styled-components';
import Button from '../components/Button/Button';
import Horizon from '../components/Hotrizon/Horizon';
import Header from '../components/Header/Header';
import Typo from '../components/Typo/Typo';
import { useNavigate } from 'react-router-dom';


const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
 
`;

const Img = styled.img`
 display:flex;
 flex-direction: column;
 content: url("Peterpet.jpg");
 //border-radius: 100%;
 align-items: center;
 justify-items: center;

`;

/* width: 100px;
 margin-right: 20px;*/

// <Header titleSize='large' left='cancel' />

const Logo = () => {
    return (
      <Wrapper>
       <img name='Peterpet' src="Peterpet.jpg" width="120px" height="120px"></img>
       
     </Wrapper>
    );
  };
  
  export default Logo ;
