import React, { useState } from 'react';
import styled from 'styled-components';

import { Image } from 'cloudinary-react';



const ProductMedia = ({ media }) => {
    const [ primaryImage, setPrimaryImage ] = useState(media[0]);
    

    return (
        <MediaContainer>
            <PrimaryImageBox>
                    <Image   publicId={primaryImage} cloudName='ikameancloud' quality="70" responsive width="auto"  crop="scale">
                    </Image>
            </PrimaryImageBox>
            <MediaSlider>
            {
                media.map( (image, index) =>

                <SecondaryImageBox key={index} onClick={ () => setPrimaryImage(image)} >

                    <Image  publicId={image} cloudName='ikameancloud' quality="70" responsive width="auto"  crop="scale">
                        
                    </Image> 

                </SecondaryImageBox>
                )
            }
            </MediaSlider>

        </MediaContainer>
    )
}

export default ProductMedia

const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 650px){
        align-items: flex-start;
        margin-left: 1rem;
    }
`

const PrimaryImageBox = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width: 650px){
        width: 400px;
        height: 600px;
        min-height: 600px;
        max-height: 600px;
    }
`
const MediaSlider = styled.div`
    display: flex;
    width: 304px;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    overflow-x: auto;
    padding: 1rem 0;
    @media(min-width: 650px){
        width: 400px;
    }

`
const SecondaryImageBox = styled.div`
    width: 50px;
    height: 140px;
    min-height:140px;
    max-height: 140px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`