import React from 'react';
import styled from 'styled-components';

import { CgArrowUpR } from 'react-icons/cg';
import ScrollToTop  from 'react-scroll-up';

const ScrollTop = () => {
    return (
        <div>
            <ScrollToTop showUnder={160}>
                <Arrow><CgArrowUpR /></Arrow>
            </ScrollToTop>
            
        </div>
    )
}

export default ScrollTop

const Arrow = styled.span`
    padding: 4px;
    font-size: 2rem;
    color: ${ props => props.theme.colors.blue};
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
`