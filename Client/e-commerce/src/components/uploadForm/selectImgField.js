import React from 'react';
import styled from 'styled-components';

import { Label, HorizontalAlign } from './uploadForm';

import { BsCardImage  } from 'react-icons/bs';

const SelectImgField = ({ inputChange, handleFileSelect, image }) => {
    return (
        
        <Label image={ image.length } htmlFor='select' upload='upload'> 

        <HorizontalAlign>  <ImagesText image={ image.length }> <BsCardImage /> {image.length} Images  </ImagesText>   </HorizontalAlign> 

        <input id='select'  type='file' name='' value={inputChange} onChange={(e)=> handleFileSelect(e) }  />

        </Label>

    )
}

export default SelectImgField

const ImagesText = styled.div`
    color: ${ props => props.image && props.theme.colors.white };
    display: flex;
    align-items: center;
    gap: 10px;
`