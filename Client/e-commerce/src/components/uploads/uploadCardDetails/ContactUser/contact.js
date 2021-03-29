import React, { useState } from 'react';
import styled from 'styled-components';

import { HorizontalAlign } from '../../../uploadForm/uploadForm';

import { DetailsHeader, DetailsContainer, DetailText } from '../../uploadCard';

import { useTranslation } from 'react-i18next';

import AuthorEmail from './authorEmail';

import AuthorFacebook from './authorFacebook';
import AuthorName from './authorName';
import AuthorNumber from './authorNumber';
import AuthorPicture from './authorPicture';
import AuthorMarket from './authorMarket';

import { VscChromeClose } from 'react-icons/vsc';

const Contact = ({ user }) => {
    const [ open, setOpen ] = useState(false);  
    const { authorPicture, authorName, authorFacebook, authorEmail, authorNumber, id } = user;
    
    const { t } = useTranslation();

    return (
        <>
            <ContactSeller  onClick={ ()=> setOpen(!open)}>
                {t('Contact Seller')}
            </ContactSeller>
            {   
                open &&    
                
                    <SellerBox>
                        <HorizontalAlign>
                            <AuthorPicture  picture={authorPicture}/>
                            <AuthorName name={authorName} />
                            <CloseBtn onClick={ () => setOpen(!open)}> <VscChromeClose /> </CloseBtn>
                        </HorizontalAlign>

                        <FlexStart>
                            <AuthorFacebook facebook={authorFacebook} />
                            <AuthorNumber number={authorNumber} />
                            <AuthorEmail email={authorEmail} />
                            <AuthorMarket  mail={authorEmail} name={authorName}/>
                        </FlexStart>
                    </SellerBox>
                
            }
        </>
    )
}

export default Contact

const ContactSeller = styled.span`
    font-weight: 600;
    cursor: pointer;
    width: auto;
    font-size: 12px;
    padding-left: 5px;
    color: ${ props => props.theme.colors.blue };
    &:hover{
        color: ${ props => props.theme.colors.black }
    }

`
const SellerBox = styled.div`
    background-color: ${ props => props.theme.colors.white};
    position: absolute;
    font-weight: 600;
    font-size: 14px;
    top:0;
    left: 0;
    z-index: 2;
    padding-left: 5px;
    width: 200px;
`

const FlexStart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5px;
`

const CloseBtn = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    cursor: pointer;
`