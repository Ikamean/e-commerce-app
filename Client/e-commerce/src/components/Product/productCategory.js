import React from 'react';
import styled from 'styled-components';

import { FaMountain, FaSkiing } from 'react-icons/fa';
import { GiMountaintop } from 'react-icons/gi';

import { useTranslation } from 'react-i18next';

const ProductCategory = ({ category }) => {
    const { t } = useTranslation();

    if(category === 'Mountaineering'){
        return( 
                <CategoryBox>
                    <FaMountain />
                    { t(`Category.${category}`) }
                </CategoryBox>
        )
    }

    if(category === 'Rock Climbing'){
        return( 
                <CategoryBox>
                    <GiMountaintop />
                    { t(`Category.${category}`) }
                </CategoryBox>
        )
    }

    if(category === 'Skiing'){
        return( 
                <CategoryBox>
                    <FaSkiing />
                    { t(`Category.${category}`) }
                </CategoryBox>
        )
    }
    

}

export default ProductCategory

const CategoryBox = styled.h3`
    font-size: 24px;
    font-weight: 800;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    background-color: ${ props => props.theme.colors.black };
    color: ${ props => props.theme.colors.white };
    letter-spacing: 2px;
    margin-bottom: 1rem;
`
