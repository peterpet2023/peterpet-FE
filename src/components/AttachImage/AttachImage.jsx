import { styled } from 'styled-components';
import image from '../../assets/Icons/AttachImage/image.svg';
import Typo from '../Typo/Typo';

const ImageBox = styled.div`
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function AttachImage({ count, onClick }) {
  return (
    <ImageBox onClick={onClick}>
      <img src={image} alt='imageimg' />
      <Typo fontType='small' color='darkGray'>
        {count}/3
      </Typo>
    </ImageBox>
  );
}
