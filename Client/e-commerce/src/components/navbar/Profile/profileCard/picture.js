import React from 'react';
import styled from 'styled-components';

const Picture = ({ picture }) => {
    return (
        <UserPicture src={picture} alt='UserAvatar'/>
    )
}

export default Picture

export const UserPicture = styled.img`
    width: 71px;
    height: 59px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`