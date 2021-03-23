import React from 'react';
import styled from 'styled-components';

import { Label, HorizontalAlign } from './uploadForm';
import { ImPriceTag } from 'react-icons/im';

const PriceField = ({price, setPrice}) => {
    return (
        <Label htmlFor='price'> <HorizontalAlign>< ImPriceTag /> Price </HorizontalAlign> 
                <PriceInput placeholder='GEL/USD/EUR' value={price} type='text' id='price' onChange={(e)=>setPrice(e.target.value)} required/>
        </Label>
    )
}

export default PriceField

const PriceInput = styled.input`
    border: none;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 10px;
`