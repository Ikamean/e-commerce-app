import React from 'react';
import styled from 'styled-components';

import { GiShop } from 'react-icons/gi';
import { AiOutlineMail, AiFillFacebook } from 'react-icons/ai';
import { GoDeviceMobile } from 'react-icons/go';

import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductAuthor = ({ author }) => {
    const { authorName, authorEmail, authorPicture, authorNumber, authorFacebook } = author
    const history = useHistory();

    const { t } = useTranslation();

    let firstName = authorName.split(' ')[0]

    return (
        <AuthorContainer >
            <AvatarBox>
                <Picture src={authorPicture} alt='product owner avatar' />
                
                    <span> { authorName } </span>
                    
                
            </AvatarBox>
            <ContactBox>

                <ContactField> 
                    <AiOutlineMail />
                    <span> {authorEmail } </span>
                </ContactField>
                
                <ContactField>
                    <GoDeviceMobile />
                    <span> { authorNumber }</span>
                </ContactField>

                <MarketBox>
                    <AiFillFacebook />
                    <FacebookLink href={authorFacebook}>Facebook</FacebookLink>
                </MarketBox>

                <MarketBox market='market' onClick={ () => history.push(`/market/${authorEmail}`)} > 
                    <GiShop /> {firstName}'s {t('Market')} 
                </MarketBox>

            </ContactBox>

            
        </AuthorContainer>
    )
}

export default ProductAuthor

const AuthorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: flex-start;
    font-weight: 600;
    font-size: 16px;
    padding: 2rem 2rem;
    margin-top: 2rem;
    background-color: ${ props=> props.theme.colors.black};
    color: ${ props => props.theme.colors.white };
    @media(min-width: 650px){
        font-size: 18px;
    }
`
const AvatarBox = styled.div`
    display: flex;
    gap: 10px;
`
const Picture = styled.img`
    border-radius: 2px;
    height: 50px;
    width: 50px;
`
const ContactBox = styled.div`
    display:flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 14px;
    gap: 5px;
    @media(min-width: 650px){
        font-size: 18px;
    }
`
const ContactField = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`
const FacebookLink = styled.a`
    text-decoration: none;
    color: ${ props => props.theme.colors.blue};
    cursor: pointer;
`

const MarketBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    &:hover,:focus,:active{
        opacity: 0.8;
        color: ${ props => props.theme.colors.blue };
    }
`
