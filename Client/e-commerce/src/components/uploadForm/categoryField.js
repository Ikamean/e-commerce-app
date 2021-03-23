import React from 'react';
import styled from 'styled-components';

import { Label } from './uploadForm';

const CategoryField = ({ setCategory }) => {
    return (
        <Label htmlFor='category'> Category 
            <Select  name="category" id="category" onChange={(e)=>setCategory(e.target.value)} required>
                    <Option value=''></Option>
                    <Option  value="rockClimbing">Rock Climbing</Option>
                    <Option value="mountaineering">Mountaineering</Option>
                    <Option value="skiing">Skiing</Option>
                    
            </Select>
        </Label>
    )
}

export default CategoryField

const Select = styled.select`
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

`

const Option = styled.option`
    font-size: 18px;
    cursor: pointer;
    background-color: ${ props => props.theme.colors.white };
    border: none;
    outline: none;
`