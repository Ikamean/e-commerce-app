import React from 'react';
import styled from 'styled-components';

import { Label, HorizontalAlign } from './uploadForm';

import { BsCardImage  } from 'react-icons/bs';

const SelectImgField = ({inputChange, handleFileSelect}) => {
    return (
        
        <Label htmlFor='select' upload='upload'> <HorizontalAlign> <BsCardImage /> Images  </HorizontalAlign>      
            <input id='select'  type='file'  value={inputChange} onChange={(e)=> handleFileSelect(e) } required/>
        </Label>
       
    )
}

export default SelectImgField

