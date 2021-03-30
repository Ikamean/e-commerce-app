import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Uploads from '../../components/uploads/uploads';
import { initMarket } from '../../redux/reducers/marketReducer';

import MarketHeader from '../../components/userMarket/userMarketHeader';

import { useLocation } from 'react-router-dom';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Centered } from '../accountPage/accountPage';
import ProductAuthor from '../../components/Product/productAuthor';

const UserMarketPage = () => {
    const market = useSelector( state => state.market.market);
    const dispatch = useDispatch();

    const authorEmail = useLocation().pathname.split('/')[2]
    
    
    const initializeAfterReload = async () => {
        await dispatch(initMarket(authorEmail));
    }

    useEffect(() => {
        
            initializeAfterReload();
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(market.length === 0){
        return <Centered> <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> </Centered>
    }
    

    return (
        <>
        <MarketHeader name={market[0].authorName} />
        <Uploads uploads={market} />
        <ProductAuthor author={market[0]} />
        </>
    )
}

export default UserMarketPage
