import React, { useState } from 'react';
import styled from 'styled-components';

import { Label, HorizontalAlign } from './uploadForm';

import { FaMountain, FaSkiing } from 'react-icons/fa';
import { GiMountaintop } from 'react-icons/gi';

import { useTranslation } from 'react-i18next';


const CategoryField = ({ setCategory }) => {
    const [ open, setOpen ] = useState(false);

    const [ selected, setSelected ] = useState(null);

    const { t } = useTranslation();

    const handleSelect = (value) => {
        setCategory(value);
        setSelected(value);
    }

    return (
        <Label htmlFor='category'>
            <CategoryContainer onClick={ () => setOpen(!open)} > 
                <SpanPadding > { selected? selected : t('Choose Category') } </SpanPadding>
                <CategoryList open={open}>

                    <Option onClick={()=>handleSelect('Rock Climbing')}>
                            <HorizontalAlign> <GiMountaintop /> {t('Category.Rock Climbing')} </HorizontalAlign>
                    </Option>

                    <Option onClick={()=>handleSelect('Mountaineering')}>
                            <HorizontalAlign> <FaMountain /> {t('Category.Mountaineering')} </HorizontalAlign>
                    </Option>

                    <Option onClick={()=>handleSelect('Skiing')}>
                            <HorizontalAlign> <FaSkiing /> {t('Category.Skiing')} </HorizontalAlign>
                    </Option>

                </CategoryList>
            </CategoryContainer>  
        </Label>
    )
}

export default CategoryField

const CategoryContainer = styled.div`
    padding: 0.5rem;
    outline: none;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    font-weight: 400;
    line-height: 10px;
    position: relative;
    &:hover,:focus,:active{
        background-color: ${ props => props.theme.colors.blue };
    }
    
`
const SpanPadding = styled.span`
    padding: 1rem;
    width: 170px;
    &:hover{
        background-color: ${ props => props.theme.colors.blue };
        color: ${ props => props.theme.colors.white };
    }
    
    
`

const CategoryList = styled.div`
    position: absolute;
    display: ${ props => props.open ? 'flex' : 'none' };
    z-index: 2;
    top: 55px;
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 4px;
    width: 185px;
    outline: none;
`

const Option = styled.div`
    font-size: 18px;
    cursor: pointer;
    background-color: ${ props => props.theme.colors.white };
    border: none;
    outline: none;
    display: flex;
    padding: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    &:hover,:focus,:active{
        background-color: ${ props => props.theme.colors.blue };
        color: ${ props => props.theme.colors.white }
    }
`