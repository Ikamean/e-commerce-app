import React from 'react';
import styled from 'styled-components';

import UploadCard from './uploadCard';

import ScrollTop from '../ScrollTop/scroll';

const Uploads = ({uploads}) => {
    
    
    return (
        <ProductConteiner>
            <UploadsContainer>
                {
                    uploads.map(
                        (content, index) => <UploadCard key={index} content={content} />
                    )
                }
            </UploadsContainer>
            <ScrollTop />
        </ProductConteiner>
    )
}

export default Uploads
const ProductConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: ${ props => props.theme.colors.white };
`

const UploadsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
    gap: 150px;
    margin-bottom: 150px;
    margin-top: 50px;
    background-color: ${ props => props.theme.colors.white };
    @media( min-width: 850px){
        display: grid;
        grid-template-columns: 1fr 1fr  ;
    };
    @media( min-width: 1024px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    };
    @media( min-width: 1600px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`