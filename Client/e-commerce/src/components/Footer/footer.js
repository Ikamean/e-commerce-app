import React from 'react';
import styled from 'styled-components';

import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();

    return (
        <FooterContainer>
            <SocialMediaContainer>
                <SocialMedia href='https://www.linkedin.com/in/ikab/' target='_blank'>
                    <AiFillLinkedin />
                </SocialMedia>

                <SocialMedia href='https://github.com/ikamean' target='_blank'>
                    <AiFillGithub />
                </SocialMedia>

                <SocialMedia href='https://www.facebook.com/ikmean' target='_blank'>
                    <AiFillFacebook />
                </SocialMedia>

            </SocialMediaContainer>
            <AllRights>
                {t('Rights')}
            </AllRights>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    background-color: ${ props => props.theme.colors.white };
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    padding: 2rem 2rem 1rem 2rem;
    
`
const AllRights = styled.span`
    color: ${ props => props.theme.colors.blac };
    opacity: 0.8;
    font-size: 15px;
    font-weight: 600;
    @media(max-width: 360px){
        font-size: 12px;
    }
`
const SocialMediaContainer = styled.div`
    display: flex;
    gap: 10px;
`
const SocialMedia = styled.a`
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    background-color: ${ props => props.theme.colors.black };
    color: ${ props => props.theme.colors.white };
    &:hover{
        color: ${ props => props.theme.colors.blue };
    }
`