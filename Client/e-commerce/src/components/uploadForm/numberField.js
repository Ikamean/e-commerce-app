import React from 'react';

import { Label, HorizontalAlign, Input } from './uploadForm';

import { ImMobile } from 'react-icons/im';


const NumberField = ({ number, setNumber }) => {
    return (
        <Label htmlFor='facebook'> <HorizontalAlign> <ImMobile /> Number  </HorizontalAlign>  
                <Input placeholder='Your Number' value={number} type='text' id='number' 
                onChange={(e)=>setNumber(e.target.value)}  required />
        </Label>
    )
}

export default NumberField
