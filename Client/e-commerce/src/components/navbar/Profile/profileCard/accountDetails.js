import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { toggleUserCard } from '../../../../redux/reducers/account';

const AccountDetails = () => {
    const history = useHistory('/');
    const dispatch = useDispatch();

    const handleClick = () => {
        history.push('/account');
        dispatch(toggleUserCard());
    }

    return (
        <Details onClick={ ()=> handleClick() }>
            My Products 
        </Details>
    )
}

export default AccountDetails

export const Details = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-top: 1px solid rgba(0, 0, 0, 0.33);
    font-style: normal;
    font-weight: 800;
    opacity: 70%;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 0.13em;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`