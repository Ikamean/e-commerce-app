import React from 'react';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import ProductPrice from './productPrice';
import CreationDate from './productDate';


const ProductDetails = ({ product }) => {
    const { t } = useTranslation();

    return (
        
        
        <DetailBox>

                <HorizontalBoxContainer>
                    <ProductPrice price={product.price} />
                    <CreationDate date={product.creationDate} />
                </HorizontalBoxContainer>
                
        <DetailsHeader>
            {t('Product Details')}
        </DetailsHeader>

        <TextBox>
            {product.details}
        </TextBox>

        </DetailBox>
      
    )
}

export default ProductDetails

const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    padding: 1px 1.5rem;
    @media(min-width: 650px){
        justify-content: flex-start;
    }
`
const HorizontalBoxContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
`

const DetailsHeader = styled.h3`
    font-weight: 600;
    font-size: 18px;
    color: ${ props => props.theme.colors.white};
    background-color: ${ props => props.theme.colors.black};
    padding: 5px 0;
    border-radius: 4px;
    width: 100%;
    text-align: center;
`

const TextBox = styled.p`
    width: 100%;
    max-width: 45ch;
    text-align: left;
    
    letter-spacing: 0.5px;
    line-height: 1.6rem;
`
