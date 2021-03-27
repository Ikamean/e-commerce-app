import React, { useState } from 'react';

import { DetailsHeader, DetailsContainer, DetailText } from '../uploadCard';

import { useTranslation } from 'react-i18next';

const UploadDetails = ({ text }) => {
    const [ open, setOpen ] = useState(false);
    const { t } = useTranslation();

    return (
        <DetailsContainer  details='details' onClick={()=>setOpen(!open)}>
            <DetailsHeader details='details'  >
                {t('Product Details')}
            </DetailsHeader>

            {
                open &&
                <DetailText details='details'>
                {text}
                </DetailText>
            }
            
        </DetailsContainer>
    )
}

export default UploadDetails
