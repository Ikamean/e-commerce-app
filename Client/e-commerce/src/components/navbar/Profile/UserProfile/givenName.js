import React from 'react';

import styled from 'styled-components';

import { toggleUserCard } from '../../../../redux/reducers/account';

import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';

const GivenName = ({ givenName }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    
    return (
        <AvatarContainer onClick={ () => dispatch(toggleUserCard()) }>
            {t('Welcome')}, { givenName }!
        </AvatarContainer>
    )
}

export default GivenName

const AvatarContainer = styled.div`
    border: none;
    outline: none;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.25em;
    color: ${ props => props.theme.colors.black};
    font-weight: 600;
    &:hover{
        
        opacity: 0.8;
    }
    @media(max-width: 360px){
        font-size: 12px;
    }
`