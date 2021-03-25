import React from 'react';

import styled from 'styled-components';

import { toggleUserCard } from '../../../../redux/reducers/account';

import { useDispatch } from 'react-redux';

const GivenName = ({ givenName }) => {
    const dispatch = useDispatch();
    
    return (
        <AvatarContainer onClick={ () => dispatch(toggleUserCard()) }>
           Hi, { givenName }!
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
`