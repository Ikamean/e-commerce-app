import React from 'react';
import styled from 'styled-components';

import { DetailsHeader, DetailsContainer, DetailText } from '../uploadCard';

import { useTranslation } from 'react-i18next';

const CreationDate = ({ date }) => {
    const { t } = useTranslation();

    const dateArray = date.split(' ');
    

    let primaryDate = dateArray.slice(0,3).join(' ');
    

    let secondaryDate = dateArray.slice(3,5).join(' ');
    

    return (
        
        <DetailsContainer>


                <DetailsHeader created='created'>
                {t('Created')} : 
                </DetailsHeader>

            <DateContainer>

                <DetailText created='created'>
                    {primaryDate}
                </DetailText>

                <HoverableSecondaryDate>
                    {secondaryDate}
                </HoverableSecondaryDate>

            </DateContainer>


        </DetailsContainer>
    )
}

export default CreationDate

const HoverableSecondaryDate = styled.span`
    display: none;
    position: absolute;
    left: -5px;
    padding: 10px;
    background-color: ${ props=> props.theme.colors.black };
    color: ${ props=> props.theme.colors.white };
    white-space: nowrap;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 12px;
    z-index: 1;
`
const DateContainer = styled.div`
    position: relative;
    &:hover ${HoverableSecondaryDate} {
        display: flex;
        
    }
`
