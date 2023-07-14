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
import FileInput from '../../components/FileInput';
import Toast from '../../components/Toast/Toast';

const RoundBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 400px;
  color: ${({ theme }) => theme.colors.smog};

  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  height: 250px;
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
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 85px;
  color: ${({ theme }) => theme.colors.smog};
  margin: 4px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  height: 85px;
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
const Reception2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header underLine titleSize='medium' title='품목 선택하기' left='back' right='cancel' />

      <Margin height='20' />

      <ProgressBar percent='50' />

      <HeadLine fontType='large' firstLine='맡기실 디자인에 리폼할' secondLine='옷 파일을 업로드 해주세요.' />

      <Margin height='20' />

      <RoundBox>
        <Margin height='15' />
        <TextBox>
          <Text weight='bold'>
            전체 사진에는 상품의 전체적인 앞 / 뒤 사진을 <br />
            상세사진에는 봉제 상세 부위를 <br />
            자세하게 촬영하여 첨부해 주세요.
          </Text>
        </TextBox>

        <BoxWrapper>
          <Box>
            <ImgBox />
            <Typo size='small' color='gray'>
              전체{' '}
            </Typo>
          </Box>

          <Box>
            <ImgBox />
            <Typo size='small' color='gray'>
              뒷면{' '}
            </Typo>
          </Box>

          <Box>
            <ImgBox />
            <Typo size='small' color='gray'>
              안쪽{' '}
            </Typo>
          </Box>

          <Box>
            <ImgBox />
            <Typo size='small' color='gray'>
              봉제 부위{' '}
            </Typo>
          </Box>
        </BoxWrapper>
      </RoundBox>

      <Margin height='15' />
      <Wrapper>
        <UploadWrapper>
          <Typo>전체 사진 </Typo>
          <Margin height='10' />
          <FileInput
            onClick={() =>
              setTimeout(() => {
                Toast('첨부가 완료되었습니다.');
              }, 5000)
            }
            count={1}
          />
        </UploadWrapper>

        {/* <UploadWrapper>
          <Typo>상세사진 </Typo>
          <Margin height='10' />
          <AttachImage count={0} />
        </UploadWrapper> */}
      </Wrapper>

      <Horizon />
      <ButtonWrapper>
        <Button color='black' onClick={() => navigate('/Reception3')}>
          <Typo weight='bold' color='white'>
            다음
          </Typo>
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default Reception2;
