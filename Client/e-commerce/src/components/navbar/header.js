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
            Gear Market
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.h1`
    height: 28px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1px;
    color: ${ props=> props.theme.colors.blue };
    opacity: 1;
    cursor: pointer;
    &:hover, :focus{
        opacity: 0.8;
        font-weight: 600;
    }

    @media(min-width: 650px){
        font-size: 24px;
    }
    @media(max-width: 360px){
        font-size: 14px;
        
    }

`
