import React, { useState } from 'react';
import styled from 'styled-components';

import { HorizontalAlign } from '../../../uploadForm/uploadForm';

import { DetailsHeader, DetailsContainer, DetailText } from '../../uploadCard';



import AuthorEmail from './authorEmail';

import AuthorFacebook from './authorFacebook';
import AuthorName from './authorName';
import AuthorNumber from './authorNumber';
import AuthorPicture from './authorPicture';

const Contact = ({ user }) => {
    const [ open, setOpen ] = useState(false);  
    const { authorPicture, authorName, authorFacebook, authorEmail, authorNumber } = user;
    

    return (
        <DetailsContainer contact='contact' onClick={ ()=> setOpen(!open)} >

        
            <DetailsHeader contact='contact'>
                Contact Seller
            </DetailsHeader>
            {   
                open &&
                <DetailText contact='contact'>
                    <DetailsContainer contact='contact'>

                        <HorizontalAlign>
                            <AuthorPicture  picture={authorPicture}/>
                            <AuthorName name={authorName} />
                        </HorizontalAlign>

                        <FlexStart>
                            <AuthorFacebook facebook={authorFacebook} />
                            <AuthorNumber number={authorNumber} />
                            <AuthorEmail email={authorEmail} />
                        </FlexStart>

                    </DetailsContainer>
                </DetailText>
            }

        </DetailsContainer>
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