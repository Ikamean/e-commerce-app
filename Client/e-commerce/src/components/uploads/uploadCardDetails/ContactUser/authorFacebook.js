import React from 'react';
import styled from 'styled-components';

import { ImFacebook2 } from 'react-icons/im';




const AuthorFacebook = ({facebook}) => {
    
    return (
        
     
            <Facebook>
                <ImFacebook2 /> <a href={facebook} target='_blank' rel='noreferrer'>Facebook</a>
            </Facebook>
            
        
        
    )
}

export default AuthorFacebook

const Facebook = styled.div`
    color: ${ props => props.theme.colors.blue};
    display: flex;
    align-items: center;
    gap: 10px;
    
    a {
        color : ${ props => props.theme.colors.blue };
        &:hover{
            opacity: 0.8;
        }
    }
`
