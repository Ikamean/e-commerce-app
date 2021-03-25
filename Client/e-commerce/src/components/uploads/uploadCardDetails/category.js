import React from 'react';

import { DetailsContainer, DetailText } from '../uploadCard';

const UploadCategory = ({ category }) => {
    return (
        <DetailsContainer category='category'>
            <DetailText> { category } </DetailText>
        </DetailsContainer>
    )
}

export default UploadCategory
