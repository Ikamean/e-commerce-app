import React from 'react';
import styled from 'styled-components';

const Uploads = ({ uploads }) => {
    return (
        <UploadsContainer>
           {` uploads :  ${uploads.length} `}
        </UploadsContainer>
    )
}

export default Uploads

const UploadsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 0.13em;
    color: ${ props => props.theme.colors.black };
    opacity: 76%;
    margin-right: 13px;
`
