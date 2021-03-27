import React from 'react';


import { Label, HorizontalAlign, Input } from './uploadForm';
import { ImPriceTag } from 'react-icons/im';

import { useTranslation } from 'react-i18next';

const PriceField = ({price, setPrice}) => {

    const { t } = useTranslation();

    return (
        <Label htmlFor='price'> <HorizontalAlign>< ImPriceTag /> {t('Price')} </HorizontalAlign> 
                <Input placeholder='GEL' value={price} type='text' id='price' 
                onChange={(e)=>setPrice(e.target.value)} required />
        </Label>
    )
}

export default PriceField

