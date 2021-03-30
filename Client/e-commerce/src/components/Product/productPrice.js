import React from 'react';
import styled from 'styled-components';

import { ImPriceTag } from 'react-icons/im';
import { Horizontal } from './product';

const ProductPrice = ({ price }) => {
    return (
        <Horizontal>
            <PriceIcon>
                <ImPriceTag />
            </PriceIcon>
            {price} GEL
        </Horizontal>
    )
}

export default ProductPrice


const PriceIcon = styled.span`
    display: flex;
    align-items: center;
    color: ${ props => props.theme.colors.blue } ;
    margin-right: 5px;
`