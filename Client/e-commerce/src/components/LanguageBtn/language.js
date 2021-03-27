import React from 'react';

import styled from 'styled-components';

import { useTranslation } from 'react-i18next';




const Language = () => {

    const { i18n } = useTranslation();

    console.log(i18n);

    

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        };

    return (
        <LanguageContainer>
            <LanguageBtn onClick={()=>changeLanguage('en')}>
            EN
            </LanguageBtn>

            <LanguageBtn onClick={()=>changeLanguage('ge')}>GE</LanguageBtn>
        </LanguageContainer>
    )
}

export default Language

const LanguageContainer = styled.div`
    position: absolute;
    top:0;
    right: 2%;
    display: flex;
    gap: 3px;
    border-bottom: 1px solid ${ props => props.theme.colors.blue};
    border-right: 1px solid ${ props => props.theme.colors.blue};
`
const LanguageBtn = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    color: ${ props => props.theme.colors.blue};
    background-color: ${ props => props.theme.colors.white};
    
    font-weight: 600;
    font-size: 14px;
    border-left: 1px solid ${ props => props.theme.colors.blue};
`