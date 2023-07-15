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
`

const RowBox= styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
  justify-content: center;
`
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //width: 360px;
  //justify-items: center;
  align-items: center;


`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  color: ${({ theme }) => theme.colors.smog};

  border-radius: 1px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  height: 80px;
  margin: 20px;

`

const Text= styled(Typo)`
    line-height: 25px;

`

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 98%;
`
const ImgWrapper= styled.div`
    display: flex;
    flex-direction: row;
    width:90%;
`


const DesignUpload2 = () => {
    const navigate = useNavigate();
  return (
    <ImgWrapper >
        <img onClick={() => navigate('/DesignUpload3')} src="images/디자인등록2.png" alt="DesignUpload2 img"/>
    </ImgWrapper>
  );
};

export default DesignUpload2;
