import { styled } from 'styled-components';
import Typo from '../../components/Typo/Typo';
import Margin from '../../components/Margin/Margin';
import HeadLine from '../../components/HeadLine/HeadLine';
import { useNavigate } from 'react-router-dom';

const CircleButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
`;

const CircleButton = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 75px;
  border: none;
  background-color: ${({ theme }) => theme.colors.brown};

  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 32px;
    margin-top: 5px;
  }
`;

const CircleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

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

export default function CircleMenu({ title }) {
  const navigate = useNavigate();

  return (
    <>
      <HeadLine firstLine={title} fontType='medium' />
      <CircleButtonContainer>
        {pets.map(({ icon, name, id }) => (
          <CircleButtonWrapper onClick={() => navigate(`/design/${id}`)}>
            <CircleButton>
              <Typo>{icon}</Typo>
            </CircleButton>
            <Margin height='8' />
            <Typo fontType='small'>{name}</Typo>
          </CircleButtonWrapper>
        ))}
      </CircleButtonContainer>
    </>
  );
}
