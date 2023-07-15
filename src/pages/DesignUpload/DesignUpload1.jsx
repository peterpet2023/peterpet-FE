/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import AttachImage from '../../components/AttachImage/AttachImage';
import Button from '../../components/Button/Button';
import HeadLine from '../../components/HeadLine/HeadLine';
import Header from '../../components/Header/Header';
import Horizon from '../../components/Hotrizon/Horizon';
import Input from '../../components/Input/Input';
import MoreButton from '../../components/MoreButton/MoreButton';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import RoundButton from '../../components/RoundButton/RoundButton';
import Margin from '../../components/Margin/Margin';
import Typo from '../../components/Typo/Typo';
import { useState } from 'react';

const pets = [
  {
    icon: '🐕‍🦺',
    name: '소형견',
    id: 'smallDog',
  },
  {
    icon: '🐩',
    name: '중형견',
    id: 'mediumDog',
  },
  {
    icon: '🐕',
    name: '대형견',
    id: 'largeDog',
  },
  {
    icon: '🐈‍⬛',
    name: '고양이',
    id: 'cat',
  },
];

const Box = styled.div`
  width: 165px;
  height: 110px;
  background-color: ${(props) => (props.on === true ? props.theme.colors.darkGray : props.theme.colors.gray)};
  border-radius: 7px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContainer = styled.div`
  width: 370px;
  height: 250px;
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const DesignUpload1 = () => {
  const navigate = useNavigate();

  const [select, setSelect] = useState({
    smallDog: false,
    mediumDog: false,
    largeDog: false,
    cat: false,
  });

  return (
    <>
      <Header titleSize='medium' left='back' right='home' title='디자인 선택하기' underLine />
      <Margin height='20' />
      <ProgressBar percent='0' />
      <HeadLine fontType='large' firstLine='업로드할 디자인의' secondLine='카테고리를 선택해 주세요.' />
      <Margin height='60' />

      <BoxContainer>
        {pets.map(({ name, icon, id }) => (
          <Box
            on={select[id]}
            id={id}
            onClick={(e) => {
              const { id } = e.currentTarget;

              setSelect({
                smallDog: false,
                mediumDog: false,
                largeDog: false,
                cat: false,
                [id]: true,
              });
            }}
          >
            <IconWrapper>
              <Typo size='36px'>{icon}</Typo>
              <Typo fontType='medium'>{name}</Typo>
            </IconWrapper>
          </Box>
        ))}
      </BoxContainer>

      <Margin height='70' />

      <Button color='black' onClick={() => navigate('/DesignUpload2')}>
        다음
      </Button>
    </>
  );
};

export default DesignUpload1;
