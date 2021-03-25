import React from 'react';

import { useSelector } from 'react-redux';

import UploadForm from '../../components/uploadForm/uploadForm';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Centered } from '../accountPage/accountPage';

const FormPage = () => {
    const account = useSelector( state => state.account.user );

    if(!account){
        return <Centered> <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> </Centered>
    }
    return (

            <UploadForm />
            
    )
}

export default FormPage
