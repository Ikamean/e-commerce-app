import React from 'react';

import { useSelector } from 'react-redux';

import UploadForm from '../../components/uploadForm/uploadForm';

const FormPage = () => {
    const account = useSelector( state => state.account.user );

    if(!account){
        return(
            <div>
                Loading...
            </div>
        )
    }
    return (

            <UploadForm />
            
    )
}

export default FormPage
