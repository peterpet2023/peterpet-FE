import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const BackGround = styled.div`
  width: 500px;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Layout = () => {
  return (
    <BackGround>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </BackGround>
  );
};

export default Layout;
