import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import {Image,  Transformation} from 'cloudinary-react';

import { initCurrentProduct } from '../../../redux/reducers/images';
import { useDispatch } from 'react-redux';

const UploadImages = ({ images, contentId }) => {
    const [ primaryImage, setPrimaryImage ] = useState(images[0]);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = async () => {
        console.log(primaryImage);
        console.log(contentId);
        await dispatch(initCurrentProduct(contentId))
        history.push(`/product/${contentId}`);
    }
    
    return (
        <>
        <UploadedImagesContainer>
            <PrimaryImageContainer onClick={()=> handleClick()}>
            
                <Image   publicId={primaryImage} cloudName='ikameancloud'>
                    <Transformation 
                    quality="70" width="150" drp='auto' fetchFormat="auto" crop="scale"
                        />

                </Image>
                
            </PrimaryImageContainer>
            <ImageSlider>
            {
                images.map( (image, index) =>

                <ClickerDiv key={index} onClick={ () => setPrimaryImage(image)} >

                    <Image   publicId={image} cloudName='ikameancloud' >
                        <Transformation quality="70" fetchFormat="auto"  
                            width='50' crop="fill"  radius="10" />
                    </Image> 

                </ClickerDiv>
                )
            }
            </ImageSlider>

        </UploadedImagesContainer>
        </>
    )
}

export default UploadImages

const UploadedImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
`


const PrimaryImageContainer = styled.div`
    height: 250px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImageSlider = styled.div`
    display: flex;
    gap: 5px;
    width: 200px;
    overflow-x: auto;
    justify-content: flex-start;
`
const ClickerDiv = styled.div`
    cursor: pointer;
    width: 50px;
    &:hover,:focus,:active{
        opacity: 0.8;
    }
    transition: all 0.3s ease;
`
