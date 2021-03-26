import React from 'react';
import styled from 'styled-components';


import UploadCategory from './uploadCardDetails/category';
import UploadDetails from './uploadCardDetails/details';
import UploadPrice from './uploadCardDetails/price';
import UploadImages from './uploadCardDetails/image';
import CreationDate from './uploadCardDetails/creationDate';
import Contact from './uploadCardDetails/ContactUser/contact';
import DeleteBtn from './uploadCardDetails/deletebtn';

import { HorizontalAlign } from '../uploadForm/uploadForm';


const UploadCard = ({ content }) => {
        let { category, creationDate, details, image, price, _id } = content;
        

        if(!_id){
            _id = content.id;
        }
        
        

    return (
        <UploadCardConteiner>
            
            <ContainerGap>

                <DeleteBtn id={_id} /> 
                
                <UploadCategory category={category} />

                <HorizontalAlign>
                    <UploadPrice price={price} />
                    <CreationDate date={creationDate} />
                </HorizontalAlign>

                <UploadImages images={image} />
            </ContainerGap>

            <ContainerGap>
                <UploadDetails text={details} />

                <Contact user={content}/>
            </ContainerGap>

        </UploadCardConteiner>
    )
}

export default UploadCard;

const UploadCardConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    width: 300px;
    gap: 50px;
    background-color: ${ props => props.theme.colors.white };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    `
const ContainerGap = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
`

export const DetailsContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: ${ props => (props.details || props.contact) && 'column' };
        justify-content: ${ props => props.category && 'center' };
        word-break: break-word;
        border-bottom: ${ props => props.category && `2px solid ${props.theme.colors.blue}` };
        gap: 10px;
        background-color: ${ props => props.theme.colors.white };
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 8px;
        cursor: ${ props => (props.details || props.contact) && 'pointer'};
        margin-top: ${ props => (props.details || props.contact) && '1rem'};
`
export const DetailsHeader = styled.div`
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1rem;
    opacity: ${ props => (props.details || props.contact) ? "1" : "0.7"};
    color: ${ props => props.theme.colors.black };
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        color: ${ props => (props.details || props.contact) && props.theme.colors.blue};
    }
`

export const DetailText = styled.div`
    font-weight: 600;
    font-size: ${ props => props.created ? '12px' : '14px'};
    color: ${ props => props.theme.colors.black };
    background-color: ${ props => (props.details || props.contact) && props.theme.colors.white };
    letter-spacing: 1px;
    line-height: 1.5rem;
    max-width: 35ch;
    display: flex;
    width: ${ props => props.details && '35ch'};
    opacity: ${ props => props.details ? '0.7' : '1'};
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
`