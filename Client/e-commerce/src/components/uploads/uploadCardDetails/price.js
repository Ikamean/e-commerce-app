import React from 'react';


import { DetailsContainer, DetailText } from '../uploadCard';



const UploadPrice = ({ price }) => {
    

    return (
        <DetailsContainer>
             <DetailText> {price} GEL </DetailText>  
        </DetailsContainer>
    )
}

export default UploadPrice



