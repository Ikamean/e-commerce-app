import React from 'react';

import { DetailsContainer, DetailText } from '../uploadCard';

import { useTranslation } from 'react-i18next';

const UploadCategory = ({ category }) => {
    const { t } = useTranslation();

    return (
        <DetailsContainer category='category'>
            <DetailText> { t(`Category.${category}`) } </DetailText>
        </DetailsContainer>
    )
}

export default UploadCategory
