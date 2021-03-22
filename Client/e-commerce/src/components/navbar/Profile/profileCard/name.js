import React from 'react';
import styled from 'styled-components';

const Name = ({name}) => {
    return (
        <UserName>
            {name}
        </UserName>
    )
}

export default Name

const UserName = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 28px;
    letter-spacing: 0.1em;
    color: ${ props => props.theme.colors.black };
    margin-right: 13px;
`
