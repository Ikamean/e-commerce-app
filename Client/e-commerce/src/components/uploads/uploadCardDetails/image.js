import React, { useState } from 'react';
import styled from 'styled-components';

import { FaExpandArrowsAlt } from 'react-icons/fa';

import {Image,  Transformation} from 'cloudinary-react';

const UploadImages = ({ images }) => {
    const [ primaryImage, setPrimaryImage ] = useState(images[0]);
    const [ expand, setExpand ] = useState(false);
    

    return (
        <UploadedImagesContainer>
            <ExpandArrow onClick={()=> setExpand(!expand)}>
                <FaExpandArrowsAlt />
            </ExpandArrow>
            
            {
                expand &&
                <ExpandedImage>
                    <Image loading='lazy' publicId={primaryImage} cloudName='ikameancloud'
                        
                        
                        width="400"
                        crop="scale"
                        radius='10'
                        >
                    </Image>
                </ExpandedImage>
            }
            
            
            <Image  loading='lazy' publicId={primaryImage} cloudName='ikameancloud'>
                <Transformation 
                width="300"
                
                crop="scale" radius="10" />
            </Image>

            <ImagesContainer>
            {
                images.map( (image, index) =>

                <ClickerDiv key={index} onClick={ () => setPrimaryImage(image)} >

                    <Image loading='lazy'  publicId={image} cloudName='ikameancloud' >
                        <Transformation  width="100"  crop="scale"  radius="10" />
                    </Image> 

                </ClickerDiv>
                )
            }
            </ImagesContainer>

        </UploadedImagesContainer>
    )
}

export default UploadImages

const UploadedImagesContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${ props => props.theme.colors.white };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

const ExpandedImage = styled.div`
    position: absolute;
    left: 0;
    z-index: 1;
`
const ExpandArrow = styled.span`
    color: ${ props => props.theme.colors.black };
    left: 20px;
    top: 10px;
    z-index: 2;
    cursor: pointer;
    position: absolute;
    &:hover,:focus,:active{
        font-size: 1.5rem;
        color: ${ props => props.theme.colors.blue };
    }
    transition: all 0.7s ease;
`




const ImagesContainer = styled.div`
    display: flex;
    width: 280px;
    gap: 10px;
    padding: 1rem 0.5rem;
    justify-content: flex-start;
    overflow-x: auto;
`
const ClickerDiv = styled.div`
    cursor: pointer;
    &:hover,:focus,:active{
        opacity: 0.8;
    }
    transition: all 0.3s ease;
`
