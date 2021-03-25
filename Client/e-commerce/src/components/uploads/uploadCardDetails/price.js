import React from 'react';


import { DetailsHeader, DetailsContainer, DetailText } from '../uploadCard';

const UploadPrice = ({ price }) => {
    return (
        <DetailsContainer>
            <DetailsHeader> Price : </DetailsHeader> <DetailText> {price} GEL </DetailText>  
        </DetailsContainer>
    )
}

export default UploadPrice



