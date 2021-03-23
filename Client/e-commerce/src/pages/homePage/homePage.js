import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { initAllImages } from '../../redux/reducers/images';



const HomePage = () => {
    const dispatch = useDispatch();
    const images = useSelector( state => state.uploads.images );

    const imagesInitialization = async () =>{
        await dispatch(initAllImages());
    }
    console.log(images);
    useEffect(() => {
        imagesInitialization();
        

    }, [dispatch])
    return (
        <div>
            HomePage
        </div>
    )
}

export default HomePage
