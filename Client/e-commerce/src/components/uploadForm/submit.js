import React from 'react';
import styled from 'styled-components';

import { Label } from './uploadForm';

import {  BsCloudUpload } from 'react-icons/bs';

const Submit = () => {
    return (
        <Label  htmlFor='submit' submit='submit'> 
                <Button  id='submit' type='submit'>  <BsCloudUpload /> </Button>
        </Label>
    )
}

export default Submit

const Button = styled.button`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 20px;
    color:  ${ props => props.theme.colors.blue };
    opacity: 1;



    &:hover{
        color: ${ props => props.theme.colors.white };
    }
    
`