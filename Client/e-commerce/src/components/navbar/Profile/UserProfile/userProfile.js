import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';


import GivenName from './givenName';
import Card from '../profileCard/Card';



const UserProfile = () => {
    const account = useSelector( state => state.account.user );
    const { givenName } = account


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

