import React from 'react';

import styled from 'styled-components';

import { useTranslation } from 'react-i18next';




const Language = () => {

    const { i18n } = useTranslation();

    

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        };

    return (
        <LanguageContainer>
            <LanguageBtn onClick={()=>changeLanguage('en')}>
            <img
            alt="EN"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" 
            height='15px' width='15px'  />
            </LanguageBtn>

            <LanguageBtn onClick={()=>changeLanguage('ge')}>
            <img
            alt="GE"
            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GE.svg" 
            height='15px' width='15px'  /></LanguageBtn>
        </LanguageContainer>
    )
}

export default Language

const LanguageContainer = styled.div`
    position: absolute;
    top:0;
    right: 15px;
    display: flex;
    gap: 5px;
    margin-top: 5px;
    
    
`
const LanguageBtn = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    color: ${ props => props.theme.colors.blue};
    background-color: ${ props => props.theme.colors.blue};
    border-radius: 2px;
    font-weight: 600;
    font-size: 14px;
`