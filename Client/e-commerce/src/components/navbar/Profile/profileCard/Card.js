import React from 'react';
import styled from 'styled-components';

import Logout from '../../../google/logout';

import { useSelector } from 'react-redux';

import Name from './name';
import Picture from './picture';
import Uploads from './uploads';
import Email from './email';
import AccountDetails from './accountDetails';
import UploadFormButton from './uploadFormButton';

const Card = ({ account }) => {
    const { picture, name, email, uploads } = account
    const open = useSelector( state => state.account.userCard )

    return (
        <CardContainer open={open}>

            <FirstSection>

                    <Picture picture={picture} />

                <AccountInformation>
                    <div>
                        <Name name={name}/> 
                        <Uploads uploads={uploads} />
                    </div>
                    
                    <Email email={email} />
                </AccountInformation>
                
            </FirstSection>
            

            <SecondSection>
                <UploadFormButton />
                <AccountDetails />
                <Logout />
            </SecondSection>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    display: ${ props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    z-index: 3;
    right: -5%;
    top: 69px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 300px;
    height: 232px;
    background-color: ${ props => props.theme.colors.white };

`
const FirstSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 13px;
`

const AccountInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 200px;
`

const SecondSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`