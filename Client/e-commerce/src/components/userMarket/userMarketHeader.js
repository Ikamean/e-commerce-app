import React from 'react';
import styled from 'styled-components';

import { GiShop } from 'react-icons/gi';

const MarketHeader = ({ name }) => {
    const firstName = name.split(' ')[0];

    return (
        <MarketHeaderContainer>
            <ShopIcon> <GiShop /> </ShopIcon>  {firstName}'s Market
        </MarketHeaderContainer>
    )
}

export default MarketHeader

const MarketHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 20px;
    font-weight: 600;
    gap: 20px;
    background-color: ${ props => props.theme.colors.black};
    color: ${ props => props.theme.colors.white };
    padding: 2rem;
    letter-spacing: 3px;
    @media(min-width: 650px){
        font-size: 28px;
    }
`

const ShopIcon = styled.span`
    color: ${ props => props.theme.colors.white };
    font-size: 24px;
    @media(min-width: 650px){
        font-size: 32px;
    }
`