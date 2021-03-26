import React, {  useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

import Uploads from '../../components/uploads/uploads';
import Sort from '../../components/Sort/sort';

import { Centered } from '../accountPage/accountPage';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { useDispatch } from 'react-redux';
import { initCategory } from '../../redux/reducers/images';

const CategoryPage = () => {
    const categoryList = useSelector(state => state.uploads.categoryList);
    const dispatch = useDispatch(); 
    
    const category = useLocation().pathname.split('/')[1];
    

    const initializeCategory = async () =>{
        await dispatch(initCategory(category));
    }
    useEffect(() => {
        
        if(categoryList.length === 0){
            initializeCategory();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if(categoryList && categoryList.length === 0){
        return<>
        <Sort />
        <Centered> <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> </Centered>
        </>
    }

    return (
        <>  
            <Sort />
            <Uploads uploads={categoryList}/>
        </>
)
}

export default CategoryPage
