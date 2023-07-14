import Typo from '../Typo/Typo';
import { styled } from 'styled-components';
import arrow from '../../assets/Icons/Header/back.svg';
import { useNavigate } from 'react-router-dom';

const MoreButtonWrapper = styled.div`
  cursor: pointer;
  height: 12px;
  ${({ theme }) => theme.font.small}
  padding: 8px;
  display: flex;
  gap: 6px;
  align-items: center;

  > p {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

// TODO: 특정 페이지로 연결
export default function MoreButton({ onClick, children }) {
  const navigate = useNavigate();

  return (
    <MoreButtonWrapper onClick={() => navigate('/full-view')}>
      <Typo fontType='small'>{children}</Typo>
      <img
        src={arrow}
        style={{
          transform: 'rotate(180deg)',
          height: '8px',
          filter: 'invert(67%) sepia(0%) saturate(152%) hue-rotate(205deg) brightness(96%) contrast(91%)',
        }}
        alt='arrow'
      />
    </MoreButtonWrapper>
  );
}
