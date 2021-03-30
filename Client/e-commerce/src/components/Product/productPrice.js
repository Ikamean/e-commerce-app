import React from 'react';
import styled from 'styled-components';

import { ImPriceTag } from 'react-icons/im';
import { Horizontal } from './product';

const ProductPrice = ({ price }) => {
    return (
        <HorizontalBox>
            <PriceIcon>
                <ImPriceTag />
            </PriceIcon>
            {price} GEL
        </HorizontalBox>
    )
}

export default ProductPrice

export const HorizontalBox = styled.div`
    display: flex;
    gap: 5px;
`
const PriceIcon = styled.span`
    display: flex;
    align-items: center;
    color: ${ props => props.theme.colors.blue } ;
    margin-right: 5px;
`

