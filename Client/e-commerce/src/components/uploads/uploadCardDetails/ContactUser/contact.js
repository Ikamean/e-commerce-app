import React, { useState } from 'react';
import styled from 'styled-components';

import { HorizontalAlign } from '../../../uploadForm/uploadForm';

import { DetailsHeader, DetailsContainer, DetailText } from '../../uploadCard';

import { useTranslation } from 'react-i18next';

import AuthorEmail from './authorEmail';

import AuthorFacebook from './authorFacebook';
import AuthorName from './authorName';
import AuthorNumber from './authorNumber';
import AuthorPicture from './authorPicture';
import AuthorMarket from './authorMarket';

import { VscChromeClose } from 'react-icons/vsc';

const Contact = ({ user }) => {
    const [ open, setOpen ] = useState(false);  
    const { authorPicture, authorName, authorFacebook, authorEmail, authorNumber, id } = user;
    
    const { t } = useTranslation();

    return (
        <PositionAbsolute>
            <DetailsHeader contact='contact' onClick={ ()=> setOpen(!open)}>
                {t('Contact Seller')}
            </DetailsHeader>
            {   
                open &&    
                <DetailText contact='contact'>
                    <DetailsContainer contact='contact'>

                        <HorizontalAlign>
                            <AuthorPicture  picture={authorPicture}/>
                            <AuthorName name={authorName} />
                            <CloseBtn onClick={ () => setOpen(!open)}> <VscChromeClose /> </CloseBtn>
                        </HorizontalAlign>

                        <FlexStart>
                            <AuthorFacebook facebook={authorFacebook} />
                            <AuthorNumber number={authorNumber} />
                            <AuthorEmail email={authorEmail} />
                            <AuthorMarket  mail={authorEmail} name={authorName}/>
                        </FlexStart>

                    </DetailsContainer>
                </DetailText>
            }
        </PositionAbsolute>
    )
}

export default Contact

const FlexStart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: flex-start;
    align-items: flex-start;
`
const PositionAbsolute = styled.div`
    position: absolute;
    left:0;
    top: 2%;
`
const CloseBtn = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    cursor: pointer;
`