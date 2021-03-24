import React from 'react';

import { Label, HorizontalAlign, Input } from './uploadForm';

import { ImFacebook2 } from 'react-icons/im'


const FacebookField = ({ facebook, setFacebook }) => {
    return (
        <Label htmlFor='facebook'> <HorizontalAlign> <ImFacebook2 />  Facebook </HorizontalAlign> 
                <Input placeholder='Facebook Url' value={facebook} type='text' id='facebook' 
                onChange={(e)=>setFacebook(e.target.value)}  required />
        </Label>
    )
}

export default FacebookField
