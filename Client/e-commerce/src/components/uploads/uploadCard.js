import React from 'react';
import styled from 'styled-components';


import UploadCategory from './uploadCardDetails/category';
import UploadImages from './uploadCardDetails/image';
import ContentTopSection from './uploadCardDetails/contentTopSection';

import CreationDate from '../Product/productDate';
import ProductPrice from '../Product/productPrice';
import { Horizontal } from '../Product/product';


const UploadCard = ({ content }) => {
        let { category, creationDate, image, price, _id } = content;
        

        if(!_id){
            _id = content.id;
        }
        
        

    return (
        <UploadCardConteiner>
            
            <ContainerGap>

                <ContentTopSection id={_id} user={content}/> 
                
                <UploadCategory category={category} />
                

                <Horizontal>
                    <ProductPrice price={price} />
                    <CreationDate date={creationDate} />
                </Horizontal>

                <UploadImages images={image} contentId = {_id} />

            </ContainerGap>

                
            

        </UploadCardConteiner>
    )
}

export default UploadCard;

const UploadCardConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 450px;
    height: 450px;
    min-height: 450px;
    width: 200px;
    gap: 50px;
    background-color: ${ props => props.theme.colors.white };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    position: relative;
    `
const ContainerGap = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
`

export const DetailsContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: ${ props => props.category && 'center' };
        border: ${ props => props.category && `2px solid ${props.theme.colors.blue}` };
        gap: 5px;
        background-color: ${ props => props.theme.colors.white };
        border-radius: 5px;
        padding: 6px;
`
export const DetailsHeader = styled.div`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1rem;
    color: ${ props => props.theme.colors.black };
    display: flex;
    align-items: flex-start;
    justify-content:  flex-start;
    border:none;
    padding: 5px;
    &:hover, &:active, &:focus{
        color: ${ props => props.theme.colors.black };
    };
    
    
`

export const DetailText = styled.div`
    font-weight: 600;
    font-size: 12px;
    color: ${ props => props.theme.colors.black };
    letter-spacing: 1px;
    line-height: 1.5rem;
    max-width: 35ch;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
`