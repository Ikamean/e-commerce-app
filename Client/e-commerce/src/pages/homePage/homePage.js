import React, { useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';

import { initAllImages } from '../../redux/reducers/images';
import { Centered } from '../accountPage/accountPage';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Uploads from '../../components/uploads/uploads';

const HomePage = () => {
    const dispatch = useDispatch();
    const images = useSelector( state => state.uploads.images );

    const imagesInitialization = async () =>{
        await dispatch(initAllImages());
    }

    useEffect(() => {
        imagesInitialization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    if(images.length === 0){
        return <Centered> <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> </Centered>
    }

    return (
        <Uploads uploads={images.allUploads} />
    )
}

export default HomePage
