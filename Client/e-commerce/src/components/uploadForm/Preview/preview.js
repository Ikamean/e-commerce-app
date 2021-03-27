import React from 'react';
import styled from 'styled-components';

// spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { VscRemove } from 'react-icons/vsc';

import { useTranslation } from 'react-i18next';


const Preview = ({ source, setPreviewSource, loading }) => {    

    const { t } = useTranslation();

    const handleRemove = (i) =>{
        source = source.filter( (src, index) => index !== i ); 
        setPreviewSource(source);
    }

    return (
            
            
            <PreviewOuterContainer>
                {
                loading && 

                <LoaderContainer>
                    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                </LoaderContainer>
                }
                <PreviewHeader> {t('Preview')} </PreviewHeader>
                <PreviewContainer>
                    
                    {
                    source.length > 0 &&
                    source.map(
                        (imgSource,i)=>
                            
                            <ImgContainer key={i}> 
                                <RemoveBtn onClick={ () => handleRemove(i)}> <VscRemove /> </RemoveBtn>
                                <Image  src={imgSource} alt='preview' />
                            </ImgContainer>
                        
                    )
                    }
                </PreviewContainer>
            </PreviewOuterContainer>
        
    )
}

export default Preview

const PreviewOuterContainer = styled.div`
    position: relative;
    @media( min-width: 650px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
    }
`
const LoaderContainer = styled.div`
    position: absolute;
    top: 100px;
    left: 220px;
    z-index: 2;
    @media(min-width: 650px){
        top: 300px;
        left: 110px;
    }
`

const PreviewHeader = styled.h2`
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-top: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    @media( min-width: 650px){
        width: 100%;
    }
`
const PreviewContainer = styled.div`
    padding: 1rem 2rem;
    margin: 1rem;
    gap: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    @media( min-width: 650px){
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        height: 600px;
        overflow-y: auto;
    }
`
const ImgContainer = styled.div`
    position: relative;
`
const RemoveBtn = styled.button`
    position: absolute;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: ${ props => props.theme.colors.white };
    color: ${ props => props.theme.colors.blue };
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: ${ props => props.theme.colors.blue };
        color: ${ props => props.theme.colors.white };
    }
`
const Image = styled.img`
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: auto;
    height: 200px;
    @media( min-width: 650px){
        width: 200px;
        height: auto;
    }
`

