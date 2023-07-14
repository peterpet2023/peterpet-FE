/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */
import { styled } from 'styled-components';

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
  flex-direction: row;
  justify-items: center;
  width: 360px;
  color: ${({ theme }) => theme.colors.smog};
  padding: 16px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;
  height: 200px;

`
const TextBox= styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  text-align: center;
`

const Box= styled(Typo)`
    line-height: 25px;

`

const Reception2 = () => {
  return (
    <>
      <Header underLine titleSize='midium' title='품목 선택하기' left='back' right='cancel' />
      
      <Margin height='20'/>
      
      <ProgressBar percent='50' />
      
      <HeadLine
        fontType='large'
        firstLine='맡기실 디자인에 리폼할'
        secondLine='옷 파일을 업로드 해주세요.'
      />
     
      <Margin height='20'/>

      <RoundBox>
        <TextBox>
            <Box>
                전체 사진에는 상품의 전체적인 앞 / 뒤 사진을 <br/>
                상세사진에는 봉제 상세 부위를 <br/>
                자세하게 촬영하여 첨부해 주세요.
            </Box>
        </TextBox>
      </RoundBox>

      <AttachImage count={2} />
      <AttachImage count={2} />
      <RoundButton>hi</RoundButton>
      <RoundButton size='small'>hi</RoundButton>
    </>
  );
};

export default Reception2;
