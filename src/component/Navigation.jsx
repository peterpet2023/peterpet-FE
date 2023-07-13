import React from 'react';
import { styled } from 'styled-components';

import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";




const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   /* padding-top: 1x;
    padding-bottom: 1px;*/
    background-color:white;
    border: none;


`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left :10px;
  color:white;
`;

const Name = styled.h1`
    font-size: 10px;
    align-items: center;
    margin-left: 5px;
`
const Button = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 9px;
    margin-bottom: 9px;
    margin-right: 9px;
    border-radius: 5px;
`


const Navigation = () => {
    return (
        <Wrapper>
            <Title> 
                <GrClose color="black" size="20px"/>
                <Name>Album</Name>
            </Title>
    
        </Wrapper>
    );
};

export default Navigation;
