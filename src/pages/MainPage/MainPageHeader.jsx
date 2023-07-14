import { styled } from 'styled-components';
import logo from '../../assets/Icons/logo.svg';
import Typo from '../../components/Typo/Typo';
import user from '../../assets/Icons/user.svg';
import { useState } from 'react';

const Wrapper = styled.div`
  height: 90px;
  top: 0;
  width: 450px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
`;

const UnderLineTypo = styled(Typo)`
  padding: 10px 12px;
  text-align: center;

  ${(props) => props.value && `border-bottom: 2px solid ` + props.theme.colors.black};
  cursor: pointer;
`;

export default function MainPageHeader() {
  const [toggleMenu, setToggleMenu] = useState({
    recommend: true,
    my: false,
  });

  const handleMenu = (e) => {
    const { id } = e.target;

    const arr = {
      recommend: false,
      my: false,
    };

    setToggleMenu({
      ...arr,
      [id]: true,
    });
  };

  return (
    <Wrapper>
      <img src={logo} alt='logo' style={{ height: '30px', padding: '15px 0 0 15px' }} />
      <TabWrapper>
        <MenuWrapper>
          <UnderLineTypo onClick={handleMenu} value={toggleMenu.recommend} id='recommend' width='46px'>
            추천
          </UnderLineTypo>
          <UnderLineTypo onClick={handleMenu} value={toggleMenu.my} id='my' width='46px'>
            내 견적
          </UnderLineTypo>
        </MenuWrapper>
        <div style={{ paddingRight: '20px', cursor: 'pointer' }}>
          <img src={user} alt='user' />
        </div>
      </TabWrapper>
    </Wrapper>
  );
}
