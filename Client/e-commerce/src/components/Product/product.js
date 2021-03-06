import React from 'react';
import styled from 'styled-components';


import ProductMedia from './productMedia';
import ProductCategory from './productCategory';
import ProductDetails from './productDetails';
import ProductAuthor from './productAuthor';

const Product = ({ product }) => {

    // 
    return (
        <ProductContainer>
                <ProductCategory category={product.category} />

                
                <ProductContentHorizontalBox>
                    <ProductMedia media={product.image} />
                    <ProductDetails product={product} />
                </ProductContentHorizontalBox>

                <ProductAuthor author={product} />
        </ProductContainer>
    )
}

export default Product

const ProductContainer = styled.div`
    position: relative;
    @media(min-width: 650px){
        display: flex;
        flex-direction: column;
    }
    
`

export const Horizontal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    padding-top: 2px;
    
`
const ProductContentHorizontalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
    @media(min-width: 850px){
        flex-direction: row;
    }
`