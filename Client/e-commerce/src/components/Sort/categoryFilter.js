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
    //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
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
`
