import React from 'react';
import styled from 'styled-components';

const Email = ({ email }) => {
    return (
        <EmailContainer>
            { email }
        </EmailContainer>
    )
}

export default Email

export const EmailContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 28px;
    letter-spacing: 0.13em;
    color: ${ props => props.theme.colors.black };
    margin-right: 13px;
    margin-top: 5px;
    width: auto;
`