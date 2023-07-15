import { styled } from 'styled-components';
import logo from './Peterpet.jpg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Back = styled.div`
  background-color: ${({ theme }) => theme.colors.brown};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LogoPlaying() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 페이지를 넘기는 코드 작성
      navigate('/welcome');
    }, 1500); // 1초 후에 실행됨 (1000 밀리초 = 1초)

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
    };
  }, []);

  return (
    <Back>
      <img src={logo} height='100' />
    </Back>
  );
}
