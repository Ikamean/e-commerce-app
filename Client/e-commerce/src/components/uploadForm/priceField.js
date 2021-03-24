import React from 'react';


import { Label, HorizontalAlign, Input } from './uploadForm';
import { ImPriceTag } from 'react-icons/im';

const PriceField = ({price, setPrice}) => {
    return (
        <Label htmlFor='price'> <HorizontalAlign>< ImPriceTag /> Price </HorizontalAlign> 
                <Input placeholder='GEL' value={price} type='text' id='price' 
                onChange={(e)=>setPrice(e.target.value)} required />
        </Label>
    )
}

export default PriceField

