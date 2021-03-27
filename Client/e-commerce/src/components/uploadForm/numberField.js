import React from 'react';

import { Label, HorizontalAlign, Input } from './uploadForm';

import { ImMobile } from 'react-icons/im';

import { useTranslation } from 'react-i18next';

const NumberField = ({ number, setNumber }) => {

    const { t } = useTranslation();

    return (
        <Label htmlFor='facebook'> <HorizontalAlign> <ImMobile /> {t('Number')}  </HorizontalAlign>  
                <Input placeholder='Your Number' value={number} type='text' id='number' 
                onChange={(e)=>setNumber(e.target.value)}  required />
        </Label>
    )
}

export default NumberField
