import React from 'react';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';

const Uploads = ({ uploads }) => {
    const { t } = useTranslation();


    return (
        <UploadsContainer>
           {` ${t('Uploads')} :  ${uploads.length} `}
        </UploadsContainer>
    )
}

export default Uploads

const UploadsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 0.13em;
    color: ${ props => props.theme.colors.black };
    opacity: 76%;
    margin-right: 13px;
`
