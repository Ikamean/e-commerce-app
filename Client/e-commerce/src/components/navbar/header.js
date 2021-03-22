import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';



const Header = () => {
    const history = useHistory();
    

    const handleClick = () => {
        history.push('/');
    }

    return (
        <HeaderContainer onClick={ () => handleClick() } onFocus={()=>handleClick()}>
            Extreme Shop
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.h1`
    height: 28px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1px;
    color: ${ props=> props.theme.colors.black };
    opacity: 70%;
    cursor: pointer;
    &:hover, :focus{
        opacity: 0.8;
        font-weight: 500;
    }

    @media(min-width: 650px){
        font-size: 24px;
    }

`
