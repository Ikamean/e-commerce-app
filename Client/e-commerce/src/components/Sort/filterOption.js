import React from 'react';
import styled from 'styled-components';

import { FaMountain, FaSkiing } from 'react-icons/fa';
import { GiMountaintop } from 'react-icons/gi';

import { useDispatch } from 'react-redux';

import { initCategory } from '../../redux/reducers/images';

import { useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const FilterOption = ({ option }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { t } = useTranslation();

    const handleOption = async () =>{
        await dispatch(initCategory(option));
        history.push(`${option}`);
    }
    
    if(option === 'Rock Climbing'){
        return (
            
            <Option onClick={() => handleOption('Rock Climbing')}>
                <GiMountaintop /> <span>{t('Category.Rock Climbing')}</span>
            </Option>
            
        )
    }

    if(option === 'Mountaineering'){
        return (
            <Option onClick={() => handleOption('Mountaineering')}>
                <FaMountain /> <span>{t('Category.Mountaineering')}</span>
            </Option>
        )
    }

    if(option === 'Skiing'){
        return (
            <Option onClick={() => handleOption('Skiing')}>

                <FaSkiing /> <span>{t('Category.Skiing')}</span>
            </Option>
        )
    }

    return null;
    

}

export default FilterOption

const Option = styled.div`
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 8px;
    gap: 5px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 20ch;
    &:hover,:focus,:active,:target{
        color: ${ props => props.theme.colors.white };
        background-color: ${ props => props.theme.colors.blue };
    }
    
`
