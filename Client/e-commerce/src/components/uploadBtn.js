import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

const UploadBtn = () => {
    const history = useHistory();
    return (
        
            <Button onClick={ () => history.push('/upload')}>Upload New Product</Button>
        
    )
}

export default UploadBtn

const Button = styled.button`
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 4px;
    position: absolute;
    left: 20px;
    margin-top: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    background-color: ${ props => props.theme.colors.blue};
    color: ${ props => props.theme.colors.white };
    &:hover{
        opacity: 0.9;
    }
`