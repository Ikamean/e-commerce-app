import React from 'react';
import styled from 'styled-components';


import UploadCategory from './uploadCardDetails/category';

import UploadPrice from './uploadCardDetails/price';
import UploadImages from './uploadCardDetails/image';
import CreationDate from './uploadCardDetails/creationDate';
import Contact from './uploadCardDetails/ContactUser/contact';
import DeleteBtn from './uploadCardDetails/deletebtn';

import { HorizontalAlign } from '../uploadForm/uploadForm';


const UploadCard = ({ content }) => {
        let { category, creationDate, image, price, _id } = content;
        

        if(!_id){
            _id = content.id;
        }
        
        

    return (
        <UploadCardConteiner>
            
            <ContainerGap>

                <DeleteBtn id={_id} user={content}/> 
                
                <UploadCategory category={category} />
                

                <HorizontalAlign>
                    <UploadPrice price={price} />
                    <CreationDate date={creationDate} />
                </HorizontalAlign>

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