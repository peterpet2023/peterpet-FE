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

const RoundBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  color: ${({ theme }) => theme.colors.smog};

  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  height: ${(props) => props.height};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  text-align: center;
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //width: 360px;
  //justify-items: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;

  justify-items: center;
  align-items: center;
  width: 100%;
`;

const Text = styled(Typo)`
  line-height: 25px;
`;
const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 98%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: none;
  margin: 10px;
`;
const Reception3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header underLine titleSize='midium' title='요청사항 입력하기' left='back' right='cancel' />

      <Margin height='20' />

      <ProgressBar percent='80' />

      <HeadLine fontType='large' firstLine='제작 요청사항을 입력해주세요' />

      <Margin height='20' />

      <Wrapper>
        <UploadWrapper>
          <Typo weight='bold'>제작 요청 사항 선택 </Typo>
          <Margin height='5' />
          <Input placeholder='제작 요청사항을 입력해주세요' />
        </UploadWrapper>

        <UploadWrapper>
          <Typo weight='bold'>사이즈 </Typo>
          <Margin height='5' />
          <Input placeholder='제작 요청사항을 선택해주세요' />
        </UploadWrapper>

        <UploadWrapper>
          <RoundBox>
            <Margin height='10' />
            <TextBox>
              <Text weight='bold' color='gray'>
                요청 사항을 적으실 때는 세 가지만 기억해주세요! <br />
                어디가 어때서 어떻게 <br />
              </Text>
              <Margin height='5' />
              <Typo size='small' color='gray'>
                {' '}
                Ex. 옷의 목부분에 레이스를 달아주세요.
              </Typo>
            </TextBox>
          </RoundBox>
          <Margin height='15' />
          <Input height='200px' placeholder='위의 안내에 따라 적어주셔야 자세하고 친절한 상담이 가능합니다.' />
        </UploadWrapper>
      </Wrapper>

      <Horizon />
      <ButtonWrapper>
        <Button color='black' onClick={() => navigate('/reception4')}>
          <Typo weight='bold' color='white'>
            다음
          </Typo>
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default Reception3;
