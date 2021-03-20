import React, { useState } from 'react';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';



const Cloudinary = () => {
    const [ uploader, setUploader ] = useState(false);

    

    const handleUpload = () => {
        console.log('uploading');
    }

    return (
        <button onClick={()=>handleUpload()}>Upload files</button>
    )
}

export default Cloudinary
