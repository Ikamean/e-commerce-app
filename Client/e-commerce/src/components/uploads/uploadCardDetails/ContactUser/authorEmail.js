import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';


import { HorizontalAlign } from '../../../uploadForm/uploadForm';

const AuthorEmail = ({ email }) => {
    return (
        
            <HorizontalAlign>
                <AiOutlineMail />   {email}
            </HorizontalAlign>
        
    )
}

export default AuthorEmail
