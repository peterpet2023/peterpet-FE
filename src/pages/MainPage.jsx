/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */

import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

const Sj = styled.div`
  display: flex;
  size: 20px;
`;

const MainPage = () => {
  return <Wrapper>
    <Sj>HI</Sj>
    <div>HI</div>
    <div>HI</div>
    </Wrapper>;
};

export default MainPage;
