import React, { useState } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';


import GivenName from './givenName';
import Card from '../profileCard/Card';

import { ImArrowUp } from 'react-icons/im';

const UserProfile = () => {
    const account = useSelector( state => state.account.user );
    const { picture, name, email, creationDate, givenName } = account

    

    console.log(account);

    return (
            account &&
            <UserProfileContainer>
                
                <GivenName  givenName={givenName} />
                <Card  account={account} />
    
            </UserProfileContainer>
    )
}

export default UserProfile

const UserProfileContainer = styled.div`
    position: relative;
`

