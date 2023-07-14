import { styled } from 'styled-components';
import Margin from '../../components/Margin/Margin';
import Typo from '../../components/Typo/Typo';
import { Navigate, useNavigate } from 'react-router-dom';

const Photo = styled.img`
  width: 170px;
  height: 170px;
`;

const Wrapper = styled.div`
  padding: 6px;
`;

export default function PhotoWrapper({ img, text, id }) {
  const navigate = useNavigate();

  return (
    <Wrapper id={id} onClick={() => navigate(`/detail/${id}`)}>
      <Photo src={img} />
      <Margin height='10' />
      <Typo fontType='small'>{text}</Typo>
    </Wrapper>
  );
}
