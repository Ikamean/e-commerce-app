import React, { useState } from 'react';

import { DetailsHeader, DetailsContainer, DetailText } from '../uploadCard';

const UploadDetails = ({ text }) => {
    const [ open, setOpen ] = useState(false)

    return (
        <DetailsContainer  details='details' onClick={()=>setOpen(!open)}>
            <DetailsHeader details='details'  >
                Product Details
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
