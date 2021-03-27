import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const UploadBtn = () => {
    const history = useHistory();

    const { t } = useTranslation();

    return (
        
            <Button onClick={ () => history.push('/upload')}> {t('New Upload')} </Button>
        
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