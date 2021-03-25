import React from 'react'
import { HorizontalAlign } from '../../../uploadForm/uploadForm';

import { FaMobile } from 'react-icons/fa';

const AuthorNumber = ({ number }) => {
    return (
        <HorizontalAlign>
            <FaMobile /> {number}
        </HorizontalAlign>
    )
}

export default AuthorNumber
