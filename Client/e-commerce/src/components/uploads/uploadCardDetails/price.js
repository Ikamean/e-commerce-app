import React from 'react';


import { DetailsHeader, DetailsContainer, DetailText } from '../uploadCard';

import { useTranslation } from 'react-i18next';

const UploadPrice = ({ price }) => {
    const { t } = useTranslation();

    return (
        <DetailsContainer>
            <DetailsHeader> {t('Price')} : </DetailsHeader> <DetailText> {price} GEL </DetailText>  
        </DetailsContainer>
    )
}

export default UploadPrice



