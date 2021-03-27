import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toggleUserCard } from '../../../../redux/reducers/account';

import { Details } from './accountDetails';

import { useTranslation } from 'react-i18next';


const UploadFormButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { t } = useTranslation();

    const handleSubmit = () => {
        dispatch(toggleUserCard());
        history.push('/upload');
    }

    return (
        <Details onClick={()=>handleSubmit()}> {t('New Upload')} </Details>
    )
}

export default UploadFormButton
