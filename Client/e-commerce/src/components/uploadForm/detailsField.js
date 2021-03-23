import React from 'react';
import styled from 'styled-components';

import { Label } from './uploadForm';

const DetailsField = ({textAreaInput, setTextAreaInput}) => {
    return (
        <Label htmlFor='textArea'>Details
                <TextArea placeholder='Provide Item details' value={textAreaInput} onChange={(e)=>setTextAreaInput(e.target.value)} id='textArea' required/>
            </Label>
    )
}

export default DetailsField

const TextArea = styled.textarea`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 1rem 1.3rem;
    max-width: 25ch;
    width: 25ch;
    min-width: 25ch;
    height: 100px;
    max-height: 100px;
    min-height: 100px;
    color: ${ props => props.theme.colors.black };
    line-height: 1rem;
    letter-spacing: 0.05em;

`