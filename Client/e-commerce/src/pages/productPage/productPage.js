import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { initCurrentProduct } from '../../redux/reducers/images';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Centered } from '../accountPage/accountPage';

import Product from '../../components/Product/product';

const ProductPage = () => {
    const product = useSelector( state => state.uploads.currentProduct );
    const dispatch = useDispatch();

    const productId = useLocation().pathname.split('/')[2]
    
    
    const initializeCurrentProduct = async () => {
        await dispatch(initCurrentProduct(productId));
    }

    useEffect(() => {
        
            initializeCurrentProduct();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    if(!product){
        return <Centered> <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> </Centered>
    }

    return (
        <Product product={product}/>
    )
}

export default ProductPage
