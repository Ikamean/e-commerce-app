import React from 'react';

import { HiOutlineShoppingCart } from 'react-icons/hi';

import { initMarket } from '../../../../redux/reducers/marketReducer';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { HorizontalAlign } from '../../../uploadForm/uploadForm';

const AuthorMarket = ({ name, mail }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    let firstName = name.split(' ')[0];

    const handleMarket = async () => {
        await dispatch(initMarket(mail));
        history.push(`/market/${mail}`);

    }

    return (
        <HorizontalAlign market='market' onClick={()=>handleMarket()}>
            <HiOutlineShoppingCart /> {firstName}'s Market
        </HorizontalAlign>
    )
}

export default AuthorMarket
