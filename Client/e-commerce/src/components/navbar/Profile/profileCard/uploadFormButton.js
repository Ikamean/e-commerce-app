import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toggleUserCard } from '../../../../redux/reducers/account';

import { Details } from './accountDetails';


const UploadFormButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        dispatch(toggleUserCard());
        history.push('/upload');
    }

    return (
        <Details onClick={()=>handleSubmit()}>New Upload</Details>
    )
}

export default UploadFormButton
