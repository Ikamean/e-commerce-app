import React from 'react';

import { UserPicture } from '../../../navbar/Profile/profileCard/picture';

const AuthorPicture = ({ picture }) => {
    return (
        <UserPicture src={picture} alt="user Avatar" /> 
    )
}

export default AuthorPicture
