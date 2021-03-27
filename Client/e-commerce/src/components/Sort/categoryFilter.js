import React from 'react';
import styled from 'styled-components';

import FilterOption from './filterOption';

const CategoryFilter = () => {
    const categories = ['Rock Climbing','Mountaineering','Skiing']

    return (
        <FilterContainer>
            {
                categories.map( (option, index) => <FilterOption key={index} option={option} />)
            }
        </FilterContainer>
    )
}

export default CategoryFilter

const FilterContainer = styled.div`
    background-color: ${ props => props.theme.colors.white };
    padding: 1.5rem;
    font-weight: 600;
    text-align: center;
    display: flex;
    white-space: nowrap;
    font-size: 14px;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2rem;
    @media(min-width: 650px){
        font-size: 18px;
    }
    @media(max-width: 360px){
        font-size: 12px;
    }
`
